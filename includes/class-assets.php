<?php
namespace App;

/**
 * Scripts and Styles Class
 */
class Assets {

    function __construct() {

        if ( is_admin() ) {
            add_action( 'admin_enqueue_scripts', [ $this, 'register' ], 5 );
        } else {
            add_action( 'wp_enqueue_scripts', [ $this, 'register' ], 5 );
        }
    }

    /**
     * Register our app scripts and styles
     *
     * @return void
     */
    public function register() {
        $this->register_scripts( $this->get_scripts() );
        $this->register_styles( $this->get_styles() );
    }

    /**
     * Register scripts
     *
     * @param  array $scripts
     *
     * @return void
     */
    private function register_scripts( $scripts ) {
        foreach ( $scripts as $handle => $script ) {
            $deps      = isset( $script['deps'] ) ? $script['deps'] : false;
            $in_footer = isset( $script['in_footer'] ) ? $script['in_footer'] : false;
            $version   = isset( $script['version'] ) ? $script['version'] : BASEPLUGIN_VERSION;

            wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );
        }
    }

    /**
     * Register styles
     *
     * @param  array $styles
     *
     * @return void
     */
    public function register_styles( $styles ) {
        foreach ( $styles as $handle => $style ) {
            $deps = isset( $style['deps'] ) ? $style['deps'] : false;

            wp_register_style( $handle, $style['src'], $deps, BASEPLUGIN_VERSION );
        }
    }

    /**
     * Get all registered scripts
     *
     * @return array
     */
    public function get_scripts() {
        $prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '.min' : '';

        $scripts = [
            'baseplugin-vendor' => [
                'src'       => BASEPLUGIN_ASSETS . '/js/vendor.js',
                'version'   => filemtime( BASEPLUGIN_PATH . '/assets/js/vendor.js' ),
                'in_footer' => true
            ],
            // 'moment' => [
            //     'src'       => BASEPLUGIN_ASSETS . '/js/moment-with-locales.min.js',
            //     'deps'      => [ 'jquery', 'baseplugin-vendor' ],
            //     'version'   => filemtime( BASEPLUGIN_PATH . '/assets/js/moment-with-locales.min.js' ),
            //     'in_footer' => true
            // ],
            // 'bootstrap' => [
            //     'src'       => BASEPLUGIN_ASSETS . '/js/bootstrap.min.js',
            //     'deps'      => [ 'jquery', 'baseplugin-vendor' ],
            //     'version'   => filemtime( BASEPLUGIN_PATH . '/assets/js/bootstrap.min.js' ),
            //     'in_footer' => true
            // ],
            // 'datetimepicker' => [
            //     'src'       => BASEPLUGIN_ASSETS . '/js/bootstrap-datetimepicker.js',
            //     'deps'      => [ 'jquery', 'baseplugin-vendor','moment','bootstrap' ],
            //     'version'   => filemtime( BASEPLUGIN_PATH . '/assets/js/bootstrap-datetimepicker.js' ),
            //     'in_footer' => true
            // ],
            // 'custom' => [
            //     'src'       => BASEPLUGIN_ASSETS . '/js/custom.js',
            //     'deps'      => [ 'jquery', 'datetimepicker' ],
            //     'version'   => filemtime( BASEPLUGIN_PATH . '/assets/js/custom.js' ),
            //     'in_footer' => true
            // ],
            'baseplugin-frontend' => [
                'src'       => BASEPLUGIN_ASSETS . '/js/frontend.js',
                'deps'      => [ 'jquery', 'baseplugin-vendor' ],
                'version'   => filemtime( BASEPLUGIN_PATH . '/assets/js/frontend.js' ),
                'in_footer' => true
            ],
            'baseplugin-admin' => [
                'src'       => BASEPLUGIN_ASSETS . '/js/admin.js',
                'deps'      => [ 'jquery', 'baseplugin-vendor' ],
                'version'   => filemtime( BASEPLUGIN_PATH . '/assets/js/admin.js' ),
                'in_footer' => true
            ]
        ];


        wp_enqueue_script('moment', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js', array('jquery'));
        wp_enqueue_script('moment-locale', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/locale/en-au.js', array('jquery','moment'));
        wp_enqueue_script('bs', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', array('jquery'));
        wp_enqueue_script('bs-date', 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js', array('jquery','moment','moment-locale','bs'));
        wp_enqueue_script('custom', plugins_url().'/swim-pace-calculator/assets/js/custom.js',  array('jquery','bs','bs-date'));

        return $scripts;
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    public function get_styles() {

        $styles = [
            'baseplugin-style' => [
                'src' =>  BASEPLUGIN_ASSETS . '/css/style.css'
            ],
            // 'bootstrap' => [
            //     'src' =>  BASEPLUGIN_ASSETS . '/css/bootstrap.min.css'
            // ],
            // 'datetimepicker' => [
            //     'src' =>  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.css'
            // ],
            // 'custom' => [
            //     'src' =>  BASEPLUGIN_ASSETS . '/css/custom.css'
            // ],
            'baseplugin-frontend' => [
                'src' =>  BASEPLUGIN_ASSETS . '/css/frontend.css'
            ],
            'baseplugin-admin' => [
                'src' =>  BASEPLUGIN_ASSETS . '/css/admin.css'
            ],
        ];

        // wp_enqueue_style( 'bs-css', 'https://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css' ); 
        wp_enqueue_style( 'bs-date-css', 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/css/bootstrap-datetimepicker.css' ); 
        wp_enqueue_style( 'my-style', plugins_url( '/assets/css/custom.css', dirname(__FILE__) ) ); // Inside a plugin

        return $styles;
    }

}

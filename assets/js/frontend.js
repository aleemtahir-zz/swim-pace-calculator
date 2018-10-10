pluginWebpack([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Home_vue__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'App',
	data() {
		return {
			form: {
				distance: 1000,
				unit: "Meters",
				time: "19:15:00",
				result: {
					pace: {
						meteric: "2:00",
						imperial: "2:34"
					},
					speed: {
						meteric: "0.5",
						imperial: "1.3"
					}
				},
				show: false,
				showExample: false
			}
		};
	},
	components: {
		Home: __WEBPACK_IMPORTED_MODULE_0__components_Home_vue__["default"]
	},
	methods: {
		calculateResult: function (event) {
			var distance = jQuery('#distance').val();
			var time = jQuery('#timeInput').val();
			var unit = jQuery("input[name='unit']:checked").val();

			// `this` inside methods points to the Vue instance
			this.form.show = true;
			this.form.distance = distance;
			this.form.time = time;
			this.form.unit = unit;

			if (unit !== 'Meters') distance = distance * 0.9144; //convert yards to meters

			//convert timeinto seconds
			var seconds = time.split(':').reduce((acc, time) => 60 * acc + +time);

			var paceMeteric = seconds / distance * 100;
			var speedMeteric = distance / 1000 / (seconds / 3600);
			var paceImperial = seconds / distance * 100 * 0.9144;
			var speedImperial = distance / 1609.34 / (seconds / 3600);

			//convert seconds into time
			this.form.result.pace.meteric = this.secondsTimeSpanToHMS(paceMeteric);
			this.form.result.pace.imperial = this.secondsTimeSpanToHMS(paceImperial);
			this.form.result.speed.meteric = Number.parseFloat(speedMeteric).toPrecision(1);
			this.form.result.speed.imperial = Number.parseFloat(speedImperial).toPrecision(1);
		},
		secondsTimeSpanToHMS: function (s) {
			var h = Math.floor(s / 3600); //Get whole hours
			s -= h * 3600;
			var m = Math.floor(s / 60); //Get remaining minutes
			s -= m * 60;
			s = Math.round(s);
			return h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
		},
		closeResult: function () {
			this.form.show = false;
		},
		expandExample: function () {
			this.form.showExample = !this.form.showExample;
		}
	}
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(7);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0d2ce64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(19);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c0d2ce64"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0d2ce64_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\frontend\\components\\Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c0d2ce64", Component.options)
  } else {
    hotAPI.reload("data-v-c0d2ce64", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Home',

    data() {
        return {
            msg: 'Welcome to Your Vue.js Frontend App'
        };
    },
    props: ["distance", "lengthUnit", "time", "paceMeteric", "paceImperial", "speedMeteric", "speedImperial", "showResult", "showExample"]
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({

    name: 'Profile',

    data() {
        return {};
    }
});

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

var _router = __webpack_require__(21);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
    el: '#vue-frontend-app',
    router: _router2.default,
    render: function render(h) {
        return h(_App2.default);
    }
});

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(5);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c687af6c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(20);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c687af6c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\frontend\\App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c687af6c", Component.options)
  } else {
    hotAPI.reload("data-v-c687af6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "bootstrap-iso container", attrs: { id: "swimCalc" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "calcBody row" }, [
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", [
            _c("p", [
              _vm._v(
                "The Swimming pace calculator can be used to calculate your swim pace in order to swim a given distance in a given time.\n                "
              ),
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.$emit("expand")
                    }
                  }
                },
                [
                  _c("span", {
                    staticClass: "button-info glyphicon glyphicon-question-sign"
                  })
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showExample,
                  expression: "showExample"
                }
              ]
            },
            [
              _c("p", [
                _vm._v(
                  "For example if you want to swim 1000m in 15 minutes your pace would be 1:30 for each 100 Meters or 4Km per hour or 1:22 for each 100 yards or 2.5 Miles per hour"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { attrs: { id: "length" } }, [
            _c("label", [_vm._v("Total Distance")]),
            _c("br"),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.distance,
                  expression: "distance"
                }
              ],
              attrs: { type: "number", id: "distance" },
              domProps: { value: _vm.distance },
              on: {
                change: function($event) {
                  _vm.$emit("calculate")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.distance = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("div", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.lengthUnit,
                    expression: "lengthUnit"
                  }
                ],
                attrs: { type: "radio", value: "Yards", name: "unit" },
                domProps: { checked: _vm._q(_vm.lengthUnit, "Yards") },
                on: {
                  change: [
                    function($event) {
                      _vm.lengthUnit = "Yards"
                    },
                    function($event) {
                      _vm.$emit("calculate")
                    }
                  ]
                }
              }),
              _c("strong", [_vm._v("Yards")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.lengthUnit,
                    expression: "lengthUnit"
                  }
                ],
                attrs: { type: "radio", value: "Meters", name: "unit" },
                domProps: { checked: _vm._q(_vm.lengthUnit, "Meters") },
                on: {
                  change: [
                    function($event) {
                      _vm.lengthUnit = "Meters"
                    },
                    function($event) {
                      _vm.$emit("calculate")
                    }
                  ]
                }
              }),
              _c("strong", [_vm._v("Meters")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { id: "time" } }, [
            _c("label", [_vm._v("Time (hh:mm:ss)")]),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "div",
                {
                  staticClass: "input-group date",
                  attrs: { id: "datetimepicker3" },
                  on: {
                    change: function($event) {
                      _vm.$emit("calculate")
                    }
                  }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.time,
                        expression: "time"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "timeInput" },
                    domProps: { value: _vm.time },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.time = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("div", { staticClass: "input-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success btn-xs",
                  on: {
                    click: function($event) {
                      _vm.$emit("calculate")
                    }
                  }
                },
                [
                  _c("span", { staticClass: "glyphicon glyphicon-cog" }),
                  _vm._v(" Calculate")
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showResult,
                expression: "showResult"
              }
            ],
            staticClass: "col-sm-12 container",
            staticStyle: { "padding-top": "20px" },
            attrs: { id: "CalcResults" }
          },
          [
            _c(
              "div",
              {
                staticClass: "panel panel-primary",
                attrs: { id: "sbrresultspannel" }
              },
              [
                _c("div", { staticClass: "panel-heading" }, [
                  _vm._v("Results \n                "),
                  _c(
                    "a",
                    {
                      attrs: { id: "close-sign", href: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.$emit("close")
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "button-info glyphicon glyphicon-remove"
                      })
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("p", [
                    _vm._v("To swim "),
                    _c("strong", [
                      _vm._v(
                        " " +
                          _vm._s(_vm.distance) +
                          " " +
                          _vm._s(_vm.lengthUnit) +
                          " "
                      )
                    ]),
                    _vm._v(" in "),
                    _c("strong", [_vm._v(_vm._s(_vm.time) + " ")]),
                    _vm._v(" your pace and speed are as follows")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "table-responsive" }, [
                    _c(
                      "table",
                      { staticClass: "table table-striped table-condensed" },
                      [
                        _c("tbody", [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Metric")]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [_vm._v(_vm._s(_vm.paceMeteric))]),
                              _vm._v(" per 100m")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [_vm._v(_vm._s(_vm.speedMeteric))]),
                              _vm._v(" Km/hour ")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Imperial")]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [_vm._v(_vm._s(_vm.paceImperial))]),
                              _vm._v(" per 100yrd")
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("strong", [_vm._v(_vm._s(_vm.speedImperial))]),
                              _vm._v(" Mile/hour ")
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "calcHead col-sm-12" }, [
        _c("span", [_vm._v("Swimming Pace Calculator")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("span", { staticClass: "glyphicon glyphicon-time" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th"),
      _vm._v(" "),
      _c("th", [_vm._v("Pace")]),
      _vm._v(" "),
      _c("th", [_vm._v("Speed")])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c0d2ce64", esExports)
  }
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "vue-frontend-app" } },
    [
      _c("Home", {
        attrs: {
          distance: _vm.form.distance,
          "length-unit": _vm.form.unit,
          time: _vm.form.time,
          "pace-meteric": _vm.form.result.pace.meteric,
          "speed-meteric": _vm.form.result.speed.meteric,
          "pace-imperial": _vm.form.result.pace.imperial,
          "speed-imperial": _vm.form.result.speed.imperial,
          "show-result": _vm.form.show,
          "show-example": _vm.form.showExample
        },
        on: {
          calculate: _vm.calculateResult,
          expand: _vm.expandExample,
          close: _vm.closeResult
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c687af6c", esExports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(4);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__(6);

var _Home2 = _interopRequireDefault(_Home);

var _Profile = __webpack_require__(22);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    routes: [{
        path: '/',
        name: 'Home',
        component: _Home2.default
    }, {
        path: '/profile',
        name: 'Profile',
        component: _Profile2.default
    }]
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__ = __webpack_require__(8);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_acdaf8ec_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-acdaf8ec"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Profile_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_acdaf8ec_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Profile_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets\\src\\frontend\\components\\Profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-acdaf8ec", Component.options)
  } else {
    hotAPI.reload("data-v-acdaf8ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "profile" }, [
    _vm._v("\n    The Profile Page\n")
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-acdaf8ec", esExports)
  }
}

/***/ })
],[12]);
<template>
    <div id="vue-frontend-app">
        <Home
        :distance="form.distance"
        :length-unit="form.unit"
        :time="form.time"
        :pace-meteric="form.result.pace.meteric"
        :speed-meteric="form.result.speed.meteric"
        :pace-imperial="form.result.pace.imperial"
        :speed-imperial="form.result.speed.imperial"
        :show-result="form.show"
        :show-example="form.showExample"
        @calculate="calculateResult"
        @expand="expandExample"        
        @close="closeResult">

        </Home>
    </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
    name: 'App',
    data () {
    	return {
    		form: {
		      distance: 1000,
		      unit: "Meters",
		      time: "19:15:00",
		      result:{
		        pace:{
		          meteric: "2:00",
		          imperial: "2:34"
		        },
		        speed:{
		          meteric: "0.5",
		          imperial: "1.3"
		        }
		      },
		      show: false,
		      showExample: false
		    }
    	}
    },
    components: {
    	Home
    },
    methods:{
	    calculateResult: function (event) {
	      var distance = jQuery('#distance').val();
	      var time = jQuery('#timeInput').val();
	      var unit = jQuery("input[name='unit']:checked").val();
	      
	      // `this` inside methods points to the Vue instance
	      this.form.show = true;
	      this.form.distance = distance;
	      this.form.time = time;
	      this.form.unit = unit;

	      if(unit !== 'Meters')
	        distance = distance*0.9144; //convert yards to meters
	      
	      //convert timeinto seconds
	      var seconds = time.split(':').reduce((acc,time) => (60 * acc) + +time);
	      
	      var paceMeteric   = seconds/distance * 100;
	      var speedMeteric  = (distance / 1000) / (seconds / 3600);
	      var paceImperial  = seconds/distance * 100 * 0.9144;
	      var speedImperial  = (distance / 1609.34) / (seconds / 3600);
	      
	      //convert seconds into time
	      this.form.result.pace.meteric = this.secondsTimeSpanToHMS(paceMeteric);
	      this.form.result.pace.imperial = this.secondsTimeSpanToHMS(paceImperial);
	      this.form.result.speed.meteric = Number.parseFloat(speedMeteric).toPrecision(1);
	      this.form.result.speed.imperial = Number.parseFloat(speedImperial).toPrecision(1);

	      
	    },
	    secondsTimeSpanToHMS: function (s) {
	        var h = Math.floor(s/3600); //Get whole hours
	        s -= h*3600;
	        var m = Math.floor(s/60); //Get remaining minutes
	        s -= m*60;
	        s = Math.round(s);
	        return h+":"+(m < 10 ? '0'+m : m)+":"+(s < 10 ? '0'+s : s); //zero padding on minutes and seconds
	    },
	    closeResult: function(){
	      this.form.show = false;
	    },
	    expandExample: function(){
	      this.form.showExample = !this.form.showExample;
	    }
	}
}
</script>

<style>

</style>

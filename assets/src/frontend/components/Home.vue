<template>
    <div id="swimCalc" class="bootstrap-iso container">
          <div class="row">
            <div class="calcHead col-sm-12">
              <span>Swimming Pace Calculator</span>
            </div>
          </div>
          <div class="calcBody row">
              <div class="col-sm-12">
                <div>
                  <p>The Swimming pace calculator can be used to calculate your swim pace in order to swim a given distance in a given time.
                    <a @click.prevent="$emit('expand')" href="#">
                      <span class="button-info glyphicon glyphicon-question-sign"></span>
                    </a>
                  </p>            
                </div>
                <div v-show="showExample">
                  <p>For example if you want to swim 1000m in 15 minutes your pace would be 1:30 for each 100 Meters or 4Km per hour or 1:22 for each 100 yards or 2.5 Miles per hour</p>
                </div>
                <div id="length">
                  <label>Total Distance</label><br>
                      <input type="number" v-model="distance" id="distance" v-on:change="$emit('calculate')">
                  <div>
                      <input type="radio" v-model="lengthUnit" value="Yards" name="unit" v-on:change="$emit('calculate')"><strong>Yards</strong>
                      <input type="radio" v-model="lengthUnit" value="Meters" name="unit" v-on:change="$emit('calculate')"><strong>Meters</strong>
                  </div>
                </div>
                <div id="time">
                  <label>Time (hh:mm:ss)</label><br>
                  <div class="form-group">
                    <div class='input-group date' id='datetimepicker3' v-on:change="$emit('calculate')">
                        <input type='text' class="form-control" v-model="time" id="timeInput" />
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-time"></span>
                        </span>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class='input-group'>
                    <button @click="$emit('calculate')" class="btn btn-success btn-xs">
                        <span class="glyphicon glyphicon-cog"></span> Calculate</button>
                  </div>
                </div>
              </div>




              <div v-show="showResult" class="col-sm-12 container" id="CalcResults" style="padding-top: 20px;">
                <div class="panel panel-primary" id="sbrresultspannel">
                  <div class="panel-heading">Results 
                    <a id="close-sign" href="#" @click.prevent="$emit('close')">
                        <span class="button-info glyphicon glyphicon-remove"></span>
                    </a>
                  </div>
                  <div class="panel-body">
                    <p>To swim <strong> {{ distance }} {{ lengthUnit }} </strong> in <strong>{{ time }} </strong> your pace and speed are as follows</p>
                    <div class="table-responsive">
                      <table class="table table-striped table-condensed">
                        <tbody>
                          <tr>
                            <th></th>
                            <th>Pace</th>
                            <th>Speed</th>
                          </tr>
                          <tr>
                            <th>Metric</th>
                            <td><strong>{{ paceMeteric }}</strong> per 100m</td>
                            <td> <strong>{{ speedMeteric }}</strong> Km/hour </td>
                          </tr>
                          <tr>
                            <th>Imperial</th>
                            <td><strong>{{ paceImperial }}</strong> per 100yrd</td>
                            <td> <strong>{{ speedImperial }}</strong> Mile/hour </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          </div>

        </div>
</template>

<script>

export default {

    name: 'Home',

    data () {
        return {
            msg: 'Welcome to Your Vue.js Frontend App'
        }
    },
    props:[
      "distance",
      "lengthUnit",
      "time",
      "paceMeteric",
      "paceImperial",
      "speedMeteric",
      "speedImperial",
      "showResult",
      "showExample"
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

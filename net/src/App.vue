<template>
   <div id="app">
      <map-box-view class="mapbox-view"> </map-box-view>

      <div class="title">
        <Title></Title>
      </div>

      <div class="heat">
        <HeatMap></HeatMap>
      </div>

      <div class="par">
        <Parallel></Parallel>
      </div>

      <div class="timeaxis">
        <timeAxis></timeAxis>
      </div>

      <div class="yearaxis">
         <YearAxis></YearAxis>
      </div>
   </div>


</template>

<script>

// import CalendarCharts from "./data_helper/CalendarChart"
import ServerData from './data_helper/ServerData'
import Interactor from './Interacter/Interacter'


import MapBoxView from './components/MapBoxView'
import Title from './components/Tiltle'

import pubsub from 'pubsub-js'


import HeatMap from './components/HeatMap'
import Parallel from './components/Parallel'
import timeAxis from './components/timeAxis'
import DataHelp from './data_helper/DataHelp'
import YearAxis from './components/YearAxis'


export default {
  name: 'App',
  //组件注册
  components:{
     MapBoxView,
     Title,
     HeatMap,
     Parallel,
    timeAxis,
    YearAxis
  },
  data(){
    return {
      //month:1,
      //city:'北京'
      // chartData:{
      //   data:{},
      //   ParallelChart:{
      //     data:{},
      //     focus:""
      //   }
      }
    },
    methods:{
  //   test(){
  //       var echarts=require('echarts');
  //       var myChart=echarts.init(document.getElementById('app'));

  //       //绘制图表
  //     let option = {
  //     title: {
  //       top: 30,
  //       left: 'center',
  //       text: '2017年北京的空气质量好坏'
  //     },
  //     tooltip: {},
  //     visualMap: {
  //       min: 0,
  //       max: 500,
  //       type: 'piecewise',
  //       orient: 'horizontal',
  //       left: 'center',
  //       top: 65,
  //       textStyle: {
  //           color: '#000'
  //       }
  //     },
  //     calendar: {
  //       top: 120,
  //       left: 30,
  //       right: 30,
  //       cellSize: ['auto', 15],
  //       range: '2016',
  //       itemStyle: {
  //           borderWidth: 0.5
  //       },
  //       yearLabel: {show: false}
  //     },
  //     series: {
  //       type: 'heatmap',
  //       coordinateSystem: 'calendar',
  //       data: CalendarCharts.initCalendarData(2016)
  //     }
  //   };
  //   myChart.setOption(option);
  // }
  }
}


  //     myChart.setOption(option);
  //   }
  //},
  // mounted:{

  // },
  // methods:{
      
  // }
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#app{
  width: auto;
  height: auto;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  z-index: -1;
}

body{
  margin: 0;
  padding:0;
  overflow-y: scroll;
}

.mapbox-view{
  top:0;
  z-index: 0;
}

#title{
  width: 80%;
  height: 5%;
  top:1.5%;
  left: 10%;
  background-color:rgb(255, 255, 255,0.35);
  position: absolute;
  float: top;
  opacity: 0.5;
}


.par{
  width: 39%;
  height: 40%;
  position: absolute;
  background-color:rgb(255, 255, 255,0.35);
  z-index: 1;
  top:59%;
  left:60.5%;
  opacity: 0.9;
  border: 1px solid black;
}

.heat{
  width: 60%;
  height: 62.8%;
  position: absolute;
  background-color:rgb(255, 255, 255,0.35);
  z-index: 1;

  top:35%;
  left:0%;
  border: 1px solid black;
}

.timeaxis{
  width:58%;
  height: 7%;
  position: absolute;
  top:5.0%;
  left: 41.5%;
  background-color:white;
  z-index: 1;
  border: 1px solid black;
  opacity: 0.75;
}

.yearaxis{
  width:30%;
  height: 7%;
  position: absolute;
  top:5.0%;
  left: 0%;
  background-color: white;
  z-index: 1;
  border: 1px solid black;
  opacity: 0.75;
}
</style>

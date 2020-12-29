<template>
    <div class="Echarts">
         <div id="title" style="font-size:20px">{{year}}空气质量总览</div>

         <div id="airQuailty">
         </div> 
    </div>
</template>

<script>

import pubsub from 'pubsub-js'

import ServerData from '../data_helper/ServerData'

import CalendarChart from '../data_helper/CalendarChart'


var echarts =require("echarts")

export default {
  name:'HeatMap',
  data(){
      return{
          year:'三年',
      };
  },
  watch:{
     data:{
         handler(){
             this.HeatInit();
         }
     }
  },
  methods:{
       HeatInit(data1,data2,data3)
       {
           //console.log(data)
          var b=ServerData.getCdAir();
          var myChart=echarts.init(document.getElementById('airQuailty'));
   
          var option={
           tooltip:{},
           visualMap:{
             min:0,
             max:500,
             type:'continuous',
             orient:'horizontal',
             left:'center',
             top:'top',
             textStyle:{
                 color:'#000'
             }
           },
           calendar: [{
        range: '2017',
        cellSize: ['auto', 20],
          },
          {
        top: 260,
        range: '2018',
        cellSize: ['auto', 20]
          },
          {
           top: 450,
           range: '2019',
           cellSize: ['auto', 20],
           right: 5
          }],
           series: [{
           type: 'heatmap',
           coordinateSystem: 'calendar',
           calendarIndex: 0,
           data: data1
           }, {
           type: 'heatmap',
           coordinateSystem: 'calendar',
           calendarIndex: 1,
           data: data2
           }, {
           type: 'heatmap',
           coordinateSystem: 'calendar',
           calendarIndex: 2,
           data: data3
           }
           ]

          }
          myChart.setOption(option);
       },
  },
  mounted(){
       
      pubsub.subscribe('getCityData',(msg,data)=>{
          
          

          var city=data;
         window.newcity=city;
         //console.log(window.newcity);
          this.$axios("http://localhost:3001/AirQ").then(res=>{
             var year=2017;//默认为2017
             var year1=2018;
             var year2=2019;
           this.HeatInit(CalendarChart.initCalendarData(res.data,city,year),CalendarChart.initCalendarData(res.data,city,year1),CalendarChart.initCalendarData(res.data,city,year2));
          })
           
         
        
      })

    //   pubsub.subscribe('getYearData',(msg,data)=>{
        
    //     //console.log(year);
    //     this.$axios("http://localhost:3001/AirQ").then(res=>{
    //        //console.log(window.newcity);   
    //        var city=window.newcity;
    //        var year=data;
    //        //console.log(year);
    //        this.HeatInit(CalendarChart.updateCalendarData(res.data,city,year));
    //     })

    //   })

 }
}
</script>



<style>
#airQuailty{
    width: 1000px;
    height: 1000px;
}
</style>
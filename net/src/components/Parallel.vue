<template>
    <div class="EChart1">
        <div id="title" style="font-size:20px">{{city}}市{{month}}月总览</div>
        <div id="monthSitulation"></div>
    </div>
</template>

<script>

import pubsub from 'pubsub-js'

import ServerData from '../data_helper/ServerData'

import ParallelCoord from '../data_helper/ParallelChart'
import ParallelChart from '../data_helper/ParallelChart'


export default {
    name:'Parallel',
    data(){
       return{
           city:'北京',
           month:1
        //    dataset:[],
        //    date:0,
        //    humidity:0,//湿度
        //    prec:0,
        //    temperture:0,
        //    vis:0,
        //    wind_speed:0,
        //    qiya:0,
        //    fengxiang:0
       } 
    },
    watch:{
     data:{
         handler(){
        //      this.dataset=[];
        //      this.date=0;
        //      this.humidity=0;
        //      this.prec=0;
        //      this.temperture=0;
        //      this.vis=0;
        //      this.wind_speed=0;
        //      this.qiya=0;
        //      this.fengxiang=0;
        //      for(var i=0;i<this.data.length;i++)
        //      {
        //          this.city=this.data[i].city;
        //          this.date=this.data[i].date;
        //          this.humidity=this.data[i].humidity;
        //          this.prec=this.data[i].prec;
		// 		 this.temperture=this.data[i].temperture;
		// 		 this.vis=this.data[i].vis;
        //          this.wind_speed=this.data[i].wind_speed;
        //          this.qiya=this.data[i].qiya;
        //          this.fengxiang=this.data[i].fengxiang;
        //          this.dataset[i]=[this.date,this.humidity,this.prec,this.temperture,this.vis,this.wind_speed,this.qiya,this.fengxiang];
        //      }

             this.ParallelInit();
         }
     }
    },
    methods:{


        ParallelInit(data)
        {   
            //console.log(data);
            var echarts=require('echarts');

            var mecharts=echarts.init(document.getElementById("monthSitulation"));

            // var data_new=this.dataset;

            var schema = [
             {name: 'date', index: 0, text: '日期'},
             {name: 'temperture', index: 1, text: '温度℃'},
             {name: 'hum', index: 2, text: '相对湿度(百分率)'},
             {name: 'vis', index: 3, text: '能见度(米)'},
            {name: 'rain', index: 4, text: '降水量(毫米)'},
            {name: 'wind_speed', index: 5, text: '风速(米/秒)'},
             {name: 'qiya', index: 6, text: '气压'},
             {name:'fengxiang',index:7,text:'风向'}
            ];

            var lineStyle={
                normal: {
                width: 1,
                opacity: 0.5
                }
            }
            var option={
                backgroundColor: '#333',
             legend: {
                  bottom: 30,
                  data: ['北京'],
                  itemGap: 20,
                  textStyle: {
                  color: '#fff',
                  fontSize: 14
                  }
             },
             tooltip: {
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        
    },
    parallelAxis: [
        {dim: 0, name: schema[0].text, inverse: true, max: 31,min:1, nameLocation: 'start'},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text}
    ],


    visualMap: {
        show: true,
        min: 0,
        max: 150,
        dimension: 2,
        inRange: {
            color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
            // colorAlpha: [0, 1]
        }
    },
    parallel: {
        left: '5%',
        right: '18%',
        bottom: 100,
        parallelAxisDefault: {
            axisLine: {
                lineStyle: {
                    color: '#aaa'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#777'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                color: '#fff'
            }
        }
    },
    series:
        {  
            type: 'parallel',
            lineStyle: lineStyle,
            data:data 
        }
      }
      mecharts.setOption(option,true);
    }
   },
   mounted(){
       

      pubsub.subscribe('getCityData',(msg,data)=>{
          
          

          var city=data;
          window.test=city;//声明一个全局变量
          this.$axios("http://localhost:3001/cityday").then(res=>{
            var month=1;//这里默认值设为1月份
            var year=2017;//这里默认值设为2017年
           this.ParallelInit(ParallelChart.initParallelChart(res.data,city,month,year));
          })
           
         
        
      })

      pubsub.subscribe('getTimeDate',(msg,data)=>{

           //console.log(month);
           //console.log(window.test);
           window.m1=data;
           this.$axios('http://localhost:3001/cityday').then(res=>{
             //   console.log(res);
               var city=window.test;
               var year=window.y1;
               //console.log(year)
               //console.log(city);
               //console.log(month);
               var month=data;
               //console.log(month);
               this.ParallelInit(ParallelChart.updateYear(res.data,city,month,year));
           })
      }) 


      pubsub.subscribe('getYearData',(msg,data)=>{
           window.y1=data;
           console.log(window.y1);
            this.$axios('http://localhost:3001/cityday').then(res=>{
             //   console.log(res);
               var city=window.test;
               //console.log(city);
               //console.log(month);
               var month=1;
               var year=data;
               //console.log(month);
               this.ParallelInit(ParallelChart.updataParallelChart(res.data,city,month,year));
           })
      })
    }
}
</script>

<style>
.EChart1{
  width: 100%;
  height: 100%;
  position:absolute;
  z-index: 0;
}

#title{
    position: absolute;
    left: 1%;
    z-index: 2;
}
#monthSitulation{
  width: 100%;
  height: 100%;

  top: 1%;
  position:absolute;

}
</style>
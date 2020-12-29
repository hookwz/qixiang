import ServerData from './ServerData'

import InformationDataHelper from './InformationDataHelper'
import ParallelChart from './ParallelChart'

import CalendarChart from './CalendarChart'

export default class DataHelp{
    static async initChartData(chartData){
        ServerData.getAir().then(
           (res)=>{
              chartData.data=res.data;
              
              chartData.CalendarChart.data=this.initChartData(chartData['data']);

              return chartData;


           },(err)=>
           {
               console.log('*********');
           }
        )


      
      ServerData.getDay().then(
          (res)=>{

             console.log(res);
             chartData.data=res.data;
             
             chartData.ParallelChart.data=this.initParallelCharts(chartData['data']);

             return chartData;

          },(err)=>
          {
              console.log('*********');
          }
        )
    }

    //初始化数据与更新数据

    static initHeatCharts(data,focus)
    {
      return CalendarChart;
    }

    static updateHeatChartsFocus(data,focus)
    {
      return CalendarChart.apply;
    }

    static initParallelCharts(data,focus){
       return ParallelChart.initParallelChart(data,focus);
    }

    static updateParallelChartsFocus(data,focus)
    {
       return ParallelChart.updataParallelChart(data,focus);
    }


}
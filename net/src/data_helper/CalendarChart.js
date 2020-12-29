
import ServerData from './ServerData';



export default class CalendarChart{
   static  initCalendarData(data,city,year)
   {
       return getVirtulData(data,city,year);
   }
   static   updateCalendarData(data,city,year)
   {
       return updateC(data,city,year);
   }
}

var echarts=require('echarts');


function getVirtulData(data,city,year)
{
    var dataset=[];
    
    //console.log(year);

    for(var i=0;i<data.length;i++)
    {
        

        if(data[i]['城市']==city&&data[i]['当前时间'].substring(0,4)==year)
        {
            // console.log(year[i]['空气质量']);   
       var str=data[i]['当前时间'].slice(0,4)+'-'+data[i]['当前时间'].slice(4,6)+'-'+data[i]['当前时间'].slice(6);
       var value=parseInt(data[i]['空气质量'])
    //    console.log(value);
        // console.log(str);
        dataset.push([str,
          value
        ]);
        }
    }
    //console.log(data);
    return dataset;

}


function updateC(data,city,year)
{
    //console.log(city);
    //console.log(year);  
    var dataset=[];
    for(var i=0;i<data.length;i++)
    {
        if(data[i]['城市']==city&&data[i]['当前时间'].substring(0,4)==year)
        {
            // console.log(year[i]['空气质量']);   
       var str=data[i]['当前时间'].slice(0,4)+'-'+data[i]['当前时间'].slice(4,6)+'-'+data[i]['当前时间'].slice(6);
       var value=parseInt(data[i]['空气质量'])
    //    console.log(value);
        // console.log(str);
        dataset.push([str,
          value
        ]);
        }
    }

    console.log(dataset);
    return dataset;
}
export default class ParallelChart{
   static initParallelChart(data,city,month,year)
   {
       return parallelCalc(data,city,month,year)
   }

   static updataParallelChart(data,city,month,year)
   {
     return update(data,city,month,year)
   }

   static updateYear(data,city,month,year)
   {
     return updatenew(data,city,month,year)
   }
}


function parallelCalc(data,city,month,year)
{
   //console.log(month);
   var dataset=[];
    // console.log(data.length);
   for(var i=0;i<data.length;i++)
   {
       if(data[i]['市']==city&&data[i]['时间'].substring(4,6)==month&&data[i]['时间'].substring(0,4)==year)
       {
        //  console.log(data[i]['时间']);
        //    console.log(i);
        //    console.log(data[i]['市']);
        //    console.log(data[i]['时间'].substring(0,4));
        //    console.log(data[i]['时间'].substring(4,6));
        //    console.log(data[i]['时间'].substring(6,8));
        //    console.log(data[i]['温度(摄氏度)']);
           dataset.push([
               parseInt(data[i]['时间'].substring(6,8)),
               parseInt(data[i]['温度(摄氏度)']),
               parseInt(data[i]['相对湿度(百分率)']),
               parseInt(data[i]['能见度(米)']),
               parseInt(data[i]['降水量(毫米)']),
               parseInt(data[i]['风速(米/秒)']),
               parseInt(data[i]['气压(百帕)']),
               parseInt(data[i]['风向(度)'])
           ])
       }
    //这里待定
    //    for(var i=0;i<data.length;i++)
    //    {
    //       for(var j=0;j<data.length;j++)
    //       {

    //       }
    //    }
   }

   return dataset;
}

function update(data,city,month,year)
{
   //console.log(city);
   //console.log(month);
   var dataset=[];
   for(var i=0;i<data.length;i++)
   {
     if(data[i]['市']==city&&data[i]['时间'].substring(4,6)==month&&data[i]['时间'].substring(0,4)==year)
     {
      dataset.push([
        parseInt(data[i]['时间'].substring(6,8)),
        parseInt(data[i]['温度(摄氏度)']),
        parseInt(data[i]['相对湿度(百分率)']),
        parseInt(data[i]['能见度(米)']),
        parseInt(data[i]['降水量(毫米)']),
        parseInt(data[i]['风速(米/秒)']),
        parseInt(data[i]['气压(百帕)']),
        parseInt(data[i]['风向(度)'])
    ])
     }
   }
   return dataset;

}


function updatenew(data,city,month,year)
{
   //console.log(city);
   //console.log(month);
   var dataset=[];
   for(var i=0;i<data.length;i++)
   {
     if(data[i]['市']==city&&data[i]['时间'].substring(4,6)==month&&data[i]['时间'].substring(0,4)==year)
     {
      dataset.push([
        parseInt(data[i]['时间'].substring(6,8)),
        parseInt(data[i]['温度(摄氏度)']),
        parseInt(data[i]['相对湿度(百分率)']),
        parseInt(data[i]['能见度(米)']),
        parseInt(data[i]['降水量(毫米)']),
        parseInt(data[i]['风速(米/秒)']),
        parseInt(data[i]['气压(百帕)']),
        parseInt(data[i]['风向(度)'])
    ])
     }
   }
   return dataset;

}



function DataDo(value) {
    if(value.length==8)
    {
     return value.substring(3,5)
    }
}
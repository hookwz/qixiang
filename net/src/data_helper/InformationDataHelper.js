export default class InformationDataHelper{
    static initInformation(data)
    {
          return getInformation(data);
    }
    static updateInformationFocus(data,focus)
    {
          return updateInformation(data,focus);
    }
}


// function getInformation(data)
// {
//      let data=[];
//      let dataset=[];
//      for(var i=0;i<data.length;i++)
//      {
//          if(data[i]['城市']=='成都')
//          {
//              dataset.push({
//                  city:data[i]['城市'],
//                  date:data[i]['时间'],
//              })
//          }
//      }
// }


function isnull(obj)
{
    for(var key in obj)
    {
       return false;
    } 
    return true;    
}
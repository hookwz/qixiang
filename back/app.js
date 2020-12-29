
//通过express框架建立前后端之间的通信连接

const express=require('express')
const app=express()

//GET Home Page
app.get('/air',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const fs=require('fs');
  
  fs.readFile('chengdu2017air.json','utf8',function read(err,data)
  {
    if(err)
    {
      throw err;
    }

    let ret=JSON.parse(data);
    res.send(ret);
  });
})


app.get('/regions',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const fs=require('fs');
  
  fs.readFile('WholeCountry.json','utf8',function read(err,data)
  {
    if(err)
    {
      throw err;
    }

    let ret=JSON.parse(data);
    res.send(ret);
  });
})

app.get('/cityPoint',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const fs=require('fs');
  
  fs.readFile('CityPoint.json','utf8',function read(err,data)
  {
    if(err)
    {
      throw err;
    }

    let ret=JSON.parse(data);
    res.send(ret);
  });
})


app.get('/cityday',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const fs=require('fs');
  
  fs.readFile('cityofday.json','utf8',function read(err,data)
  {
    if(err)
    {
      throw err;
    }

    let ret=JSON.parse(data);
    res.send(ret);
  });
})

app.get('/AirQ',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const fs=require('fs');
  
  fs.readFile('beijing air.json','utf8',function read(err,data)
  {
    if(err)
    {
      throw err;
    }

    let ret=JSON.parse(data);
    res.send(ret);
  });
})


app.get('/citymonth',(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const fs=require('fs');
  
  fs.readFile('city_month.json','utf8',function read(err,data)
  {
    if(err)
    {
      throw err;
    }

    let ret=JSON.parse(data);
    res.send(ret);
  });
})


const server=app.listen(3001,'127.0.0.1',function(){
   const host=server.address().address;
   const port=server.address().port;
   console.log('Example app listening at http://%s:%s', host, port)
}
)



// const bodyParser=require('body-parser')
// // server config
// const MysqlPool=require('./mysql.js');
// const mysqlPool=new MysqlPool();

// const Pool=mysqlPool.getPool();
// const assert=require('assert');
// const MongoClient=require('mongodb')


// const url=''
// const dbname='data'

// var port=3000;

// app.all('*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
//   });

// app.get('/test',(req,res)=>
//     res.send('SHIT')
// )

// app.listen(port,function(){
//    console.log('network homework app is listening on 192.168.218.1:3000');
// })
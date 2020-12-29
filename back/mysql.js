const mysql=require('mysql');

class MySql{
    constructor(){
       this.flag=true;
       this.pool=mysql.createPool({
         host:'192.168.218.1',
         user:'root',
         password:'wz456456',
         database:'data',
         port:3306,
         multipleStatements:true
       });
    }  
    
    getPool(){
        if(this.flag){
        this.pool.on('connection', (connection)=>{
            connection.query('SET SESSION auto_increment_increment=1');
            this.flag = false;
        });
    }
    return this.pool;
}
}

module.exports=MySql;
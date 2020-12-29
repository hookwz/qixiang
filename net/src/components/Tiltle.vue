<template>
    <div class="head">
        <h1>各种风力气象可视化服务系统</h1>
        <div class="weather">
            <span id="showTime"></span>
        </div>
    </div>
</template>

<script>

// import Bg2 from '../assets/head_bg.png'

// var b=Bg2;

export default {
    name:'Title',
    methods:{
        Timer()
        {
            var t=null;
            t=setTimeout(time,1000);
            function time()
            {
                clearTimeout(t);//清除定时器
                var dt=new Date();
                var y=dt.getFullYear();
                var mt=dt.getMonth()+1;
		   	    var day=dt.getDate();
		        var h=dt.getHours();//获取时
		        var m=dt.getMinutes();//获取分
		        var s=dt.getSeconds();//获取秒
		        document.getElementById("showTime").innerHTML = y+"年"+mt+"月"+day+"-"+h+"时"+m+"分"+s+"秒";
		        t = setTimeout(time,1000); //设定定时器，循环运行     
            }
        }
    },
    mounted(){
        this.Timer();
    }
    
}
</script>


<style>
.head{
    position: absolute;
    top:0.1%;
    left: 0.1%;
    width: 99.7%;
    height: 5%;
    background:url('../assets/head_bg.png') no-repeat center center; 
}

.head h1{
color:#fff; text-align: center; font-size: 35px; line-height:2px;
} 
.head h1 img{
width:1.5rem; display: inline-block; vertical-align: middle; margin-right: .2rem
}


.weather{
   position: absolute;
   top:0;
}

.weather span{ 
    color: white;
	font-size: 1.0rem;
}
</style>
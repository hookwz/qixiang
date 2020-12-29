<template>
     <div id="slider">
        <div id="month" v-for="(item,index) of (1,12)" :key="index" @click="choose(index)" style="cursor:pointer">
        <p :for="index">{{item}}月份</p>
        </div>
     </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'TimeAxis',
    data(){
        return {

        }
    },
    methods:{
      choose:function(index){
          var date=index+1;
          //console.log(date);
          pubsub.publish('getTimeDate',date);
      }     
    },
    mounted(){


    }
}
</script>



<style>
#slider{
  width: 100%;
  height: 100%;
  position: absolute;
}

#month{
  float:left;
  width: 6%;
  height: 100%;
  margin-left: 2%;
  background-color: white;
  /* border-radius: 50%; */
  transition: 1s;
  opacity: 0.5;
  text-align: center;
}

p{
    font-size: 18px;
    line-height: 100%;
}

#month:hover{
    opacity: 1;
    background-color: brown;
}

</style>
<template>
     <div id="axis">
        <div id="yr" v-for="(item,index) of [2017,2018,2019]" :key="index" @click="choose(index)" style="cursor:pointer">
        <p :for="index">{{item}}年</p>
        </div>
     </div>
</template>

<script>

import pubsub from 'pubsub-js'

export default {
    name:'YearAxis',
    data(){
        return{

        }
    },
    methods:{ 
        choose:function(index) {
            var year=index+2017;
            pubsub.publish('getYearData',year);
        }

    },
    mounted(){

    }
}
</script>

<style>
#axis{
    width: 100%;
  height: 100%;
  position: absolute;
}

#yr{
  float:left;
  width: 10%;
  height: 100%;
  margin-left: 18%;
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
#yr:hover{
    opacity: 0.9;
    background-color: red;
}
</style>
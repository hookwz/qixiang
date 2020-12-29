<template>
    <div id="map">
    </div>
</template>



<script>

import ServerData from '../data_helper/ServerData';
import * as mapboxgl from 'mapbox-gl';


import pubsub from 'pubsub-js';
// import func from '../../vue-temp/vue-editor-bridge';

// console.log(ServerData.getCountryJson())
console.log(ServerData.Text())



export default {
    name:'MapBoxView',
    data(){
        return{
            loading:true,
        }
    },
    watch:{
        focus:function(){

        }
    },
    mounted(){
        this.map="";
        this.mapInit();
        this.mapLoadGeojson(this);
    },
    methods:{
        addRegion2Map(features)
        {
         this.map.addSource("region_json",{
             type:"geojson",
             data:{
                 type:"FeatureCollection",
                 features:features.features
             }
         });

         if(this.data!='')
         {

         }

         this.map.addLayer({
            id:"region",
            type:'fill',
            source:'region_json',
            paint:{
                'fill-color':'#FAAACD',
                'fill-opacity':0.1
            }
         });

         this.map.addLayer({
             id:'region_boundry',
             type:'line',
             source:'region_json',
             paint:{
                 'line-width':0.5,
                 'line-color':"black"
             }
         });
        },
        mapDrawPoint(features){
            // Add a GeoJSON source with 2 points
            this.map.addSource("points", {
                type: "geojson",
                data: {
                    "type": "FeatureCollection",
                    "features":features.features
                }
            });
            // Add a symbol layer
            this.map.addLayer({
                id: "points",
                type: "circle",
                source: "points",
                paint:{
                    "circle-color":"#e1eed3",
                    "circle-radius": 9,
                },
            });
            this.map.addLayer({
                id: "region-label",
                type: "symbol",
                source: "points",
                layout: {
                    "text-field": "{name}",
                    "text-size": 10,
                    'text-offset': [-1.5,0]
                },
                paint: {
                    "text-color": 'blue',
                    
                },
                maxzoom: 20,
            });
        },
        mapChangePointColor(features){
            this.map.addSource("change", {
                type: "geojson",
                data: {
                    "type": "FeatureCollection",
                    "features":features.features
                }
            });
            this.map.addLayer({
                id: "hover",
                type: "circle",
                source: "change",
                paint:{
                    "circle-color":"#DE37D6",
                    "circle-radius": 10,
                },
                filter:["==","name",""]
            });
            this.map.on("click","points", e=>{
                this.map.setFilter(
                    "hover",
                    ["in","name"].concat(e.features.map(feature => feature.properties.name))
                )
            })
        },
        mapInit(that) {
            mapboxgl.accessToken =
                "pk.eyJ1Ijoia3Vua3VueXkiLCJhIjoiY2tna2pxNm8wMDIwcTJ4bzFmZmN3cnBmaSJ9.lIlQrcMFrHeWPQpL-03ETg";
            this.map = new mapboxgl.Map({
                container: "map", // container id
                style: "mapbox://styles/kunkunyy/ckgm6eho60oe719sd26f2vrmv", // stylesheet location
                center: [101.778916, 36.623178], // starting position [lng, lat]
                zoom: 3.8 // starting zoom
            });
        },
        mapLoadGeojson(that) {
            this.map.on("load", function() {
                
                ServerData.Text().then(function(response,error){
                    that.data = response.data;
                    that.addRegion2Map(that.data);
                    if(error){
                        that.loading = false;
                    }
                })

                ServerData.getCityPointJson().then(
                    response =>{
                        that.data = response.data;
                        that.mapDrawPoint(that.data);
                        that.mapChangePointColor(that.data);
                    },
                    error => {
                        that.loading = false;
                    }
                );
                that.mapAddCircle(that);
            });
        },
        mapAddCircle(that){
            that.map.on("click","points", e =>{
                var cityName = e.features[0].properties.name;
                // console.log(cityName);
                pubsub.publish("getCityData",cityName.substr(0,cityName.length-1));
            })
            that.map.on('mouseenter', 'points', function () {
                that.map.getCanvas().style.cursor = 'pointer';
            });
            that.map.on('mouseleave', 'points', function () {
                that.map.getCanvas().style.cursor = '';
            });
        }
    
    }
}
</script>


<style lang="css">

div #map{
    position: absolute;
    width: 100%;
    height: 100%;
}

body{
    margin: 0;
    padding: 0;
}

</style>
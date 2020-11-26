<template>
  <div class="ddd"> 
    <img id='image' src='../../assets/hongjie.jpg' crossorigin='anonymous'/>
  </div>
</template>

<script>
const blazeface = require('@tensorflow-models/blazeface')
export default {
  data(){
    return{
      list1:[],
      list:[]
    }
  },
  mounted(){
    this.loadAndPredict();
  },
  methods:{
    async loadAndPredict() {
      const model = blazeface.load()
      const returnTensors=false
      const predictions = await model.estimateFaces(document.querySelector("img"), returnTensors)
      console.log(123,predictions);
    }
  }
}
</script>

<style>
  .ddd{
    position: relative;
  }
</style>
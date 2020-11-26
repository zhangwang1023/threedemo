<template>
  <div class="ddd"> 
    <img id='image' src='../../assets/jjy.jpeg' crossorigin='anonymous'/>
  </div>
</template>

<script>
const facemesh = require('@tensorflow-models/facemesh')
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
      const model = await facemesh.load()
      console.log(321,model);
    }
  }
}
</script>

<style>
  .ddd{
    position: relative;
  }
</style>
<template>
  <div class="ddd"> 
    <img id='image' src='../../assets/hongjie.jpg' crossorigin='anonymous'/>
    <div v-for="(item,index) in list" :key="index" :style="'left:'+item.position.x+'px;top:'+item.position.y+'px'" class="pix">{{item.part}}</div>
  </div>
</template>

<script>
const bodyPix = require('@tensorflow-models/body-pix')

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
    const img = document.getElementById('image')
      const net =await bodyPix.load(/** optional arguments, see below **/);
      /**
       * One of (see documentation below):
       *   - net.segmentPerson
       *   - net.segmentPersonParts
       *   - net.segmentMultiPerson
       *   - net.segmentMultiPersonParts
       * See documentation below for details on each method.
       */
      const segmentation =await net.segmentPersonParts(img);
      this.list1=segmentation.allPoses[0].keypoints
      this.$set(this,'list',this.list1)
      console.log(this.list)
    }
  }
}
</script>

<style>
  .ddd{
    position: relative;
  }
  .pix{
    position: absolute;
    transform: translate(-50%,-50%);
    height: 5px;
    width: 5px;
    /* border:solid 1px red; */
    border-radius: 10px;
    background-color: red;
    z-index: 999;
    color: blue;
    font-size: 20px;
  }
</style>
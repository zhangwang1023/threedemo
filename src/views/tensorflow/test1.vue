<template>
  <div class="ddd"> 
    <img id='image' src='../../assets/jjy.jpeg' crossorigin='anonymous'/>
    <div v-for="(item,index) in list" :key="index" :style="'left:'+item.position.x+'px;top:'+item.position.y+'px'" class="pix">{{item.part}}</div>
  </div>
</template>

<script>
//身体部位检测
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
      console.log('开始加载模型...');
      const img = document.getElementById('image')
      const net =await bodyPix.load(/** optional arguments, see below **/);
      console.log('模型加载完成',net);
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
    height: 8px;
    width: 8px;
    border-radius: 10px;
    background-color: yellow;
    color: green;
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
  }
</style>
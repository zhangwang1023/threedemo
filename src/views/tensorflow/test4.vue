<template>
  <div class="ddd"> 
    <div>
      <el-input v-model="passage"></el-input>
    </div>
    <div>
      <el-input v-model="question"></el-input>
    </div>
    <el-button @click="getAnswer" :disabled="canUse">提问</el-button>
    <div v-if="answer.length>0">
      <div v-for="(item,index) in answer" :key="index">
        {{item.text}}
      </div>
    </div>
    <div v-else>我听不懂你在说什么</div>
  </div>
</template>

<script>
//人脸特征点检测
const qna = require('@tensorflow-models/qna')
export default {
  data(){
    return{
      answer:[],
      passage:'1+1=2,2+2=4,3+3=6',//语境
      question:'3+3=?',//问题
      model:'',
      canUse:true
    }
  },
  mounted(){
    this.loadAndPredict();
  },
  methods:{
    async loadAndPredict() {
      console.log('开始加载模型...');
      this.model = await qna.load()
      console.log('模型加载完成',this.model);
      this.canUse=false

    },
    async getAnswer(){
      this.answer=await this.model.findAnswers(this.question, this.passage)
    }
  }
}
</script>

<style>
  .ddd{
    position: relative;
  }
</style>
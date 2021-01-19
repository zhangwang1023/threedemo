<template>
  <div class="ddd">
    <img id="image" src="../../assets/jjy.jpeg" crossorigin="anonymous" />
  </div>
</template>

<script>
//简单人脸检测 识别人脸位置
const blazeface = require('@tensorflow-models/blazeface')
export default {
  data() {
    return {
      list1: [],
      list: [],
    }
  },
  mounted() {
    this.loadAndPredict()
  },
  methods: {
    async loadAndPredict() {
      console.log('开始加载模型...')
      const model = await blazeface.load()
      const returnTensors = false
      console.log('模型加载完成', model)
      const predictions = await model.estimateFaces(
        document.getElementById('image'),
        returnTensors
      )
      console.log('识别结果', predictions)
      /*
    [
      {
        topLeft: [232.28, 145.26],
        bottomRight: [449.75, 308.36],
        probability: [0.998],//出现概率
        landmarks: [
          [295.13, 177.64], // right eye
          [382.32, 175.56], // left eye
          [341.18, 205.03], // nose
          [345.12, 250.61], // mouth
          [252.76, 211.37], // right ear
          [431.20, 204.93] // left ear
        ]
      }
    ]
    */
    },
  },
}
</script>

<style>
.ddd {
  position: relative;
}
</style>

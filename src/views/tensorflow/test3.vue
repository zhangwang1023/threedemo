<template>
  <div class="ddd">
    <img id="image" src="../../assets/jjy.jpeg" crossorigin="anonymous" />
  </div>
</template>

<script>
//人脸特征点检测
const facemesh = require('@tensorflow-models/facemesh')
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
      const model = await facemesh.load()
      console.log('模型加载完成', model)
      const predictions = await model.estimateFaces(
        document.getElementById('image')
      )
      console.log('识别结果', predictions)
      /*
    `predictions` is an array of objects describing each detected face, for example:

    [
      {
        faceInViewConfidence: 1, // The probability of a face being present.一张脸出现的概率。
        boundingBox: { // The bounding box surrounding the face.围绕脸部的边界框。
          topLeft: [a,b],
          bottomRight: [a,b],
        },
        mesh: [ // The 3D coordinates of each facial landmark.每个面部地标的3D坐标。
          ...
        ],
        scaledMesh: [ // The 3D coordinates of each facial landmark, normalized.对每个面部的三维坐标进行归一化处理。
            ...
        ],
        annotations: { //注释 Semantic groupings of the `scaledMesh` coordinates.“scaledMesh”坐标的语义分组。
          silhouette: [
            ...
          ],
          ...
        }
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

<template>
  <div>
    <children @showparams='show' :bar1="bar1" :bar2="bar2" :xAxis="xAxis" :legend="legend" :line1="line1" :line2="line2"/>
  </div>
</template>

<script>
import children from './admin'
export default {
  components:{
    children
  },
  data(){
    return{
      bar1:[10,30,20,40,50],//柱状图1
      bar2:[15,5,10,25,19],//柱状图2
      line1:[40, 60, 50, 65, 45],//折线图1
      line2:[55, 36, 40, 55, 55],//折线图2
      legend:['aa','bb','cc','dd'],//图例
      xAxis:['a','b','c','d','e'],//x轴数据

    }
  },
  methods:{
    show(data){
      console.log('接收到参数',data.seriesIndex,data.dataIndex)
    },
  }
}
</script>

<style>

</style>
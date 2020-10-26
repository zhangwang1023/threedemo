<template>
  <div class="echarts">
    <barline
      @showparams="show"
      :bar1="bar1"
      :bar2="bar2"
      :xAxis="xAxis"
      :legend="legend"
      :line1="line1"
      :line2="line2"
      :color="color"
      :textColor="textColor"
    />
    <pie
      @showparams="show"
      :data="data"
      :name="name"
      :radius="radius"
      :center="center"
      :roseType="roseType"
    />
  </div>
</template>

<script>
import barline from '@/components/bar_line'
import pie from '@/components/pie'
export default {
  components: {
    barline,
    pie,
  },
  data() {
    return {
      bar1: [120, 180, 160, 140, 240,12,12], //柱状图1
      bar2: [20, 80, 18, 24, 36], //柱状图2
      line1: [50.0, 60, 50, 65, 45], //折线图1
      line2: [55, 36, 40, 55, 55], //折线图2
      xAxis: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月'], //x轴数据
      legend: ['已完成', '未完成', '完成率', '满意度'], //图例
      color: ['#6096FE', '#FF8DA2', '#A9B4F9', '#F1A5B8'], //图表颜色
      textColor: ['#95A0A9', '#95A0A9', '#6F82F8', '#FF6E89'], //文本颜色
      data: [
        { value: 335, name: '直接访问',itemStyle:{color:'#6096FE',shadowColor:'rgba(178, 208, 255, 0.54)',shadowBlur: 10}},
        { value: 310, name: '邮件营销',itemStyle:{color:'#FF8DA2',shadowColor:'rgba(255, 141, 162, 0.59)',shadowBlur: 10}},
        { value: 274, name: '联盟广告',itemStyle:{color:'#B2D0FF',shadowColor:'rgba(96, 150, 254, 0.6)',shadowBlur: 10}},
      ], //数据 包括值、名称、元素颜色、元素阴影颜色、阴影大小
      name: '数据来源', //元素名称
      radius: ['30%', '50%'], //大小 饼图传字符串
      center: ['50%', '50%'], //位置
      roseType: 'radius', //图表类型 radius为玫瑰图
    }
  },
  methods: {
    show(data) {
      console.log('接收到参数', '系列index:',data.seriesIndex,'数据index',data.dataIndex)
    },
  },
}
</script>

<style>
  .echarts{
    width: 100%;
    height: 350px;
  }
</style>

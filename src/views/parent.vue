<template>
  <div>
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
      :data="data"
      :lineColor="lineColor"
      :name="name"
      :itemColor="itemColor"
      :labelColor="labelColor"
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
      bar1: [10, 30, 20, 40, 50], //柱状图1
      bar2: [15, 5, 10, 25, 19], //柱状图2
      line1: [40, 60, 50, 65, 45], //折线图1
      line2: [55, 36, 40, 55, 55], //折线图2
      xAxis: ['a', 'b', 'c', 'd', 'e'], //x轴数据
      legend: ['aa', 'bb', 'cc', 'dd'], //图例
      color: ['pink', '', 'blue', 'grey'], //图表颜色
      textColor: ['black', 'black', 'red', 'red'], //文本颜色
      data: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 274, name: '联盟广告' },
        { value: 235, name: '视频广告' },
        { value: 400, name: '搜索引擎' },
      ], //数据
      lineColor: ['black'], //标签线颜色
      name: '数据来源', //元素名称
      itemColor: ['#005588'], //图表颜色
      labelColor: ['black'], //标签颜色
      radius: ['25%', '70%'], //大小 饼图传字符串
      center: ['50%', '50%'], //位置
      roseType: 'radius', //图表类型 radius为玫瑰图
    }
  },
  methods: {
    show(data) {
      console.log('接收到参数', data.seriesIndex, data.dataIndex)
    },
  },
}
</script>

<style></style>

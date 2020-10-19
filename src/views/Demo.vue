<template>
  <div style="display:flex">
    <button @click="add">click here</button>
    <div ref="demo" id="diqu" class="echarts"></div>
    <canvas id="myChart" width="300" height="260"></canvas>
    <div id="c1"></div>
    <div id="container" style="width: 300px;height:300px;"></div>
  </div>
</template>

<script>
const F2 = require('@antv/f2')
const G2 = require('@antv/g2')
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);
export default {
  name: 'demo',
  data() {
    return {
      a: 12,
      b: 16,
      c: 23,
      d: 19,
      e: 10,
    }
  },
  mounted() {
    this.draw()
    this.draw2()
    this.draw3()
        // 图表初始化函数
        Highcharts.chart('container', {
            chart: {
                type: 'bar'                          //指定图表的类型，默认是折线图（line）
            },
            title: {
                text: '我的第一个图表'                 // 标题
            },
            xAxis: {
                categories: ['苹果', '香蕉', '橙子']   // x 轴分类
            },
            yAxis: {
                title: {
                    text: '吃水果个数'                // y 轴标题
                }
            },
            series: [{                              // 数据列
                name: '小明',                        // 数据列名
                data: [1, 9, 4]                     // 数据
            }]
        });
  },
  methods: {
    draw() {
      var myChart = this.$echarts.init(document.getElementById('diqu'))
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ['苏', '锡', '常', '镇', '宁'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [this.a, this.b, this.c, this.d, this.e],
            color: ['#ff6600'],
          },
        ],
      })
    },
    draw2() {
      const data = [
        { genre: '苏', sold: this.a },
        { genre: '锡', sold: this.b },
        { genre: '常', sold: this.c },
        { genre: '镇', sold: this.d },
        { genre: '宁', sold: this.e },
      ]
      const chart = new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio, // 指定分辨率
      })
      chart.source(data)
      chart.interval().position('genre*sold').color('genre')
      chart.render()
    },
    draw3() {
      const data = [
        { genre: '苏', sold: this.a },
        { genre: '锡', sold: this.b },
        { genre: '常', sold: this.c },
        { genre: '镇', sold: this.d },
        { genre: '宁', sold: this.e },
      ]
      const chart = new G2.Chart({
        container: 'c1', // 指定图表容器 ID
        width: 300, // 指定图表宽度
        height: 300, // 指定图表高度
      })
      chart.data(data)
      chart.interval().position('genre*sold')
      chart.render()
    },
    add() {
      this.a += Math.floor(Math.random() * 10)
      this.b += Math.floor(Math.random() * 10)
      this.c += Math.floor(Math.random() * 10)
      this.d += Math.floor(Math.random() * 10)
      this.e += Math.floor(Math.random() * 10)
      this.draw()
      this.draw2()
      this.draw3()
    },
  },
}
</script>
<style scoped>
.echarts {
  height: 300px;
  width: 300px;
}
</style>

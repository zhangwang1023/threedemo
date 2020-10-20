<template>
  <div class="body">
    <button @click="add">click here</button>
    <div ref="demo" id="diqu" class="echarts"></div>
    <canvas id="myChart" width="300" height="260"></canvas>
    <div id="c1"></div>
    <div class="echarts" ref="chartdiv" id="chartdiv"></div>
    <div class="echarts">
      <canvas id="firstChart" width="300" height="260"></canvas>
    </div>
    <div class="echarts">
      <canvas id="secondChart" width="300" height="260"></canvas>
    </div>
  </div>
</template>
<script>
const F2 = require('@antv/f2')
const G2 = require('@antv/g2')
const Chart = require('chart.js')
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themes_animated)
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
    this.draw4()
    this.draw5()
    this.draw6()
  },
  methods: {
    draw() {
      //echarts
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
          },{
            name: 'a',
            type: 'line',
            data: [10, 30, 20, 40, 25],
          },
        ],
      })
    },
    draw2() {
      //F2
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
      chart
        .interval()
        .position('genre*sold')
        .color('genre')
      chart.render()
    },
    draw3() {
      //G2
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
    draw4() {
      var chart = am4core.create('chartdiv', am4charts.XYChart)
      chart.data = [
        {
          country: '苏',
          litres: this.a,
          units: 10,
        },
        {
          country: '锡',
          litres: this.b,
          units: 30,
        },
        {
          country: '常',
          litres: this.c,
          units: 20,
        },
        {
          country: '镇',
          litres: this.d,
          units: 45,
        },
        {
          country: '宁',
          litres: this.e,
          units: 33,
        },
      ]
      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
      categoryAxis.dataFields.category = 'country'
      categoryAxis.title.text = 'am4charts'

      chart.yAxes.push(new am4charts.ValueAxis())
      // valueAxis.title.text = 'Litres sold (M)'

      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = 'litres'
      series.dataFields.categoryX = 'country'
      series.name = 'Sales'
      series.columns.template.tooltipText =
        'Series: {name}\nCategory: {categoryX}\nValue: {valueY}'
      series.columns.template.fill = am4core.color('#00ff00') // fill

      var series2 = chart.series.push(new am4charts.LineSeries())
      series2.name = 'Units'
      series2.stroke = am4core.color('#CDA2AB')
      series2.strokeWidth = 3
      series2.dataFields.valueY = 'units'
      series2.dataFields.categoryX = 'country'
    },
    draw5() {
      var ctx = document.getElementById('firstChart').getContext('2d')
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['苏', '锡', '常', '镇', '宁'],
          datasets: [
            {
              label: '柱状',
              data: [this.a, this.b, this.c, this.d, this.e],
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1,
            },
            {
              label: '折线',
              data: [10, 30, 20, 50, 22],
              type: 'line',
              fill:false
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      })
    },
    draw6() {
      
    },
    add() {
      this.a += Math.floor(Math.random() * 10)
      this.b += Math.floor(Math.random() * 10)
      this.c += Math.floor(Math.random() * 10)
      this.d += Math.floor(Math.random() * 10)
      this.e += Math.floor(Math.random() * 10)
      this.draw()
      this.draw2()
      // this.draw3()
      this.draw4()
      this.draw5()
      this.draw6()
    },
  },
}
</script>
<style scoped>
.body {
  display: flex;
  flex-wrap: wrap;
}
.echarts {
  height: 350px;
  width: 350px;
}
</style>

<template>
  <div class="body">
    <button @click="add">click here</button>
    <!-- echarts堆积图 -->
    <div ref="demo" id="demo1" class="echarts"></div>
    <!-- 蚂蚁f2 -->
    <canvas id="myChart" width="400" height="400"></canvas>
    <!-- am4charts -->
    <div class="echarts" ref="chartdiv" id="chartdiv"></div>
    <!-- chart.js -->
    <div class="echarts">
      <canvas id="firstChart" width="400" height="400"></canvas>
    </div>
    <!-- echarts饼图 -->
    <div ref="demo" id="demo2" class="echarts"></div>
    <!-- echarts环形图 -->
    <div ref="demo" id="demo3" class="echarts"></div>
  </div>
</template>
<script>
const F2 = require('@antv/f2')
// const G2 = require('@antv/g2')
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
      var myChart = this.$echarts.init(document.getElementById('demo1'))
      // 绘制图表
      myChart.setOption({
        tooltip: {}, //工具栏
        legend: {
          //图例
          data: ['aa', 'bb', 'cc', 'dd'],
          bottom: 0,
        },
        xAxis: {
          data: ['苏', '锡', '常', '镇', '宁'],
        },
        yAxis: {},
        series: [
          {
            name: 'aa',
            type: 'bar',
            data: [this.a, this.b, this.c, this.d, this.e],
            stack: '例',
            color: 'pink',
            label: {
              show: true, //开启显示
              position: 'inside', //在上方显示
              textStyle: {
                color: 'white',
              },
            },
          },
          {
            name: 'bb',
            type: 'bar',
            data: [this.a, this.b, this.c, this.d, this.e],
            stack: '例',
            label: {
              show: true, //开启显示
              position: 'inside', //在上方显示
            },
          },
          {
            name: 'cc',
            type: 'line',
            data: [40, 60, 50, 65, 45],
            color: 'darkblue',
            label: {
              show: true, //开启显示
              position: 'top', //在上方显示
              textStyle: {
                color: 'black',
              },
            },
          },
          {
            name: 'dd',
            type: 'line',
            data: [55, 36, 40, 55, 55],
            color: 'darkblue',
            label: {
              show: true, //开启显示
              position: 'bottom', //在上方显示
              textStyle: {
                color: 'black',
              },
            },
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
    draw4() {
      var ctx = document.getElementById('firstChart').getContext('2d')
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['苏', '锡', '常', '镇', '宁'],
          color: 'black',
          datasets: [
            {
              label: '柱状',
              data: [this.a, this.b, this.c, this.d, this.e],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
            {
              label: '折线',
              data: [10, 30, 20, 50, 22],
              type: 'line',
              fill: false,
              borderColor: 'black',
              lineTension: 0, //为0时直线
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

          animation: {
            duration: 1000,
            onComplete: function() {
              var chartInstance = this.chart,
                ctx = chartInstance.ctx
              // ctx.font = Chart.helpers.fontString(
              //   Chart.defaults.global.defaultFontSize,
              //   Chart.defaults.global.defaultFontStyle,
              //   Chart.defaults.global.defaultFontFamily
              // )
              // ctx.textAlign = 'center'
              // ctx.textBaseline = 'bottom'
              this.data.datasets.forEach(function(dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i)
                meta.data.forEach(function(bar, index) {
                  var data = dataset.data[index]
                  ctx.fillText(data, bar._model.x, bar._model.y + 15)
                })
              })
            },
          },
        },
      })
    },
    draw5() {
      //echarts
      var myChart = this.$echarts.init(document.getElementById('demo2'))
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {},
        legend: {
          bottom:'bottom',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        },
        series: [
          {
            name: 'aa',
            type: 'pie',
            radius: '70%',
            color:['pink','orange','grey','#9999ff','#006666'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 148, name: '搜索引擎'}
            ],
            emphasis: {//点击时阴影
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
              show: true, //开启显示
              formatter: '{b} : {c} ({d}%)',
              position: 'inside', //在上方显示
              textStyle: {
                color: 'white',
              },
            },
          },
        ],
      })
    },
    draw6() {
      //echarts
      var myChart = this.$echarts.init(document.getElementById('demo3'))
      // 绘制图表
      myChart.setOption({
        title: {},
        tooltip: {},
        legend: {
          bottom:'bottom',
          data: ['直接访问', '邮件营销', '联盟广告'],
        },
        series: [
          {
            name: 'aa',
            type: 'pie',
            radius: ['45%', '75%'],
            color:['pink','orange','grey'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
            ],
            emphasis: {//点击时阴影
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
              show: true, //开启显示
              formatter: '{b} : {c} ({d}%)',
              position: 'inside', //在上方显示
              textStyle: {
                color: 'black',
              },
            },
          },
        ],
      })
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
  height: 400px;
  width: 400px;
}
</style>

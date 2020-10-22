<template>
  <div>
    <!-- echarts堆积图 -->
    <div id="barLine" class="echarts"></div>
  </div>
</template>
<script>
export default {
  props: {
    bar1: {
      type: Array,
      value: [],
    },
    bar2: {
      type: Array,
      value: [],
    },
    line1: {
      type: Array,
      value: [],
    },
    line2: {
      type: Array,
      value: [],
    },
    xAxis: {
      type: Array,
      value: [],
    },
    legend: {
      type: Array,
      value: [],
    },
    color: {
      type: Array,
      value: [],
    },
    textColor: {
      type: Array,
      value: [],
    },
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      //echarts
      var seriesOption = [//初始值三张图表
        {
          name: this.legend[0],
          type: 'bar',
          data: this.bar1,
          stack: 'first',
          color: this.color[0],
          label: {
            show: true, //开启显示
            position: 'inside', //在上方显示
            textStyle: {
              color: this.textColor[0],
            },
          },
        },
        {
          name: this.legend[1],
          type: 'bar',
          data: this.bar2,
          stack: 'first',
          color: this.color[1],
          label: {
            show: true, //开启显示
            position: 'inside', //在上方显示
            textStyle: {
              color: this.textColor[1],
            },
          },
        },
        {
          name: this.legend[2],
          type: 'line',
          data: this.line1,
          yAxisIndex:1,
          color: this.color[2],
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            formatter:'{c}.00%',
            textStyle: {
              color: this.textColor[1],
            },
          },
        },
      ]
      if (this.legend.length == 4) {//增加一张图表
        seriesOption.push({
          name: this.legend[3],
          type: 'line',
          data: this.line2,
          yAxisIndex:1,
          color: this.color[3],
          label: {
            show: true, //开启显示
            position: 'bottom', //在底下显示
            formatter:'{c}.00%',
            textStyle: {
              color: this.textColor[1],
            },
          },
        })
      }
      var myChart = this.$echarts.init(document.getElementById('barLine'))
      // 绘制图表
      myChart.setOption({
        tooltip: {//提示框
          show: false,
        }, 
        legend: {
          //图例
          data: this.legend,
          bottom: 0,
        },
        xAxis: {
          data: this.xAxis,
        },
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: Math.floor((Math.max(...this.bar1)+Math.max(...this.bar2))*1.3),
            show:false,
            splitLine:{
              show: false
            },
          },
          {
            type: 'value',
            min: -200,
            max: 100,
            show:false,
            splitLine:{
              show: false
            },
            axisLabel: {
              formatter: '{value}%'
            }
          }
        ]
        ,
        series: seriesOption,
      })
      myChart.on('click', (params) => {
        this.$emit('showparams', params)
      })
    },
  },
}
</script>
<style scoped>
.echarts {
  height: 400px;
  /* width: ; */
}
</style>

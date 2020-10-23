<template>
    <!-- echarts堆积图 -->
    <div id="barLine" class="echarts"></div>
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
      let maxLength
      if(Math.max(...this.bar1)>Math.max(...this.bar2)){
        maxLength=Math.max(...this.bar1)
      }else{
        maxLength=Math.max(...this.bar2)
      }
      var seriesOption = [
        //初始值三张图表 柱形图1
        {
          name: this.legend[0],
          type: 'bar',
          data: this.bar1,
          color: this.color[0],
          barWidth:15,
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            color: this.textColor[0],
            fontSize:12,
            fontWeight:500,
            distance:2
          },
          itemStyle: {
            barBorderRadius: [10, 10, 0, 0],
          },
        },
        //柱形图2
        {
          name: this.legend[1],
          type: 'bar',
          data: this.bar2,
          color: this.color[1],
          barWidth:15,
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            color: this.textColor[1],
            fontSize:12,
            fontWeight:500,
            distance:2
          },
          itemStyle: {
            barBorderRadius: [10, 10, 0, 0],
          },
        },
        //折线图1
        {
          name: this.legend[2],
          type: 'line',
          data: this.line1,
          yAxisIndex: 1,
          color: this.color[2],
          smooth: true,
          label: {
            show: true, //开启显示
            position: 'top', //在上方显示
            formatter: '{c}.00%',
            color: this.textColor[2],
            fontWeight:500,
            fontSize:10
          },
          lineStyle: {
            shadowColor: 'rgba(169, 180, 249, 0.6)',
            shadowBlur: 10,
          },
        },
      ]
      if (this.legend.length == 4) {
        //增加一张图表 折线图2
        seriesOption.push({
          name: this.legend[3],
          type: 'line',
          data: this.line2,
          yAxisIndex: 1,
          color: this.color[3],
          smooth: true,
          label: {
            show: true, //开启显示
            position: 'bottom', //在底下显示
            formatter: '{c}.00%',
            color: this.textColor[3],
            fontWeight:500,
            fontSize:10
          },
          lineStyle: {
            shadowColor: 'rgba(241, 165, 184, 0.51)',
            shadowBlur: 10,
          },
        })
      }
      var myChart = this.$echarts.init(document.getElementById('barLine'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          //提示框
          show: false,
        },
        legend:[{
          //图例1
          data: [this.legend[0]],
          left:'15%',
          bottom: 0,
          itemWidth:10,
          itemHeight:10,
          textStyle:{
            color:'#343A4E',
            fontSize:10,
            lineHeight:10,
            fontWeight:500,
            padding:[4,0,0,0]
          },
        },{
          //图例2
          data: [this.legend[1]],
          left:'34%',
          bottom: 0,
          itemWidth:10,
          itemHeight:10,
          textStyle:{
            color:'#343A4E',
            fontSize:10,
            lineHeight:10,
            fontWeight:500,
            padding:[4,0,0,0]
          },
        },{
          //图例3
          data:[this.legend[2]],
          left:'53%',
          bottom: 0,
          icon:'line',
          itemWidth:10,
          itemHeight:10,
          textStyle:{
            color:'#343A4E',
            fontSize:10,
            lineHeight:10,
            fontWeight:500,
            padding:[4,0,0,0]
          },
        },{
          //图例4
          data: [this.legend[3]],
          left:'72%',
          bottom: 0,
          icon:'line',
          itemWidth:10,
          itemHeight:10,
          textStyle:{
            color:'#343A4E',
            fontSize:10,
            lineHeight:10,
            fontWeight:500,
            padding:[4,0,0,0]
          },
        }],
        xAxis: {
          data: this.xAxis,
          nameGap:100,
          axisLine:{
            lineStyle:{
              color:'#E5E5E5'
            }
          },
          axisTick:{
            show:false
          },
          axisLabel:{
            margin:8,
            color:'#4F5566',
            fontWeight:400
          }
        },
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: Math.floor(maxLength * 1.5),
            show: false,
            splitLine: {
              show: false,
            },
          },
          {
            type: 'value',
            min: -200,
            max: 100,
            show: false,
            splitLine: {
              show: false,
            },
            axisLabel: {
              formatter: '{value}%',
            },
          },
        ],
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
  height: 100%;
  width: 100%;
}
</style>

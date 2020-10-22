<template>
  <div>
    <!-- echarts堆积图 -->
    <div id="pie" class="echarts"></div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      value: [],
    },
    lineColor: {
      type: Array,
      value: [],
    },
    name: {
      type: String,
      value: '',
    },
    itemColor: {
      type: Array,
      value: [],
    },
    labelColor: {
      type: Array,
      value: [],
    },
    radius: {
      type: Array,
      value: [],
    },
    center: {
      type: Array,
      value: [],
    },
    roseType: {
      type: String,
      calue: '',
    },
  },
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      //echarts
      var myChart = this.$echarts.init(document.getElementById('pie'))
      // 绘制图表
      myChart.setOption({
        backgroundColor: '#fff',
        title: {},
        tooltip: {
          // show: false,
        },
        visualMap: {
          show: false,
          min: 80,
          max: 500,
          inRange: {
            colorLightness: [0, 1],
          },
        },
        series: [
          {
            name: this.name,
            type: 'pie',
            radius: this.radius,
            center: this.center,
            data: this.data,
            roseType: this.roseType,
            label: {
              color: this.labelColor,
              formatter: `{d}%
{b}
{c}`,
            },
            labelLine: {
              lineStyle: {
                color: this.lineColor,
              },
              smooth: 0.2,
              length: 8,
              length2: 8,
            },
            itemStyle: {
              color: this.itemColor,
              // shadowBlur: 200,阴影
              // shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale', //动画类型'expansion' 默认沿圆弧展开的效果 'scale' 缩放效果
            // animationEasing: 'elasticOut',//缓动效果
            // animationDelay: function (idx) {//延迟效果
            //     return Math.random() * 200;
            // }
          },
        ],
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

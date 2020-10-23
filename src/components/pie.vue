<template>
    <!-- echarts堆积图 -->
    <div id="pie" class="pie"></div>
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
          show: false,
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
              formatter: `{b}
{d}%
{c}`,
            },
            labelLine: {
              length: 10,
              length2: 40,
            },
            animationType: 'expansion', //动画类型'expansion' 默认沿圆弧展开的效果 'scale' 缩放效果
            // animationEasing: 'elasticOut',//缓动效果
            // animationDelay: function (idx) {//延迟效果
            //     return Math.random() * 200;
            // }
          },
        ],
      })
      myChart.on('click', (params) => {
        this.$emit('showparams', params)
      })
    },
  },
}
</script>
<style scoped>
.pie {
  height: 100%;
  width: 100%;
}
</style>

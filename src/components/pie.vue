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
              padding: [0, -100],
              lineHeight: 20,
              formatter: `{first|{b}} {second|{d}%}\n{third|{c}}`,
              rich: {
                first: { color: '#343A4E',fontSize:12,fontWeight:500},
                second: { color: '#343A4E',fontSize:12},
                third: { color: '#8A96A0',align:'center',fontSize:11},
              },
            },
            labelLine: {
              length: 20,
              length2: 90,
            },
            animationType: 'expansion',
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

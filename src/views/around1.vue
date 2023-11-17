<template>
  <div class="wapper">
    <main id="main">
      <div class="Trojan"
           :style="{
            'transform':'rotateX('+TrojanOptions.rotateX+'deg) rotateY('+(-TrojanOptions.activeChildSort*singleAngle)+'deg)' 
           }">
        <div v-for="(item,index) in TrojanOptions.data"
             :key="index"
             class="TrojanChild"
             :class="TrojanOptions.activeChildSort===item.sort?'activeChild TrojanChild':'TrojanChild'"
             :style=" {
              '--index': index+1,   
              'transform':'rotateY('+(singleAngle*index)+'deg) translateZ(320px)'
            } "
             @mousedown="handleDrapDown($event,item)"> <img :src="item.src">
          {{item.sort}}
        </div>
      </div>
    </main>
  </div>
</template>
 
<script> 
export default {
  name: 'demo',
  components: {},
  data () {
    return {
      // 旋转木马配置
      TrojanOptions: {
        //默认激活的子元素坐标
        activeChildSort: 0,
        //是否允许进行拖拽
        isDrop: false,
        //旋转角度
        rotate: 0,
        // 向内倾斜角度
        rotateX: -12,
        // 旋转木马子元素
        data: [
          {
            sort: 0,
            src: require("@/assets/logo.png"),
          },
          {
            sort: 1,
            src: require("@/assets/logo.png"),
          },
          {
            sort: 2,
            src: require("@/assets/logo.png"),
          },
          {
            sort: 3,
            src: require("@/assets/logo.png"),
          },
          {
            sort: 4,
            src: require("@/assets/logo.png"),
          },
          {
            sort: 5,
            src: require("@/assets/logo.png"),
          },
        ],
      },
    }
  },
  watch: {
  },
  created () {
  },
  computed: {
    //单个元素占用的角度
    singleAngle () {
      return parseInt(360 / this.TrojanOptions.data.length)
    },
  },
  mounted () {
  },
  destroyed () {
  },
  methods: {
    //复位
    resetPosition () {
      if (this.TrojanOptions.activeChildSort >= this.TrojanOptions.data.length) {
        this.TrojanOptions.activeChildSort = 0
      }
      if (this.TrojanOptions.activeChildSort < 0) {
        this.TrojanOptions.activeChildSort = this.TrojanOptions.data.length-1
      }
    },
    //旋转方法
    startTurn (addflag, item) {
      let Trojan = document.querySelector(".Trojan");
      if (addflag === 0) {
        this.TrojanOptions.activeChildSort -= 1
        this.resetPosition()
      }
      else if (addflag === 1) {
        this.TrojanOptions.activeChildSort += 1
        this.resetPosition()
      }
      else {
        this.TrojanOptions.activeChildSort = item.sort
      }
      Trojan.style.cssText = ` transform: rotateX(` + this.TrojanOptions.rotateX + `deg) rotateY(${this.TrojanOptions.rotate}deg); `;
    },
    //旋转的触发方法
    //也是入口
    handleDrapDown (de, item) {
      const th = this
      let stratPoint = de.clientX || de.touches[0].clientX
      let endPoint = de.clientX || de.touches[0].clientX
      this.TrojanOptions.isDrop = true;
 
      // 此处可以扩展鼠标的移动，旋转延续跟着移动的动画效果
      document.onmousemove = (e) => {
        if (!this.TrojanOptions.isDrop) return false;
        e.preventDefault();
      }
 
      document.onmouseup = (e) => {
        if (!this.TrojanOptions.isDrop) return;
        endPoint = e.clientX || e.touches[0].clientX;
        this.TrojanOptions.isDrop = false;
        if (stratPoint < endPoint) {
          th.startTurn(0, item)
        }
        else if (stratPoint > endPoint) {
          th.startTurn(1, item)
        }
        else {
          th.startTurn(3, item)
        }
      }
    }
  }
}
</script>
 
<style>
.wapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
}
main {
  user-select: none;
  position: relative;
  width: 220px;
  height: 130px;
  perspective: 800px;
}
.Trojan {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1s;
}
.TrojanChild {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid yellow;
  color: #fff;
  &.activeChild {
    border: 1px solid red !important;
  }
  & img {
    width: 100%;
    height: 100%;
  }
  :hover {
    cursor: grab;
  }
  :active {
    cursor: grabbing;
  }
}
</style>
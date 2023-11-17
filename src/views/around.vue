<template>
  <div class="cenBotDynamic">
   
    <div class="container">
      <div class="box">
        <div
                v-for="(item, index) in parks"
                :key="item.index"
                :class="['circle', `circle${index + 1}`]"
        >
          <!--, `circle${index + 1}`-->
          <div
                  :id="item.id"
                  :class="{ currClass: item.index == indexs }"
 
          >
            <div class="circleBox">
              {{item.index}}
            </div>
 
          </div>
        </div>
        <!-- 椭圆线 -->
        <!--<div class="border"></div>-->
      </div>
    </div>
  </div>
</template>
 
<script>
  
  
export default {
  name: "index",
  
  data() {
    return {
      parks: [
        {
          index: 5,
        },
        {
          index: 4,
        },
        {
          index: 3,
        },
        {
         index: 2,
       },
      {
         index: 1,
       },
       {
         index: 6,
       }
      ],
      indexs: 0,
    };
  },
  methods:{
   
  },
  mounted() {
 
  },
  beforeDestroy() {
 
  }
}
</script>
 
<style lang="scss" scoped>
</style>
<style scoped>
  .cenBotDynamic {
    width: 100%;
    height: 100vh;
    /* background-color: #ddd; */

    background-image: url("~@/assets/bg.webp");
    background-size: 100%;
  }
  .container {
    position: absolute;
    top: 6vh;
    left: 10vw;
    width: 60vw;
    height: 50vh;
  }
  /* 动画的容器(椭圆) */
  .box {
    width: 100%;
    height: 100%;
    position: relative;
    /* border: 1px solid blue; */
    box-sizing: border-box;
    border-radius: 50%;
  }
 
  /*  椭圆线 */
  .border {
    position: absolute;
    width: 80vw;
    height: 100%;
    top: 20vh;
    left: 0.3125rem;
    border: 0.0052rem solid #05acc4;
    border-top-color: rgba(5, 172, 196, 0.1);
    border-left-color: rgba(5, 172, 196, 0.4);
    border-right-color: rgba(5, 172, 196, 0.4);
    border-bottom-color: rgba(5, 172, 196, 0.8);
    box-sizing: border-box;
    border-radius: 50%;
    z-index: 0;
  }
 
  /* 以下是转动的动画 */
  .circle {
    width: 27.34vw;
    height: 32.22vh;
    position: absolute;
    z-index: 999;
    background-image: url("~@/assets/logo.png");
    /* background-color: black; */
    background-size: 100% 100%;
  }
 
  .circle > div {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .currClass {
    cursor: pointer;
  }
 
  .circle > div > .circleBox {
    position: absolute;
    width: 100%;
    height: 32.22vh;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    font-size: 0.0729rem;
    color: #fff;
  }
 
  .circle > div > img {
    width: 100%;
    height: 100%;
  }
 
  .circle1 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
  }
 
  .circle2 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -8.33s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -3.33s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -3.66s infinite alternate;
  }
 
  .circle3 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -11.66s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -6.66s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -6.66s infinite alternate;
  }
 
  .circle4 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -14.99s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -9.99s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -9.99s infinite alternate;
  }
 
  .circle5 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -18.32s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -13.32s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -13.32s infinite alternate;
  }
 
  .circle6 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -21.65s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -16.65s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -16.65s infinite alternate;
  }
 
  @keyframes animX {
    0% {
      left: -2%;
    }
 
    100% {
      left: 96%;
    }
  }
 
  @keyframes animY {
    0% {
      top: -2%;
    }
 
    100% {
      top: 96%;
    }
  }
 
  @keyframes scale {
    0% {
      transform: scale(0);
      opacity: 0.1;
    }
    25% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    75% {
      transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(0);
      opacity: 0.1;
    }
  }
</style>
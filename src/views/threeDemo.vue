<template>
  <div>
      <div ref="demo"></div>
  </div>
</template>

<script>
import * as THREE from 'three'
// import dat from 'dat.gui'
export default {
  data(){
    return{
      scene:'',//场景
      camera:'',//相机
      renderer:'',//渲染器
      geometry1:'',//立方体
      material1:'',//立方体材质
      cube1:'',//立方体网格
      geometry2:'',//平面图
      material2:'',//平面图材质
      cube2:'',//平面图网格
    }
  },
  created(){
    this.init()
    this.createGeometry1()
    this.createGeometry2()
    this.showScene()
  },
  methods:{
    //创建场景
    init(){
      //创建场景
      this.scene=new THREE.Scene()
      /**
       * 创建相机
       * PerspectiveCamera:透视摄像机
       * fov:视野参数 视角 单位：度
       * aspect:长宽比
       * near:近截面
       * far:远截面
       */
      this.camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000)
      // this.camera.position.set( 0, 0, 0 );
      // this.camera.lookAt( 0, 0, 0 );
      //创建渲染器
      this.renderer=new THREE.WebGLRenderer()
      this.renderer.setClearColor('#242424')
      //设置渲染器尺寸
      this.renderer.setSize(window.innerWidth,window.innerHeight)
      //将渲染器dom元素添加到html文档
      document.body.appendChild(this.renderer.domElement)
    },
    //创建立方体
    createGeometry1(){
      /**
       * 创建立方体 长宽高1,1,1
       */
      this.geometry1=new THREE.BoxGeometry(1,1,1)
      console.log('geometry1',this.geometry1);
      //添加材质
      this.material1=new THREE.MeshBasicMaterial({color:0xff0000})
      //创建网格
      this.cube1=new THREE.Mesh(this.geometry1,this.material1)
      //将网格添加到场景
      this.scene.add(this.cube1)
      //相机位置偏移(近大远小)
      this.camera.position.z=5
    },
    //创建线性图
    createGeometry2(){
      /**
       * 创建线性图
       */
      this.geometry2=new THREE.Geometry()
      //顶点坐标
      this.geometry2.vertices.push(new THREE.Vector3(-2,0,0))
      this.geometry2.vertices.push(new THREE.Vector3(0,2,0))
      this.geometry2.vertices.push(new THREE.Vector3(2,0,0))
      this.geometry2.vertices.push(new THREE.Vector3(0,-2,0))
      this.geometry2.vertices.push(new THREE.Vector3(-2,0,0))
      console.log('geometry2',this.geometry2);
      //添加材质
      this.material2=new THREE.LineBasicMaterial({color:0x00ffff})
      //创建网格
      this.cube2=new THREE.Line(this.geometry2,this.material2)
      //将网格添加到场景
      this.scene.add(this.cube2)
    },
    //渲染场景
    showScene(){
      //执行动画并调用回调函数
      requestAnimationFrame(this.showScene)
      //变化参数
      this.cube1.rotation.x-=1/200
      this.cube1.rotation.y+=1/150

      this.cube2.rotation.x-=1/150
      this.cube2.rotation.y+=1/200
      //调用渲染（场景、相机）
      this.renderer.render(this.scene,this.camera)
    },
  }
}
</script>

<style>

</style>
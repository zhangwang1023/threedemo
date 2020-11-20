<template>
  <div></div>
</template>

<script>
import * as tf from '@tensorflow/tfjs'
export default {
  created(){
    const a = tf.tensor([1,2,3,4], [2, 2], 'int32');
    a.shape //[2,2] 2行2列
    a.dtype //int32

    //张量操作 不修改原张量 返回新张量
    //修改张量的shape形状 reshape()
    a.reshape([4,1]) //4行1列 
    //数组操作
    a.square() //[[1,4],[9,16]]
    a.add(tf.tensor([4,3,2,1],[2,2],'int32'))//格式需要一致
    //等同于tf.add(a,b)

    //取张量的值 a.array/data().then(res=>{})
    //返回多维数组的值
    a.array().then(() => {});
    // 返回张量所包含的所有值的一维数组
    a.data().then(() => {});

    //清除函数内创建的张量缓存
    tf.tidy(() => {
      //log()对数函数 ln(10)==1 neg()相反数 
      const result = a.square().log().neg();
      return result;
    })//[[0,-1],[-2,-3]]

    console.log(tf.memory())//查看内存使用情况
    // console.log(tf.getBackend())//查看当前使用backend后端
    // tf.setBackend('cpu') 更换backend后端 cpu最简单 性能最差

    const model=tf.sequential({
      layers:[
        tf.layers.dense({inputShape:[784],units:32,activation:'relu'}),
        tf.layers.dense({units:10,activation:'softmax'})
      ]
    })
    // model.summary()//模型总览

    //自定义层 实现平方求和
    class SquaredSumLayer extends tf.layers.Layer {
      constructor() {
        super({});
      }
      // In this case, the output is a scalar.
      computeOutputShape() { return []; }
      // call() is where we do the computation.
      call(input) { return input.square().sum();}
      // Every layer needs a unique name.
      getClassName() { return 'SquaredSum'; }
    }
    new SquaredSumLayer().apply(a) //30

    // Generate dummy data.
    const data = tf.randomNormal([100, 784]);
    const labels = tf.randomUniform([100, 10]);
    let index=0
    function onBatchEnd(batch, logs) {
      index++
      console.log('Accuracy', logs.acc,index);
    }

    //添加优化器、损失函数和指标
    model.compile({
      optimizer: 'sgd',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    // Train for 5 epochs with batch size of 32.
    model.fit(data, labels, {
      epochs: 5,
      batchSize: 32,
      callbacks: {onBatchEnd}
    }).then(info => {
      console.log('Final accuracy', info.history.acc);
    });
    const prediction = model.predict(tf.randomNormal([3, 784]));
    prediction.print();





    a.dispose()//清除缓存
  },
}
</script>

<style>

</style>
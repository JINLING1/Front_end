<template>
    <div class='person'>
      <h2>这是一辆{{car.brand}}，价格是{{ car.price }}万</h2>
      <button @click="changeBrand">改变品牌</button>
      <button @click="changePrice">改变价格</button>
      <button @click="changeCar">改变汽车</button>
      <br>
      <h2>当前求和为:{{ sum }}</h2>
      <button @click="changeSum">点击sum+1</button>
    </div>
</template>
<script lang = ts setup name ="person">
  //ref也可以创建对象类型的响应式数据
  import { ref , reactive} from 'vue';
  let car = reactive({
    brand: "BMW",
    price: 100
  })
  let sum=ref(0)
  function changePrice(){
    car.price += 10
  }
  function changeBrand(){
    car.brand = '宝马'
  }
  //reactive创建的对象如果直接重新分配对象，不会触发视图更新
  //这是因为 Vue 的响应式系统是基于代理（Proxy）实现的，它只能跟踪对象内部属性的变化，而不能跟踪对象引用的变化。
  function changeCar(){
    // car={brand:'奥拓',price:2}//不会触发视图更新
    Object.assign(car,{brand:'奥拓',price:2})//会触发视图更新
  }
  function changeSum(){
    sum.value += 1
  }
</script>

<!-- 样式仅应用于当前组件 -->
<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
li{
  font-size: 20px;
}
</style>
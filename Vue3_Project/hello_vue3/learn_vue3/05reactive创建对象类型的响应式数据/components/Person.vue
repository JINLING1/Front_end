<template>
    <div class='person'>
      <h2>这是一辆{{car.brand}}，价格是{{ car.price }}万</h2>
      <button @click="changePrice">改变价格</button>
      <br>
      <h2>游戏列表</h2>
      <ul>
        <!-- v-bind:用于动态地绑定一个或多个属性到一个表达式。它的缩写形式是 : -->
        <li v-for="game in games" v-bind:key="game.id">{{game.name}}</li>
        <button @click="changeFirstGame">改变第一个游戏</button>
      </ul>
      <h2>测试嵌套对象</h2>
      <h3>{{obj.a.b.c}}</h3>
      <button @click="changeObj">测试</button>
    </div>
</template>
<script lang = ts setup name ="person">
  //reactive函数用于创建对象类型/数组类型的响应式数据
  import { reactive } from 'vue';
  let car = reactive({
    brand: "BMW",
    price: 100
  })//reaactiva函数返回的是一个对象
  let games=reactive([
    {id:1,name:'LOL'},
    {id:2,name:'DNF'},
    {id:3,name:'CF'}
  ])//reactiva函数返回的是一个数组
  //测试嵌套对象
  let obj=reactive({
    a:{
      b:{
        c:666
      }
    }
  })
  function changePrice(){
    car.price += 10
  }
  function changeFirstGame(){
    games[0].name = 'PUBG'
  }
  function changeObj(){
    obj.a.b.c = 888
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
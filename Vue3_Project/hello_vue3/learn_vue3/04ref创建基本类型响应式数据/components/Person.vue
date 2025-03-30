<template>
    <div class='person'>
      <!-- 在模板中可以直接访问，不需要通过.value -->
      <h2>姓名：{{name}}</h2>
      <h2>年龄:{{age}}</h2>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button v-on:click="showTel" >查看联系方式</button>
    </div>
</template>
<script lang = ts setup name ="person">
  //ref函数用于创建基本类型的响应式数据
  import { ref } from 'vue'
  let name = ref("张三")//name此时为一个对象
  let age = ref(18)
  let tel = 123456789
  function changeName(){
    name.value = "李四"//ref声明的数据需要通过.value来访问
  }
  function changeAge(){
    age.value+=1
  }
  function showTel(){
    alert(tel)
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
</style>
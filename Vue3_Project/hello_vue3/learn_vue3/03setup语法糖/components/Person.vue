<template>
    <div class='person'>
      <h2>姓名：{{name}}</h2>
      <h2>年龄:{{age}}</h2>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button v-on:click="showTel" >查看联系方式</button>
    </div>
</template>
<!-- 
<script lang = ts>
export default {
  name: 'Person',
}
</script> -->

<!-- setup语法糖，会自动return -->
<script lang = ts setup name ="person">//安装插件可以在此处直接更改组件名
  let name = "张三"
  let age = 18
  let tel = 123456789
  function changeName(){
    name = "李四"
  }
  function changeAge(){
    age+=1
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
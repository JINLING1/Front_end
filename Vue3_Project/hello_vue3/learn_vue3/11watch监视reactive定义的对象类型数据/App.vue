<template>
  <!-- HTML -->
    <Person></Person>
</template>
<script lang=ts>//设置语言用ts
import Person from './components/Person.vue'
//JS/TS
export default {
  name: 'App',
  components:{
    Person
  }

}
</script>
<style>
/* CSS */
.app {
  background-color: #ddd;
  /* 添加阴影（水平偏移 垂直偏移 模糊半径） */
  box-shadow: 0 0 10px;
  /* 定义元素的边框圆角的半径 */
  border-radius: 10px;
  padding: 20px;
}
</style>
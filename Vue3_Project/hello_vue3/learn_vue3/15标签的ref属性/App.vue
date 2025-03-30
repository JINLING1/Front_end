<template>
  <!-- HTML标签 -->
   <h2 ref = "title2">nihao</h2>
   <button @click = "showTag">测试</button>
   <!-- 组件标签 -->
   <Person ref = 'person'></Person>
</template>
<script lang=ts setup name = "App">//设置语言用ts
  import Person from './components/Person.vue'
  import {ref} from 'vue' 
  let title2 = ref()
  let person = ref()
  function showTag(){
    console.log(person.value);//组件的实例对象
  }
</script>
<style>
</style>
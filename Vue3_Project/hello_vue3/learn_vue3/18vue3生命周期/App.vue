<template>
   <Person v-if="isShow"></Person>
</template>
<script lang=ts setup name = "App">//设置语言用ts
  import Person from './components/Person.vue';
  import {onMounted, ref} from 'vue'
  let isShow = ref(true)
  onMounted(()=>{
    console.log("母--挂载完毕");
    
  })
</script>
<style>
</style>
<template>
    <div class='person'>
      <h1>情况一 监视ref定义的基本类型数据</h1>
      <h2>当前求和为{{ sum }}</h2>
      <button @click = "changeSum">点我sum+1</button>
    </div>
</template>
<script lang = ts setup name ="Person">
  import {ref,watch} from 'vue'
  let sum = ref(0)
  function changeSum(){
    sum.value+=1
  }
  //监视watch(监视对象，回调函数)
  //此处是写ref定义的数据，而不是sum.value
  //watch返回停止监视的函数
  const stopWatch = watch(sum,(newValue,oldValue)=>{
    console.log("sum变化了"+newValue+oldValue)
    if (newValue>=10){
      stopWatch()
    }

  })
  


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
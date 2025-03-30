<template>
    <div class='person'>
      <h2>水温:{{ temp }}℃</h2>
      <h2>水位:{{ height }}cm</h2>
      <button @click = "changeTemp">水温增加</button>
      <button @click = "changeHeight">水位增加</button>
    </div>
</template>
<script lang = ts setup name ="Person">
//wactchEffect会自动分析出监视谁
  import {ref,watch,watchEffect} from 'vue'
  let temp = ref(10)
  let height = ref(10)
  function changeTemp(){
    temp.value += 10
  }
  function changeHeight(){
    height.value+=10
  }
  // //监视
  // watch([temp,height],(value)=>{
  //   let [newTemp,newHeight] = value;
  //   if(newTemp>=60||newHeight>=80){
  //     console.log("给服务器发请求");
  //   }
  // })
  
  //watchEffect监视
  watchEffect(()=>{
    if(temp.value>=60||height.value>=80){
      console.log("给服务器发请求");
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
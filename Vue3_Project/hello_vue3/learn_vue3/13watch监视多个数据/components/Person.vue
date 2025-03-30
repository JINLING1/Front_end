<template>
    <div class='person'>
      <h2>情况五 监视多个数据</h2>
      <h2>姓名:{{ person.name }}</h2>
      <h2>年龄:{{ person.age }}</h2>
      <h2>车:{{ person.car.c1 }}{{ person.car.c2 }}</h2>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeC1">修改车1</button>
      <button @click="changeC2">修改车2</button>
      <button @click="changeCar">修改车1和2</button>
      
    </div>
</template>
<script lang = ts setup name ="Person">
  import {ref,reactive,watch} from 'vue'
  let person =reactive({
    name:"张三",
    age:18,
    car:{
      c1:"宝马",
      c2:"奔驰"
    }
  })
  //方法
  function changeName(){
    person.name +="~"
  }
  function changeAge(){
    person.age +=1
  }
  function changeC1(){
    person.car.c1 = "大众"
  }
  function changeC2(){
    person.car.c2 = "奥迪"
  }
  function changeCar(){
    person.car = {
      c1:"雅迪",
      c2:"爱玛"
    }
  }
  //监视多个数据
  watch([()=>person.name,()=>person.car.c1],(newValue,oldValue)=>{
     console.log("name/c1变化",newValue,oldValue);
   },{deep:true})



  
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
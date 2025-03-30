<template>
    <div class='person'>
      <h2>情况四 监视ref/reactive定义的对象类型数据中的某个属性</h2>
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
  //监视属性，若属性不是对象类型，需写成函数式
  watch(()=>{return person.name},(newValue,oldValue)=>{
    console.log("变化",newValue,oldValue);
    
  })
  // //以下car为对象类型，可以直接监视到，但若car整体变化（地址变了）无法监视
  // watch(person.car,(newValue,oldValue)=>{
  //   console.log("car变化",newValue,oldValue);
    

  // })

  // //只关注整体变化
  // watch(()=>{return person.car},(newValue,oldValue)=>{
  //   console.log("car变化",newValue,oldValue);
    
  // })

  //都关注
  watch(()=>{return person.car},(newValue,oldValue)=>{
     console.log("car变化",newValue,oldValue);
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
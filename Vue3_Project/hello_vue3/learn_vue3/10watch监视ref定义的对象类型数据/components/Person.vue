<template>
    <div class='person'>
      <h1>情况二 监视ref定义的对象类型数据</h1>
      <h2>姓名：{{person.name}}</h2>
      <h2>年龄：{{person.age}}</h2>
      <button @click = "changeName">改变姓名</button>
      <button @click = "changeAge">改变年龄</button>
      <button @click = "changePerson">改变人物</button>
    </div>
</template>
<script lang = ts setup name ="Person">
  import {ref,watch} from 'vue'
  let person = ref({
    name:"张三",
    age:18
  })
  function changeName(){
    person.value.name += "~"
  }
  function changeAge(){
    person.value.age +=1 
  }
  function changePerson(){
    person.value = {
      name:"李四",
      age:20
    }
  }
  //watch监视的是对象的地址值。如果想要被监视对象内部属性的变化需要手动开启深度监视
  //只改变属性oldValue newValue是不变的
  watch(person,(newValue,oldValue)=>{
    console.log("person变化了",newValue,oldValue)
  },{deep:true,immediate:true})
  //immediate控制回调函数的执行时机，设置为true会在监视值变化前先执行一次

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
<template>
    <div class='person'>
      <h1>情况三 监视reactive定义的对象类型数据</h1>
      <h2>姓名：{{person.name}}</h2>
      <h2>年龄：{{person.age}}</h2>
      <button @click = "changeName">改变姓名</button>
      <button @click = "changeAge">改变年龄</button>
      <button @click = "changePerson">改变人物</button>
      <h2>测试{{ obj.a.b.c }}</h2>
      <button @click="changeObj">改变obj</button>
    </div>
</template>
<script lang = ts setup name ="Person">
  import {reactive,watch} from 'vue'
  let person = reactive({
    name:"张三",
    age:18
  })
  let obj=reactive({
    a:{
      b:{
        c:666
      }
    }
  })
  
  function changeName(){
    person.name += "~"
  }
  function changeAge(){
    person.age +=1 
  }
  function changePerson(){
    Object.assign(person,{name:"李四",age:20})//地址不变，只是批量修改了属性值
  }
  function changeObj(){
    obj.a.b.c = 888
  }
  // watch监视reactive定义的对象类型数据，默认开启【深度监视】(隐式创建了深度监视)
  watch(person,(newValue,oldValue)=>{
    console.log("person变化了",newValue,oldValue);
    
  })
  watch(obj,(newValue,oldValue)=>{
    console.log("obj变化了",newValue,oldValue)
  },{deep:false})//深度监视在当前版本可以手动关闭
  
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
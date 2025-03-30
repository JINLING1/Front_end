<template>
    <div class='person'>
      <h2>我是{{ person.name }},今年{{ person.age }}岁</h2>
      <button @click="changeName">改变名字</button>
      <button @click="changeAge">长大一岁</button>
    </div>
</template>
<script lang = ts setup name ="Person">
  import {reactive,toRefs} from 'vue'
  let person = reactive({
    name: "张三",
    age: 18 
  }) 
  //直接解构赋值会导致这些新变量 name 和 age 失去响应性
  // 这是因为解构赋值只是简单地复制了属性值，而没有保留响应式对象的引用。
  //let {name,age} = person
  //使用toRefs函数可以将响应式对象转换为普通对象，但是“对象的属性仍然保持响应性”
  let x = toRefs(person)
  console.log(x)
  let {name,age} = x//这时name=person.name,age=person.age即toRefs类似引用传递
  console.log(name.value)//响应式数据
  //let name = toRef(person,'name') 
  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
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
<template>
  <!-- HTML标签 -->
   <!--加冒号的当作变量处理 -->
   <h2 a = '1+1' :b = "1+1" c = "x" :d = "x" ref = "qqq">测试</h2>
   <!-- 组件标签 -->
    <!-- 加冒号（v-bind单向绑定）表明是变量，不加是字符串 -->
   <Person a="哈哈" :list="personList"></Person>
</template>
<script lang=ts setup name = "App">//设置语言用ts
  import Person from './components/Person.vue';
  import { reactive } from 'vue';
  import {type Persons} from "@/types";
  let x = 9;
  let personList = reactive<Persons>([//直接用reactive泛型来限制类型
    {id:"01",name:"张三",age:18},
    {id:"02",name:"李四",age:19},
    {id:"03",name:"王五",age:20}
  ]);
</script>
<style>
</style>
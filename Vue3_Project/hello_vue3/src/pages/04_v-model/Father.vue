<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
      <!-- v-model原理：value实现数据到页面，@input事件实现页面到数据 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上  需要对组件vue进行操作 -->
    <!-- <AtguiguInput v-model="username"/>  -->
    
    <!-- 底层实现 -->
    <!-- 事件名 @update:modelValue-->
     <!-- 对于自定义事件 $event就是触发事件时所传递的数据 -->
    <!-- <AtguiguInput 
      :modelValue="username"  
      @update:modelValue="username = $event"
    /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password"/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from "vue";
  import AtguiguInput from './AtguiguInput.vue'
  // 数据
  let username = ref('zhansgan')
  let password = ref('123456')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>

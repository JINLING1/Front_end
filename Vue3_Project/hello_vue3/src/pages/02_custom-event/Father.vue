<template>
  <div class="father">
    <h3>父组件</h3>
		<!-- ref定义的数据在模板使用可以不.value -->
		 <!-- <h4>{{ str }}</h4>
		<button @click="str = $event">$event</button> -->
		<h4 v-show="toy">接收子组件传递的玩具:{{ toy }}</h4>
    <!-- 自定义事件@...被触发会调用被赋值的函数 -->
		<Child @send-toy="saveToy"/>
		
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from './Child.vue'
	import { ref } from "vue";
	// 数据
	//let str = ref('你好')
	let toy = ref('')
	function saveToy(value:string){
		toy.value = value
	}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
	.father button{
		margin-right: 5px;
	}
</style>
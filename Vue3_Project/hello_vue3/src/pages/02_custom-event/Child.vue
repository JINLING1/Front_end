<template>
  <div class="child">
    <h3>子组件</h3>
	<h4>玩具：{{toy}}</h4>
	<!-- emit('自定义事件',传递的数据) -->
	<button @click="emit('send-toy',toy)">把玩具传递给父组件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref}  from 'vue'
	import {defineEmits} from 'vue'
	let toy = ref('奥特曼')
	//声明事件 defineEmit 的返回值是一个用于触发自定义事件的函数
	const emit = defineEmits(['send-toy'])
</script>

<style scoped>
	.child{
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
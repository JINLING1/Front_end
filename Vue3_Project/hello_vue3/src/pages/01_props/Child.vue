<template>
  <div class="child">
    <h3>子组件</h3>
	<h4>玩具：{{ toy }}</h4>
	<h4>父组件给的车{{ car }}</h4>
	<button @click="sendToy(toy)">把玩具给父组件</button>
  </div>
</template>

<script setup lang="ts" name="Child">
	import {ref} from 'vue'
	import { defineProps } from 'vue';
	let toy = ref('奥特曼')
	//子组件通过 defineProps 定义的 props 名称必须与父组件传递的 props 名称一致，
	// 才能正确接收到对应的值。
	defineProps(['car','sendToy'])
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>

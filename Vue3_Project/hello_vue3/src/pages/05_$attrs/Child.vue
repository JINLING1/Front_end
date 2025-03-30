<template>
	<div class="child">
		<h3>子组件</h3>
		<!-- <h4>a:{{ a }}</h4> -->
		<!-- 加$的是Vue内置的属性和方法 -->
		<h4>其它：{{ $attrs }}</h4>
		<GrandChild v-bind="$attrs" />
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
	//父组件传递了但子组件没有接收的props在attrs里
	//defineProps(['a'])
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>
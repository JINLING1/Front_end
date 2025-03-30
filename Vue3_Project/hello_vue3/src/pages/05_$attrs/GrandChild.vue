<template>
	<div class="grand-child">
		<h3>孙组件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>d：{{ d }}</h4>
		<h4>x：{{ x }}</h4>
		<h4>y：{{ y }}</h4>
		<!-- 利用Father组件传递过来的update方法来从孙组件这儿更新父组件的值 -->
		<button @click="updateA(6)">点我a+6并将父组件那的a更新</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	let results = defineProps(['a','b','c','d','x','y','updateA'])
</script>

<style scoped>
	.grand-child{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>
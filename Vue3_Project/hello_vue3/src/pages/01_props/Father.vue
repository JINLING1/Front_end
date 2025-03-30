<template>
  <div class="father">
    <h3>父组件</h3>
	<h4>a汽车:{{ car }}</h4>
	<h4 v-show="toy">子组件给的玩具:{{ toy }}</h4>
	<Child :car ="car" :sendToy = 'getToy'/>
  </div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue'
	import {ref} from 'vue'
	let car = ref('奔驰')
	let toy = ref('')
	//接收子组件数据
	function getToy(value:string){
		toy.value = value//把子组件传递过来的数据赋值给父组件的toy
		
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
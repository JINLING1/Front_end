<template>
  <div class="game">
    <h2>游戏列表</h2>
    <!-- 插槽  父组件给子组件传递元素 子组件给父组件传递数据 -->
    <slot name="game" :games="games"></slot><!--第一个games是父接收传递的数据的名字，第二个是子组件传递的数据名字--> 
  </div>
</template>

<script setup lang="ts" name="Game">
  import {reactive} from 'vue'
  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
</script>

<style scoped>
  .game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>
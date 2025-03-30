<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Game>
        <!-- template用于定义插槽内容 v-slot用于接收子组件传递的所有props（将它们打包为一个对象） -->
        <!-- #是v-slot:的缩写 -->
        <template #game = "params">
          <ul>
            <li v-for="game in params.games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
      </Game> 
      <Game>
        <!-- 直接解构params -->
        <template v-slot:game="{ games }">
            <ol>
              <li v-for="game in games" :key="game.id">{{ game.name }}</li>
            </ol>
        </template>
      </Game>
      <Game>
        <template v-slot:game="{games}">
            <h4 v-for="game in games" :key="game.id">{{ game.name }}</h4>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue'
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
</style>
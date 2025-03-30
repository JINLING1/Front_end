<template>
    <div class = 'home'>
        <img src="https://pic.rmb.bdstatic.com/bjh/events/5df89e341527614c10e04dec1df6d2e48197.jpeg@h_1280" alt="加载失败">
    </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from 'vue';
//获取路由实例，进行编程式导航
// import { useRouter } from 'vue-router';
// const router = useRouter()
// onMounted(()=>{
//     //在指定时间间隔后执行函数
//     setTimeout(()=>{
//         //在此处编写代码实现路由跳转
//         router.push('/news')
//     },3000)
// })
</script>

<style scoped>
    .home{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    img{
        height: 400px;
    }
</style>
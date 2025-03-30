<template>
    <div class = 'news'>
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- params参数  不能传数组 需要在规则处占位 -->
                <!-- 第一种方法 模板字符串 -->
                  <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink> -->
                <!-- 第二种方法 对象-->
                 <RouterLink :to="{
                    name:'detail',//不能用path 会被ignored
                    params:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                 }">{{ news.title }}</RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
         <div class = "news-content">
            <RouterView></RouterView>
         </div>
    </div>
</template>

<script setup lang="ts" name="About">
import {reactive} from 'vue'
import { RouterView } from 'vue-router';
let newsList = reactive([
    {id:"01",title:"特朗普政府裁员",content:"特朗普政府“大规模裁员”近万人 涉美多个部门"},
    {id:"02",title:"大熊猫",content:"野生大熊猫走内八"},
    {id:"03",title:"秦代吴市陶文",content:"苏州北园挖出秦代吴市陶文"},
    {id:"04",title:"穿越沙漠",content:"重庆小伙和搭档穿越沙漠"}
])
</script>

<style scoped>
    .news{
        padding:0 20px;
        display:flex;
        justify-content: space-between;
        height: 100%;
    }
    .news ul{
        margin-top: 30px;
        /* list-style:none; */
        padding-left:10px;
    }
    /* 调整序号点 */
    .news li::marker{
        color:#64967E;
    }
    .news li>a{
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color:#64967E;
        text-shadow:0 0 1px rgb(0, 0, 0);
    }
    .news-content{
        border: 5px,solid,rgb(108, 124, 165);
        margin: 50px;
        width: 60%;
        height:300px;
        border-radius: 10px;
        text-align:left;
        text-shadow: 0,0,10px,rgb(162, 162, 239);
    }
</style>
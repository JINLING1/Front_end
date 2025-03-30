<template>
    <ul class="news-list">
        <li>编号:{{ query.id }}</li>
        <li>标题:{{ query.title }}</li>
        <li>内容:{{ query.content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
import { useRoute } from 'vue-router';
import { toRefs } from 'vue';
let route = useRoute()
// 从route(响应式对象)中直接解构query属性(query会丢失响应式)
let {query} =toRefs(route)//let query = route.query
</script>


<style scoped>
.news-list{
    list-style: none;
    padding-left: 20px;
}
.news-list>li{
    line-height: 30px;
}
</style>
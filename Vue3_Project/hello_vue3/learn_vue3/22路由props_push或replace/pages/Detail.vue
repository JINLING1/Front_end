<template>
    <ul class="news-list">
        <!-- <li>编号:{{ params.id }}</li>
        <li>标题:{{ params.title }}</li>
        <li>内容:{{ params.content }}</li> -->
        <li>编号:{{id}}</li>
        <li>标题:{{title}}</li>
        <li>内容:{{ content }}</li>
    </ul>
</template>

<script setup lang="ts" name="Detail">
// import {useRoute} from 'vue-router'
// import {toRefs} from 'vue'
// const route = useRoute()
// let {params} = toRefs(route)
defineProps(['id','title','content'])
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
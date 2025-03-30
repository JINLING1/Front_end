<template>
    <div class='person'>
        <h1>中国</h1>
        <!-- 用id时若App.vue中有相同id的元素会造成错误 -->
        <!-- <h2 id = "title2">北京</h2> -->
         <h2 ref = "title2">北京</h2>
        <h3>尚硅谷</h3>
        <button @click = "showTag">按我显示title2</button>
    </div>
</template>
<script lang = ts setup name ="Person">
    // function showTag(){
    //     console.log(document.getElementById("title2"))
    // }
    //使用 Vue 的 ref 特性来引用组件内部的元素，
    // 而不是使用全局的 document.getElementById 方法。
    import {ref,defineExpose} from 'vue'
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)
    let title2 = ref()
    function showTag(){
        console.log(title2.value)
    }
    // defineExpose 是 Vue 3 中的一个组合式 API 函数，
    // 用于在 <script setup> 中显式地暴露一些属性或方法给父组件。
    // 通过 defineExpose，你可以控制哪些属性或方法可以被父组件访问。
    defineExpose({a,b,c})

</script>

<!-- 样式仅应用于当前组件 -->
<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

</style>
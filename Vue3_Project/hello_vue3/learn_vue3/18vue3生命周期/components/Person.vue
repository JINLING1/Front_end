<template>
    <div class = 'person'>
        <h2>当前求和为:{{ sum }}</h2>
        <button @click="changeSum">点击sum+1</button>
    </div>
</template>
<script lang=ts setup name="Person">
    import {ref,onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
    let sum = ref(0)
    function changeSum(){
        sum.value += 1 
    }
    //创建 beforeCreate created ->融合到setup中了
    console.log("创建")
    //挂载前(不是调用onBeforeMount  而是调用它的参数所指定的函数)
    onBeforeMount(()=>{
        console.log("挂载前");
        
    })
    //挂载完毕
    onMounted(()=>{
        console.log("子--挂载完毕");
    })
    //更新前
    onBeforeUpdate(()=>{
        console.log("更新前");
    })
    //更新完毕
    onUpdated(()=>{
        console.log("更新完毕");
    })
    //卸载前
    onBeforeUnmount(()=>{
        console.log("卸载前");
    })
    //卸载完毕
    onUnmounted(()=>{
        console.log("卸载完毕");
    })

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
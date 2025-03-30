<template>
    <div class = 'person'>
        <h2>当前求和为:{{ sum }},放大十倍后：{{bigSum}}</h2>
        <button @click="add">点击sum+1</button>
        <!-- 分割线 -->
        <hr>
        <img v-for = "(dog,index) in dogList" :src="dog" :key = "index" alt ="加载失败">
        <br>
        <button @click = "getDog">再来一只狗</button>
    </div>
</template>
<script lang=ts setup name="Person">
    //hooks封装
    import useSum from '@/hooks/useSum'; 
    import useDog from '@/hooks/useDog';
    const {sum,add,bigSum} = useSum()//解构useSum返回的对象
    const {dogList,getDog} = useDog()
</script>

<!-- 样式仅应用于当前组件 -->
<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button{
        margin: 0 5px;
    }
    img{
        height: 100px;
        margin-right: 10px;
    }
</style>
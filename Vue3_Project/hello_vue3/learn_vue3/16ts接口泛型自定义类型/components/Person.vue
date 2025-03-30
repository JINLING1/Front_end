<template>
    <div class='person'>
    </div>
</template>
<script lang = ts setup name ="Person">
    import {type PersonInter,type Persons} from '@/types'  //@指返回到src目录
    let person:PersonInter = {
        id:"123456",
        name:"张三",
        age:18
    }//person符合PersonInter接口规范
    let personList :Array<PersonInter>=[
        {id:"1",name:"张三",age:18},
        {id:"2",name:"李四",age:20}
    ]

    let personslist :Persons = [
    {id:"1",name:"张三",age:18},
    {id:"2",name:"李四",age:20}        
    ]
    
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
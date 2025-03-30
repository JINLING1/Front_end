<template>
    <div class='person'>
        <ul>
            <!-- v-for = "数据项 in 数据源(次数)" -->
            <li v-for = "p in list" :key = "p.id">
                {{ p.name }}--{{ p.age }}
            </li>
        </ul>
    </div>
</template>
<script lang=ts setup name="Person">
    import { withDefaults} from "vue";
    //define...可以直接使用，不用引入
    import {type Persons} from '@/types'
    // 只接收list
    //defineProps(['list']);
    //接收并且限制类型
    //defineProps<{list:Persons}>()
    //接收+限制类型+限制必要性+指定默认值
    withDefaults(defineProps<{list?:Persons}>(),{
        //list:[{id:"001",name:"王老五",age:20}]
        list:()=>[{id:"001",name:"王老五",age:20}]
    })//?限制必要性，如果App.vue中Person标签没有传list也不会报错
    /* //接收a，同时将props保存起来
    let x = defineProps(['a']); 
    console.log(x);*/


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
<template>
    <div class='person'>
      <!-- v-model实现firstName与该输入框的双向绑定 -->
      姓:<input type = 'text' v-model.value="firstName">
      <!-- v-bind只能单向绑定，即不能将input的内容传递给lastName
      名<input type = 'text'v-bind:value="lastName"> > -->
      名:<input type = 'text'v-model="lastName">
      全名:<span>{{ fullName }}</span>
      <br>
      <button @click ='changeFullName'>改变全名为li-si</button>
    </div>
</template>
<script lang = ts setup name ="Person">
  import {ref,computed} from 'vue'
  let firstName = ref('张')
  let lastName = ref('三')
  //computed函数创建计算属性，会在数据变化是自动更新
  // //这样定义的fullName是只读的
  // let fullName = computed(()=>{
  //   return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+lastName.value
  // })


  //这样定义的fullName可读可写
  //get 方法：用于定义计算属性的读取逻辑。
  // 当你访问计算属性的值时，get 方法会被调用。它应该返回计算属性的值。
  //set 方法：用于定义计算属性的写入逻辑。
  // 当你给计算属性赋值时，set 方法会被调用。它接收一个参数，这个参数是你赋给计算属性的新值
  let fullName = computed({
    get(){
      return firstName.value.slice(0,1).toUpperCase()+firstName.value.slice(1)+lastName.value
    },
    set(val){
      const [str1,str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
    }
  })
  function changeFullName(){
    fullName.value='li-si'
  }

</script>

<!-- 样式仅应用于当前组件 -->
<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
input{
  /* 改为块级元素 */
  display:block;
}
</style>
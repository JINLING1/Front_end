<template>
    <div class='person'>
        <!-- {{}}插值语法 -->
        <h2>姓名：{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <!-- v-on:可简写为@ -->
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
         <button v-on:click="showTel" >查看联系方式</button>
    </div>
</template>

<script lang = ts>
export default {
  name: 'Person',
  // 以下为Vue2 选项式api
  // //data函数用于变量的声明
  // data() {
  //     return{
  //       name:"zhangsan",
  //       age:18,
  //       tel:123456789
  //     }
  // },
  // //methods用于方法的声明
  // methods:{
  //   changeName(){
  //     this.name = "lisi"
  //   },
  //   changeAge(){
  //     this.age+=1
  //   },
  //   showTel(){
  //     alert(this.tel)
  //   }

  // }

  /*
  //data methods和setup可以共存，但是setup优先级更高
  data() {
      return{
        a:100,
        c:this.name//data中可以访问setup中的数据
      }
  },
  methods:{
    b(){
      console.log(this.a)
    }
  },
  */
  // 以下为Vue3 Composition API
  //setup执行时机：在beforeCreate之前执行
  setup() {
    //数据
    let name = "张三"//这种方法声明的不是响应式数据
    let age = 18
    let tel = 123456789
    //函数
    //setup函数中的函数，可以直接调用，不需要this。this的值为undefined
    function changeName(){
      name = "李四"//name改了，但是页面不会更新，因为name不是响应式数据
    }
    function changeAge(){
      age+=1
    }
    function showTel(){
      alert(tel)
    }
    // function d(){
    //   console.log(this.a)//setup不能用this，不能访问data中的数据
    // }

    //将数据方法返回才能在模板中使用
      return {name:name,age:age,changeName,changeAge,showTel}//返回一个对象，属性名是name，属性值是变量name的值
      //可以简写为return {name,age}

      // //也可以返回一个函数
      // return function(){
      //   return 'haha'
      // }//return ()=>'haha'
  },
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
</style>
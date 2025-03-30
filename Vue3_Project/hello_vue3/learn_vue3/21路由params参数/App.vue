<template>
  <div class = "app">
    <Header></Header>
    <!-- 导航区 -->
     <div class = "navigate">
      <!-- RouterLink是一个组件，active-class被激活时的类名 -->
       <!-- to的第一种写法，字符串写法 -->
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <!-- to的第二种写法 对象写法(1.名字跳转  2.路径跳转) -->
      <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
      <RouterLink :to="{path:'/about'}"active-class="active">关于</RouterLink>
     </div>
     <!-- 展示区 -->
      <div class = "main-content">
        <!-- 此处用于展示各类组件 -->
        <RouterView></RouterView>
      </div>
  </div>
</template>
<script lang=ts setup name = "App">//设置语言用ts
import { RouterView,RouterLink } from 'vue-router';
import Header from './components/Header.vue';
</script>
<style>
  
  .navigate{
    display: flex;
    /* 在弹性容器的主轴(默认水平)上，让子元素均匀分布 */
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a{
    display:block;
    text-align: center;
    width:90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    /* 去除 <a> 标签默认的下划线 */
    text-decoration: none;
    color:white;
    font-size: 18px;
    letter-spacing:5px;
  }
  .navigate a.active{
    background-color: #64967E;
    color:#ffc568;
    /* 字体粗细 */
    font-weight: 900;
    /* 为文本添加阴影 */
    text-shadow:0 0 5px black;
    /* 字体类型 */
    font-family: 微软雅黑;
  }
  .main-content{
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 95%;
    height: 400px;
    border: 5px solid rgb(73, 79, 96);
  }


</style>
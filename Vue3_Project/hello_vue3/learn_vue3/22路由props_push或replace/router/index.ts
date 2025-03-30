//创建一个路由器并暴露

//第一步 引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
//第二步 引入一个个可能要呈现的组件
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import News from '@/pages/News.vue'
import Detail from '@/pages/Detail.vue'
//创建路由器（一个）
const router = createRouter({
    history:createWebHistory(),//路由器工作模式
    routes:[//路由规则
        {
            name:"zhuye",
            path:"/home",
            component:Home
        },
        {
            name:"xinwen",
            path:"/news",
            component:News,
            children:[{
                // 子集路径不需要写/
                name:"detail",
                // /:参数占位
                path:"detail/:id/:title/:content?",//加？表示可选择性传
                component:Detail,
                //第一种写法 把路由收到的每一组params参数作为props传递给路由组件(Details)
                // props:true

                //第二种写法 函数写法 可以自己决定把什么作为props传递给路由组件
                props(route){
                    return route.query
                }

                //第三种写法 对象写法(不常用) 可以自己决定把什么作为props传递给路由组件
                /*props:{
                    a:100,
                    b:200,
                    c:300
                }*/
            }]
        },
        {
            name:"guanyu",
            path:"/about",
            component:About
        }
    ]//路由（多个）
})

//暴露
export default router
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
                name:"detail",
                path:"detail/:id/:title/:content?",
                component:Detail,
                props:true
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
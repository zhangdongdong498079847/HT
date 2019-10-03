import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from  "./components/exam/Exam03.vue"
import Exam04 from  "./components/exam/Exam04.vue"
import move1 from "./components/move/move1.vue"
import Exam05 from "./components/exam/Exam05.vue"
import Exam06 from "./components/exam/Exam06.vue"
import Exam07 from "./components/exam/Exam07.vue"
import Home3 from "./components/message/Home.vue"
import move2 from "./components/move/move2.vue"
import move3 from "./components/move/move3.vue"
import Login from "./components/xz/Login.vue"
import Product from "./components/xz/Product.vue"
import Cart from "./components/xz/Cart.vue"
import  A   from "./components/vuex/A.vue"
import  B   from "./components/vuex/B.vue"
import move4 from "./components/move/move4.vue"
import sx from './components/move/ScrollX.vue'
import move5 from "./components/move/move5.vue"
import move6 from "./components/move/move6.vue"
import move7 from "./components/move/move7.vue"
import move8 from "./components/move/move8.vue"
import move9 from "./components/move/move9.vue"
import move10 from "./components/move/move10.vue"
//引入自定义组件
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/move10',component:move10},
    {path:'/move9',component:move9},
    {path:'/move8',component:move8},
    {path:'/move7',component:move7},
    {path:'/move6',component:move6},
    {path:'/move5',component:move5},
    {path:'/move4',component:move4},
    {path:'/B',component:B},
    {path:'/A',component:A},
    {path:'/Cart',component:Cart},
    {path:'/Product',component:Product},
    {path:'/Login',component:Login},
    {path:'/move3',component:move3},
    {path:'/move2',component:move2},
    {path:'/Home3',component:Home3},
    //配置自定义组件路径
    //http:127.0.0.1:5050/#/Exam02
    {path:'/Exam07',component:Exam07},
    {path:'/Exam06',component:Exam06},
    {path:'/Exam05',component:Exam05},
    {path:'/move',component:move1},
    {path:'/Exam02',component:Exam02},
    {path:'/Exam01',component:Exam01},
    {path:'/Exam03',component:Exam03},
    {path:'/Exam04',component:Exam04},
    {path:'/',component:HelloContainer},
    {path:'/Home',component:Home},
    {path:'/sx',component:sx},
  ]
})

<template>

  <div class="page-tabbar">
   <div class="page-wrap">
   <h1>home.vue</h1>
   <titlebar leftTitle="微信(111)" :rightFirstImg="require('../../assets/ic_search.png')" :rightSecondImg="require('../../assets/ic_add.png')" :search="mysearch" :add3="myadd3"></titlebar>
   </div>
  </div>

</template>
<script>
import TitleBar from "./common/TitleBar.vue"
export default {
    components:{
        "titlebar":TitleBar
    },
    methods:{
        //父组件定义函数,将其传递子组件
        mysearch(){
            console.log("搜索")
        },
        myadd3(){
            console.log("添加")
        }
    }
}
</script>


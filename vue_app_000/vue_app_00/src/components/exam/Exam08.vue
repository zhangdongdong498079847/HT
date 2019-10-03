<template>
 <div>
  <h1>父组件</h1>
  <!-- 调用子组件-->
  <sub09 msg="测试数据666" :add3="myadd3" :img3="require('../../assets/01.png')"></sub09>
 </div>
</template>
<script>
import Exam09 from "./Exam09.vue"
export default {
    //注册子组件
    components:{
        "Exam09":Exam09
        //注册子组件
    },
    methods:{
        myadd3(){
            console.log("父组件创建函数");
        }
    }
}
</script>
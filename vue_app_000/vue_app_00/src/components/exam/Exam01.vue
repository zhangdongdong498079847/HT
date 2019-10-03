<template><!--自定义组件 -->
 <div>
 
 <h1>src/components/Exam01.vue</h1>
 <h3>自定义组件Exam01.vue</h3>
 </div>
</template>
<script>
//调用短消息组件
export default {
    created(){
       //vue组件生命周期时间。表示当前创建成功
       //立即调用函数
       this.$toast({message:"添加成功"});
        //1创建自定义组件exam02.vue
        //指定路径exam02
        // 在莫班上添加按钮。点击按钮显示
        //消息提示 “删除成功”
    },

}
</script>


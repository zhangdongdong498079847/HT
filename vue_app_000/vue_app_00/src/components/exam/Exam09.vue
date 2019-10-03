<template>
 <div>
 <h1 @click="add3">{{msg}}</h1>
 <img :src="img3" />
 </div>
</template>
<script>
export default {
    //声明接收父组件数据msg类型字符串
    props:{
        img3:{default:""},图片路径
        msg:{default:""},文字显示
        add3:{type:Function}//type接收类型
        //function函数类型
    }
}
</script>


<template>
<div class="page-head">
   <span>{{leftTitle}}</span>

 <div class="right-head">
  <div class="searchdiv"  @click="search" ><img :src="rightFirstImg" ></div>
  <div class="searchdiv"  @click="add3"><img :src="rightSecondImg" ></div>
  </div>
 </div>
</template>
<script>
export default {
     props:{//声明接收父组件数据
         leftTitle:{default:""},//左侧文字
         rightFirstImg:{default:""},//第一张图片
         rightSecondImg:{default:""},//第二张图片
         search:{type:Function},
         add3:{type:Function}
     }
}

</script>
<style scoped>
     /* 最外层父元素*/
    /* 右侧图片区域*/
   /* 图片div  */
  .page-head{
      display:flex;/* 当前父元素弹性布局 */
      position:fixed;
      z-index:999;
      width:100%;
      justify-content:space-between;
      align-items:center;
      background-color:#3e3a39;
      padding-left:7px;
      padding-right:7px;
      height:48px;
      color:#fff;
      font-size:18px;
  }
  .right-head{
      display:flex;

  }
  .searchdiv{
      display:flex;
      align-items:center;
      height:48px;
  }
  img{
      width:30px;
      margin-right:20px;
  }
</style>

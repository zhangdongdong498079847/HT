<template>
 <div>
   <h3>底部导航栏</h3>
   <mt-tab-container v-model="active">
       <mt-tab-container-item id="tab1">锤子</mt-tab-container-item>
         <mt-tab-container-item id="tab2">钉子</mt-tab-container-item>
   </mt-tab-container>
    <mt-tabbar fixed v-model="active">
       <mt-tab-item id="tab1">
         <img src="./../../img/house.png">
         首页
       </mt-tab-item>
       <mt-tab-item id="tab2">
         <img src="./../../img/shopping.png">
         购物车
       </mt-tab-item>
    </mt-tabbar>
 </div>
</template>
<script>
export default {
    data(){
  return{active:"tab1"}
    },
}
</script>
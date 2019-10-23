<template>
    <div>
        <div class="fnai">
                <img :src="require('../../assets/left.png')" alt="" @click="kinmo" />
                <p>我的订单</p>
        </div>
 
                  <van-tabs v-model="active" animated>
                        <van-tab title="全部">内容 1</van-tab>
                        <van-tab title="待付款">内容 2</van-tab>
                        <van-tab title="待发货">内容 3</van-tab>
                        <van-tab title="待收货">内容 4</van-tab>
                        <van-tab title="已完成">内容 1</van-tab>
                        <van-tab title="已关闭">内容 2</van-tab>         
                  </van-tabs>
   </div>
</template>
<script>
export default{
    data(){return{
        active: 2,
    }},
    methods:{
        kinmo(){
            this.$router.push("/move7");
        },
    }
}
</script>
<style>
  .fnai{width:100%;height:25px;}
  .fnai img{width:20px;height:20px;}
  .fnai p{width:80px;height:25px;
    position:absolute;
    top: -15px;
    left: 40%;
  }
</style>
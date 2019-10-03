<template>
  <div>
    <h3>输入手机号，加入折疯了</h3>
    <p class="nop">成功注册折疯了，即可获得 <span>999元</span></p>
    <mt-field placeholder="请输入手机号" v-model="phone" class="je"></mt-field>
    <button @click="prev" class="prev1">下一步</button>
  </div>
</template>
<script>
  export default{
     data(){return{phone:""}},
     methods: {
       prev(){
           let phone=this.phone;
           console.log(phone);
          var regp = /^1[3456789]\d{9}$/;
          //  var p=this.phone;
           if (!regp.test(phone)) {
           this.$messagebox("消息", "号码输入有误");
           return;
           }
        }
     }


  };
</script>
<style>
  .mint-cell-wrapper {
    border-bottom: 1px solid #ccc !important;
    padding: 0 !important;
  }
  .prev1 {
    position: relative;
    top: 30px;
    width: 95%;
    height: 40px;
    background: red;
    border: 0px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    outline: none;
  }
</style>

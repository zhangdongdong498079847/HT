<template>
  <div class="header">
    <h2>登陆折疯了</h2>
    <p class="p_title">
      成功注册折疯了，即可获得<span class="span1">999元</span>新人专享大礼!
    </p>
    <mt-field
      v-model="phone"
      placeholder="请输入手机号码"
      type="number"
      class="mt1"
    >
    </mt-field>

    <div class="d1">
      <mt-field
        v-model="number"
        :placeholder="status=='密码'?'请输入验证码':'请输入密码'"
        type="number"
        class="mt2"     
      ></mt-field
      ><mt-button class="button" v-if="status=='密码'">发送验证码</mt-button>
    </div>

    <br />
    <mt-button class="btn1" v-model="dobtn" @click="cancel" >登录</mt-button>

    <button class="p_upwd" @click="changestatus">使用{{status}}登录</button>
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    <div class="a_upwd"><a href="">一键登录</a></div>
    <div class="redo">
      <mt-button class="btn_redo"
        ><img :src="require('../../assets/qq.png')"
      /></mt-button>
      <mt-button class="btn_redo1"
        ><img :src="require('../../assets/wx.png')"
      /></mt-button>
    </div>
    <br /><br />
    <span class="span_redo"
      >还没有账号？<a href="javascript:;">立即注册</a></span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        phone: "",
        number: "",
        dobtn: 0,
        disabled:true,
        status:"密码"
      };
    },
    methods: {
      cancel() {
        var regp = /^1[3456789]\d{9}$/;
        var regn = /^[0-9]{6}$/;
        var phone1 = this.phone;
        var num=this.number;
        if (!regp.test(phone1)) {
          this.$messagebox("消息", "号码输入有误");
          return;
          }
          if(!regn.test(num)){
            this.$messagebox("消息","验证码输入有误");
            return;
          }     
      },
      changestatus(){
        let status = this.status;
       
        if(status=="密码"){
             this.status="验证码";
        }else{
          this.status="密码";
        }
      }
    }
  };
</script>
<style scoped>
  * {
    text-decoration: none;
  }
  .p_upwd {
    position: relative;
    left: 65%;
    top: 20px;
    font-size: 10px;
    outline:none;
    display: inline-block;
    border:0px solid ;
    width:100px;
    background:white;
  }

  .span1 {
    color: red;
  }
  .p_title {
    color: grey;
  }
  .header > .mt1 {
    padding: 0;
  }
  .a_upwd {
    display: inline-block;
    width: 120px;
    height: 35px;
    position: relative;
    top: -30px;
    left: 35%;
    background: white;
    text-align: center;
    font-size: 12px;
  }
  .mint-cell-wrapper {
    padding: 0 !important;
  }
  .mt1 {
    border-bottom: 1px solid #d0d0d0;
  }
  .mt2 {
    border-bottom: 1px solid #d0d0d0;
    width: 60%;
    position: relative;
  }
  .d1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .mint-button--normal {
    position: absolute;
    top: 10px;
    left: -20px;
  }

  .btn1 {
    background: red !important;
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: white !important;
  }
  
  .redo {
    width: 250px;
    height: 50px;
    position: relative;
    left:40%;
    transform: translateX(-80px);
    
  }
  .redo .btn_redo {
    width: 40px;
    height: 40px;
    position:absolute;
    left:5px;
    border-radius: 50%;
    float:left;
    padding: 0;
    margin: 0;

  }
  .redo .btn_redo1{
    width: 40px;
    height: 40px;
    position:absolute;
    left:180px;
    border-radius: 50%;
  
    padding: 0;
    margin: 0;
  }
  .redo img {
    width: 40px;
    height: 40px;
  }
  .span_redo {
    display: inline-block;
    position: relative;
    left: 25%;
  }
  .span_redo a {
    color: red;
  }
  .button{
    position:relative; 
  }
</style>




  

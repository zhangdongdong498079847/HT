<template>
  <div>
   
     <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}" v-model="uname">    
     </mt-field>
     <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
     <mt-field label="年龄" placeholder="请输入年龄" type="number" v-model="age"></mt-field>
     <mt-button size="large" @click="reg">确认</mt-button>
  </div>
</template>
<script>
export default {
    data(){
        return{uname:"",upwd:"",age:""}
    },
    methods:{
         reg(){
             var regu=/^[a-z0-9]{3,12}$/i;
              //创建正则表达式-用户名和密码 
              var rega=/^[0-9]{2}$/;
              // 创建正则表达的是
              //获取用户名
              var u=this.uname;
              //获取密码
              var p=this.upwd;
              //获取年龄
              var a=this.age;
              //验证用户名,如果出错
              //console.log(u+"",p+"",+a);
              //验证密码 如果出错交互
              if(!regu.test(u)){
                    this.$messagebox("消息","用户名格式不正确");
                        return;
              }
          
              if(!regu.test(p)){
                  this.$messagebox("消息","密码格式不正确");
                   return;
              }
             
              if(!rega.test(a)){
                  this.$messagebox("消息","年龄输入有误");
                  return;
              }
              //验证年龄  如果出错交互
              //
        }
    }
    
   
}
</script>
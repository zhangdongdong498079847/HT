<template>
<div>
   <mt-field v-model="uname" label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}"></mt-field>
   <mt-field v-model="upwd" label="密码" placeholder="请输入密码" type="password"></mt-field>
   <mt-field v-model="age" label="年龄" placeholder="请输入年龄" type="number"></mt-field>
   <mt-button size="large" @click="add" >登陆</mt-button>
</div>
</template>
<script>
export default {
   data(){
       return {uname:"",upwd:"",age:""}
   },
   methods:{
       add(){
           var regu=/^[a-z0-9]{3,12}$/i;
           var rega=/^[0-9]{2}$/;
           var uname1=this.uname;
           var upwd1=this.upwd;
           var age1=this.age;
          if(!regu.test(uname1)){
              this.$messagebox("消息","用户名格式错误");
              return;
          }
          if(!regu.test(upwd1)){
              this.$messagebox("消息","密码格式错误");
              return;
          }
          if(!rega.test(age1)){
              this.$messagebox("消息","年龄输入有误");
              return;
          }

       }
   }

}
</script>


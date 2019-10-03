<tempalte>
<div>
  <h1>login.vue</h1>
  <mt-field v-model="uname" label="用户名" placeholder="请输入用户名" :attr="{maxlength=10}">登录</mt-field>
  <mt-field v-model="upwd" label="密码" placeholder="请输入密码" type="password"></mt-field>
  <mt-button @click="login" size="large">登录</mt-button>
</div>
</template>
<script>
export default {
    data(){return{uname:"",upwd:""}},
}
  methods:{
      login(){
          var u=this.uname;
          var p=this.upwd;
          console.log(u+":"+p);
          var regu=/^[a-z0-9]{3,12}$/;
          if(!regu.test(u)){
            this.$toast("用户名错误");
            return;
          }else if(!regu.test(p)){
            this.$toast("用户密码错误");
            return;
          }
          //发送axios请求
      var url="login";
      var obj={uname:u,upwd:p};
      this.axios.get(url,{params:obj}).then(res=>{
           console.log(res);
      })
      }
  }

</script>




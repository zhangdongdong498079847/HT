<template>
   <div class="cart">
   <h3>购物车的</h3>
   <div class="selectall" @click="selectAll">
    全选<input type="checkbox">
   </div>
   
   <div class="cart-item" v-for="(item,index) of list" :key="index">
     <div class="lefttext">
     <input type="checkbox" v-model="item.cb">
     <div class="lname">{{item.lname}}</div>
     <div class="price">{{item.price}}</div>
     </div>
       <mt-button @click="deleteitem" :data-id="item.id">删除</mt-button>
   </div>
     <div>
      <span style="color:red">0</span>
      <mt-button @click="deleteitems">删除选中的商品</mt-button>
      <mt-button>清空购物车</mt-button>
     </div>
   </div> 
</template>
<script>
export default {
    data(){
      return{
          list:[],
      }
    },
     created(){
         //当前组件创建成功回调函数
         this.loadMore();
     },
          
     methods:{
          selectAll(event){
               //获取当前按钮状态 true
                var cb=event.target.checked; 
                //创建循环遍历所有商品属性cb值
                for(var item of this.list){
                    item.cb=cb;                 
                }                                
           },
         deleteitems(){
            //显示确认对话框
              this.$messagebox.confirm("是否删除数据").then(res=>{
                 //创建变量保存选中id值
                  var id="";
                  for(var item of this.list){
                      if(item.cb){//判断元素属性cb是否等于true
                        id+=item.id+",";//拼接id
                      }
                  }//console.log(id);
                  id=id.slice(0,-1);
                  if(id==""){
                      this.$toast("请选择需要删除的物品");
                      return;
                  }
                  //创建rul 创建obj 发送ajax请求
                  var url="delitems";
                  var obj={id:id};
                  this.axios.get(url,{params:obj}).then(res=>{//获取服务器返回数据
                  //  判断删除多个商品是否成功
                      if(res.data.code==-1){
                          this.$toast("删除失败");
                      }else{
                          this.$toast("删除成功");
                          this.loadMore();
                      }
                  })
              })
         },
                   






        deleteitem(event){
//功能:用户点击删除按钮完成删除指定商品任务
//(1)为按钮绑定点击事件调用deleteItem 
//(2)显示确认框如果用户选 确定
this.$messagebox.confirm("是否删除指定数据").then(res=>{
//(3)将当前商品id传递函数
var id = event.target.dataset.id;
console.log(id)
//(4)发送ajax请示完成删除任务
var url="delitem";
var obj={id:id};
this.axios.get(url,{
params:obj
}).then(res=>{
  if(res.data.code=1){
this.$toast("删除成功");
this.loadMore();//刷新
  }else{
      this.$toast("删除失败");
  }
}) 
//
//(5)删除成功 提示"删除成功"
}).catch(err=>{

})
},
    


     loadMore(){
         var url="carts";
          //获取当前用户购物车列表
          //创建url请求服务器地址
          //发送ajax请求
          this.axios.get(url).then(res=>{
              if(res.data.code==-1){
                  this.$messagebox("消息","请登录").then(res=>{
                      this.$router.push("/login")
                  })
              }else{
                 //获取服务器返回数据
                 //this.list=res.data.data;
                   var rows=res.data.data;
                   for(var item of rows){
                       item.cb=true;
                   }
                   this.list=rows;
              }
          })
          //获取服务器返回数据
          //如果服务器返回 请登录
       }
     }
}
</script>
<style>
.cart-item{
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #ccc;
    margin-top:25px;
}
.lefttext{
    display:flex;
    align-items:center;
}
.lname{
    margin-left:25x;
}
.price{
    margin-left:25px;
}

</style>
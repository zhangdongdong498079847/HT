<template>
<div class="product-app">
<div class="goods-item" v-for="(item,index) of list" :key="index">
 <!-- 商品图片-->
 <img :src="'http://127.0.0.1:8080/'+item.img_url ">
 <!--商品名称 -->
 <h1>雀巢咖啡</h1>
 <!-- 商品价格-->
 <div class="info">{{item.price}}</div>
  <!--加入购物车 -->
  <mt-button @click="addcart" :data-lid="item.lid" :data-price="item.price" :data-lname="item.lname">加入购物车</mt-button>
  <mt-button size="large" @click="loadMore">加载更多</mt-button>
  <mt-button @click="jump">查看购物车</mt-button>
</div>
</div>
</template>
<script>
export default {
    data(){
      return{
          //保存服务器返回商品列表
          list:[],
          pno:0   //当前的页码
      }
    },
  created(){
   this.loadMore();
  },
  methods:{
        jump(){
            this.$router.push("/Cart");
        },
         //当组件创建成功后获取第一页数据
      loadMore(){
          //创建url
          var url="product";
          //当前页码加一
          this.pno++;
          var obj={pno:this.pno};
          //用ajax请求数据
          this.axios.get(url,{params:obj}).then(res=>{
              console.log(res.data.data);
             this.list=res.data.data;
             //数组拼接操作
     var rows=this.list.concat(res.data.data);
         //赋值
        this.list=rows;
          })
      },
        addcart(event){
             //获取购物车中数据 lid lname price
             var lid =event.target.dataset.lid;
             var lname=event.target.dataset.lname;
             var price=event.target.dataset.price;
             //console.log(lid+"|"+lname+"|"+price); 
            //创建url
            var url="addcart";
            var obj={lid:lid,lname:lname,price:price};
            //发送ajax请求获取
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==-1){

                   this.$messagebox("消息","请登录").then(res=>{
                   this.$router.push("/login");
                    })
                }else if(res.data.code==-2){
                    this.$messagebox("消息","添加失败");
                }else{
                    this.$messagebox("消息","添加成功");
                }
               
            })
            //获取服务器返回数据

        }          //将数据保存data中
      }
  }
</script>
<style scoped>
    .product-app{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        padding:4px;
    }
    .goods-item{width:49%;
     border:1px solid #ccc;
     border-radius:5px;
     margin:2px 0;
     padding:2px;
     box-sizing:border-box;
     display:flex;
     flex-direction:column;
     min-height:249px;
    }
   .goods-item img{
         width:100%;
   }
   .goods-item .info{
       color:red;
       font-size:19px;
   }


</style>
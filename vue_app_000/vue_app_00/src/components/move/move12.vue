<template>
    <div >
        <div class="rtn_cin"><img :src="require('../../assets/left.png')" alt="" @click="douchui" /></div>
        <div v-for="(item,index) of list" :key="index">
            <!-- <div>{{item.price}}</div> -->
        <van-card v-if="item.pcolor"
  num="2"
  :price="item.price"
    :desc="'颜色:'+item.pcolor+'尺码:'+item.psize"
  :title="item.ptitle"
  :thumb="item.pimg[0]"
  @click="xq_lio(index)"
/>
<div slot="footer">
</div>   
      </div>
<!-- <van-card
  num="2"
  tag="特价商品"
  price="2.00"
  desc="大的，小的，颜色：黑色，白色"  
  title="时尚T恤"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
  origin-price="10.00"
  @click="xq_lip"
/> -->

<van-popup v-model="show_b" class="gwc_max" v-if="list.length>0">
    <!-- <ul class="show_xq">
            <li :class="{dousit:pool_a===index}" v-for="(fier,index) of list.psize" @click="bastlit(index)">{{fier}}</li> 
         </ul>
         <ul class="show_xa">
               <li :class="{pasite:pool_b===index}" v-for="(nier,index) of niers" @click="pastlist(index)">{{nier}}</li> 
            </ul>
            <van-button size="mini" @click="jianshao">减少</van-button>
            <span>{{count}}</span>
            <van-button size="mini" @click="zengjia">添加</van-button>
            <van-button type="default" @click="addcart">添加购物车</van-button> -->
     <div >
         <div >{{list[pindex].pcolor[colorindex]}}&nbsp &nbsp{{list[pindex].psize[sizeindex]}}</div>
         <div>
        <div :class="{dachuizi_1:sholipi===index02}" v-for="(item02,index02) of list[pindex].pcolor" :key="index02" @click="xzyg(index02)">
            <span>{{item02}}</span>
        </div>
    </div>
        <div :class="{dachuizi_2:sholipe===index01}" v-for="(item01,index01) of list[pindex].psize" :key="index01" @click="zxzyg(index01)">
                <span>{{item01}}</span>
            </div>
            <div>
            <van-button size="mini" @click="jianshao">减少</van-button>
            <span>{{count}}</span>
            <van-button size="mini" @click="zengjia">添加</van-button>
        </div>
            <van-button type="default" @click="addcart" >添加购物车</van-button>
     </div>


</van-popup>



<!-- <van-popup v-model="show_b" class="gwc_min">
        <ul class="show_di">
                <li :class="{show_ali:teli===index}" v-for="(list,index) of whcolor" @click="cc_a(index)">{{list}}</li> 
             </ul>
             <ul class="show_ge">
                   <li :class="{bastli:diude===index}" v-for="(kimao,index) of yfcolor" @click="changest(index)">{{kimao}}</li> 
                </ul>
                <van-button size="mini" @click="jianshao_a">减少</van-button>
                <span>{{count_a}}</span>
                <van-button size="mini" @click="zengjia_a">添加</van-button>
                <van-button type="default"  @click="addcart">添加购物车</van-button>
</van-popup> -->

<div slot="footer">
  
      </div>
      <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onchakan" />
            <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickIcon" />
          </van-goods-action>
          <van-popup v-model="show">
              <ul class="show_xq">
                 <li :class="{show_ali:teli===index}" v-for="(list,index) of whcolor" @click="cc_a(index)">{{list}}</li> 
              </ul>
              <ul class="show_xa">
                    <li :class="{bastli:diude===index}" v-for="(kimao,index) of yfcolor" @click="changest(index)">{{kimao}}</li> 
                 </ul>
                 <div>你啊啊啊啊啊啊</div>
          </van-popup>
          <!-- <van-popup v-model="show_a" class="gwc_max"></van-popup> -->

    </div>
</template>
<script>
 export default{
     data(){
         return{
            sizeindex:0,
            sholipe:0,
             colorindex:0,
             pindex:0,
             show:false,
             sholipi:0,
             show_b:false,
             show_c:false,
             count:0,
             count_a:0,
             whcolor:["x","xl"],
             teli:0,
             yfcolor:["red","blue"],
             diude:0,
             fiers:["大的","小的"],
             niers:["黑的","白的"],
             pool_a:0,
             pool_b:0,
             list:[]
         }
     },
     methods:{
        addcart(){
            console.log(this.list)
             var pid= this.list[this.pindex].pid
            //  console.log(pid);
            // var uid= this.list[this.pindex].uid[this.colorindex]
              var price=this.list[this.pindex].price
            //   console.log(price)
              var pcolor=this.list[this.pindex].pcolor[this.colorindex]
            //   console.log(pcolor)
              var pimg=this.list[this.pindex].pimg[this.colorindex]
            //   console.log(pimg)
              var psize=this.list[this.pindex].psize[this.sizeindex]
            //   console.log(psize)
             this.list[this.pindex].count=this.count
             var count=  this.list[this.pindex].count
            //  console.log(count)
            // console.log( this.list[this.pindex].count)
             var obj={pid:pid,price:price,pcolor:pcolor,pimg:pimg,count:count,psize:psize}
             var url=""
            this.axios.get(url,{params:obj}).then(res=>{
                if(res.data.code==1){
                  this.$router.push("/move5")
                }else{
                this.$toast("添加失败")
                }
            })
        },
        zxzyg(index){
            this.sholipe=index;
            this.sizeindex=index;
        },
        xzyg(index){
          this.sholipi=index;
          this.colorindex=index;
        },
        onchakan(){
           this.$router.push("/move13")
        },
         douchui(){
          this.$router.push("/move10")
         },
         bastlit(index){
             this.pool_a=index;
         },
         pastlist(index){
             this.pool_b=index;
         },
         xq_lip(){
             this.show_c=true;
         },
         xq_lio(index){
             this.show_b=true;
             this.pindex=index
         },
         onClickButton(){
             this.show=true;
         },
         onClickIcon(){
             this.show_a=true;
         },
         jianshao(){
             if(this.count>0){
                this.count-=1;
             }else{
                 return;
             }
         },
         zengjia(){
             this.count+=1;
         },
         jianshao_a(){
             if(this.count_a>0){
                this.count_a-=1;
             }else{
                 return;
             }
         },
         zengjia_a(){
             this.count_a+=1;
         },
         cc_a(index){
             this.teli=index;
         },
         changest(index){
             this.diude=index;
         },
         loadmore(){
              this.axios.get("/allproduct").then(res=>{
                        var list = res.data.data
                        
                        for(var i=0;i<list.length;i++){
                            // list[i].img
                           list[i].pimg = list[i].pimg.split(",")
                           list[i].pcolor = list[i].pcolor.split(",")
                           list[i].psize = list[i].psize.split(",")
                           
                        }
                        console.log(list)
                        this.list = list
                        

              })
         }
     },
     created(){
         this.$nextTick(()=>{
             this.loadmore()
         })
     },
 }
</script>
<style>
  .rtn_cin{width:20px;height:20px;}
  .rtn_cin img{width:20px;height:20px;}
  .van-popup{width:200px;height:200px;}
  .show_xq{width:150px;height:50px;
   display:flex;
  }
  .show_xq li{width:45%;height:100%;}
  .show_ali{background:pink}
  .show_xa{width:150px;height:50px;
   display:flex;
  }
  .show_xa li{width:50%;height:50px;
   display:flex;
  }
  .bastli{background:pink;}
  .show_di{width:150px;height:50px;
   display:flex;
  }
  .show_di li{width:50%;height:50px;}
  .show_ge{
      width:150px;height:50px;
      display:flex;
  }
  .show_ge li{width:50%;height:50px;
  }
  .dousit{background:red}
  .pasite{background:green}
  .van-button--mini {margin-top:40px;}
  .dachuizi_1{background:pink;}
  .dachuizi_2{background:red;}
</style>
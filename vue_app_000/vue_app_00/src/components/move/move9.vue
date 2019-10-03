<template>
    <div>
        <div class="header_earth">
                <img :src="require('../../assets/left.png')" alt=""  @click="earth_a">
                <p>全球官网</p>
        </div>
            <mt-swipe :auto="4000" :speed="1000" class="header_swipe">
                    <mt-swipe-item><img :src="require('../../assets/move120.jpg')" alt=""></mt-swipe-item>
                    <mt-swipe-item><img :src="require('../../assets/move121.jpg')" alt=""></mt-swipe-item>
                    <mt-swipe-item><img :src="require('../../assets/move122.jpg')" alt=""></mt-swipe-item>
            </mt-swipe>
            <div class="ondiv" @click="onwith"><img :src="require('../../assets/on.png')" alt="" ></div>
           
          <ul class="domudus">
              <li id="domudus_li" :class="{dum:cha===index}" @click="documer(index)" v-for="(list,index) of lists" :key=index>{{list}}</li>
          </ul>
          <van-action-sheet v-model="show" title="分享到:">
                <ul class="poert">
                   <li><img :src="require('../../assets/movewx.png')" alt="" ></li>
                   <li><img :src="require('../../assets/moveqq.png')" alt="" ></li>
                   <li><img :src="require('../../assets/movesf.png')" alt="" ></li>
                   <li><img :src="require('../../assets/copy.png')" alt="" ></li>
                </ul>
              </van-action-sheet>
              <div class="vsi_a" v-if="cha==0">
                   <div class="vfi">
                       <div class="vfi_a" >
                            <div class="vfi_b" @click="tiao">
                                <img :src="require('../../assets/move21.jpg')" alt="" >
                                <p>18924件商品</p>
                            </div>
                            <div class="vfi_c">
                              <p>Jomashop美国官网</p>
                              <p>大型品牌手表零售商</p>
                              <p>大牌名表超低价</p>
                            </div>
                            <div class="vfi_d">
                                 <div class="vfi_e">
                                     <p>23个活动</p>
                                     <p>点击进入</p>
                                 </div>
                            </div>
                             <ul class="vf_ul">
                                 <li>YSL小金人</li>
                                 <li>阿玛尼权利</li>
                                 <li>Aesop香芹籽</li>
                                 <li>Dior小奶瓶</li>
                                 <li>贵牌SUQQU</li>
                                 <li>海蓝之谜75折</li>
                                 <li>MJ相机包</li>
                                 <li>奢饰大牌</li>
                                 <li>袁泉养肤粉底</li>
                                 <li>兰蔻黑金气垫</li>
                                 <li>英国CT口红</li>
                                 <li>MAC樱花限定</li>
                             </ul>
                       </div>
                   </div>



              </div>
              <div class="vsi_b" v-if="cha==1">
                    

                    <div class="vfii">
                            <div class="vfi_ai" >
                                 <div class="vfi_bi">
                                     <img :src="require('../../assets/move20.jpg')" alt="" >
                                     <p>18924件商品</p>
                                 </div>
                                 <div class="vfi_ci">
                                   <p>Jomashop美国官网</p>
                                   <p>大型品牌手表零售商</p>
                                   <p>大牌名表超低价</p>
                                 </div>
                                 <div class="vfi_di">
                                      <div class="vfi_ei">
                                          <p>23个活动</p>
                                          <p>点击进入</p>
                                      </div>
                                 </div>
                                  <ul class="vf_uli">
                                      <li>YSL小金人</li>
                                      <li>阿玛尼权利</li>
                                      <li>Aesop香芹籽</li>
                                      <li>Dior小奶瓶</li>
                                      <li>贵牌SUQQU</li>
                                      <li>海蓝之谜75折</li>
                                      <li>MJ相机包</li>
                                      <li>奢饰大牌</li>
                                      <li>袁泉养肤粉底</li>
                                      <li>兰蔻黑金气垫</li>
                                      <li>英国CT口红</li>
                                      <li>MAC樱花限定</li>
                                  </ul>
                            </div>
                        </div>


              </div>

              <div class="vsi_c" v-if="cha==2">
                    
                    <div class="vfio">
                            <div class="vfi_ao" >
                                 <div class="vfi_bo">
                                     <img :src="require('../../assets/move30.jpg')" alt="" >
                                     <p>18924件商品</p>
                                 </div>
                                 <div class="vfi_co">
                                   <p>Jomashop美国官网</p>
                                   <p>大型品牌手表零售商</p>
                                   <p>大牌名表超低价</p>
                                 </div>
                                 <div class="vfi_do">
                                      <div class="vfi_eo">
                                          <p>23个活动</p>
                                          <p>点击进入</p>
                                      </div>
                                 </div>
                                  <ul class="vf_ulo">
                                      <li>YSL小金人</li>
                                      <li>阿玛尼权利</li>
                                      <li>Aesop香芹籽</li>
                                      <li>Dior小奶瓶</li>
                                      <li>贵牌SUQQU</li>
                                      <li>海蓝之谜75折</li>
                                      <li>MJ相机包</li>
                                      <li>奢饰大牌</li>
                                      <li>袁泉养肤粉底</li>
                                      <li>兰蔻黑金气垫</li>
                                      <li>英国CT口红</li>
                                      <li>MAC樱花限定</li>
                                  </ul>
                            </div>
                        </div>

              </div>
              <div class="vsi_d" v-if="cha==3">
                    <div class="vfip">
                            <div class="vfi_ap" >
                                 <div class="vfi_bp">
                                     <img :src="require('../../assets/move31.png')" alt="" >
                                     <p>18924件商品</p>
                                 </div>
                                 <div class="vfi_cp">
                                   <p>Jomashop美国官网</p>
                                   <p>大型品牌手表零售商</p>
                                   <p>大牌名表超低价</p>
                                 </div>
                                 <div class="vfi_dp">
                                      <div class="vfi_ep">
                                          <p>23个活动</p>
                                          <p>点击进入</p>
                                      </div>
                                 </div>
                                  <ul class="vf_ulp">
                                      <li>YSL小金人</li>
                                      <li>阿玛尼权利</li>
                                      <li>Aesop香芹籽</li>
                                      <li>Dior小奶瓶</li>
                                      <li>贵牌SUQQU</li>
                                      <li>海蓝之谜75折</li>
                                      <li>MJ相机包</li>
                                      <li>奢饰大牌</li>
                                      <li>袁泉养肤粉底</li>
                                      <li>兰蔻黑金气垫</li>
                                      <li>英国CT口红</li>
                                      <li>MAC樱花限定</li>
                                  </ul>
                            </div>
                        </div>     


              </div>


    </div>
</template>
<script>
 export default {
     data(){
         return{
            lists:[
              "全球官网","美妆护肤","服饰鞋靴","轻奢大牌"
            ],
               cha:0,
            
             


        show: false,
   

     }},
     methods:{
         tiao(){
             this.$router.push("/move10");
         },
        earth_a(){
            this.$router.push('/move4');
        },
       
    onwith(){
        if(!this.show){
            this.show=true;
        }else{
            this.show=false;
        }
      
    },
    documer(index){
        this.cha=index;
    }
  
     }
 };
</script>
<style>
    .app-container{padding:0;}
   .header_swipe{width:395px;height:260px !important;}
   .header_swipe img{width:395px;height:260px;
   }

.header_earth{width:100%;height:40px;}
.header_earth img{ width:30px;height:30px;
   margin-top:5px;
   margin-left:10px;
}
.header_earth p{    width: 80px;
    height: 40px;
    position: absolute;
    top: -15px;
    text-align: center;
    left: 50%;
    transform: translate;
    transform: translateX;
    transform: translateX(-40px);
    line-height: 40px;
   
}
.ondiv{width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 90%;
}
.ondiv img{width:20px;height:20px;}
 .domudus{width:100%;height:50px; 
  display:flex;

 }
.domudus li{width:25%;height:100%;
 text-align: center;
 line-height: 45px;
}
.dum{background:#e61128;
    color:white;
}

.poert{width:100%;height:80px;
  display:flex;
  justify-content: space-around;
}
.van-action-sheet__header{margin-left:-290px}
.poert li{    width: 20%;
    height: 100%;
   
    text-align: center;
    line-height: 6;}
.poert li img{width:40px;height:40px;}
.poert li p{width:60px;height:20px;}
.poert li::after{position:absolute;
 top:75px;
 font-size:12px;
}
.poert li:nth-child(1)::after{content:"微信好友";
 width:120px;height:20px;
 left:-10px;
}
.poert li:nth-child(2)::after{content:"QQ好友";
 width:120px;height:20px;
 left:80px;
}
.poert li:nth-child(3)::after{content:"在Safari中打开";
 width:120px;height:20px;
 left:170px;
}
.poert li:nth-child(4)::after{content:"复制链接";
 width:120px;height:20px;
 left:270px;
}
.vsi_a{width:395px;height:2000px;
  position:absolute;
}
.vfi{width:100%;height:280px;
   background:#ebedef;
}
.vfi_a{width:100%;height:95%;
       background:white;

}
.vfi_b{width:80px;height:80px;
   border-radius: 5px;
}
.vfi_b img{width:80px;height:80px;
    filter:brightness(90%);
   position:absolute;
   top:10px;
   left:10px;
   border-radius: 5px;
}
.vfi_b p{    width: 80px;
    height: 18px;
    font-size: 10px;
    position: absolute;
    top: 58px;
    left: 10px;
    color: white;
    background: #919191;
    border-radius: 5px;
}
.vfi_c{width: 200px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 110px;}
    .vfi_c p:nth-child(1){
        width: 100%;
    height: 30px;
    position: absolute;
    top: -20px;
    font-weight: bold;
    }
    .vfi_c p:nth-child(2){
        width: 100%;
    height: 30px;
    position: absolute;
    top: 12px;
    font-size: 14px;
    color: #aba8a8;
    }
    .vfi_c p:nth-child(3){
        width: 45%;
    height: 20px;
    position: absolute;
    top: 45px;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    border: 0.6px solid #e61128;
    line-height: 20px;
    color: #e61128;
    border-radius: 5px;
    }
    .vfi_d{
        width: 70px;
    height: 70px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 10px;
    left: 70%;
    border-radius: 50%;
    background: rgb(230, 17,);
    border: 1px solid rgba(230,17,40,0.5);
    }
    .vfi_e{      width: 64px;
    height: 64px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 3px;
    left: 5%;
    border-radius: 50%;
    background:#e61128;
    color:white;
    font-size: 13px;
    }
    .vfi_e p:nth-child(1){width:100%;
    position:absolute;
    left:5px;
    }
    .vfi_e p:nth-child(2){width:100%;
    position:absolute;
    top:20px;
    left:5px;
    }
    .vf_ul{width:95%;height:160px;
     position: absolute;
     top:100px;
     display: flex;
     flex-wrap:wrap;
     justify-content: space-around;
    }
    .vf_ul li{width: 90px;
    height: 30px;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px #888888;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: #666666;
    }
    






    .vsi_ai{width:395px;height:2000px;
  position:absolute;
}
.vfii{width:100%;height:280px;
   background:#ebedef;
   position:absolute;
}
.vfi_ai{width:100%;height:95%;
       background:white;

}
.vfi_bi{width:80px;height:80px;
   border-radius: 5px;
}
.vfi_bi img{width:80px;height:80px;
    filter:brightness(90%);
   position:absolute;
   top:10px;
   left:10px;
   border-radius: 5px;
}
.vfi_bi p{    width: 80px;
    height: 18px;
    font-size: 10px;
    position: absolute;
    top: 58px;
    left: 10px;
    color: white;
    background: #919191;
    border-radius: 5px;
}
.vfi_ci{width: 200px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 110px;}
    .vfi_ci p:nth-child(1){
        width: 100%;
    height: 30px;
    position: absolute;
    top: -20px;
    font-weight: bold;
    }
    .vfi_ci p:nth-child(2){
        width: 100%;
    height: 30px;
    position: absolute;
    top: 12px;
    font-size: 14px;
    color: #aba8a8;
    }
    .vfi_ci p:nth-child(3){
        width: 45%;
    height: 20px;
    position: absolute;
    top: 45px;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    border: 0.6px solid #e61128;
    line-height: 20px;
    color: #e61128;
    border-radius: 5px;
    }
    .vfi_di{
        width: 70px;
    height: 70px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 10px;
    left: 70%;
    border-radius: 50%;
    background: rgb(230, 17,);
    border: 1px solid rgba(230,17,40,0.5);
    }
    .vfi_ei{      width: 64px;
    height: 64px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 3px;
    left: 5%;
    border-radius: 50%;
    background:#e61128;
    color:white;
    font-size: 13px;
    }
    .vfi_ei p:nth-child(1){width:100%;
    position:absolute;
    left:5px;
    }
    .vfi_ei p:nth-child(2){width:100%;
    position:absolute;
    top:20px;
    left:5px;
    }
    .vf_uli{width:95%;height:160px;
     position: absolute;
     top:100px;
     display: flex;
     flex-wrap:wrap;
     justify-content: space-around;
    }
    .vf_uli li{width: 90px;
    height: 30px;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px #888888;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: #666666;
    }

.vsi_b{width:395px;height:2000px;
  position:absolute;
}
.vsi_c{width:395px;height:2000px;
  position:absolute;
}




    
.vsi_ao{width:395px;height:2000px;
  position:absolute;
}
.vfio{width:100%;height:280px;
   background:#ebedef;
   position:absolute;
}
.vfi_ao{width:100%;height:95%;
       background:white;

}
.vfi_bo{width:80px;height:80px;
   border-radius: 5px;
}
.vfi_bo img{width:80px;height:80px;
    filter:brightness(90%);
   position:absolute;
   top:10px;
   left:10px;
   border-radius: 5px;
}
.vfi_bo p{    width: 80px;
    height: 18px;
    font-size: 10px;
    position: absolute;
    top: 58px;
    left: 10px;
    color: white;
    background: #919191;
    border-radius: 5px;
}
.vfi_co{width: 200px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 110px;}
    .vfi_co p:nth-child(1){
        width: 100%;
    height: 30px;
    position: absolute;
    top: -20px;
    font-weight: bold;
    }
    .vfi_co p:nth-child(2){
        width: 100%;
    height: 30px;
    position: absolute;
    top: 12px;
    font-size: 14px;
    color: #aba8a8;
    }
    .vfi_co p:nth-child(3){
        width: 45%;
    height: 20px;
    position: absolute;
    top: 45px;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    border: 0.6px solid #e61128;
    line-height: 20px;
    color: #e61128;
    border-radius: 5px;
    }
    .vfi_do{
        width: 70px;
    height: 70px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 10px;
    left: 70%;
    border-radius: 50%;
    background: rgb(230, 17,);
    border: 1px solid rgba(230,17,40,0.5);
    }
    .vfi_eo{      width: 64px;
    height: 64px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 3px;
    left: 5%;
    border-radius: 50%;
    background:#e61128;
    color:white;
    font-size: 13px;
    }
    .vfi_eo p:nth-child(1){width:100%;
    position:absolute;
    left:5px;
    }
    .vfi_eo p:nth-child(2){width:100%;
    position:absolute;
    top:20px;
    left:5px;
    }
    .vf_ulo{width:95%;height:160px;
     position: absolute;
     top:100px;
     display: flex;
     flex-wrap:wrap;
     justify-content: space-around;
    }
    .vf_ulo li{width: 90px;
    height: 30px;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px #888888;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: #666666;
    } 


.vsi_d{width:395px;height:2000px;
  position:absolute;
}
.vsi_ai{width:395px;height:2000px;
  position:absolute;
}
.vfii{width:100%;height:280px;
   background:#ebedef;
   position:absolute;
}
.vfi_ai{width:100%;height:95%;
       background:white;

}
.vfi_bi{width:80px;height:80px;
   border-radius: 5px;
}
.vfi_bi img{width:80px;height:80px;
    filter:brightness(90%);
   position:absolute;
   top:10px;
   left:10px;
   border-radius: 5px;
}
.vfi_bi p{    width: 80px;
    height: 18px;
    font-size: 10px;
    position: absolute;
    top: 58px;
    left: 10px;
    color: white;
    background: #919191;
    border-radius: 5px;
}
.vfi_ci{width: 200px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 110px;}
    .vfi_ci p:nth-child(1){
        width: 100%;
    height: 30px;
    position: absolute;
    top: -20px;
    font-weight: bold;
    }
    .vfi_ci p:nth-child(2){
        width: 100%;
    height: 30px;
    position: absolute;
    top: 12px;
    font-size: 14px;
    color: #aba8a8;
    }
    .vfi_ci p:nth-child(3){
        width: 45%;
    height: 20px;
    position: absolute;
    top: 45px;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    border: 0.6px solid #e61128;
    line-height: 20px;
    color: #e61128;
    border-radius: 5px;
    }
    .vfi_di{
        width: 70px;
    height: 70px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 10px;
    left: 70%;
    border-radius: 50%;
    background: rgb(230, 17,);
    border: 1px solid rgba(230,17,40,0.5);
    }
    .vfi_ei{      width: 64px;
    height: 64px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 3px;
    left: 5%;
    border-radius: 50%;
    background:#e61128;
    color:white;
    font-size: 13px;
    }
    .vfi_ei p:nth-child(1){width:100%;
    position:absolute;
    left:5px;
    }
    .vfi_ei p:nth-child(2){width:100%;
    position:absolute;
    top:20px;
    left:5px;
    }
    .vf_uli{width:95%;height:160px;
     position: absolute;
     top:100px;
     display: flex;
     flex-wrap:wrap;
     justify-content: space-around;
    }
    .vf_uli li{width: 90px;
    height: 30px;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px #888888;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: #666666;
    }

.vsi_b{width:395px;height:2000px;
  position:absolute;
}
.vsi_c{width:395px;height:2000px;
  position:absolute;
}




    
.vsi_ao{width:395px;height:2000px;
  position:absolute;
}
.vfip{width:100%;height:280px;
   background:#ebedef;
   position:absolute;
}
.vfi_ap{width:100%;height:95%;
       background:white;

}
.vfi_bp{width:80px;height:80px;
   border-radius: 5px;
}
.vfi_bp img{width:80px;height:80px;
    filter:brightness(90%);
   position:absolute;
   top:10px;
   left:10px;
   border-radius: 5px;
}
.vfi_bp p{    width: 80px;
    height: 18px;
    font-size: 10px;
    position: absolute;
    top: 58px;
    left: 10px;
    color: white;
    background: #919191;
    border-radius: 5px;
}
.vfi_cp{width: 200px;
    height: 80px;
    position: absolute;
    top: 10px;
    left: 110px;}
    .vfi_cp p:nth-child(1){
        width: 100%;
    height: 30px;
    position: absolute;
    top: -20px;
    font-weight: bold;
    }
    .vfi_cp p:nth-child(2){
        width: 100%;
    height: 30px;
    position: absolute;
    top: 12px;
    font-size: 14px;
    color: #aba8a8;
    }
    .vfi_cp p:nth-child(3){
        width: 45%;
    height: 20px;
    position: absolute;
    top: 45px;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    border: 0.6px solid #e61128;
    line-height: 20px;
    color: #e61128;
    border-radius: 5px;
    }
    .vfi_dp{
        width: 70px;
    height: 70px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 10px;
    left: 70%;
    border-radius: 50%;
    background: rgb(230, 17,);
    border: 1px solid rgba(230,17,40,0.5);
    }
    .vfi_ep{      width: 64px;
    height: 64px;
    border: 1px solid raba(230,17,40,1);
    position: absolute;
    top: 3px;
    left: 5%;
    border-radius: 50%;
    background:#e61128;
    color:white;
    font-size: 13px;
    }
    .vfi_ep p:nth-child(1){width:100%;
    position:absolute;
    left:5px;
    }
    .vfi_ep p:nth-child(2){width:100%;
    position:absolute;
    top:20px;
    left:5px;
    }
    .vf_ulp{width:95%;height:160px;
     position: absolute;
     top:100px;
     display: flex;
     flex-wrap:wrap;
     justify-content: space-around;
    }
    .vf_ulp li{width: 90px;
    height: 30px;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 20px #888888;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
    color: #666666;
    } 


</style>
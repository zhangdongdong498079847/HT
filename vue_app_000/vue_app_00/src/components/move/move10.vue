<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="xiala">
        <img :src="require('../../assets/move35.jpg')" alt="" />
      </div>
      <div class="shou" @click="remove9">
        <img :src="require('../../assets/left.png')" alt="" />
      </div>
    </van-pull-refresh>
    <div class="niosi">
      <div class="selfri_a">
        <img :src="require('../../assets/move36.jpg')" alt="" />
      </div>
      <div class="selfri_b">
        <p>Selfridges英国官网</p>
        <p>在售商品18254个</p>
      </div>
      <div :class="{selfri:goif==1,selfridges:goif==0}">
        Selfridges塞尔福里奇百货公司，总店位于英国牛津街，是伦敦最著名的百货公司之一，英国家喻户晓的百年老店，Selfridges汇集了世界各地的奢侈品品牌，已成为全球时尚达人每年必须逛一逛的地方，也是来英国旅游的游客必须前往的购物中心。
        英国本地共有London、伯明翰、曼彻斯特Exchange
        Square和Trafford四家，高端美妆护肤品、衣物鞋靴、包包配饰种类齐全，定价优势更是直逼美国黑五，是全世界海淘用户的福音。
        “折疯了海淘”为您倾情对接优质官网，做100%世界正品尖货的搬运工。
      </div>
      <div class="selimg" @click="qh" v-if="goif==1">
        <img :src="require('../../assets/bot.png')" alt="" />
      </div>
      <div class="selimg_a" @click="qh" v-else>
        <img :src="require('../../assets/ont.png')" alt="" />
      </div>
    </div>
    <div class="scrollInC">
      <div ref="scrollInC">
        <ul class="ul_frili">
          <li v-for="item of list" class="li_fri">
            <img :src="item.imgUrl" alt="" />
            <div class="lipo">
              <p>{{item.show}}</p>
              <p>{{item.price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
     <ul class="zhekou">
        <li id="zhekou_li" @click="dupla(index)" :key=index  :class="{zhoukou_a:palit===index}">人气</li>    
        <li id="zhekou_li" @click="dupla(index)" :key=index  :class="{zhoukou_a:palit===index}">折扣</li> 
        <li id="zhekou_li" @click="dupla(index)" :key=index :class="{zhoukou_a:palit===index}">价格</li> 
     </ul>
     
  </div>

</template>
<script>
  import BScroll from "better-scroll";
  export default {
    data() {
      return {
        isLoading: false,
        goif: 1,
        list: [
          { imgUrl: require("../../assets/move40.jpg"), show: "【限量包包在线打折】", price: "￥16" },
          { imgUrl: require("../../assets/move41.jpg"), show: "【护肤品专场】", price: "￥38" },
          { imgUrl: require("../../assets/move42.jpg"), show: "【男士皮包】", price: "￥55" },
          { imgUrl: require("../../assets/move43.jpg"), show: "【女士香包】", price: "￥63" },
          { imgUrl: require("../../assets/move44.jpg"), show: "【钱包】", price: "￥82" },
          { imgUrl: require("../../assets/move45.jpg"), show: "【香奈儿包包】", price: "￥3132" },
          { imgUrl: require("../../assets/move46.jpg"), show: "【口红精品色号】", price: "￥354" }
        ],
      
        palit:0,
        selected: "",
        scrollX: 0,
        
      };
    },
    methods: {
      dupla(index){
            this.palit=index;
      },
      qh() {
        if (this.goif == 1) {
          this.goif = 0;
        } else {
          this.goif = 1;
        }
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast("刷新成功");
          this.isLoading = false;
        }, 500);
      },
      remove9() {
        this.$router.push("/move9");
      },
      Scroll() {
        this.scrollBox = new BScroll(this.$refs.scrollInC, {
          probeType: 3,
          scrollX: true
        });

        this.scrollBox.on("scroll", pos => {
          this.scrollX = Math.abs(Math.round(pos.x));
        });
      },


    },
    mounted() {
      this.$nextTick(() => {
        this.Scroll();
      });
    }
  };
</script>
<style>
  .scrollInC {
    width: 100%;
    height: 150px;
    position: absolute;
    top: 360px;
  }

  .ul_frili {
    width: 180%;
    height: 120px;
    display: flex;
    justify-content: space-around;
  }

  .li_fri {
    width: 30%;
    height: 150px;
  }

  .li_fri img {
    width: 100%;
    height: 100px;
  }

  .lipo {
    width: 100%;
    height: 50px;
  }

  .lipo p:nth-child(1) {
    width: 100%;
    height: 35px;
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  .lipo p:nth-child(2) {
    width: 100%;
    height: 15px;
    margin: 0;
    padding: 0;
    font-size: 12px;
    color: red;
    text-align: center;
  }

  .xiala img:nth-child(1) {
    width: 100%;
    height: 240px;
  }

  .shou {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 5px;
  }

  .shou img {
    width: 30px;
    height: 30px;
  }

  .niosi {
    width: 395px;
    height: 500px;
    width: 70px;
    height: 70px;
    position: absolute;
    top: 220px;
    left: 10px;
    border: 1px solid #ccc;
  }

  .selfri_a {
    width: 70px;
    height: 70px;
  }

  .selfri_b {
    width: 200px;
    height: 80px;
  }

  .selfri_b p:nth-child(1) {
    width: 200px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 80px;
  }

  .selfri_b p:nth-child(2) {
    width: 200px;
    height: 30px;
    position: absolute;
    top: 30px;
    left: 80px;
    color: #747474;
    font-size: 14px;
  }

  .selfri_a img {
    width: 70px;
    height: 70px;
  }

  .selfri {
    width: 360px;
    height: 40px;
    overflow: hidden;
    position: absolute;
    top: 75px;
    font-size: 14px;
    color: #747474;
  }

  .selfridges {
    width: 360px;
    height: 200px;
    overflow: hidden;
    position: absolute;
    top: 75px;
    font-size: 14px;
    color: #747474;
  }

  .selimg {
    width: 40px;
    height: 20px;
    position: absolute;
    top: 110px;
    left: 160px;
  }

  .selimg img {
    width: 40px;
    height: 20px;
  }

  .selimg_a {
    width: 40px;
    height: 20px;
  }

  .selimg_a img {
    width: 40px;
    height: 20px;
    position: absolute;
    top: 245px;
    left: 160px;
  }
  .zhekou{    width: 375px;
    height: 50px;
    position: fixed;
    top: 530px;
    display: flex;
    justify-content: space-around;
  }
.zhekou li{width:25%;height:50px;
 line-height: 50px;
 text-align: center;
}
.zhoukou_a{color:red;

}
.oodd{    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid #ccc;
    position: absolute;
    top: 30px;
    left: 255px;
}
.ddoo{  width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid #ccc;
    position: absolute;
    top: 15px;
    left: 255px;}
 .ddoo_a{
  width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid red;
    position: absolute;
    top: 15px;
    left: 255px;
 }
</style>
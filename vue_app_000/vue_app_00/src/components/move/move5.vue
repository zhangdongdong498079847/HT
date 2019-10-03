<template>
  <div>
    <div class="scrollInA">
      <!-- <div ref="scrollInA"> -->
      <ul class="fio">
        <li
          id="dia"
          @click="changer(index)"
          :class="{fol:goin===index}"
          v-for="(list,index) of lists"
          :key="index"
        >
          {{ list }}
        </li>
      </ul>
      <hr style="border:0.5px solid #ccc; margin-left:20px;" width="100%;" />
      <div class="dts" v-if="goin==0"></div>
      <div class="dta" v-if="goin==1">
        <div class="dts_a" @click="gusl"><a href="http://127.0.0.1:5050/#/move8">全部品牌 ></a></div>
        <div class="dts_ar">
          <p>美妆护肤</p>
          <hr style="width:190px;border:0.5px solid #ccc;" />
        </div>
        <div class="dta_bin">
          <img :src="require('../../assets/res110.png')" alt="" />
          <img :src="require('../../assets/res111.png')" alt="" />
          <img :src="require('../../assets/res112.png')" alt="" />
          <img :src="require('../../assets/res113.png')" alt="" />
          <img :src="require('../../assets/res114.png')" alt="" />
          <img :src="require('../../assets/res115.png')" alt="" />
          <img :src="require('../../assets/res116.png')" alt="" />
          <img :src="require('../../assets/res117.png')" alt="" />
          <img :src="require('../../assets/res118.png')" alt="" />
          <img :src="require('../../assets/res119.png')" alt="" />
          <img :src="require('../../assets/res120.png')" alt="" />
          <img :src="require('../../assets/res121.png')" alt="" />
          <img :src="require('../../assets/res122.png')" alt="" />
          <img :src="require('../../assets/res123.png')" alt="" />
          <img :src="require('../../assets/res124.png')" alt="" />
          <img :src="require('../../assets/res125.png')" alt="" />
        </div>
        <div class="jns">
          <p>个性生活</p>
          <div class="jns_a"></div>
        </div>
        <div class="poins">
          <img :src="require('../../assets/130.png')" alt="" />
          <img :src="require('../../assets/131.png')" alt="" />
          <img :src="require('../../assets/132.png')" alt="" />
          <img :src="require('../../assets/133.png')" alt="" />
        </div>
        <div class="poins_o">
          <img :src="require('../../assets/134.png')" alt="" />
        </div>
      </div>
      <div class="dtc" v-if="goin==2"> 
          <div class="hid">
            <h3>您已经{{ countlist }}没去旅行了</h3>
            <p class="pdn" @click="cp">查看历史信息</p>
          </div>
         <div class="dasen">
             <h3>近期活动</h3><span>全部活动 ></span>
             <div class="scrollInB">
                <div ref="scrollInB">
                    <ul class="ul_a">
                        <li v-for="item of dos" class="ulli_a">
                            <img :src="item.imgUrl" alt="" />
                        </li>
                    </ul>
                </div>
    
            </div>
         </div>
             
          
      </div>
      
    </div>
    
    
    <!-- </div> -->
  </div>
</template>
<script>
  
  export default {
    data() {
      return {
        lists: ["分类", "品牌", "官网"],
        goin: 0,
        bins: ["出行信息", "我的行程"],
        dex: 0,
        countlist: 0,
        starttime: "2018-12-30",
        dos: [
          { imgUrl: require("../../assets/move1.jpg") },
          { imgUrl: require("../../assets/move2.jpg") },
          { imgUrl: require("../../assets/move3.jpg") },
          { imgUrl: require("../../assets/move4.jpg") }
        ],
        scrollX: 0,
        selected: ""
      };
    },
    created() {
      this.sex();
    },

    methods: {
      timeFormat(param) {
        return param < 200 ? "0" + param : param;
      },
      sex(it) {
        var interval = setInterval(() => {
          let newtime = new Date().getTime();
          let start = new Date(this.starttime).getTime();
          let obj = null;
          if (newtime - start > 0) {
            let time = (newtime-start) / 1000;
            let day = parseInt(time / (60 * 60 * 24));
            obj = {
              day: this.timeFormat(day)
            };
          } else {
            obj = {
              day: "00"
            };
            clearInterval(interval);
          }
          this.countlist = obj.day + "天";
        }, 1000);
      },
      cp() {
        this.$router.push("/move7");
      },
      gusl(){
        this.$router.push("/move8");
      },
      cns(index) {
        this.dex = index;
      },
      changer(index) {
        this.goin = index;
        console.log("click");
      },
      Scroll() {
                this.scrollBox = new BScroll(this.$refs.scrollInB, {
                    probeType: 3,
                    scrollX: true,
                });
                this.scrollBox.on("scroll", pos => {
                    this.scrollX = Math.abs(Math.round(pos.x));
                })
            },
        },
      
   
    mounted() {
            this.$nextTick(() => {
                this.Scroll();
            })
            // console.log(BScroll);
        },
  }
</script>
<style>
  .scrollInA {
    position: absolute;
    top: 0;
    left: -30px;
  }

  .fio {
    width: 350px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    overflow: hidden;
    list-style: none;
    margin-top: 10px;
    margin-left: 40px;
  }

  .fio li {
    width: 50px;
    height: 100%;
    text-align: center;
  }

  .fol {
    background: pink;
    border-radius: 5px;
    overflow: hidden;
  }

  .dts {
    width: 100%;
    height: 2000px;
  }

  .dta {
    width: 100%;
    height: 2000px;
  }

  .dts_a {
    width: 90%;
    height: 40px;
    position: absolute;
    left: 45px;
    line-height: 40px;
    text-align: center;
    background: black;
  }

  .dts_a > a {
    color: white;
  }

  .dts_ar {
    width: 150px;
    height: 30px;
    position: absolute;
    top: 130px;
    left: 130px;
  }

  .dts_ar p {
    width: 90px;
    display: block;
    position: relative;
    top: 25px;
    left: 50px;
    background: white;
    text-align: center;
  }

  .dta_bin {
    width: 387px;
    height: 383px;
    position: absolute;
    top: 10%;
    left: 25px;
    background: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .dta_bin img {
    width: 96px;
    height: 94px;
    margin-top: 1px;
  }

  .poins {
    width: 100%;
    height: 100px;
    position: absolute;
    top: 32%;
    left: 27px;
    background: #ccc;
  }

  .poins img {
    width: 96px;
    height: 98px;
    margin-right: 1px;
    margin-top: 1px;
  }

  .poins_o {
    width: 96px;
    height: 99px;
    position: absolute;
    top: 767px;
    left: 27px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }

  .poins_o img {
    width: 96px;
    height: 99px;
  }

  .jns {
    width: 80%;
    height: 40px;
    position: absolute;
    top: 29%;
    left: 65px;
    text-align: center;
  }

  .jns p {
    width: 110px;
    height: 20px;
    margin-left: 97px;
    background: white;
  }

  .jns_a {
    width: 180px;
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 28px;
    left: 55px;
    z-index: -1;
  }

  .dtc {
    width: 390px;
    height: 2000px;
    position: absolute;
    left: 20px;
  }

  .ul_fir {
    width: 250px;
    height: 50px;
    position: absolute;
    left: 10%;
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 50px;
    z-index: 3;
  }

  #fir_a {
    width: 40px;
    height: 45px;
    float: left;
    margin-left: 80px;
    text-align: center;
  }
  #fir_a > div {
    width: 80px;
    height: 50px;
    margin-left: -20px;
  }
  .jut {
    border-bottom: 3px solid black;
    font-weight: bold;
    transform: translate();
  }
  .dtc_a {
    width: 100%;
    height: 2000px;
    position: absolute;
    top: 60px;
  }
  .dtc_b {
    width: 100%;
    height: 2000px;
    position: absolute;
    top: 60px;
  }
  .hid {
    width: 100%;
    height: 200px;
    background: #dfe3e8;
    position: absolute;
    text-align: center;
    top: -15px;
  }
  .hid h3 {
    width: 100%;
    height: 30px;
    position: absolute;
    top: 50px;
  }
  .hid p {
    width: 100%;
    height: 30px;
    position: absolute;
    top: 90px;
  }
  .pdn {
    color: #5d9be8;
  }
 .dasen{
   width:100%;height:300px;
   position:absolute;
   top:185px;
 }
 .dasen h3{width:80px;height:30px;
 position:absolute;
 left:20px;
 }
.dasen span{width:90px;height:30px;
       float: right;
       position: relative;
       top:25px;
       font-size: 15px;
       color: #5d9be8;
}
.dasen_a{width:100%;height:180px;
       position:absolute;
       top:50px;
       display: flex;
       justify-content: space-between;
}
.dasen_a img{width:23%;height:120px;}
.scrollInB{width:100%;
        overflow: hidden;
        position:absolute;
        top:70px;
}
.ul_a{width:500px;
      display: flex;
      flex-wrap:nowrap;
      list-style: none;
      padding:0;
      margin:0;
}
li.ulli_a{flex:1;}
li.ulli_a img{width:100%;
          object-fit:cover; 
}
</style>

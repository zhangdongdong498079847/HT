<template>
    <div>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="外卖" >
                <img slot="icon" :src="require('../../assets/110.png')">
                首页
            </mt-tab-item>
            <mt-tab-item id="66">
                <img slot="icon" :src="require('../../assets/108.png')" @click="fenlei">
                分类
            </mt-tab-item>
            <mt-tab-item id="发现" >
                <img slot="icon" :src="require('../../assets/109.png')" @click="earth">
                全球官网
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" :src="require('../../assets/107.png')">
                购物车
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" :src="require('../../assets/106.png')">
                我的
            </mt-tab-item>
        </mt-tabbar>

        <mt-search v-model="value" placeholder="搜索" cancle-text="取消"></mt-search>
        <img :src="require('../../assets/session.png')" class="session"></img>
        <div class="lbt">

            <mt-swipe :auto="4000" :show-indicators="false" :speed="500">
                <mt-swipe-item><img :src="require('../../assets/shop.jpg')"></mt-swipe-item>
                <mt-swipe-item><img :src="require('../../assets/shop1.jpg')"></mt-swipe-item>
                <mt-swipe-item><img :src="require('../../assets/shop2.png')"></mt-swipe-item>
                <mt-swipe-item><img :src="require('../../assets/shop3.jpg')"></mt-swipe-item>
                <mt-swipe-item><img :src="require('../../assets/shop4.jpg')"></mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="addi">
            <a href="" class="adi"><img :src="require('../../assets/taobao.png')" alt=""></a>
            <a href="" class="adi"><img :src="require('../../assets/taobao1.png')" alt=""></a>
        </div>
        <ul class="tabulate">
            <li><a href=""><img :src="require('../../assets/xz.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/sb.gif')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/mz.gif')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/kh.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/dq.gif')" alt=""></a></li>
        </ul>
        <ul class="tabulate1">
            <li><a href=""><img :src="require('../../assets/yf.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/xp.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/my.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/kx.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/bb.png')" alt=""></a></li>
        </ul>
        <div class="headerimg">
            <a href=""> <img :src="require('../../assets/10.png')" alt=""></a>
        </div>
        <ul class="tabulate2">
            <li><a href=""><img :src="require('../../assets/11.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/12.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/14.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/13.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/15.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/18.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/20.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/17.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/19.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/16.png')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/21.gif')" alt=""></a></li>
            <li><a href=""><img :src="require('../../assets/21.png')" alt=""></a></li>
        </ul>
        <div class="timer">
            <h3>限时抢</h3> <span class="end1">仅剩<span class="end">{{houer}}</span><span class="end">{{min}}</span><span
                    class="end">{{s}}</span></span>
        </div>
        <div class="scrollInX">
            <div ref="scrollInX">
                <ul class="listWrap">
                    <li v-for="item of list" class="listItem">
                        <img :src="item.imgUrl" alt="" />
                    </li>
                </ul>
            </div>

        </div>
        <div class="everyday">
            <img :src="require('../../assets/39.png')" alt="">
            <img :src="require('../../assets/38.png')" alt="">
        </div>
        <div class="mingpai">
            <img :src="require('../../assets/40.png')" alt="">
            <img :src="require('../../assets/41.png')" alt="">
            <img :src="require('../../assets/43.png')" alt="">
            <img :src="require('../../assets/42.png')" alt="">
        </div>
        <div class="fation">
            <img :src="require('../../assets/50.png')" alt="">
            <img :src="require('../../assets/51.png')" alt="">
            <img :src="require('../../assets/52.png')" alt="">
        </div>
        <div class="lux">
            <h3><a href="javascript:;">轻奢主义</a></h3>
            <p>让你的夏季时髦上瘾</p>
            <h4><a href="">更多轻奢单品 ></a></h4>
        </div>
        <div class="shopstar">
            <ul class="starul">
                <li><img :src="require('../../assets/60.jpg')">
                    <p></p>fier
                </li>
                <li><img :src="require('../../assets/61.jpg')">
                    <p></p>DATE
                </li>
                <li><img :src="require('../../assets/62.jpg')">
                    <p></p>jifs
                </li>
                <li><img :src="require('../../assets/63.jpg')">
                    <p></p>LILI
                </li>
                <li><img :src="require('../../assets/70.png')">
                    <p></p>dudu
                </li>
                <li><img :src="require('../../assets/71.png')">
                    <p></p>super
                </li>
                <li><img :src="require('../../assets/72.png')">
                    <p></p>BJdj
                </li>
                <li><img :src="require('../../assets/73.png')">
                    <p></p>DSH
                </li>
                <li><img :src="require('../../assets/80.png')">
                    <p></p>paper
                </li>
                <li><img :src="require('../../assets/81.png')">
                    <p></p>sex
                </li>
                <li><img :src="require('../../assets/82.jpg')">
                    <p></p>shoptime
                </li>
                <li><img :src="require('../../assets/83.png')">
                    <p></p>star
                </li>
            </ul>
        </div>
        <div class="fri">
            <h3>美容彩妆</h3>
            <p>| 万年回购款 这些是真爱</p>
        </div>
        <div class="tejia">
            <img :src="require('../../assets/90.png')" alt="">
            <img :src="require('../../assets/91.png')" alt="">
            <img :src="require('../../assets/92.png')" alt="">
            <img :src="require('../../assets/93.png')" alt="">
        </div>
        <div class="ffp">
            <ul class="ffpul">
                <li><img :src="require('../../assets/101.png')" alt=""></li>
                <li><img :src="require('../../assets/104.png')" alt=""></li>
                <li><img :src="require('../../assets/103.png')" alt=""></li>
                <li><img :src="require('../../assets/105.png')" alt=""></li>
                <li><img :src="require('../../assets/100.png')" alt=""></li>
                <li><img :src="require('../../assets/102.png')" alt=""></li>
            </ul>
        </div>





    </div>
</template>
<script>
    import BScroll from 'better-scroll'
  
    export default {
        data() {
            return {
                countDownList: '00天00时00分00秒',
                actEndTime: '2019-11-19 18:50:00',
                houer: "",
                min: "",
                s: "",
                value:"",
                list: [
                    { imgUrl: require('../../assets/30.jpg') },
                    { imgUrl: require('../../assets/31.jpg') },
                    { imgUrl: require('../../assets/32.jpg') },
                    { imgUrl: require('../../assets/33.jpg') },
                    { imgUrl: require('../../assets/34.jpg') },
                ],
                selected:"",
                scrollX: 0,
            };
        },
        created() {
            this.countDown();

        },

        methods: {
             fenlei(){
             this.$router.push('/move5');
             console.log(1);
             },
            earth(){
                this.$router.push('/move9');
            },
            timeFormat(param) {
                return param < 10 ? '0' + param : param;
            },
            countDown() {
                var interval = setInterval(() => {
                    // 获取当前时间，同时得到活动结束时间数组
                    let newTime = new Date().getTime();
                    // 对结束时间进行处理渲染到页面
                    let endTime = new Date(this.actEndTime).getTime();
                    let obj = null;
                    // 如果活动未结束，对时间进行处理
                    if (endTime - newTime > 0) {
                        let time = (endTime - newTime) / 1000;
                        // 获取天、时、分、秒
                        let day = parseInt(time / (60 * 60 * 24));
                        let hou = parseInt(time % (60 * 60 * 24) / 3600);
                        let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
                        let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
                        obj = {
                            day: this.timeFormat(day),
                            hou: this.timeFormat(hou),
                            min: this.timeFormat(min),
                            sec: this.timeFormat(sec)
                        };
                    } else { // 活动已结束，全部设置为'00'
                        obj = {
                            day: '00',
                            hou: '00',
                            min: '00',
                            sec: '00'
                        };
                        clearInterval(interval);
                    }
                    this.houer = obj.hou + ':时';
                    this.min = obj.min + ':分';
                    this.s = obj.sec + ':秒';
                    this.countDownList = obj.hou + ':时' + obj.min + ':分' + obj.sec + ':秒';
                }, 1000);
            },


            Scroll() {
                this.scrollBox = new BScroll(this.$refs.scrollInX, {
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
    .scrollInX {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        position: absolute;
        top: 210%;
    }

    ul.listWrap {
        list-style: none;
        width: 600px;
        display: flex;
        flex-wrap: nowrap;
        margin: 0;
        padding: 0;
    }

    li.listItem {
        /* width: 100px; */
        flex: 1;
    }

    li.listItem img {
        width: 100%;
        object-fit: cover;
    }




    a {
        text-decoration: none;
    }

    .mint-searchbar-inner {
        padding: 0 !important;
        position: relative;
    }

    .mint-searchbar-inner .mintui-search {
        font-size: 16px;
    }

    .session {
        position: fixed;
        top: 58px;
        left: 86%;
        width: 30px;
        height: 30px;
        z-index: 15;
    }

    .mint-searchbar {
        z-index: 15 !important;
        background-clip: content-box;
        position: fixed !important;
        width: 85%;
    }

    .lbt {
        width: 359px !important;
        height: 260px !important;
        z-index: 10;
        position: relative;
        top: -670px;
    }

    .lbt img {
        width: 100%;
        height: 100%;
    }

    .addi {
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 45%;
    }

    .adi img {
        display: flex;
        width: 190px;
        height: 35px;
    }

    .tabulate {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0px;
        position: absolute;
        top: 50%;
    }

    .tabulate>li {
        width: 23%;
    }

    .tabulate img {
        width: 100%;
        height: 90px;
    }

    .tabulate1 {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0px;
        position: absolute;
        top: 63%;
    }

    .tabulate1>li {
        width: 23%;
    }

    .tabulate1 li {
        padding: 0;
        margin: 0;
    }

    .tabulate1 img {
        width: 100%;
        height: 90px;
    }

    .headerimg {
        width: 100%;
        height: 168px;
        position: absolute;
        top: 77%;
    }

    .headerimg img {
        width: 100%;
        height: 168px;
    }



    .tabulate2 {
        width: 100%;
        height: 630px;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0px;
        position: absolute;
        top: 105%;
    }

    .tabulate2>li {
        width: 49%;
        height: 105px;
    }

    .tabulate2 li {
        padding: 0;
        margin: 0;
    }

    .tabulate2 img {
        width: 100%;
        height: 105px;
    }

    .timer {
        width: 100%;
        height: 50px;
        position: absolute;
        top: 200%
    }

    .app-container {
        height: 4000px;
    }

    .end1 {
        display: block;
        position: absolute;
        top: 23px;
        left: 70px;
        font-size: 15px;
        width: 180px;
        display: flex;
        justify-content: space-around;
    }

    .end {
        border-radius: 50%;
        background: black;
        color: white;
        width: 40px;
        height: 40px;
        line-height: 40px;
        position: relative;
        top: -10px;
    }

    .endshop {
        width: 355px;
        height: 201px;
        position: relative;
        top: 425px;
        overflow: visible;
    }

    .endshop img {
        width: 150px;
        height: 150px;
    }

    .shopban {
        width: 124px;
        height: 13px;
        font-size: 16px;
        text-align: center;
    }

    .shopprice {
        color: red;
        font-size: 12px;
        position: relative;
        left: 15%;
        top: 5%;
        display: block;
    }

    .everyday {
        width: 100%;
        height: 60px;
        position: absolute;
        top: 240%;
        line-height: 60px;
        background: #f6f6f6;
    }

    .everyday img {
        width: 49%;
        height: 39%;
    }

    .mingpai {
        width: 100%;
        height: 350px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: absolute;
        top: 250%;
    }

    .mingpai img:nth-child(1) {
        width: 49%;
        height: 42%;
        margin-bottom: -13px;
    }

    .mingpai img:nth-child(2) {
        width: 49%;
        height: 43%;
    }

    .mingpai img:nth-child(3) {
        width: 49%;
        height: 42%;
        margin-top: -28px;
    }

    .mingpai img:nth-child(4) {
        width: 49%;
        height: 43%;
        position: relative;
        top: -28px;
    }

    .fation {
        width: 100%;
        height: 150px;
        position: absolute;
        top: 295%;
        left: 4%;
        display: flex;
        justify-content: space-between;
    }

    .fation img {
        width: 32%;
        height: 150px;
    }

    .lux {
        width: 100%;
        height: 50px;
        position: relative;
        top: 930px;
        display: flex;
    }

    .lux>h3>a {
        color: black;
    }

    .lux>p {
        font-size: 14px;
        display: block;
        position: relative;
        top: 10px;
        left: 10px;
    }

    .lux>h4>a {
        color: black;
        position: relative;
        left: 35%;
        top: 1px;
    }

    .shopstar {
        width: 375px;
        height: 500px;
        position: absolute;
        top: 325%;
        left: 0;
    }

    .starul {
        width: 100%;
        height: 100%;
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .starul>li {
        width: 25%;
        height: 20%;
        text-align: center;
    }

    .starul>li>img {
        width: 100%;
        height: 100%;

    }

    .fri {
        width: 100%;
        height: 50px;
        position: absolute;
        top: 400%;
        display: flex;
        line-height: 50px;
    }

    .fri>h3 {
        width: 100px;
        height: 40px;
        line-height: 40px;
    }

    .fri>p {
        display: block;
        position: absolute;
        left: 90px;
        color: grey;
        font-size: 15px;
    }

    .tejia {
        width: 100%;
        height: 270px;
        position: absolute;
        top: 410%;
    }

    .tejia img:nth-child(1) {
        width: 50%;
        height: 135px;
    }

    .tejia img:nth-child(2) {
        width: 50%;
        height: 135px;
    }

    .tejia img:nth-child(3) {
        width: 50%;
        height: 115px;
    }

    .tejia img:nth-child(4) {
        width: 50%;
        height: 115px;
    }

    .ffp {
        width: 100%;
        height: 330px;
        position: relative;
        top: 2000px;

    }

    .ffpul {
        width: 100%;
        height: 100%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }

    .ffpul>li {
        width: 32%;
        height: 160px;
    }

    .ffp img {
        width: 100%;
        height: 100%;
    }

    .mint-tabbar {
        z-index: 15;
        height: 50px;
        position: fixed !important;
    }
    .mint-tabbar>a{
        width:50px;height:50px;
    }
    .mint-tab-item{width:50px !important;height:50px !important;
     
    }
</style>
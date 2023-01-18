<template>
  <div class="farms">
    <div class="swiperBox">
      <div class="swiper-prev swiperBtn" @click="$refs.homeSwiper.prev()">
        <img
          :src="
            swiperidx
              ? require('../../assets/images/swiper-prev.png')
              : require('../../assets/images/swiper-prev1.png')
          "
        />
      </div>
      <div class="swiper-next swiperBtn" @click="$refs.homeSwiper.next()">
        <img
          :src="
            swiperidx == bannerList.length - 1
              ? require('../../assets/images/swiper-next1.png')
              : require('../../assets/images/swiper-next.png')
          "
        />
      </div>
      <van-swipe
        class="my-swipe"
        ref="homeSwiper"
        :show-indicators="false"
        :loop="false"
        @change="swiperChange"
      >
        <van-swipe-item
          v-for="(item, i) in bannerList"
          :key="i"
          class="swiperItem"
        >
          <img :src="item" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 2021-12-21 池兑换 -->
    <div class="PoolExchange">
      <div class="ChiduiName">
        <!-- <li>购买</li> -->
        <li>purchase</li>
      </div>
      <div class="ChiduiBox">
        <div class="ChiduiBoxleft">
          <div class="yuene">
            <ul>
              <!-- <li>balance：{{ UsdtBalance }} USDT</li> -->
              <li>balance：{{usdt_balance}} USDT</li>
              <!-- <li ><p></p></li> -->
            </ul>
          </div>
          <div class="Chidui_Usdt">
            <div class="ChiduiIcon">
              <img :src="require('../../assets/images/usdt.png')" alt="" />
            </div>
            <div class="Chidui_Input">
              <!-- <input type="text" placeholder="0"> -->
              <el-input
                placeholder="0"
                :disabled="true"
                v-model="Enterone"
                @keyup.native="onkeyup($event)"
                @keyup.enter.native="onenter"
              ></el-input>
            </div>
            <div class="Chidui_Li">
              <ul>
                <li>USDT</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="ChiduiBoxright">
          <div class="yuene">
            <ul>
              <!-- <li>balance：{{ FISHBalance }} CBB</li> -->
              <li>balance: {{cbb_balance}} CBB</li>
              <li v-if="Crowdfundingdata != []">
                <p>
                  <!-- 1FISH={{ Crowdfundingdata.crowd.price / 10 ** 18 / 1000 }}USDT -->
                </p>
              </li>
            </ul>
          </div>

          <div class="Chidui_Usdt">
            <!-- <div class="ChiduiIcon">
              <img :src="require('../../assets/images/cbbCoin.png')" alt="" />
            </div>
            <div class="Chidui_Input">
              <li>{{ chaxundde }}</li>
            </div>
            <div class="Chidui_Li">
              <ul>
                <li>CBB</li>
              </ul>
            </div> -->
            <div class="ChiduiIcon">
              <img :src="require('../../assets/images/cbbCoin.png')" alt="" />
            </div>
            <div class="Chidui_Input">
              <el-input
                placeholder="0"
                v-model="cbb_input"
                @keyup.native="onkeyup($event)"
                @keyup.enter.native="onenter"
              ></el-input>
            </div>
            <div class="Chidui_Li">
              <ul>
                <li>CBB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="padbpading">
        <div class="Buyzhif" @click="ExchangeBUY()"><li>pay</li></div>
      </div>
    </div>

    <!-- 池信息？？？ -->
    <div class="producs">
      <product
        v-for="(item, i) in PoolallData"
        :key="i"
        :itemData="item"
        :i="i"
        @updataPoolallData="updataPoolallData($event)"
      ></product>
      <!-- <product></product> -->
    </div>
  </div>
</template>

<script>
import "./mobile.css";
import product from "./components/product";
export default {
  name: "farms",
  components: {
    product,
  },
  computed:{
  },
  watch: {
    PoolallData(newVal) {
      // return [1,2,3,4]
      console.log("新数据", newVal);
    },
    cbb_price(newVal){
      console.log('Number(newVal) * 0.001=',Number(newVal) * 0.001)
      return Number(newVal) * 0.001;//
    },
    cbb_input(newVal){
      this.Enterone =  Number(newVal) * 0.001 * this.cbb_price;
    },
  },
  data() {
    return {
      bannerList: [
        require("../../assets/images/homeBanner/banner1.jpg"),
        require("../../assets/images/homeBanner/banner2.jpg"),
      ],
      list: [1, 2, 3, 4, 5],
      swiperidx: 0,
      PoolallData: [
    {
        "PoolData": [
            {
                "0": "0x0F678F9556A7bfd494F602F41D65962eA2E4c03C",
                "1": "868055555555555600",
                "2": "20175968",
                "3": "42571335963911487",
                "4": "20448640209400000000000000",
                "5": true,
                "6": "200",
                "lpToken": "0x0F678F9556A7bfd494F602F41D65962eA2E4c03C",
                "cakePerBlock": "868055555555555600",
                "lastRewardBlock": "20175968",
                "accCakePerShare": "42571335963911487",
                "totalHashRate": 20448640.2093,
                "isBurn": true,
                "outOutMulriple": "200"
            }
        ],
        "Myinformation": [
            {
                "0": "0",
                "1": "0",
                "2": "0",
                "3": "0",
                "4": "0",
                "amount": 0,
                "award": "0",
                "rewardDebt": "0",
                "mined": "0",
                "minedLimit": "0"
            }
        ],
        "TokenName": [
            "FISH"
        ],
        "TokenBalance": [
            0
        ],
        "Tokenincome": [
            0
        ]
    }
], //所有池数据
      isOpen: false,
      PledgeAmount: "", //质押量
      Enterone: "", //
      Crowdfundingdata: [],
      chaxundde: 0,
      UsdtBalance: 0,
      FISHBalance: 0,
      // usdt_balance:0,  //账户usdt余额
      cbb_balance:0,   //测试网cbb账户余额
      usdt_balance:0,  //测试网usdt账户余额
      cbb_input:'',    //输入的cbb兑换币
      cbb_price:1,    //测试网cbb_price
    };
  },

  mounted() {
    // 查询池长度
    this.PoollengthABI();
    // 获取 获取众筹信息
    this.CrowdfundingABI();
    //获取我的U余额
    this.UsdtABI();
    // 查询FISH余额
    this.FishABI();
    // 查询测试网cbb余额
    this.CbbABI()
    // 查询测试网usdt余额
    this.testUsdtABI()
    // 查询测试网cbb价格
    this.testCbbprice()
    console.log('this.PoolallData=',this.PoolallData)
  },
  methods: {
    updataPoolallData(e) {
      console.log("emit  updataPoolallData");
      this.PoolallData = e;
    },
    getPoolallData(e) {
      // console.log(1111111, e);
      this.PoolallData = e;
    },
    swiperChange(e) {
      this.swiperidx = e;
    },

    open() {
      this.isOpen = !this.isOpen;
    },

    onkeyup(event) {
      console.log(event);
      if (event.keyCode != 13) {
        //除回车键外
        //标记当前事件函数的时间戳
        this.lastTimeStamp = event.timeStamp;
        setTimeout(() => {
          //1s后比较二者是否还相同（因为只要还有事件触发，lastTimeStamp就会被改写，不再是当前事件函数的时间戳）
          if (this.lastTimeStamp == event.timeStamp) {
            if (this.cbb_input == "") {
              this.SGTjiage = 0;
              return;
            } else {
              this.InquireSGTToken();
              console.log("输入完后");
            }
          }
        }, 1000);
      }
    },

    onenter() {
      // if (this.Enterone == "") {
      //   this.SGTjiage = 0;
      //   this.chaxundde = 0;
      //   return;
      // } else {
      //   this.InquireSGTToken();
      //   //  this.shurwanhou()
      //   console.log(" 1111");
      // }
      if (this.cbb_input == "") {
        this.SGTjiage = 0;
        this.chaxundde = 0;
        return;
      } else {
        this.InquireSGTToken();
        //  this.shurwanhou()
        console.log(" 1111");
      }
      console.log("发送请求!!!");
    },

    //   查询
    InquireSGTToken() {
      var a = this.cbb_input; //输入的值
      console.log('this.Enterone=',this.cbb_input);
      var tokenAmount = this.Crowdfundingdata.crowd.tokenAmount;
      var price = this.Crowdfundingdata.crowd.price;
      console.log(a);
      console.log(tokenAmount);
      console.log(price);
      var b = (a * tokenAmount) / price;
      console.log(b);
      this.chaxundde = b;
      var tempVal = parseFloat(b).toFixed(3);
      var realVal = tempVal.substring(0, tempVal.length - 1);
      console.log(realVal);
      this.SGTjiage = realVal.toString();
    },

    //兑换
    ExchangeBUY() {
      if (this.cbb_input != "") {
        this.ExchangeBUY2ABI(this.cbb_input,this.Enterone)
      }
    },
  },
};
</script>

<style scoped>
.farms {
  width: 960px;
  margin: 32px auto;
}
.my-swipe {
  width: 960px;
  height: 499px;
  background: #f6f6f6;
  border-radius: 24px;
  position: relative;
}
.swiperItem {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiperItem img {
  width: 100%;
  height: 100%;
}
.swiperBox {
  position: relative;
}

.swiperBtn {
  width: 44px;
  height: 44px;
  transform: translate(0, -50%);
  border-radius: 4px;
  z-index: 9;
  position: absolute;
}
.swiperBtn img {
  width: 100%;
  height: 100%;
}
.swiper-next {
  top: 50%;
  right: 48px;
}
.swiper-prev {
  top: 50%;
  left: 48px;
}
/* ======================= 产品部分 ===================== */
.producs {
  width: 960px;
  margin: 32px auto;
  display: flex;
  flex-wrap: wrap;
}
.producs .product {
  margin-bottom: 24px;
}
.producs .product:nth-child(odd) {
  margin-right: 24px;
}

@media screen and (min-width: 780px) {
  /* 兑换池 */
  .PoolExchange {
    /* height: 180px; */
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    background: #ffffff;
    border-radius: 24px;
    margin-top: 20px;
  }
  .ChiduiName {
    height: 30px;
    /* background: chocolate; */
  }
  .ChiduiName li {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
  }
  .ChiduiBox {
    height: 130px;
    /* background: cyan; */
  }
  .ChiduiBoxleft {
    width: 48%;
    /* height: 200px; */
    /* background: seagreen; */
    float: left;
  }
  .ChiduiBoxright {
    width: 48%;
    /* height: 200px; */

    float: right;
  }
  .ChiduiBoxleft li:nth-child(1) {
    float: left;
  }
  .yuene {
    height: 32px;
    padding-bottom: 14px;
  }
  .ChiduiBoxright li:nth-child(1) {
    float: left;
  }
  .ChiduiBoxright li:nth-child(2) {
    float: right;
  }
  .ChiduiBoxleft li:nth-child(2) {
    float: right;
    width: 100px;
    height: 32px;
    background: linear-gradient(180deg, #a1c4fd, #ceedfc);
    border-radius: 16px;
    border-radius: 24px;
  }
  .ChiduiBoxleft p {
    line-height: 32px;
    text-align: center;
  }
  .Chidui_Usdt {
    height: 36px;
    padding-bottom: 8px;
    border-bottom: 1px solid #accefd;
  }
  .ChiduiIcon {
    width: 36px;
    height: 36px;
    padding-right: 17px;
    float: left;
  }
  .ChiduiIcon img {
    width: 100%;
    height: 100%;
  }
  .Chidui_Input {
    width: 70%;
    height: 36px;
    /* background: aqua; */
    float: left;
  }
  .Chidui_Input li {
    line-height: 36px;
  }
  .Chidui_Li {
    height: 36px;
    float: right;
  }
  .Chidui_Li li {
    line-height: 36px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #333333;
  }
  .Chidui_Input input {
    width: 100%;
    height: 100%;
  }
  .padbpading {
    height: 38px;
    padding-bottom: 30px;
  }
  .Buyzhif {
    width: 220px;
    height: 38px;
    background: linear-gradient(180deg, #a1c4fd, #ceedfc);
    border-radius: 19px;
    margin: 0 auto;
  }
  .Buyzhif li {
    text-align: center;
    line-height: 38px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #1a63da;
    cursor: pointer;
  }
}
</style>

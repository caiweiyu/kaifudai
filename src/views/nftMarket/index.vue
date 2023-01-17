<template>
  <div class="nftMarket" id="nftMarket">
    <div class="navBox">
      <button
        class="navItem"
        :class="{ navActive: navIdx == index }"
        v-for="(item, index) in navList"
        :key="index"
        @click="Typeselection(index)"
      >
        {{ item.title }}
      </button>
    </div>
    <div class="fishiData">
      <ul>
        <li
          v-for="(item, index) in smalloptions"
          :key="index"
          :class="{ active2: navIdx2 == index }"
          @click="nav2Tap(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="hr"></div>
    <div class="nftMarket-content" v-if="navIdx == 0">
      <div
        class="fish"
        v-for="(iten, index) in wholeetworkNFTData"
        :key="index"
        @click="Mygoumai(iten)"
      >
        <div class="fishImgBox">
          <img :src="myBelongingImg(iten.nftId)" alt="" />
        </div>
        <div class="fishBottom">
          <div class="fishName">{{ iten.nftId }}/级</div>
          <div class="bottomItem">
            <span>最新出价</span>
            <p>{{ iten.price / 10 ** 18 }} Fish</p>
          </div>
          <div class="bottomItem">
            <span>用户</span>
            <p>{{ iten.seller.replace(/(.{6}).*(.{4})/, "$1...$2") }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="nftMarket-content" v-if="navIdx == 1">
      <div
        class="fish"
        v-for="(iten, index) in myBelongings"
        :key="index"
        @click="MygetCS(iten, index)"
      >
        <div class="fishImgBox">
          <img :src="myBelongingImg(iten.id)" alt="" />
        </div>
        <div class="fishBottom">
          <div class="fishName">{{ iten.id }}/级</div>

          <div class="bottomItem" v-if="navIdx2 == 0">
            <span>算力</span>
            <p>{{ fishListData.AllData.powers[index] }}</p>
          </div>
          <div class="fishName" v-else>数量：{{ iten.quantity }}</div>
        </div>
      </div>
    </div>

    <div class="nftMarket-content" v-if="navIdx == 2">
      <!-- @click="$router.push('/nftMarketInfo')" -->
      <div class="fish" v-for="(iten, index) in mysaleNFTabiDAta" :key="index">
        <div class="fishImgBox">
          <img :src="myBelongingImg(iten.nftId)" alt="" />
        </div>
        <div class="fishBottom">
          <div class="fishName">{{ iten.nftId }}/级</div>
          <div class="bottomItem">
            <span>价格</span>
            <p>{{ iten.price / 10 ** 18 }}</p>
          </div>
          <div class="bottomItem">
            <span>赎回</span>
            <p @click="CancelTheSale(iten)">赎回</p>
          </div>
        </div>
      </div>
    </div>

    <my-dialog :visible.sync="buyDialogVisible" @close="PledgeTonClose">
      <div class="dialog" v-if="chooseTobuy != ''">
        <h3 class="title">购买</h3>
        <img
          :src="
            require('../../assets/images/mynft/' + chooseTobuy.nftId + '.png')
          "
          alt=""
        />
        <div class="prise">{{ chooseTobuy.price / 10 ** 18 }}</div>
        <div class="btns">
          <button @click="buyDialogVisible = false">取消</button>
          <button @click="tobuyNFT()">支付</button>
        </div>
      </div>
    </my-dialog>

    <my-dialog :visible.sync="sellDialogVisible" @close="PledgeTonClose">
      <div class="dialog" v-if="ChosenData != ''">
        <h3 class="title">出售</h3>
        <!-- <img :src="require('../../assets/images/mynft/1.png')" alt="" /> -->
        <img :src="myBelongingImg(ChosenData.id)" alt="" />
        <div>
          <div class="sellTip">
            <span>出售价格</span>
            <span>Fish</span>
          </div>
          <input type="text" v-model="Uinput" placeholder="请输入出售价格" />
        </div>
我的出售
        <div class="btns">
          <button @click="sellDialogVisible = false">取消</button>
          <button @click="suretosell()">确定</button>
        </div>
      </div>
    </my-dialog>
  </div>
</template>

<script>
import "./mobile.css";
export default {
  name: "nftMarket",
  components: {},
  watch: {
    fishListData(newVal) {
      console.log("新我的nft data", newVal);
      this.myBelongings = newVal.AllData.levels.map((item, i) => {
        console.log(item);
        return {
          id: newVal.index[i],
          quantity: item,
        };
      });
      console.log(" this.myBelongings", this.myBelongings);
    },
  },
  data() {
    return {
      myBelongings: [], // 我的物品列表
      navList: [
        {
          title: "全网出售",
        },
        {
          title: "我的仓库",
        },
        {
          title: "我的出售",
        },
      ],
      smalloptions: [
        {
          id: 1,
          name: "鱼卡",
          Token: "0xfFc97bD992Bde862DB225Cd73f72D69a472a7ACC",
        },
        {
          id: 2,
          name: "鱼苗",
          Token: "0xE95472A7a92edAd0ae6AD11A8638395F160d692c",
        },
        {
          id: 3,
          name: "鱼食",
          Token: "0xF3b0001aA34f4Fb4a2e6d5e7c6e3f62cC033Ac17",
        },
        {
          id: 4,
          name: "鱼缸",
          Token: "0x212bd784721f7552e1f22ec3cf9B7D6094867889",
        },
        {
          id: 5,
          name: "氧气",
          Token: "0x19a2229F86a2B5265D60AD78CcD0A74424fd08D8",
        },
        // {id:5,name:"鱼苗配件",Token:'0x3d12879f48950925Ec2c0a4Bb3d396125aeB1ab6'},
      ],
      navIdx: 0,
      navIdx2: 0,
      buyDialogVisible: false,
      sellDialogVisible: false,
      fishListData: [],
      ChosenData: "", //选中的数据
      Uinput: "",
      wholeetworkNFTData: [], //全网NFT
      mysaleNFTabiDAta: [], //我出售中的NFT
      chooseTobuy: [], //选中购买的
      fishList: [],

      chushouID: "", //出售的ID
    };
  },

  mounted() {
    console.log("进入了");
    this.wholeNetworknft(this.smalloptions[this.navIdx2].Token);
  },
  methods: {
    myBelongingImg(id) {
      var i;
      if (this.navIdx2 == 1) {
        i = 1;
      } else if (this.navIdx2 == 2) {
        i = 2;
      } else if (this.navIdx2 == 3) {
        i = 3;
      } else if (this.navIdx2 == 4) {
        i = 4;
      }
      if (this.navIdx2 == 0) {
        return require("../../assets/images/mynft/" + id + ".png");
      }
      return require("../../assets/images/jpgbox/" + i + "-" + id + ".png");
    },
    Mygoumai(item) {
      console.log(item);
      this.chooseTobuy = item;
      this.buyDialogVisible = true;
    },

    PledgeTonClose() {},

    Typeselection(index) {
      console.log(index);
      this.navIdx = index;
      if (index == 0) {
        this.wholeNetworknft(this.smalloptions[this.navIdx2].Token);
      }
      if (index == 1) {
        this.MyNFTabi2(this.navIdx2, this.smalloptions[this.navIdx2].Token);
      }
      if (index == 2) {
        this.mysaleNFTabi(this.smalloptions[this.navIdx2].Token);
      }
    },
    nav2Tap(item, i) {
      this.navIdx2 = i;
      if (this.navIdx == 0) {
        this.wholeNetworknft(item.Token);
      }
      if (this.navIdx == 1) {
        this.MyNFTabi2(this.navIdx2, this.smalloptions[this.navIdx2].Token);
      }
      if (this.navIdx == 2) {
        this.mysaleNFTabi(this.smalloptions[this.navIdx2].Token);
      }
    },
    //出售
    MygetCS(item, i) {
      if (this.navIdx2 != 0) {
        if (item.quantity == 0) {
          return this.$tip({
            type: "error",
            msg: "数量为0， 不可出售",
          });
        }
      }
      this.chushouID = item.id;
      this.ChosenData = item;
      this.sellDialogVisible = true;
    },
    //出售确认
    suretosell() {
      if (this.navIdx2 == 0) {
        this.suretosell1();
      }
      this.suretosell2();
      return;
    },
    // 出售鱼卡
    suretosell1() {
      // this.sellFixedNftabi(data);

      let data = {
        nftId: this.chushouID,
        price: this.Uinput,
      };
      this.sellMyFishCardAbi(data);
    },
    sellFishCardSuccess() {
      this.$tip({
        type: "success",
        msg: "鱼卡出售成功",
      });
      this.sellDialogVisible = false;
    },
    // 出售其他配件
    suretosell2() {
      let data = {
        token: this.smalloptions[this.navIdx2].Token,
        nftId: this.chushouID,
        price: this.Uinput,
      };
      this.sellMyFishPartsAbi(data);
    },
    sellFishPartSuccess() {
      this.MyNFTabi2(this.navIdx2, this.smalloptions[this.navIdx2].Token);
      this.$tip({
        type: "success",
        msg: "配件出售成功",
      });
      this.sellDialogVisible = false;
    },
    tobuyNFT() {
      console.log(this.chooseTobuy);
      // let data={
      //   orderId:this.chooseTobuy.id,
      // }
      console.log(this.chooseTobuy.id);
      this.tobuyNFTABi(this.chooseTobuy.id);
    },

    //取消出售
    CancelTheSale(iten) {
      console.log("取消出售");
      this.CancelTheSaleABI(iten.id);
    },
    redeemSuccess() {
      this.mysaleNFTabi(this.smalloptions[this.navIdx2].Token);
      this.$tip({
        type: "success",
        msg: "赎回成功",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  width: 277px;
  height: 330px;
  background: #ffffff;
  border-radius: 12px;
  font-size: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  .title {
    font-size: 18px;
  }
  img {
    height: 100px;
    width: auto;
  }
  .prise {
    font-size: 24px;
    font-weight: bold;
    color: #1a63da;
  }
  .sellTip {
    width: 229px;
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 229px;
    border-bottom: 1px solid #eee;
    margin-top: 8px;
  }
  .btns {
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      width: 100px;
      height: 32px;
      background: #ffffff;
      border: 1px solid #1c64da;
      border-radius: 6px;
      font-size: 14px;
    }
  }
}
.nftMarket {
  width: 960px;
  margin: 0 auto;
  margin-top: 32px;
  /* background-color: pink; */
}
.navBox {
  display: flex;
  flex-wrap: wrap;
}
.navBox .navItem {
  width: 124px;
  height: 42px;
  cursor: pointer;
  line-height: 42px;
  text-align: center;
  border: 1px solid #fefefe;
  border-radius: 8px;
  margin-right: 24px;
  font-size: 16px;
  color: #ffffff;
}
.navBox .navActive {
  background: #ffffff;
  font-size: 16px;
  font-weight: bold;
  color: #2c7acf;
}
.hr {
  width: 960px;
  height: 2px;
  margin: 15px 0 15px;
  background: #bed7ff;
}
.nftMarket-content {
  display: flex;
  flex-wrap: wrap;
}
.nftMarket-content .fish {
  width: 302px;
  height: 290px;
  background: #fff;
  border-radius: 12px;
  margin-right: 24px;
  margin-bottom: 24px;
}
.fishImgBox {
  width: 302px;
  height: 196px;
  background: #fffdeb;
  border-radius: 12px 12px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fishImgBox img {
  width: auto;
  height: 90%;
}

.fishName {
  font-size: 15px;
  font-weight: bold;
  color: #333333;
  margin-top: 16px;
  margin-bottom: 10px;
}
.fishBottom {
  padding: 0 20px;
  box-sizing: border-box;
}
.bottomItem {
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: center;
}
.bottomItem span {
  font-size: 12px;
  color: #999999;
}
.bottomItem p {
  font-size: 12px;
  color: #333333;
}
.nftMarket-content .fish:nth-child(3n) {
  margin-right: 0;
}
.fishiData {
  height: 30px;
  padding: 20px 0;
}
.fishiData li {
  display: block;
  margin-right: 10px;
  float: left;
  color: #fff;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 8px;
}
.fishiData ul .active2 {
  color: #2c7acf;
  background-color: #fff;
}
</style>

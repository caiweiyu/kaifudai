<template>
  <div class="product" :class="{ open: isOpen }">
    <div class="product-head">
      <!-- <img class="productIcon" src="@/assets/images/homeSwiper.png" alt="" /> -->
      <img class="productIcon" src="@/assets/images/cbbCoin.png" alt="" />
      <span class="productName">
        <!-- {{ itemData.TokenName[0] }} -->
        CBB
      </span>
      <div style="flex: 1"></div>
      <img
        src="@/assets/images/shouqi.png"
        class="openIcon"
        alt=""
        @click="open"
        :class="{ openStatus: isOpen }"
      />
    </div>
    <div class="nums">
      <!-- <div class="numItem">
        <div class="num">20.65</div>
        <div class="numText">APY(%)</div>
      </div> -->
      <div class="numItem">
        <div class="num">{{itemData.PoolData[0].totalHashRate}}</div>
        <div class="numText">
          <!-- 全网算力(%) -->
          Total network computing power(%)
        </div>
      </div>
    </div>
    <!-- 质押收益解压领取 -->
    <div class="profit">
      <div class="profit_left">
        <h3>{{ itemData.Tokenincome[0] }}</h3>
        <!-- <p>质押收益</p> -->
        <p>Proceeds of pledge</p>
      </div>
      <div class="profit_right">
        <!-- <div class="btn" @click="UnzipF(itemData.Myinformation[0].amount)">解押</div> -->
        <div class="btn" @click="Receiveincome">
          <!-- 领取收益 -->
          Receive income
        </div>
      </div>
    </div>
    <!-- 质押  itemData-->
    <div class="pledge">
      <div class="pledge-title">
        <!-- 已经质押 -->
        Have pledged
      </div>
      <p class="pledge-num">{{ itemData.Myinformation[0].amount }}</p>
      <div class="hr"></div>
      <!-- <div class="calculatedForce">质押获取的算力： 56.03</div> -->
      <!-- <div class="redeem2" @click="liquidity()">liquidity</div> -->
      <div class="redeem" @click="Topledge()">
        pledge
      </div>
    </div>
    <!-- 余额 -->
    <div class="balance">
      <input type="text" v-model="PledgeAmount" placeholder="Please enter quantity" />
      <div class="hr"></div>
      <div class="balanceNum">balance：{{ itemData.TokenBalance[0] }}</div>
      <div class="balanceTip">
        <!-- 余额不足？添加流动性 -->
        Insufficient balance? Add liquidity
      </div>
      <div class="redeem" @click="tiaorbb()">Swap</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      },
    },
    i: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  watch: {
    itemData(newval) {
      console.log("传进来的数据", newval);
    },
  },
  data() {
    return {
      isOpen: false,
      PledgeAmount: 0, //= =！！ 没注意
    };
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen;
    },
    liquidity(){
      console.log('添加流动性')
    },
    Topledge() {
      console.log(this.PledgeAmount);
      if (this.PledgeAmount == "") {
        console.log("请质押");
        return;
      }
      // let data = {
      //   lpToken: this.itemData.PoolData[0].lpToken,
      //   index: this.i,
      //   PledgeAmount: this.PledgeAmount,
      // };
      // console.log(data);
      // this.TopledgeABI(data);
      this.lpSake(this.PledgeAmount)
    },

    // 领取收益
    Receiveincome() {
      this.ReceiveincomeABI(this.i);
    },

    // 解压
    UnzipF(all) {
      console.log(this.i);
      console.log(all);
      this.UnzipFABi(this.i, all);
    },
    pledgeSuccess() {
      this.PledgeAmount = 0;
      this.$tip({
        type:'success',
        msg:'质押成功'
      })
      // this.$message.success("");
    },
    getPoolallData(e) {
      console.log('触发子组件');
      this.$emit("updataPoolallData", e);
    },
    tiaorbb(){
       let href = 'https://pancakeswap.finance/swap' 
window.open(href, '_blank');
    }
  },
};
</script>

<style scoped>
@media only screen and (max-width: 780px) {
  body .product {
    width: 91.4vw;
    height: 20vw;
    overflow: hidden;
    padding: 0 4.2vw;
    border-radius: 6.4vw;
    margin-bottom: 3.2vw;
    transition: all 500ms;
  }
  body .open {
    height: 130vw !important;
  }
  body .product .product-head {
    height: 12.8vw;
    margin: 4vw 0;
  }
  .product .product-head .productIcon {
    width: 12.8vw;
    height: 12.8vw;
    background: #f6f6f6;
  }
  .product .product-head .productName {
    margin-left: 3vw;
    font-size: 4.3vw;
    font-weight: bold;
    color: #333333;
  }
  .product .product-head .openIcon {
    display: block;
    width: 4.2vw;
    height: 2.4vw;
    padding: 2vw;
    /* background-color: red; */
  }
  body .product .nums {
    width: 82.3vw;
    height: 20.5vw;
    margin-bottom: 5.3vw;
    border-radius: 8px;
  }
  body .product .profit {
    width: 82.3vw;
    height: 25vw;
    margin-bottom: 5.3vw;
    border-radius: 8px;
  }
  body .product .profit_left h3 {
    font-size: 6vw;
    margin-top: 4vw;
  }
  body .product .profit_left p {
    font-size: 3vw;
    margin-top: 10px;
  }
  body .product .profit_right {
    padding: 1vw 0;
  }
  body .product .profit_right .btn {
    width: 25vw;
    height: 6vw;
    line-height: 6vw;
    border-radius: 3vw;
    font-size: 3.8vw;
  }
  body .product .numItem:nth-child(1)::after {
    height: 9.8vw;
  }
  .product .nums .numItem .num {
    font-size: 6.4vw;
  }
  .product .nums .numItem .numText {
    font-size: 3.2vw;
    margin-top: 1.3vw;
  }
  body .product .pledge {
    position: relative;
    height: 25.3vw;
  }
  .product .pledge .pledge-title {
    font-size: 3.5vw;
  }
  .product .pledge .pledge-num {
    font-size: 4.8vw;
    margin: 2.6vw 0 1.3vw 0;
  }
  .product .pledge .calculatedForce {
    margin: 3.2vw 0;
    font-size: 3.2vw;
  }
  .product .redeem {
    width: 21.3vw;
    height: 7.5vw;
    line-height: 7.5vw;
    font-size: 3.7vw;
    border-radius: 3.7vw;
  }
  /* ======== 余额 ====== */
  .product .balance {
    height: 18.5vw;
    /* background-color: pink; */
  }
  .product .balance input {
    font-size: 4.3vw;
  }
  .product .balance .balanceNum {
    margin-top: 3.2vw;
    font-size: 3.46vw;
  }
  .product .balance .balanceTip {
    font-size: 2.93vw;
  }
}
.product {
  width: 467px;
  height: 520px;
  background: #ffffff;
  border-radius: 24px;
  padding: 0 32px;
  box-sizing: border-box;
}
.product-head {
  height: 48px;
  margin-top: 32px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.openIcon {
  display: none;
}
.openStatus {
  transform: rotate(180deg);
  transition: all 300ms;
}
.productIcon {
  width: 48px;
  height: 48px;
  background: #f6f6f6;
  border-radius: 50%;
}
.productName {
  margin-left: 11px;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
}
.nums {
  width: 403px;
  height: 77px;
  margin-bottom: 19px;
  background: #e7f3ff;
  border-radius: 8px;
  display: flex;
}
.profit {
  width: 403px;
  height: 120px;
  margin-bottom: 19px;
  background: #e7f3ff;
  border-radius: 8px;
  display: flex;
  padding: 0 23px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.profit_left {
}
.profit_left h3 {
  font-size: 24px;
  font-weight: bold;
  color: #1a63da;
  margin-top: 24px;
}
.profit_left p {
  font-size: 12px;
  margin-top: 10px;
}
.profit_right {
  height: 100%;
  display: flex;
  padding: 15px 0;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-around;
}
.profit_right .btn {
  /* width: 100px; */
  cursor: pointer;
  padding: 5px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #1c64da;
  border-radius: 14px;
  color: #1a63da;
  font-size: 14px;
  font-weight: 700;
}
.numItem {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.numItem:nth-child(1)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 37px;
  background: #a2c5fd;
}
.numItem .num {
  font-size: 24px;
  font-weight: bold;
  color: #1a63da;
}
.numItem .numText {
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  margin-top: 5px;
}
.pledge {
  position: relative;
  height: 95px;
  /* background-color: pink; */
}
.pledge .pledge-title {
  font-size: 13px;
  font-weight: 400;
  color: #333333;
}
.pledge .pledge-num {
  font-size: 18px;
  font-weight: bold;
  color: #1a63da;
  margin: 10px 0 5px 0;
}
.pledge .hr {
  height: 1px;
  background: #eeeeee;
}
.pledge .calculatedForce {
  margin: 12px 0;
  font-size: 12px;
  font-weight: 400;
  color: #999999;
}
.redeem2 {
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 28px;
  padding: 0 5px;
  line-height: 28px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #1a63da;
  cursor: pointer;
  background: linear-gradient(180deg, #a1c4fd, #ceedfc);
  border-radius: 14px;
}
.redeem {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #1a63da;
  cursor: pointer;
  background: linear-gradient(180deg, #a1c4fd, #ceedfc);
  border-radius: 14px;
}
/* ======== 余额 ====== */
.balance {
  position: relative;
  height: 68px;
  /* background-color: pink; */
}
.balance input {
  margin-bottom: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #999999;
  border: none;
}
.balance .hr {
  height: 1px;
  background: #eeeeee;
}
.balance .balanceNum {
  margin-top: 12px;
  font-size: 13px;
  font-weight: 400;
  color: #333333;
}
.balance .balanceTip {
  font-size: 11px;
  font-weight: 400;
  color: #999999;
}

.redeem {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #1a63da;
  background: linear-gradient(180deg, #a1c4fd, #ceedfc);
  border-radius: 14px;
}
</style>

<template>
  <div class="mining" id="mining">
    <div class="left">
      <div class="leftMain">
        <!-- <h3>本期剩余奖池</h3>
        <p class="chi">627,953,817,666</p> -->
        <div class="item1">
          <div>
            <p>{{ MiningInformationData.networkPower }}</p>
            <span>总挖矿算力</span>
          </div>
          <div>
            <p>{{ MiningInformationData.myPower }}</p>
            <span>我的挖矿算力</span>
          </div>
        </div>
        <div class="item2">
          <div>
            <p>{{ Math.round(this.Miningincomet * 10000) / 10000 }}</p>
            <!-- <span>USDY ≈ </span> -->
          </div>
          <button @click="Wkreceivebenefits()">收益</button>
        </div>
      </div>
    </div>
    <!-- v-if="fishListData != '' && indexstatus == 1" -->
    <div class="right">
      <!-- <button>我的NFT</button> -->
      <div class="navs">
        <button
          v-for="(item, i) in navList"
          :key="i"
          @click="switchrequest(i)"
          :class="{ navActive: navIdx == i }"
        >
          {{ item }}
        </button>
      </div>
      <div class="items">
        <!-- 我的NFT -->
        <template v-if="navIdx == 1 && MiningInformationData != ''">
          <div
            class="item"
            v-for="(item, index) in MiningInformationData.ids"
            :key="index"
          >
            <div class="itemTop">
              <div class="tip">等级：{{ item }}</div>
              <!-- <img src="@/assets/images/add.png" alt="" /> -->
              <img   :src="require('../../assets/images/mynft/'+item+'.png')" alt="" />
              <div class="suo"></div>
            </div>
            <!-- <button class="pledgeBtn" @click="MiningpledgeNFT(item)">质押</button> -->
            <button class="updateBtn" @click="NFTjieya(item)">解压</button>
          </div>
        </template>

        <!-- 挖矿中NFT -->
        <template v-if="navIdx == 0">
          <div class="item" v-for="(item, index) in fishListData.AllData.levels" :key="index">
            <div class="itemTop">
              <div class="tip">等级：{{fishListData.index[index]}}</div>
              <!-- <img src="@/assets/images/add.png" alt="" /> -->
              <img
                :src="require('../../assets/images/mynft/' +fishListData.index[index] + '.png')"
                alt=""
              />
              <div class="suo"></div>
            </div>
            <button class="pledgeBtn" @click="MiningpledgeNFT(fishListData.index[index])">
              质押
            </button>
            <!-- <button class="pledgeBtn" @click="NFTjieya(item)">赎回</button> -->
            <!-- <button class="updateBtn">解压</button> -->
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import "./mobile.scss";
export default {
  components: {},
  data() {
    return {
      fishListData: [], //我的NFT
      MiningInformationData: "", //我的个人信息
      Miningincomet: 0,
      navList: ["我的NFT", "我在挖矿NFT"],
      navIdx: 0,
    };
  },
  computed: {},
  mounted() {
    console.log(
      "mountedmountedmountedmountedmountedmountedmountedmountedmountedmountedmounted"
    );
    this.MyMiningInformation();
    //查询所有NFT
    this.MyNFTabi();
  },
  methods: {
    //质押挖矿
    MiningpledgeNFT(item) {
      console.log(item);
      this.MiningpledgeNFTABI(item);
    },
    //解压
    NFTjieya(item) {
      console.log(item);
      this.NFTjieyaABI(item);
    },
    // 领取收益
    Wkreceivebenefits() {
      if (this.Miningincomet == 0) {
        this.$message.error("没有可提取的");
        return;
      }
      this.WkreceivebenefitsABI();
    },
    switchrequest(i) {
      this.navIdx = i;
      if (i == 0) {
        this.MyNFTabi();
      } else {
        this.MyMiningInformation();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  // width: 100%;
  height: 100%;
}

.mining {
  width: 960px;
  margin: 0 auto;
  padding-top: 32px;
  // display: flex;
  // justify-content: space-between;
  color: #333333;
  .left {
    .leftMain {
      width: 100%;
      height: auto;
      background: #ffffff;
      border-radius: 12px;
      padding: 28px 24px;
      box-sizing: border-box;

      > div {
        height: 106px;
        background: #e7f3ff;
        border-radius: 8px;
        margin-bottom: 24px;
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        > div {
          height: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          p {
            font-size: 24px;
            font-weight: bold;
            color: #1a63da;
          }
          span {
            font-size: 14px;
          }
        }
      }
      .item:last-child {
        margin-bottom: 0;
      }
      .item1 {
        > div {
          &:first-child {
            border-right: 1px solid #bbccdd;
          }
        }
      }
      .item2 {
        flex-direction: column;
        align-items: center;
        button {
          width: 74px;
          height: 28px;
          background: #e7f3ff;
          border: 1px solid #1a63da;
          border-radius: 14px;
          font-size: 14px;
          color: #1a63da;
        }
      }
    }
  }
  .right {
    width: 100%;
    .navs {
      margin: 25px 0;
      button {
        width: 124px;
        height: 42px;
        border: 1px solid #fefefe;
        border-radius: 8px;
        font-size: 16px;
        color: #ffffff;
        margin-right: 24px;
      }
      .navActive {
        background-color: #fff;
        font-size: 16px;
        font-weight: bold;
        color: #2c7acf;
      }
    }
    .items {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      .item {
        width: 211px;
        // height: 336px;
        box-sizing: border-box;
        margin-right: 32px;
        margin-bottom: 32px;

        &:nth-child(4n) {
          margin-right: 0;
        }
        .itemTop {
          height: 220px;
          background: #fffdeb;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          .tip {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
            width: 98px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            background: #f6f2cd;
            border-radius: 0px 0px 8px 8px;
            font-size: 14px;
          }
          .suo {
            position: absolute;
            bottom: 20px;
            width: 100%;
            left: 0;
            text-align: center;
            font-size: 16px;
          }
          img {
            height: 150px;
            width: auto;
          }
        }
        button {
          display: block;
          width: 100%;
          height: 42px;
          border-radius: 8px;
          font-weight: bold;
          margin-top: 16px;
          &:hover {
            opacity: 0.8;
          }
        }
        .pledgeBtn {
          background: #1a63da;
          font-size: 18px;
          color: #ffffff;
        }
        .updateBtn {
          border: 1px solid #1a63da;
        }
      }
    }
  }
}
</style>
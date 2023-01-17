<template>
  <div class="blindBox" id="blindBox">
    <div class="topImg"></div>
    <!-- <img src="@/assets/images/blindBoxBanner.png" class="topImg" /> -->
    <div class="blindBoxMian">
      <div
        class="blindBoxItem"
        v-for="(item, index) in blindBoxList"
        :key="index"
        @click="SkipDetails(item, index)"
      >
        <!-- @click="$router.push('/blindBoxInfo')" -->
        <div class="box"></div>
        <div class="box_right">
          <div class="name">
            <ul>
              <li v-if="item.name == 1">lucky Blessing Bag</li>
              <li v-if="item.name == 2">happiness Blessing Bag</li>
              <li v-if="item.name == 3">wealth Blessing Bag</li>
              <li v-if="item.name == 4">freedom Blessing Bag</li>
            </ul>
          </div>
          <div class="buyNum">
            <div>
              <span>total:</span>
              <span>{{ item.total }}</span>
            </div>
          </div>
          <div class="Price">{{ item.price }}</div>
          <div class="buyBtn">
            <span>Price</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./mobile.scss";
export default {
  name: "blindBox",
  data() {
    return {
      blindBoxList: [],
    };
  },

  mounted() {
    console.log("进来了");
    this.AllBlindBoxesABI();
  },
  methods: {
    SkipDetails(item, index) {
      console.log(item);
      console.log(item.currency);
      let data = {
        index: index,
        currency: item.currency, //购买地址
        name: item.name, //名称
        price: item.price, //价格
        total: item.total, //总量
      };

      this.$router.push({ path: "blindBoxInfo", query: { name: data } });
    },
  },
};
</script>

<style lang="scss" scoped>
.blindBox {
  width: 960px;
  margin: 0 auto;
  padding: 32px 0;
  .topImg {  
    width: 960px;
    height: 499px;
    border-radius: 24px;
    margin-bottom: 40px;
    background-image: url(../../assets/images/pc-blindBoxBanner2.png);
    background-size: 100% 100%;
    .blindBoxMian {
      display: flex;
      flex-wrap: wrap;
      .blindBoxItem {
        width: 470px;
        height: 240px;
        background: pink;
        margin-right: 20px;
        margin-bottom: 20px;
        background-image: url("../../assets/images/bindBoxBc.png");
        background-size: 100% auto;
        background-position: bottom;
        display: flex;
        align-items: center;
        .box {
          width: 129px;
          height: 119px;
          background-size: 100% 100%;
          margin: 0 65px 0 43px;
          .box_right {
            flex: 1;
            height: 100%;
            .name {
              margin-top: 40px;
              font-size: 22px;
              font-weight: bold;
              color: #ffffff;
            }
            .buyNum {
              margin-top: 17px;
              font-size: 14px;
              color: #9ca7b2;
              display: flex;
            }
            .buyNum > div {
              flex: 1;
              display: flex;
            }
            .Price {
              margin-top: 16px;
              font-size: 32px;
              font-weight: bold;
              color: #f9ac16;
            }
            .buyBtn {
              width: 121px;
              height: 27px;
              line-height: 27px;
              margin-top: 18px;

              font-size: 14px;
              color: #333333;
              display: flex;
              align-items: center;
              background-image: url(../../assets/images/buyBtn.png);
              background-size: 100%;
            }
            .buyBtn span {
              height: 100%;
              flex: 1;
              text-align: center;
            }
          }
        }
      }
      .blindBoxItem:nth-child(2n) {
        margin-right: 0;
      }
      .blindBoxItem:nth-child(1) .box {
        background-image: url("../../assets/images/box/caifu0.png");
      }
      .blindBoxItem:nth-child(2) .box {
        background-image: url("../../assets/images/box/caifu1.png");
      }
      .blindBoxItem:nth-child(3) .box {
        background-image: url("../../assets/images/box/caifu2.png");
      }
      .blindBoxItem:nth-child(4) .box {
        background-image: url("../../assets/images/box/caifu3.png");
      }
    }
  }
}
</style>

<template>
  <div class="home">
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

    <div class="itemTitle">Farms</div>

    <div class="FarmsBox">
      <div class="FarmsItem" @click="$router.push('/farms')"></div>
      <div class="FarmsItem" @click="$router.push('/farms')"></div>
    </div>

    <!-- <div class="itemTitle">最新拍卖</div> -->
    <div class="fishBox">
      <div
        class="fish"
        v-for="(item, index) in fishList"
        :key="index"
        @click="$router.push('/nftMarketInfo')"
      >
        <div class="fishImgBox">
          <img :src="item.img" alt="" />
        </div>
        <div class="fishBottom">
          <div class="fishName">{{ item.name }}</div>
          <div class="bottomItem">
            <span>最新出价</span>
            <p>{{ item.prise }}w</p>
          </div>
          <div class="bottomItem">
            <span>倒计时</span>
            <p>01:26:21</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./mobile.css";
export default {
  data() {
    return {
      bannerList: [
        require("../../assets/images/homeBanner/banner1.jpg"),
        require("../../assets/images/homeBanner/banner2.jpg"),
      ],
      swiperidx: 0,
      fishList: [
        // {
        //   img: require("../../assets/images/fish/fish1.png"),
        //   prise: 12,
        //   name: "清泠",
        // },
        // {
        //   img: require("../../assets/images/fish/fish2.png"),
        //   prise: 170,
        //   name: " 残破",
        // },
        // {
        //   img: require("../../assets/images/fish/fish3.png"),
        //   prise: 90,
        //   name: " 翩跹",
        // },

        // {
        //   img: require("../../assets/images/fish/fish4.png"),
        //   prise: 10,
        //   name: "尘封",
        // },
        // {
        //   img: require("../../assets/images/fish/fish5.png"),
        //   prise: 2,
        //   name: " 封存",
        // },
        // {
        //   img: require("../../assets/images/fish/fish6.png"),
        //   prise: 67,
        //   name: "把盏",
        // },
        // {
        //   img: require("../../assets/images/fish/fish7.png"),
        //   prise: 30,
        //   name: " 簪花",
        // },
        // {
        //   img: require("../../assets/images/fish/fish8.png"),
        //   prise: 170,
        //   name: " 烟波",
        // },
        // {
        //   img: require("../../assets/images/fish/fish9.png"),
        //   prise: 60,
        //   name: "天穹",
        // },
        // {
        //   img: require("../../assets/images/fish/fish10.png"),
        //   prise: 42,
        //   name: "衣袂",
        // },
        // {
        //   img: require("../../assets/images/fish/fish11.png"),
        //   prise: 32,
        //   name: " 迷惘",
        // },
        // {
        //   img: require("../../assets/images/fish/fish12.png"),
        //   prise: 100,
        //   name: " 游弋",
        // },
        // {
        //   img: require("../../assets/images/fish/fish13.png"),
        //   prise: 76,
        //   name: "殷红",
        // },
        // {
        //   img: require("../../assets/images/fish/fish14.png"),
        //   prise: 58,
        //   name: "倏忽",
        // },
        // {
        //   img: require("../../assets/images/fish/fish15.png"),
        //   prise: 74,
        //   name: " 蓦然",
        // },

        // {
        //   img: require("../../assets/images/fish/fish16.png"),
        //   prise: 24,
        //   name: " 恬淡",
        // },
        // {
        //   img: require("../../assets/images/fish/fish17.png"),
        //   prise: 98,
        //   name: "翕动",
        // },
      ],
    };
  },
  created() {},
  methods: {
    swiperChange(e) {
      this.swiperidx = e;
    },
  },
};
</script>

<style scoped>
.home {
  width: 960px;
  margin: 0 auto;
  padding: 32px 0;
  color: #333333;
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

.itemTitle {
  font-size: 36px;
  font-weight: bold;
  margin: 56px 0 24px 0;
}
.FarmsBox {
  width: 960px;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.FarmsBox .FarmsItem {
  width: 468px;
  height: 263px;
  background: #ffffff;
  border-radius: 24px;
}
.FarmsBox .FarmsItem:nth-child(1) {
  background-image: url(../../assets/images/Farms/farm1.jpg);
  background-size: 100% 100%;
}
.FarmsBox .FarmsItem:nth-child(2) {
  background-image: url(../../assets/images/Farms/farm2.jpg);
  background-size: 100% 100%;
}
.fishBox {
  display: flex;
  flex-wrap: wrap;
}
.fish {
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
.fishBox .fish:nth-child(3n) {
  margin-right: 0;
}
</style>

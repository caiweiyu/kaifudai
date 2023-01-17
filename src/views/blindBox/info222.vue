<template>
  <div class="bindBoxInfo" id="bindBoxInfo">
    <div class="top">
      <div class="boxImg">
        <div
          class="boxcontainerimg"
          v-if="BoxState == 1 && Dynamicparameters != ''"
        >
          <img :src="returnUrl(Dynamicparameters.index)" alt="" />
        </div>

        <div
          class="boxcontainerimg"
          v-if="BoxState == 2 && Dynamicparameters != ''"
        >
          <img
            :src="
              require('../../assets/images/jpgbox/box' +
                Dynamicparameters.index +
                '.gif')
            "
          />
        </div>
        <div class="boxcontainerimg" v-if="BoxState == 3">
          <div class="Afteropening" v-if="SuccessData != ''">
            <div class="Afteropening_DJ">
              <ul>
                <li>等级:{{ SuccessData.level }}</li>
                <li>品种:{{ SuccessData.yuname }}</li>
              </ul>
            </div>
            <div class="AfteropeningIcon">
              <img
                :src="
                  require('../../assets/images/jpgbox/' +
                    SuccessData.yu +
                    '-' +
                    SuccessData.level +
                    '.png')
                "
              />
            </div>
          </div>
        </div>
        <!-- <img src="@/assets/images/jpgbox/cfjpg.gif" alt="" /> -->
      </div>
      <div class="boxInfo">
        <div class="prise">
          <strong>{{ Dynamicparameters.price }} Fish</strong>
          <!-- <span>/条</span> -->
        </div>
        <div class="name">
          <ul>
            <li v-if="Dynamicparameters.name == 1">幸运盲盒</li>
            <li v-if="Dynamicparameters.name == 2">幸福盲盒</li>
            <li v-if="Dynamicparameters.name == 3">财富盲盒</li>
            <li v-if="Dynamicparameters.name == 4">自由盲盒</li>
          </ul>
        </div>
        <div class="tip">
          <span v-if="Dynamicparameters.name == 1"
            >盲盒出勋章的概率百分之10</span
          >
          <span v-if="Dynamicparameters.name == 2"
            >盲盒出勋章的概率百分之20</span
          >
          <span v-if="Dynamicparameters.name == 3"
            >盲盒出勋章的概率百分之20</span
          >
          <span v-if="Dynamicparameters.name == 4"
            >盲盒出勋章的概率百分之15</span
          >
        </div>
        <div class="buyHistory">
          <div class="item">总量：{{ Dynamicparameters.total }}</div>
          <!-- <div class="item">回购：632</div> -->
        </div>
        <!-- 移动端样式排版不同，下面还有个按钮要加上点击事件 -->
        <button @click="BuyblindBox()">立即购买</button>
      </div>
    </div>
    <div class="details">
      <div class="title title1">盲盒详情</div>
      <img class="detailsImg" src="@/assets/images/homeSwiper.png" alt="" />    
         
      <div class="details_bottom">
        <div class="title">盲盒规则</div>
        <!-- <p><span v-for="(item,index ) in Fishinformation" v-bind:key='index'>{{item.name}}{{item.grade}}/级  &nbsp; </span></p> -->
        <template v-if="Dynamicparameters.name == 1">
          <p>
            抽中初级鱼缸的概率为0.3，抽中高级鱼缸的概率0.04，抽中超级鱼缸的概率0.02
          </p>
          <p>抽中一级鱼苗的概率0.3，二级鱼苗0.04三级鱼苗0.02，四级鱼苗0.01</p>
          <p>一级鱼料0.18，二级鱼料百分之0.06，三级鱼料0.03</p>
        </template>
        <template v-if="Dynamicparameters.name == 2">
          <p>
            抽中初级鱼缸的概率为0.2，抽中高级鱼缸的概率0.1，抽中超级鱼缸的概率0.02
          </p>
          <p>抽中一级鱼苗的概率0.2，二级鱼苗0.14三级鱼苗0.02，四级鱼苗0.01</p>
          <p>一级鱼料0.10，二级鱼料百分之0.16，三级鱼料0.05</p>
        </template>
        <template v-if="Dynamicparameters.name == 3">
          <p>
            抽中初级鱼缸的概率为0.1，抽中高级鱼缸的概率0.2，抽中超级鱼缸的概率0.05
          </p>
          <p>抽中一级鱼苗的概率0.1，二级鱼苗0.1三级鱼苗0.1，四级鱼苗0.07</p>
          <p>一级鱼料0.10，二级鱼料百分之0.10，三级鱼料0.08</p>
        </template>
        <template v-if="Dynamicparameters.name == 4">
          <p>
            抽中初级鱼缸的概率为0.05，抽中高级鱼缸的概率0.10，抽中超级鱼缸的概率0.2
          </p>
          <p>抽中一级鱼苗的概率0.05，二级鱼苗0.06三级鱼苗0.1，四级鱼苗0.20</p>
          <p>一级鱼料0.04，二级鱼料百分之0.8，三级鱼料0.12</p>
        </template>
      </div>
      <!-- <button @click="BuyblindBox()">立即购买</button> -->
    </div>
  </div>
</template>

<script>
import "./info.css";
export default {
  data() {
    return {
      BoxState: 1,
      SuccessData: [],
      Dynamicparameters: "",
      Fishinformation: [],
    };
  },

  created() {
    console.log("进来了");
    console.log(this.$route.query.data);
    this.Dynamicparameters = JSON.parse(this.$route.query.data);
    //  盲盒可开出的nft
    // this.CanbeDrawnABI()
  },
  methods: {
    BuyblindBox() {
      console.log("点击了购买");
      if (this.Dynamicparameters == "") {
        this.$message.error("错误");
        return;
      }
      console.log(this.Dynamicparameters);
      let data = {
        boxId: this.Dynamicparameters.index,
        useToken: this.Dynamicparameters.currency,
      };
      this.BuyblindBoxABI(data);
    },
    returnUrl(i) {
      return require("../../assets/images/box/caifu" + i + ".png");
    },
  },
};
</script>

<style >
.bindBoxInfo {
  width: 960px;
  margin: 0 auto;
  color: #333333;
  padding: 32px 0;
}
.top {
  display: flex;
  justify-content: space-between;
}
.boxImg {
  width: 468px;
  height: 323px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boxInfo {
  width: 468px;
  height: 323px;
  background: #ffffff;
  border-radius: 12px;
  padding: 50px 40px 30px 40px;
  box-sizing: border-box;
}
.boxInfo .prise {
  font-size: 36px;
  color: #f9ac16;
}
.boxInfo .name {
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
}
.boxInfo .prise span {
  font-size: 16px;
}
.boxInfo .tip {
  font-size: 14px;
  color: #999999;
  margin-top: 10px;
}
.boxInfo .buyHistory {
  display: flex;
  font-size: 14px;
  margin-top: 20px;
}
.boxInfo .buyHistory .item {
  margin-right: 40px;
}
.boxInfo button {
  width: 100%;
  height: 48px;
  margin-top: 45px;
  line-height: 48px;
  text-align: center;
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb);
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #2c7acf;
}
.bindBoxInfo .details {
  width: 960px;
  margin-top: 24px;
  background-color: #fff;
  border-radius: 12px;
  padding: 55px 70px 29px 70px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.boxcontainerimg {
  width: 300px;
  height: 300px;
  /* background: salmon; */
}
.boxcontainerimg img {
  width: 100%;
  height: 100%;
}
.details .title {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
}
.details .detailsImg {
  margin: 32px 0;
}
.details_bottom {
  width: 100%;
}
.details p {
  font-size: 14px;
  margin-top: 10px;
  color: #666666;
}
.details button {
  display: none;
}
.Afteropening {
  height: 260px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
}
.Afteropening_DJ {
  /* height: 2; */
}
.Afteropening_DJ li {
  text-align: center;
}
.AfteropeningIcon {
  width: 200px;
  height: 200px;
  padding-top: 20px;
  margin: 0 auto;
  /* background: seagreen; */
}
.AfteropeningIcon img {
  width: 100%;
  height: 100%;
}
</style>
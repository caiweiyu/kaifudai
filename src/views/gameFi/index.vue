<template>
  <div class="game-content" id="gamePage">
    <div
      :class="[
        'gameFi',
        gameScene == 0 ? 'bg1' : gameScene == 1 ? 'bg2' : 'bg3',
      ]"
      id="gameFi"
    >
      <img
        src="../../assets/images/game/yutang1.gif"
        :class="[
          gameScene == 0
            ? 'fish-gif1'
            : gameScene == 1
            ? 'fish-gif2'
            : 'fish-gif3',
        ]"
        alt=""
      />

      <div class="head">
        <button class="pledge" @click="MyFishPond()">我的鱼池</button>
        <button class="backHome" @click="$router.replace('/home')">
          回到首页
        </button>
      </div>

      <div class="gameMain">
        <div class="materials">
          <div class="yumiao item" @click="openStore(1)"></div>
          <div class="siliao item" @click="openStore(2)"></div>
          <div class="yuci item" @click="openStore(3)"></div>
          <div class="yangqi item" @click="openStore(4)"></div>
          <div class="cangku item" @click="openEntrepot()"></div>
        </div>
      </div>
    </div>

    <my-dialog :visible.sync="isEntrepot" @close="onClose">
      <div
        :class="[
          'entrepot-wrap',
          entrepotOrStore && !fishStore && 'entrepot-wrap-plus',
        ]"
      >
        <div class="tab-wrap" v-if="!entrepotOrStore || fishStore">
          <ul>
            <li
              v-for="(item, index) in tabName[entrepotOrStore ? 1 : 0]"
              :key="index"
              :class="['item', active === index ? 'active' : null]"
              @click="active = index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="entrepot-content">
          <div class="close-btn" @click="onClose()"></div>
          <div class="title">
            <!-- {{ entrepotOrStore ? `${tabName[0][storeActive]}商城` : '仓库' }} -->
          </div>
          <div
            :class="[
              'hidden-scroll',
              entrepotOrStore && !fishStore && 'hidden-scroll-plus',
            ]"
          >
            <div
              class="entrepot-material material-empty"
              v-if="!materials.length"
            >
              <img src="../../assets/images/game/empty.png" alt="" />
              <span>亲，还没有{{ emptyTips }}哦！</span>
            </div>
            <div
              :class="[
                'entrepot-material',
                entrepotOrStore && !fishStore && 'entrepot-material-plus',
              ]"
              v-else
            >
              <div class="items">
                <div
                  class="material-item"
                  v-for="(item, index) in materials"
                  :key="index"
                >
                  <div class="left">
                    <div class="material-bg" v-if="item.id != undefined">
                      <!-- <img :src="item.img"storeActive /> -->
                      <img
                        :src="
                          require('../../assets/images/jpgbox/' +
                            storeActive +
                            '-' +
                            item.id +
                            '.png')
                        "
                        alt=""
                      />
                    </div>
                    <!-- '../../assets/images/jpgbox/' +
                          storeActive +
                          '-' +
                          item.id +
                          '.png' -->
                    <!-- <span class="money" v-if="entrepotOrStore"
                      >{{ item.money }}u</span> -->
                  </div>
                  <div class="right">
                    <span class="name">等级:{{ item.id }}/级</span>
                    <div class="effect">数量：{{ item.quantity }}</div>
                    <div
                      class="counter"
                      v-if="storeActive == 2 || storeActive == 4"
                    >
                      <img
                        src="../../assets/images/game/minus.png"
                        @click="minus(item)"
                      />
                      <input
                        type="text"
                        v-model="item.num"
                        :input="onChange(item)"
                        :name="index"
                        :id="`material${index}`"
                      />
                      <img
                        src="../../assets/images/game/add.png"
                        @click="add(item)"
                      />
                    </div>
                    <!-- <div class="quantity" v-else>
                      {{ item.quantity }}
                    </div> -->
                    <div
                      class="config-button"
                      v-if="storeActive == 1"
                      @click="PledgefishFarming(item.id)"
                    >
                      <!-- {{ entrepotOrStore ? '购买' : '加入' }} -->
                      饲养
                    </div>
                    <div
                      class="config-button"
                      v-if="storeActive == 2"
                      @click="ToServe(item)"
                    >
                      投食
                    </div>
                    <div
                      class="config-button"
                      v-if="storeActive == 3"
                      @click="UseFishTank(item.id)"
                    >
                      使用
                    </div>
                    <div
                      class="config-button"
                      v-if="storeActive == 4"
                      @click="Useoxygen(item)"
                    >
                      使用
                    </div>
                    <div class="config-button" v-if="storeActive == 5">
                      <li v-if="storeActive == 5">使用</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </my-dialog>

    <my-dialog :visible.sync="PledgeT" @close="PledgeTonClose">
      <div
        :class="[
          'entrepot-wrap',
          entrepotOrStore && !fishStore && 'entrepot-wrap-plus',
        ]"
      >
        <div class="entrepot-content">
          <div class="title">养鱼</div>
          <div class="close-btn" @click="PledgeTonClose()"></div>
          <!-- MyfishpondData -->
          <div class="myFish_main">
            <div
              v-for="(item, index) in MyfishpondData"
              :key="index"
              class="myFish_item"
              
            >
              <div class="myFish_itemHead">
                <img src="@/assets/images/jpgbox/1-1.png" alt="" />
                <div>
                  <p>等级：{{ item.level }}/级</p>
                  <!-- <span>时间：{{ item.startTime }}</span> -->
                  <span>
                    <van-count-down
                      ref="countDown"
                      millisecond
                      :time="
                        (Number(item.startTime) +
                          Number(item.surplusgCycle) -
                          Number(item.dqsj)) *
                        1000
                      "
                      :auto-start="true"
                      format="ss:SS"
                      @finish="finish"
                    />
                  </span>
                </div>
                <!-- <p>放养时间</p> -->
              </div>
              <div class="addRaiseNum">
                可增养次数：{{ item.surplusOxygenLimit }}
              </div>
              <div class="myFish_itemMain">
                <div class="left">
                  <span>{{ item.surplusFoodLimit }}</span>
                  <p>可投鱼食次数</p>
                </div>
                <div class="right">
                  <button @click="Feeding(item)">饲料</button>
                  <button @click="Oxygen(item)">氧气</button>
                </div>
              </div>
              <div class="myFish_itemBottom">
                <div class="radios">
                  <!-- <div class="radio" @click="item.radio = 0">
                    <span :class="{ radioActive: item.radio == 0 }"></span> 鱼苗
                  </div> -->
                  <div class="radio" @click="item.radio = 0">
                    <span :class="{ radioActive: item.radio == 0 }"></span> 鱼卡
                  </div>
                </div>
                <button
                  v-if="
                    item.surplusgCycle == 0 ||
                    Number(item.startTime) + Number(item.surplusgCycle) <
                      currenttime
                  "
                  @click="Receivefishincome(item)"
                >
                  领取收益
                </button>
              </div>
              <!-- <ul class="cesss">
                <li>订单ID：{{ item.id }}</li>
                <li>鱼苗等级：{{ item.level }}</li>
                <li>放养时间：{{ item.startTime }}</li>
                <li>剩余生长周期，秒数：{{ item.startTime }}</li>
                <li>可投鱼食次数：{{ item.surplusOxygenLimit }}</li>
                <li>可增养次数：{{ item.surplusFoodLimit }}</li>
                <button @click="Feeding(item)">投放鱼食按钮</button>
                <button @click="Oxygen(item)">喂氧气按钮</button>
               v-if="
                  item.surplusgCycle == 0 ||
                  Number(item.startTime) + Number(item.surplusgCycle) <
                    currenttime
                " 
                <button @click="Receivefishincome(item.id)">领取收益</button>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </my-dialog>

    <div class="model" v-if="obtainCardShow" @click="obtainCardShow = false">
      <div class="obtainCard" @click.stop="" v-if="incomejGData != ''">
        <div class="close" @click="obtainCardShow = false"></div>
        <h3>收获成功</h3>
        <p>恭喜获得一张鱼卡</p>
        <!-- <img src="@/assets/images/card.png" alt="" /> -->
        <img
          :src="
            require('../../assets/images/jpgbox/' +
              incomejGData.im +
              '-' +
              incomejGData.id +
              '.png')
          "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import "./mobile.scss";
import f1 from "../../assets/images/game/die.png";
export default {
  name: "gameFi",

  computed: {
    emptyTips() {
      let tabName = this.tabName;
      let tips; // 数据为空时的提示关键字
      if (this.entrepotOrStore) {
        tips = this.fishStore
          ? tabName[1][this.active]
          : tabName[0][this.storeActive];
        console.log("yu---", tips);
      } else {
        tips = tabName[0][this.active];
      }
      console.log("tips", tips);
      return tips;
    },
  },
  data() {
    return {
      syu: 0,
      gameScene: 0, // 游戏场景 0 1 2 对应bg1 bg2 bg3
      isEntrepot: false, // 弹框开关
      entrepotOrStore: false, // true 时弹框为商店弹框， false 时为仓库弹框
      PledgeT: false, //质押弹窗
      fishStore: false, // 是否打开鱼苗商店
      NumberOFthrows: 0,
      active: 0, // 仓库内显示tab  0: 鱼缸 1: 鱼苗 2: 饲料 3: 氧气 ---或者---  0: 富贵鱼 1: 吉祥鱼 2: 快乐鱼 3: 自由鱼
      storeActive: 1, //打开的商店索引 0 1 2 3 分别对应 鱼缸 鱼苗 饲料 氧气
      materials: [
        {
          name: "蝶尾金鱼",
          img: f1,
          effect: "90天、加速20%最 多20条",
          quantity: 1,
          money: 108,
        },
      ], // 弹框内显示材料列表 数组
      tabName: [
        // ['鱼缸', '鱼苗', '饲料', '氧气'],
        // ['富贵鱼', '吉祥鱼', '快乐鱼', '自由鱼']
      ],
      MyfishpondData: [], //我的鱼池数据
      Chosen: "", //选中的投食数据
      OxygenSelection: "", //选中的氧气数据
      currenttime: "", //当前的时间戳
      obtainCardShow: false, //获得卡片时的弹窗
      incomejGData: "", //
    };
  },
  created() {},
  mounted() {
    this.LinkBNB(1);
  },
  methods: {
    openEntrepot() {
      this.isEntrepot = true;
      console.log("打开仓库", this.isEntrepot);
    },
    // 商城 材料数量改变时 调用，可在此效验输入内容是否符合要求
    onChange(e) {
      if (isNaN(e.quantity) || e.quantity < 0) {
        e.quantity = 0;
      }
    },
    // 商城 点击材料数量 增加 按钮
    add(item) {
      item.num++;
      return;
      if (isNaN(item.quantity)) {
        this.NumberOFthrows = 0;
      } else {
        this.NumberOFthrows++;
      }
    },
    // 商城 点击材料数量 减少 按钮
    minus(item) {
      if (item.num == 0) {
        return;
      }
      item.num--;
      // if (isNaN(item.quantity) || item < 0) {
      //   this.NumberOFthrows = 0;
      // } else {
      //   this.NumberOFthrows > 0 && this.NumberOFthrows--;
      // }
    },
    // 开启弹框
    openStore(i) {
      this.storeActive = i;
      this.isEntrepot = true; // 开启弹框
      this.entrepotOrStore = true; // 开启弹框内容为商城
      this.fishStore = i === 1; // i 为1时 开启弹框内容为 鱼苗商城
      this.FishinformationABI(i);
    },
    // 关闭弹框  重置相关状态
    onClose() {
      console.log("关闭了弹框");
      this.isEntrepot = false; // 关闭弹框
      this.entrepotOrStore = false; //
      this.fishStore = false; //
    },
    PledgeTonClose() {
      this.PledgeT = false;
    },

    //  质押养鱼
    PledgefishFarming(id) {
      this.PledgefishFarmingABI(id);
    },
    // 使用鱼缸
    UseFishTank(id) {
      this.UseFishTankABI(id);
    },

    // 我的鱼池
    MyFishPond() {
      this.MyFishPondABI();
      this.PledgeT = true;
    },

    // 喂食
    Feeding(item) {
      console.log(item);
      this.Chosen = item.id;
      this.PledgeT = false;
      this.openStore(2);
    },
    ToServe(item) {
      console.log("点击");
      console.log(item);

      if (this.Chosen == "") {
        this.onClose();
        this.MyFishPond();
        return;
      }
      if (item.num == 0) {
        this.$message.error("请输入投放数量");
        return;
      }
      let data = {
        foodId: item.id,
        foodAmount: item.num,
        fryId: this.Chosen,
      };
      console.log(data);
      this.ToServeABI(data);
    },

    // 增加氧气
    Oxygen(item) {
      console.log(item);
      this.OxygenSelection = item.id;
      this.PledgeT = false;
      this.openStore(4);
    },
    Useoxygen(item) {
      if (this.OxygenSelection == "") {
        this.onClose();
        this.MyFishPond();
        return;
      }
      if (item.num == "") {
        this.$message.error("请输入数量");
        return;
      }
      let data = {
        foodId: item.id,
        foodAmount: item.num,
        fryId: this.OxygenSelection,
      };
      this.UseoxygenABI(data);
    },
    //成功了
    Gamesuccess() {
      this.Chosen = "";
      this.OxygenSelection = "";
      this.onClose();
      this.PledgeTonClose();
    },

    //  领取收益
    Receivefishincome(item) {
      console.log(item);
      //  item.radio 0:鱼苗  1:鱼卡
      // this.obtainCardShow = true;
      // return;
      let data = {
        fryId: item.id,
        elect: item.radio,
      };
      this.ReceivefishincomeABI(data);
    },

    // 收益成功
    RevenueSuccessA(data) {
      console.log(data);
      this.incomejGData = data;
      this.obtainCardShow = true;
    },
    finish() {
      console.log(this.syu);
      console.log("结束了");
      // Toast('Auction has ended');
    },
  },
};
</script>

<style lang="scss" scoped>
.game-content {
  width: 100vw;
  overflow-x: auto;
}
.gameFi {
  width: 100vw;
  height: 100vh;
  min-width: 1342px;
  min-height: 743px;
  position: relative;
  background-size: 100% 100%;
  background-image: url(../../assets/images/game/bg1.png);
}
.bg1 {
  background-image: url(../../assets/images/game/bg1.png);
}
.bg2 {
  background-image: url(../../assets/images/game/bg2.png);
}
.bg3 {
  background-image: url(../../assets/images/game/bg3.png);
}

.fish-gif1 {
  width: 40vw;
  min-width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.fish-gif2 {
  position: absolute;
  left: 40%;
  top: 70%;
  width: 250px;
}

.fish-gif3 {
  position: absolute;
  left: 40%;
  top: 40%;
  width: 300px;
}

.materials {
  /* width: 40.6vw; */
  /* height: 15.75vh; */
  /* height: 8.85vw; */
  /* min-width: 617px; */
  /* min-height: 117px; */
  /* max-height: 170px;  */
  /* max-width: 779px; */
  position: fixed;
  bottom: 3.7vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  /* justify-content: space-between; */
}

.materials .item {
  /* min-width: 85px; */
  /* width: 5.78vw; */
  /* height: 100%; */
  width: 117px;
  height: 170px;
  background-size: 100% 100%;
  cursor: pointer;
  margin-left: 56px;
}
.materials .item:first-child {
  margin-left: 0;
}
.materials .item:hover {
  transform: scale(1.1);
}
.yumiao {
  background-image: url("../../assets/images/game/yumiao.png");
}
.siliao {
  background-image: url("../../assets/images/game/siliao.png");
}
.yuci {
  background-image: url("../../assets/images/game/yuci.png");
}
.yangqi {
  background-image: url("../../assets/images/game/yangqi.png");
}
.cangku {
  background-image: url("../../assets/images/game/cangku.png");
}

.entrepot-wrap {
  width: 1111px;
  height: 711px;
  background: url("../../assets/images/game/dialogBg.png");
  background-size: 100% 100%;
  padding: 105px 95px;
  display: flex;
  box-sizing: border-box;
}

.tab-wrap {
  width: 95px;
  height: 502px;
  background: #ffecec;
  display: flex;
  align-items: center;
}

.entrepot-content {
  height: 502px;
  position: relative;
  flex: 1;
}
.myFish_main {
  height: 400px;
  width: 790px;
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}
.myFish_item {
  width: 247px;
  height: 222px;
  background: #ffffff;
  border: 1px solid #844d15;
  border-radius: 8px;
  padding-top: 10px;
  box-sizing: border-box;
  margin-right: 15px;
  margin-bottom: 15px;
}
.myFish_item:nth-child(3n) {
  margin-right: 0;
}
.myFish_itemHead {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #266adb;
}
.myFish_itemHead img {
  width: 32px;
  height: 32px;
  background: #ffecec;
  border-radius: 50%;
  margin: 0 8px;
}
.addRaiseNum {
  font-size: 12px;
  color: #844d15;
  padding-left: 8px;
  margin-top: 8px;
}
.myFish_itemMain {
  height: 70px;
  background: #fbf7ed;
  margin-top: 8px;
  display: flex;
  align-items: center;
}
.myFish_itemMain .left {
  flex: 1;
  margin-left: 8px;
}
.myFish_itemMain .left span {
  font-size: 16px;
  font-weight: 800;
  color: #844d15;
}
.myFish_itemMain .left p {
  font-size: 12px;
  color: #bcaa82;
}
.myFish_itemMain .right {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 8px;
}
.myFish_itemMain .right button {
  width: 56px;
  height: 20px;
  background: #ffffff;
  border: 1px solid #bcaa82;
  border-radius: 10px;
  font-size: 12px;
  color: #844d15;
}
.myFish_itemBottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  /* background-color: pink; */
  height: 50px;
}
.myFish_itemBottom .radios {
  margin-left: 8px;
  font-size: 12px;
  color: #844d15;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.myFish_itemBottom .radios .radio {
  display: flex;
}
.myFish_itemBottom .radios .radio span {
  width: 16px;
  height: 16px;
  background: #ffffff;
  border: 1px solid #bcaa82;
  box-sizing: border-box;
  border-radius: 50%;
  margin-right: 8px;
}
.radioActive {
  /* background-color: red !important; */
  border: none !important;
  background-image: url(../../assets/images/radioBg.png) !important;
  background-size: 100% 100%;
}
.myFish_itemBottom button {
  width: 86px;
  height: 28px;
  background: linear-gradient(180deg, #a1c4fd, #ceedfc);
  border-radius: 14px;
  font-size: 14px;
  color: #fff;
  margin-right: 8px;
}
.entrepot-content .close-btn {
  width: 64px;
  height: 63px;
  background: url("../../assets/images/game/close.png");
  background-size: 100% 100%;
  position: absolute;
  right: -10px;
  top: -10px;
}

.entrepot-content .title {
  font-family: PangMenZhengDao-Cu;
  font-size: 56px;
  color: #bb1311;
  height: 51px;
  line-height: 51px;
  text-align: center;
  padding-top: 23px;
}

.close-btn:hover {
  transform: scale(1.1);
}

.hidden-scroll {
  width: 826px;
  overflow: hidden;
  padding-top: 24px;
}

.hidden-scroll .material-empty {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #844d15;
}

.material-empty img {
  width: 96px;
  height: 89px;
  margin-bottom: 15px;
  margin-left: -10px;
}

.entrepot-material {
  width: 844px;
  padding: 0 28px 26px 28px;
  height: 397px;
  overflow-y: auto;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #844d15;
}

.entrepot-material .material-item {
  width: 247px;
  border: 1px solid #844d15;
  border-radius: 12px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 16px;
  margin-right: 14px;
  float: left;
  padding: 20px 16px 16px;
}
.entrepot-material .material-item:nth-of-type(3n) {
  margin-right: 0;
}
.entrepot-material .items {
  box-sizing: border-box;
}

.entrepot-material-plus {
  width: 939px;
  display: flex;
  justify-content: center;
}

.entrepot-material-plus .items {
  padding-left: 30px;
  width: 844px;
}

.hidden-scroll-plus {
  width: 920px;
}

.material-item .left {
  width: 88px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.material-item .left .material-bg {
  width: 88px;
  height: 99px;
  background: url("../../assets/images/game/materialBg.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.material-bg img {
  width: 47px;
}

.material-item .left .money {
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 800;
  color: #844d15;
  line-height: 30px;
  margin-top: 10px;
}

.material-item .right {
  display: flex;
  flex-flow: column;
  flex: 1;
}

.material-item .right .name {
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #844d15;
  margin-bottom: 4px;
}

.right .quantity {
  margin-bottom: 10px;
}

.material-item .right .counter {
  height: 46px;
  display: flex;
  justify-content: space-between;
}

.right .counter img {
  width: 25px;
  height: 25px;
}

.right .counter input {
  width: 36px;
  height: 25px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #844d15;
  text-align: center;
  flex: 1;
}

.material-item .right .effect {
  height: 42px;
  padding-right: 8px;
  font-size: 13px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #bcaa82;
  line-height: 18px;
}

.right .config-button {
  width: 124px;
  height: 33px;
  background: url("../../assets/images/game/button1.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #844d15;
  cursor: pointer;
  user-select: none;
}
.right .config-button:active,
.right .counter img:active {
  transform: scale(0.99);
}

.tab-wrap ul {
  width: 100%;
}

.tab-wrap ul .item {
  width: 100%;
  height: 56px;
  color: #bb1311;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.active {
  background: #fff;
}

.gameFi .head {
  width: 63.2vw;
  height: 7.5vw;
  /* background-image: url(../../assets/images/game/gameHead.png); */
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 1.1vw;

  .pledge {
    position: absolute;
    top: 2.4vw;
    right: -10.4vw;
    width: 7.6vw;
    height: 2.9vw;
    background-image: url(../../assets/images/game/backHome.png);
    background-size: 100% 100%;
    font-weight: bold;
    color: #ffffff;
  }
  .backHome {
    width: 7.6vw;
    height: 2.9vw;
    background-image: url(../../assets/images/game/backHome.png);
    background-size: 100% 100%;
    position: absolute;
    top: 2.4vw;
    left: -10.4vw;
    font-weight: bold;
    color: #ffffff;
    line-height: 2.9vw;
    text-align: center;
  }
}

.cesss button {
  background: #bb1311;
}

.model {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10020;
}
.obtainCard {
  width: 241px;
  height: 237px;
  background: #ffffff;
  box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.09);
  border-radius: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  color: #844d15;
}
.obtainCard .close {
  width: 30px;
  height: 30px;
  background: url("../../assets/images/game/close.png");
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  top: 0;
}
.obtainCard .close:hover {
  transform: scale(1.1);
}
.obtainCard img {
  width: 68px;
  height: auto;
}
</style>

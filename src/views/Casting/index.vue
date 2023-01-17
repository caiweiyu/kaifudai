<template>
  <div class="casting" id="casting">
    <div class="addBox">
      <div class="add" v-for="(item, i) in addList" :key="i">
        <div class="add_main">
          <div class="add_top" v-if="item.quantity!=0">
            <img :src='"@/assets/images/jpgbox/5-"+item.id+".png"' alt="" />
          </div>
           <div class="add_top" v-if="item.quantity==0">
            <img :src='"@/assets/images/jpgbox/5-"+0+".png"' alt="" />
          </div>
          <div class="addTip">数量：{{item.quantity}}</div>
        </div>
        <!-- <button>添加NFT</button> -->
      </div>
    </div>

         <div class="addBox" v-if="addList==''">
    
        <div class="add">
        <div class="add_main">
          
           <div class="add_top">
            <img :src='"@/assets/images/jpgbox/5-"+0+".png"' alt="" />
          </div>
          <div class="addTip">数量：0</div>
        </div>
      </div>
       <div class="add">
        <div class="add_main">
          
           <div class="add_top">
            <img :src='"@/assets/images/jpgbox/5-"+0+".png"' alt="" />
          </div>
          <div class="addTip">数量：0</div>
        </div>
      </div>
       <div class="add">
        <div class="add_main">
          
           <div class="add_top">
            <img :src='"@/assets/images/jpgbox/5-"+0+".png"' alt="" />
          </div>
          <div class="addTip">数量：0</div>
        </div>
      </div>
       <div class="add">
        <div class="add_main">
          
           <div class="add_top">
            <img :src='"@/assets/images/jpgbox/5-"+0+".png"' alt="" />
          </div>
          <div class="addTip">数量：0</div>
        </div>
      </div>
 </div>
    <div class="casting_main">
      <div class="casting_mainLeft">
        <div v-if="forging==1">
        <div class="head">
          <img src="@/assets/images/fish.png" alt="" />
          <span>Fish world</span>
        </div>
        <div class="item">
          <p>已铸造NFT</p>
          <span>0</span>
        </div>
        <div class="item">
          <p>等级</p>
          <span>0</span>
         </div>
        </div>
         <div v-if="forging==2 &&ForgingresultsData!=''">
        <div class="head">
          <!-- <img src="@/assets/images/fish.png" alt="" /> -->
           <img :src='"@/assets/images/jpgbox/"+ForgingresultsData.yu+"-"+ForgingresultsData.level+".png"' alt="" />
          <span>{{ForgingresultsData.yuname}}</span>
        </div>
        <div class="item">
          <p>已铸造NFT</p>
          <span>{{ForgingresultsData.yuname}}</span>
        </div>
        <div class="item">
          <p>等级</p>
          <span>{{ForgingresultsData.level}}</span>
         </div>
        </div>
        <div class="successRate">
          <span>100%</span>
          <p>铸造成功率</p>
        </div>
        <button class="castingNow" @click="synthesis()">立即铸造</button>
        <!-- <div class="tip">需支付：150,551,562fish</div> -->
      </div>
      <div class="casting_mainRight">
        <h3>铸造规则</h3>
        <p>1、當倒計時少於1小時，每次出價增加10分鐘， 最大可增加為1小時；</p>
        <p>2、拍賣每次固定加價10%，倒計時結束後，拍賣 品由最後出價人獲得；</p>
      </div>
    </div>
  </div>
</template>

<script>
// import "./zzpc.css";
// import "./zzmove.css";
import './mobile.css'
export default {
  name: "Casting",
  components: {},

  data() {
    return {
      addList: [],
      forging:1,
      ForgingresultsData:"",
    };
  },
  
  mounted() {
      console.log("进入了合成")
    //查询鱼苗配件
    // this.FindAccessoriesABI()
    this.FindAccessoriesdetailed([1, 2, 3, 4])
  },

  methods: {
    synthesis(){
    console.log("合成")
    this.synthesisABI()
  }
  },
};
</script>
 
<style scoped>
.casting {
  width: 960px;
  margin: 0 auto;
  color: #333;
  padding: 32px 0;
  box-sizing: border-box;
}
.add {
  margin-right: 23px;
}
.addBox {
  display: flex;
}
.add_main {
  width: 222px;
  height: 330px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.add_top {
  width: 100%;
  height: 265px;
  background-color: #fffdeb;
  display: flex;
  align-items: center;
  justify-content: center;
}
.addTip {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}
.add > button {
  width: 222px;
  height: 68px;
  background: #1a63da;
  border-radius: 16px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 21px;
}

.casting_main {
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
}
.casting_main > div {
  width: 468px;
  height: 451px;
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-sizing: border-box;
}
.casting_mainLeft .head {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
}
.casting_mainLeft .item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.casting_mainLeft .item p {
  font-size: 18px;
  color: #999999;
}
.casting_mainLeft .item span {
  font-size: 18px;
  font-weight: bold;
}
.casting_mainLeft .successRate {
  height: 72px;
  background: #e7f3ff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}
.successRate span {
  font-size: 24px;
  font-weight: bold;
  color: #1a63da;
}
.successRate p {
  font-size: 12px;
}
.castingNow {
  width: 100%;
  height: 48px;
  background: linear-gradient(180deg, #a1c4fd, #ceedfc);
  border-radius: 22px;
  margin-top: 24px;
  font-size: 16px;
  font-weight: bold;
  color: #1a63da;
}
.casting_mainLeft .tip {
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #333333;
  margin-top: 10px;
}
.casting_mainLeft .head img {
  width: 72px;
  height: 72px;
  background: #e7f3ff;
  border-radius: 50%;
  margin-right: 15px;
}
.casting_mainRight h3 {
  font-size: 18px;
  font-weight: bold;
}
.casting_mainRight p {
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
}
</style>

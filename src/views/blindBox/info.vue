<template>
  <div class="bindBoxInfo" id="bindBoxInfo">
    <div class="top">
      <div class="boxImg">
        <div class="boxcontainerimg" v-if="BoxState==1 &&Dynamicparameters!=''">
           <img :src='"@/assets/images/box/caifu"+Dynamicparameters.index+".png"' alt="" />
        </div>
       
       <div class="boxcontainerimg" v-if="BoxState==2 &&Dynamicparameters!=''">
          <img :src='"@/assets/images/jpgbox/box"+Dynamicparameters.index+".gif"' alt="" />
        </div>
        <div class="boxcontainerimg" v-if="BoxState==3">
        

          <div class="Afteropening" v-if="SuccessData!=''">
            <div class="Afteropening_DJ">
              <ul>
                <li>grade:{{SuccessData.level}}</li>
                <li>variety:{{SuccessData.yuname}}</li>
              </ul>
            </div>
            <div class="AfteropeningIcon">
              <img :src='"@/assets/images/jpgbox/"+SuccessData.yu+"-"+SuccessData.level+".png"' alt="">
            </div>
          </div>
        
        </div>
        <!-- <img src="@/assets/images/jpgbox/cfjpg.gif" alt="" /> -->
      </div>
      <div class="boxInfo">
        <div class="prise">
          <strong>{{Dynamicparameters.price}} CBB</strong>
          <!-- <span>/条</span> -->
        </div>
        <div class="name">
            <ul>
              <li v-if="Dynamicparameters.name==1">lucky Blessing Bag</li>
              <li v-if="Dynamicparameters.name==2">happiness Blessing Bag</li>
              <li v-if="Dynamicparameters.name==3">wealth Blessing Bag</li>
              <li v-if="Dynamicparameters.name==4">freedom Blessing Bag</li>
            </ul>
        </div>
        <div class="tip">There is A 10% chance that four different prices of fry are offered and A card is issued</div>
        <div class="buyHistory">
          <div class="item">Total amount：{{Dynamicparameters.total}}</div>
          <!-- <div class="item">回购：632</div> -->
        </div>
        <!-- 移动端样式排版不同，下面还有个按钮要加上点击事件 -->
        <button @click="BuyblindBox()">Buy now</button>
      </div>
    </div>
    <div class="details">
      <div class="title title1">Blessing Bag Details</div>
      <img class="detailsImg" src="@/assets/images/homeSwiper.png" alt="" />    
         
      <div class="details_bottom">
        <div class="title">Blessing Bag rule</div>
        <!-- <p><span v-for="(item,index ) in Fishinformation" v-bind:key='index'>{{item.name}}{{item.grade}}/级  &nbsp; </span></p> -->

        <!-- <p>1、當倒計時少於1小時，每次出價增加10分鐘，最大可增加為1小時；</p>
        <p>2、拍賣每次固定加價10%，倒計時結束後，拍賣品由最後出價人獲得；</p>
        <p>3、當倒計時少於1小時，每次出價增加10分鐘，最大可增加為1小時；</p> -->
        <p>1、When the countdown is less than 1 hour, add 10 minutes to each bid, up to a maximum of 1 hour；</p>
        <p>2、A fixed 10 percent markup is added each time the auction is completed, and the item is awarded to the last bidder after the countdown；</p>
        <p>3、When the countdown is less than 1 hour, add 10 minutes to each bid, up to a maximum of 1 hour；</p>
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
     BoxState:1,
     SuccessData:[],
     Dynamicparameters:"",
     Fishinformation:[],
    };
  },

  
  mounted() {
    console.log('进来了')
   this.Dynamicparameters=this.$route.query.name;
   console.log(this.Dynamicparameters)
   console.log(this.$route.query.name)
  //  盲盒可开出的nft
  // this.CanbeDrawnABI()
  },
  methods: {
   BuyblindBox(){
     console.log("点击了购买")
     if(this.Dynamicparameters==''){
          this.$message.error("错误");
       return
     }
     console.log(this.Dynamicparameters)
     let data={
       boxId:this.Dynamicparameters.index,
       useToken:this.Dynamicparameters.currency,
     }
     this.BuyblindBoxABI(data)
   }
  }

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
  margin-top: 25px;
  line-height: 48px;
  cursor: pointer;
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
.boxcontainerimg img{
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
.Afteropening{
  height: 260px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
}
.Afteropening_DJ{
  /* height: 2; */
}
.Afteropening_DJ li{
  text-align: center;
}
.AfteropeningIcon{
  width: 200px;
  height: 200px;
  padding-top: 20px;
  margin: 0 auto;
  /* background: seagreen; */
}
.AfteropeningIcon img{
  width: 100%;
  height: 100%;
}
</style>
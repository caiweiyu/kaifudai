<template>
  <div class="administrator" id="administrator">
    <div class="main">
      <h3 class="title">管理员添加私募</h3>
      <input type="text" v-model="total" placeholder="总量" /><br />
      <input type="text" v-model="ReleaseCycle" placeholder="释放天数" /><br />
      <input
        type="text"
        v-model="ReleaseEveryCycle"
        placeholder="释放总周期"
      /><br />
      <input type="text" v-model="Who" placeholder="释放给谁" /><br />
      <button class="confirmB" v-if="clickStatus==1" @click="AddPrivateplacement()">添加私募</button>
       <button class="confirmB" v-if="clickStatus==2" >等待中...</button>
    </div>
<!-- 出矿量 -->
     <div class="main">
      <h3 class="title">设置每日出矿量</h3>
      <input type="text" name="" id="" v-model="PoolIDY"  placeholder="池索引">
      <ul>
        <li>每块收益：{{(this.GetDailyoreOutputData.cakePerBlock*28800)/10**18}}</li>
        <li>全网算力:{{(this.GetDailyoreOutputData.totalHashRate)/10**18}}</li>
      </ul>
      <button @click="GetDailyoreOutput()">获取每日出矿量</button>
      <br>
      <input type="text" placeholder="池索引" v-model="Yiindex">
      <input type="text" name="" placeholder="出产量" v-model="Yieldinput">
      <button @click="SetYield()">设置每日出产量</button>
    </div>

 <!-- 私募 -->
  <div class="main">
      <h3 class="title">* 获取nft质押挖矿每日出矿量</h3>
      <ul>
        <li>每块收益:{{(this.nftKKData.cakePerBlock*28800)/10**18}}</li>
        <li>全网算力:{{(this.nftKKData.totalHashRate)}}</li>
      </ul>
      <button @click="InquireNFKKK()">获取nft质押挖矿每日出矿量</button>
      <br>
      <input type="text" placeholder="修改NFT出矿量" v-model="xinsimu">
      <button  @click="AddToXsim()">确定修改NFT出矿量</button>
      <!-- <input type="text"> -->
    </div>

    <!-- 修改盲盒价格  -->
  <div class="main">
      <h3 class="title">* 盲盒价格修改</h3>
        <ul>
          <li>当前价格:{{ChiMHData}}</li>
        </ul>
      <br>
      <input type="text" placeholder="获取盲盒价格" v-model="MHinput">
      <button  @click="GetTheblindboxpriceoftheinput()">获取输入的盲盒价格</button><br><br>
      <!-- <input type="text"> -->
      <input type="text" placeholder="请输入池索引" v-model="Chiindex"><br>
      <input type="text" placeholder="请输入修改价格" v-model="Xiugjiage"><br>
      <br>
      <br>
      <button @click="Modifytheprice()">修改盲盒价格</button>
      
    </div>
    <!-- 提取U -->
      <div class="main">
      <h3 class="title">查询余额</h3>
       <br>
       <li>USDT余额:{{Utokenyue}}</li>
        <button @click="CUSDTa()">查询U余额</button>
       <br>
       <br>
       <input type="text" placeholder="请输入提取多少U" v-model="Utoknell">
       <br>
       <br>
      <button @click="LlingquU()">提取按钮</button>
      
    </div>
  </div>
</template>

<script>
import './mobile.scss'
export default {
  name: "Privateplacement",
  components: {},
  data() {
    return {
      total: "", //总量
      ReleaseCycle: "", //释放周期
      ReleaseEveryCycle: "", //每周期释放
      Who: "", //释放给谁
      clickStatus:1,
      PoolIDY:"",//池ID   获取每日的出矿量
      GetDailyoreOutputData:"",
      Yieldinput:"",//出产量
      Yiindex:"",//出产量索引
      nftKKData:"",
      xinsimu:"",
      MHinput:"",//盲盒索引
      ChiMHData:"",//选中的盲盒价格

      Chiindex:"",//盲和索引
      Xiugjiage:"",//修改价格

      Utokenyue:"",
      Utoknell:"",
    };
  },

  mounted() {},
  methods: {
    AddPrivateplacement() {
       var thip=this;
      if (thip.total == "") {
        thip.$message.error("请输入总量");
        return;
      }
      if (thip.ReleaseCycle == "") {
        thip.$message.error("请输入释放周期");
        return;
      }
      if (this.ReleaseEveryCycle == "") {
        this.$message.error("请输入释放总周期");
        return;
      }
      if (thip.Who == "") {
        thip.$message.error("请输入释放给谁");
        return;
      }
      let data = {
        address: thip.Who,
        total: thip.total,
        period: thip.ReleaseCycle *(86400),
        periodRelease:thip.ReleaseEveryCycle,
      };
       thip.clickStatus=2;
      thip.AddPrivateplacementABI(data);
     
      
    var t=setInterval(function(){
       thip.clickStatus=1;
       clearInterval(t)  
    },3000)
    },



    //获取每日的出矿量
    GetDailyoreOutput(){
      if(this.PoolIDY ==''){
        this.$message.error("请输入");
        return;
      }
      this.GetDailyoreOutputABI(this.PoolIDY)
    },
    SetYield(){

     if(this.Yieldinput==''){
       this.$message.error("请输入出产量");
        return;
     }
      if(this.Yiindex==''){
       this.$message.error("请输入出产量索引 那个池子");
        return;
     }
     let data={
       pid:this.Yiindex,
       perBlockAward:this.Yieldinput/28800,
     }
     this.SetYieldABi(data)
    },

    InquireNFKKK(){
      this.InquireNFKKKABI()
    },
    AddToXsim(){
      if(this.xinsimu==''){
         this.$message.error("请输入 出矿量");
        return;
      }
      this.AddToXsimABi(this.xinsimu)
    },

    // 获取盲盒价格
    GetTheblindboxpriceoftheinput(){
     if(this.MHinput==''){
        this.$message.error("请输入池索引");
        return;
     }
     this.Blindboxprice(this.MHinput)

    },

    // 修改 盲盒价格
   Modifytheprice(){
    if(this.Chiindex==''){
        this.$message.error("请输入池索引");
        return;
     }
     if(this.Xiugjiage==''){
        this.$message.error("请输入修改价格");
        return;
     }
     let data={
       index:this.Chiindex,
       price:this.Xiugjiage,
     }
    this.ModifythepriceABI(data) 
     
   },

  //  查询USDT
  CUSDTa(){
    console.log("查询USDT")
     this.CUSDTaABI()
  },

  LlingquU(){
       if(this.Utoknell==''){
        this.$message.error("请输入提取的数量");
        return;
     }
     this.LlingquUABI(this.Utoknell)
  }

  },
};
</script>

<style  lang='scss' scoped>
.administrator {
  width: 960px;
  margin: 0 auto;
  padding: 30px 0;
  padding-bottom: 76px !important;
  .main {
    background-color: #fff;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 20px;
    margin-top: 10px;
    h3 {
      font-size: 24px;
    }
    input {
      width: 100%;
      height: 60px;
      margin-top: 10px;
      border-bottom: 2px solid #b3d8fc;
      font-size: 20px;
    }
    button {
      height: 45px;
      // width: 96px;
      padding-left: 10px;
      padding-right: 10px;
      background: linear-gradient(180deg, #a1c4fd, #ceedfc);
      border-radius: 22px;
      margin-top: 20px;
      color: #1a63da;
      font-weight: 700;
    }
  }
}

</style>

<template>
  <div class="PrivateEquityBox" id="PrivateEquityBox">
    <div class="mianLeft">
      <div class="item">
        <!-- <span>总私募量(F)</span> -->
        <span>Gross private placement(CBB)</span>
        <p>{{ PrivatePlacementData.total }}</p>
      </div>
      <div class="item">
        <!-- <span>总释放(F)</span> -->
        <span>Total release(CBB)</span>
        <p>{{ PrivatePlacementData.released }}</p>
      </div>
      <div class="item">
        <!-- <span>总人数</span>  -->
        <span>Total number of people</span>
        <p>{{ PrivatePlacementData.userCount }}</p>
      </div>
    
      <!-- <div class="item"  v-if="MyPrivatePlacementData != ''" >
        <span>剩余释放量 (F)</span>
        <p>{{ MyPrivatePlacementData[0].surplus / 10 ** 18 }}</p>
      </div> -->
    </div>

    <div class="mianRight">
      <div class="rightBox rightBox1">
        <h3>mine</h3>
        <ul class="Release"  v-if="MyPrivatePlacementData!=''">
          <!-- <li>释放总量：{{ MyPrivatePlacementData[0].total / 10 ** 18 }} (F)</li> -->
                <li>Total release:{{ MyPrivatePlacementData[0].total / 10 ** 18 }} (CBB)</li>
          <li>
            <!-- 剩余释放量：{{ MyPrivatePlacementData[0].surplus / 10 ** 18 }} (F) -->
            Residual release:{{ MyPrivatePlacementData[0].surplus / 10 ** 18 }} (CBB)
          </li>
          <li>
            <!-- 释放周期：{{ MyPrivatePlacementData[0].period /30/60/60/24}}/月 -->
            Release cycle:{{ MyPrivatePlacementData[0].period /30/60/60/24}}/month
          </li>
          <li>
            <!-- 每周期释放量：{{
              MyPrivatePlacementData[0].periodRelease / 10 ** 18
            }}(F) -->
            The amount released per cycle:{{
              MyPrivatePlacementData[0].periodRelease / 10 ** 18
            }}(F)
          </li>
        </ul>
      </div>

      <div class="rightBox rightBox2">
        <!-- <span>可领取</span> -->
        <span>available</span>
        <p>{{ AvailableForRelease }} (CBB)</p>
        <button @click="receiveSf()">
          <!-- 领取释放 -->
          Claim release
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import "./mobile.scss";
export default {
  name: "Privateplacement",
  components: {}, 
  data() {
    return {
      PrivatePlacementData: [], //私募数据
      MyPrivatePlacementData: [], //我的私募
      AvailableForRelease: 0, //可领取的释放
    };
  },

  mounted() {
    console.log("查询全部私募");
    this.networkInfoABI();
    // 查询我的释放了 领取
    this.ReceivereleaseAbi();
  },
  methods: {
    // 领取释放
    receiveSf() {
      if (this.AvailableForRelease == 0) {
        this.$message.error("没有可领取的释放");
        return;
      }
      this.receiveSfABI();
    },
  },
};
</script>

<style scoped lang="scss">
.PrivateEquityBox {
  width: 960px;
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  color: #333333;

  .mianRight,
  .mianLeft {
    width: 474px;
    border-radius: 12px;
  }
  .mianLeft {
    padding: 0 32px;
    box-sizing: border-box;
    background: #ffffff;
    .item {
      height: 116px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #eee;
      span {
        font-size: 16px;
      }
      p {
        font-size: 32px;
        font-weight: bold;
        color: #1a63da;
      }
    }
  }
  .mianRight {
    .rightBox {
      border-radius: 12px;
      background-color: #fff;
      margin-bottom: 24px;
    }
    .rightBox1 {
      padding: 20px;  
      box-sizing: border-box;
      .Release {
         margin-top: 10px;
         li {
            margin-bottom: 10px;
         }
      }
    }
    .rightBox2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 30px 0;
      span {
        font-size: 16px;
      }
      p {
        font-size: 30px;
        font-weight: bold;
        margin-top: 15px;
      }
      button {
        width: 156px;
        height: 46px;
        margin-top: 30px;
        background: linear-gradient(180deg, #a1c4fd, #ceedfc);
        border-radius: 23px;
        font-size: 18px;
        font-weight: bold;
        color: #1a63da;
      }
    }
  }
}


</style>

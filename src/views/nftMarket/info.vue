<template>
  <div class="nftMarket-info">
    <div class="info_top">
      <div class="info_imgBox">
        <img src="@/assets/images/fish.png" alt="" />
      </div>
      <div class="info_right">
        <img src="@/assets/images/share.png" class="shareIcon" />
        <div class="name">机器鱼</div>
        <div class="countDown"></div>
        <div class="price">
          <div class="priceItem">
            <span>起拍价</span>
            <strong>25,562,500</strong>
          </div>
          <div class="priceItem">
            <span>最新出价</span>
            <strong>25,562,500</strong>
          </div>
        </div>
        <div class="info_right_item">
          <p>加价幅度：￥0.10</p>
          <p>手续费：￥12/次</p>
        </div>
        <div class="info_right_item">
          <p>差价购买：差价</p>
          <p>退币比例：￥4</p>
        </div>
        <div class="lastPrice">上次出价返佣：632,526,412</div>
        <button class="btn">立即出价</button>
      </div>
    </div>
    <div class="info2">
      <div class="info2_item">
        <p>拥有者</p>
        <p>bxB...Xq2RF</p>
      </div>
      <div class="info2_item">
        <p>资产协议</p>
        <p>66526</p>
      </div>
      <div class="info2_item">
        <p>合约地址</p>
        <p>THGV...HeTds9c</p>
      </div>
      <div class="info2_item">
        <p>资产公链</p>
        <p>HFF</p>
      </div>
      <div class="info2_item">
        <p>令牌标识</p>
        <p>49623</p>
      </div>
    </div>
    <div class="AuctionHistory">
      <div class="title">
        <span>拍卖历史</span>
        <p>我的总返佣金：632,555,000</p>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <div class="hide" style="display: none">
          <el-table-column
            class="hide"
            prop="a"
            label="錢包地址"
            style="display: none"
          ></el-table-column>
        </div>

        <el-table-column prop="b" label="Hash"></el-table-column>
        <el-table-column prop="c" label="拍卖价格"></el-table-column>
        <div class="hide">
          <el-table-column prop="d" label="拍賣時間"></el-table-column>
        </div>
        <div class="hide">
          <el-table-column prop="f" label="狀態"></el-table-column>
        </div>
        <el-table-column prop="e" label="返佣"></el-table-column>
      </el-table>
    </div>
    <div class="tip">
      <div class="title">拍卖规则</div>
      1、當倒計時少於1小時，每次出價增加10分鐘，最大可增加為 1小時；
      <br /> <br>
      2、拍賣每次固定加價10%，倒計時結束後，拍賣品由最後出價 人獲得；
    </div>
  </div>
</template>

<script>
import "./info-mobile.css";
import { Table, TableColumn } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default {
  components: {
    elTable: Table,
    elTableColumn: TableColumn,
  },
  data() {
    return {
      tableData: [
        {
          a: "bxB...Xq2RF",
          b: "bxB...Xq2RF",
          c: "4,563,102",
          d: "2021.12.6 14 : 24 : 21",
          e: "1524,563,102",
          f: "--",
        },
        {
          a: "bxB...Xq2RF",
          b: "bxB...Xq2RF",
          c: "4,563,102",
          d: "2021.12.6 14 : 24 : 21",
          e: "1524,563,102",
          f: "--",
        },
        {
          a: "bxB...Xq2RF",
          b: "bxB...Xq2RF",
          c: "4,563,102",
          d: "2021.12.6 14 : 24 : 21",
          e: "1524,563,102",
          f: "--",
        },
        {
          a: "bxB...Xq2RF",
          b: "bxB...Xq2RF",
          c: "4,563,102",
          d: "2021.12.6 14 : 24 : 21",
          e: "1524,563,102",
          f: "--",
        },
      ],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 !== 1) {
        return "singular-row";
      }
      return "";
    },
  },
};
</script>

<style scoped>
div /deep/ .el-table .singular-row {
  background: #eeeeee;
}
.nftMarket-info {
  width: 960px;
  margin: 32px auto;
  color: #333333;
}
.info_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.info_top .info_imgBox {
  width: 456px;
  height: 450px;
  border-radius: 12px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info_top .info_imgBox img {
  width: 200px;
  height: 200px;
}
.info_top .info_right {
  width: 480px;
  height: 450px;
  overflow: hidden;
  background: #ffffff;
  border-radius: 12px;
  padding: 0 40px;
  box-sizing: border-box;
  position: relative;
}
.shareIcon {
  width: 22px;
  height: 22px;
  position: absolute;
  top: 24px;
  right: 24px;
}
.info_top .info_right .name {
  font-size: 24px;
  font-weight: bold;
  margin-top: 40px;
}
.info_right .countDown {
  width: 300px;
  height: 90px;
  background-color: #dfeeff;
  margin-top: 40px;
}
.info_right .price {
  display: flex;
  margin: 20px 0;
}
.info_right .price .priceItem {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #333333;
}
.priceItem span {
  font-size: 14px;
}
.priceItem strong {
  font-size: 24px;
  margin-top: 10px;
}
.info_right_item {
  display: flex;
  margin-bottom: 10px;
}
.info_right_item p {
  flex: 1;
  font-size: 13px;
}
.info_right .lastPrice {
  font-size: 13px;
  font-weight: 400;
  color: #2c7acf;
  margin-bottom: 12px;
}
.info_right .btn {
  width: 400px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb);
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  color: #2c7acf;
}
/* ==================================== */
.info2 {
  width: 960px;
  height: 115px;
  background: #ffffff;
  border-radius: 12px;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  padding: 22px 0;
  box-sizing: border-box;
  position: relative;
}
.info2::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1px;
  height: 70px;
  background: #dddddd;
}
.info2 .info2_item {
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 39px;
  box-sizing: border-box;
  font-size: 14px;
  align-items: center;
}
.AuctionHistory {
  width: 960px;
  /* height: 307px; */
  background: #ffffff;
  border-radius: 12px;
  margin-top: 24px;
  padding: 0 39px;
  padding-top: 30px;
  box-sizing: border-box;
}
.AuctionHistory .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.AuctionHistory .title span {
  font-size: 18px;
  font-weight: bold;
}
.AuctionHistory .title p {
  font-size: 14px;
}
.tip {
  display: none;
}
</style>

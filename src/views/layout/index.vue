<template>
  <div class="layout">
    <!-- 左边工具栏 -->
    <div class="sidebar">
      <!-- <div class="projectName">{{ $route.meta.title || 'Chaoplay Blessing Bag'}}</div> -->
      <div class="projectName">{{'Chaoplay Blessing Bag'}}</div>
      <div class="nav">
        <a
          :href="'#' + item.path"
          class="navItem"
          :class="{ navActive: $route.path == item.path }"
          v-for="(item, index) in routerList"
          :key="index"
        >
          <img :src="item.icon" alt="" />
          <span>{{ item.name }}</span>
        </a>
      </div>
      <img
        src="@/assets/images/openNavBtn.png"
        class="openNavBtn"
        @click="routerBoxShow = !routerBoxShow"
      />
    </div>
    <!-- 移动端侧边导航 -->
    <div
      class="mobile-routerBox"
      v-show="routerBoxShow"
      @click="routerBoxShow = false"
    >
      <div class="routerBox" @click.stop="">
        <a
          :href="'#' + item.path"
          class="routerItem"
          v-for="(item, index) in routerList"
          :key="index"
          @click="routerBoxShow = false"
        >
          <div>
            <img :src="item.icon" alt="" />
            <span>{{ item.name }}</span>
          </div>
          <img
            src="@/assets/images/right.png"
            v-if="$route.path != item.path"
            class="rightIcon"
          />
        </a>
      </div>
    </div>
    <!-- 右边主体 -->
    <main>
      <!-- <head></head> -->
      <div class="layout-head">
        <div class="address" v-if="MyAddress != ''">
          {{ MyAddress.replace(/(.{8}).*(.{8})/, '$1...$2') }}
        </div>
        <div class="address" v-if="MyAddress == ''" @click="LoginQb()">
          <!-- 链接钱包 -->
          Linked wallet
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>

    <!-- 注册弹窗 -->
    <div class="registerModel" v-if="WhetherToregister">
      <div class="Registerpopup">
        <div class="registerTitle">注册</div>
        <div class="lable">邀请人地址</div>
        <input
          type="text"
          placeholder="请输入邀请人地址"
          v-model="InviteAddress"
        /><br />
        <div class="btns">
          <button class="btn" @click="WhetherToregister = false">取消</button>
          <button class="btn" @click="ConfirmRegistration()">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './mobile.css'
export default {
  name: 'layout',
  data () {
    return {
      routerList: [
        {
          //name: '首页',
          name:'Home page',
          path: '/home',
          icon: require('../../assets/images/nav/home.png')
        },
        {
          //name: '私募',
          name:'Private placement',
          path: '/Privateplacement',
          icon: require('../../assets/images/nav/Privateplacement.png')
        },
        {
          name: 'Farms',
          path: '/farms',
          icon: require('../../assets/images/nav/farms.png')
        },
        // {
        //   name: 'NFT market',
        //   path: '/nftMarket',
        //   icon: require('../../assets/images/nav/nftMarket.png')
        // },
        {
          // name: 'NFT 盲盒',
          name:'NFT Blessing Bag',
          path: '/blindBox',
          icon: require('../../assets/images/nav/blindBox.png')
        },
        //  {
        //   name: 'NFT 挖矿',
        //   path: '/mining',
        //   icon: require('../../assets/images/nav/mining.png')
        // },
        // {
        //   name: '铸造',
        //   path: '/Casting',
        //   icon: require('../../assets/images/nav/Casting.png')
        // },
        // {
        //   name: 'Game fi',
        //   path: '/gameFi',
        //   icon: require('../../assets/images/nav/gameFi.png')
        // },
        {
          //name: '项目介绍',
          name:'Project introduction',
          path: '/projectInfo',
          icon: require('../../assets/images/nav/projectInfo.png')
        },
        {
          // name: '我的社区',
          name:'My community',
          path: '/myCommunity',
          icon: require('../../assets/images/nav/myCommunity.png')
        },
        {
          // name: '基金会',
          name:'foundation',
          path: '/foundation',
          icon: require('../../assets/images/nav/foundation.png')
        },
        {
          // name: '元宇宙',
          name:'metaverse',
          path: '/yuanUniverse',
          icon: require('../../assets/images/nav/yuanUniverse.png')
        }
      ],
      routerBoxShow: false,
      MyAddress: '', // 我的地址
      InviteAddress: '', //邀请地址
      WhetherToregister: false //是否注册
    }
  },

  watch: {
    $route () {
      if (
        this.$route.path === '/blindBox' ||
        this.$route.path === '/blindBoxInfo'
      ) {
        document.querySelector('.layout').style.background = '#1d2329'
      } else {
        document.querySelector('.layout').style.background =
          'linear-gradient(180deg, #a1c4fd, #c2e9fb)'
      }
    }
  },
  computed: {},
  mounted () {
    console.log('登录')
    this.LinkBNB()
  },

  methods: {
    loginSuccessful (e) {
      this.MyAddress = e
      console.log('登录成功回来了')
    },

    // 提交注册
    ConfirmRegistration () {
      if (this.InviteAddress == '') {
        console.log('请输入邀请地址')
        return
      }
      this.registerABI(this.InviteAddress)
      console.log('点击了注册')
    },

    LoginQb () {
      this.LinkBNB()
    }
  }
}
</script>

<style scoped>
@media (min-width: 780px) {
  .mobile-routerBox {
    display: none;
  }
}
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(180deg, #a1c4fd, #c2e9fb);
}

.sidebar {
  width: 280px;
  height: 100%;
  background-color: #fff;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    display: none; 
}
.sidebar .projectName {
  font-size: 32px;
  font-weight: bold;
  color: #333333;
  margin: 47px 0 48px 32px;
}
.openNavBtn {
  display: none;
}
.sidebar .nav {
}
.sidebar .nav .navItem {
  width: 232px;
  height: 56px;
  margin-left: 24px;
  margin-bottom: 5px;
  /* background: #ccc; */
  border-radius: 12px;
  display: flex;
  align-items: center;
}
.navActive {
  box-shadow: 0px 7px 16px 0px rgba(1, 6, 28, 0.08);
  background: linear-gradient(180deg, #a1c4fd, #c2e9fb);
}
.sidebar .nav .navItem img {
  width: 17px;
  height: 17px;
  margin: 0 12px 0 20px;
}
.sidebar .nav .navItem span {
  font-size: 14px;
  color: #000;
}
.sidebar .nav .navItem:hover {
  text-decoration: none;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
main .layout-head {
  width: calc(100% - 32px);
  height: 110px;
  margin-left: 32px;
  background-color: #fff;
  border-radius: 0px 0px 8px 24px;
  display: flex;
  align-items: center;
}
main .layout-head .address {
  width: 240px;
  height: 48px;
  margin-left: 60%;
  line-height: 48px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #1a63da;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
}
main .content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}

/* 2021-12-19注册弹窗 */
.registerModel {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgb(0, 0, 0, 0.5);
  z-index: 999;
}
.Registerpopup {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 414px;
  height: 289px;
  background: #ffffff;
  border-radius: 12px;
  padding: 0 48px;
  padding-top: 32px;
  box-sizing: border-box;
  color: #333333;
  font-family: Microsoft YaHei;
}
.registerTitle {
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  text-align: center;
}
.Registerpopup .lable {
  font-size: 14px;
  margin-top: 60px;
}

.Registerpopup input {
  width: 100%;
  border: none;
  border-bottom: 1px solid #eee;
  margin-top: 15px;
  font-size: 16px;
}
.Registerpopup .btns {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 56px;
}
.Registerpopup .btn {
  width: 100px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background: #ffffff;
  border: 1px solid #1c64da;
  border-radius: 6px;
  font-size: 14px;
}
</style>

import Vue from "vue";
import VueRouter from "vue-router";
import layout from "../views/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/gameFi",
    meta: {
      title: "Nft market",
    },
    component: () => import("@/views/gameFi"),
  },
  {
    path: "/",
    name: "",
    component: layout,
    children: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        meta: {
          title: '首页'
        },
        component: () => import("@/views/home"),
      },
      {
        meta: {
          title: '私募'
        },
        path: "/Privateplacement",
        name: "Privateplacement",
        
        component: () => import("@/views/Privateplacement"),
      },
      {
        path: "/farms",
        name: "farms",
        meta: {
          title: 'farms'
        },
        component: () => import("@/views/farms"),
      },
    
      {
        path: "/blindBox",
        name: "blindBox",
        meta: {
          title: "NFT 盲盒",
        },
        component: () => import("@/views/blindBox"),
      },
      {
        path: "/mining",
        name: "mining",
        meta: {
          title: "NFT 挖矿",
        },
        component: () => import("@/views/mining"),
      },
      {
        path: "/blindBoxInfo",
        name: "blindBoxInfo",
        meta: {
          title: "盲盒详情",
        },
        component: () => import("@/views/blindBox/info"),
      },
      {
        path: "/Casting",
        name: "Casting",
        meta: {
          title: "铸造",
        },
        component: () => import("@/views/Casting"),
      },
      {
        path: "/nftMarket",
        name: "nftMarket",
        meta: {
          title: "Nft market",
        },
        component: () => import("@/views/nftMarket"),
      },
      {
        path: "/nftMarketInfo",
        name: "nftMarketInfo",
        meta: {
          title: "Nft market详情",
        },
        component: () => import("@/views/nftMarket/info"),
      },
      {
        path: "/projectInfo",
        name: "projectInfo",
        meta: {
          title: "项目介绍",
        },
        component: () => import("@/views/projectInfo"),
      },
      {
        path: "/myCommunity",
        name: "myCommunity",
        meta: {
          title: "我的社区",
        },
        component: () => import("@/views/myCommunity"),
      },
      {
        path: "/foundation",
        name: "foundation",
        meta: {
          title: "基金会",
        },
        component: () => import("@/views/foundation"),
      },
      {
        path: "/yuanUniverse",
        name: 'yuanUniverse',
        meta: {
          title: "元宇宙",
        },
        component: () => import("@/views/yuanUniverse"),
      },
      {
        path: "/Administrator",
        name: "Administrator",
        meta: { 
          title: "管理",
        },
        component: () => import("@/views/Administrator"),
      },
      {
        path: "*",
        meta: {
          title: "404",
        },
        component: () => import("@/views/layout/404"),
      },
    ],
  },
];
// yuanUniverse
const router = new VueRouter({
  routes,
});

export default router;

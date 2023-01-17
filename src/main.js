import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//css
import "./assets/css/initialization.css";
import "./assets/css/index.css";
Vue.config.productionTip = false;
//在main.js引入
import Web3 from 'web3'
Vue.prototype.Web3 = Web3

// 导入api.js 方法
import BNB from './abi/BNB'; 
Vue.use(BNB)



//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import Vant from 'vant'
import 'vant/lib/index.css';
Vue.use(Vant)

import { CountDown } from 'vant';
Vue.use(CountDown);

import {tip} from './utils/tip'
Vue.prototype.$tip = tip

import MyDialog from "@/components/MyDialog.vue";
Vue.component('MyDialog',MyDialog) 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

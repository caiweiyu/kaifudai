import Web3 from "web3";
import Vue from 'vue';
import DepositPooljsonAbi from '@/abi/DepositPool.json';//挖矿合约ABI
import FishTokenjsonAbi from '@/abi/FishToken.json';//fish代币 ABI
import LpTokenjsonAbi from '@/abi/LpToken.json';// LP 代币ABI
import RelationjsonAbi from '@/abi/Relation.json';// 关系合约ABI

import CrowdDaoAbi from '@/abi/CrowdDao.json';// 认购合约
import MysteryBoxAbi from '@/abi/MysteryBox.json';//盲盒ABI
import ReleaseAbi from '@/abi/Release.json';//私募合约
import ERCNFTabi from '@/abi/ERC721Enumerable.json';//鱼的NFTabi
import ERCyuabi from '@/abi/ERC721.json';
import FryNFTAbi from '@/abi/ERC1155.json';//鱼苗的NFT abi
import NcompAbi from '@/abi/Ncomp.json';//NcompABI
import NgrowthAbi from '@/abi/Ngrowth.json';//饲养ABI


import NmarketAbi from '@/abi/Nmarket.json';
import NmineAbi from '@/abi/Nmine.json';//
import NadminAbi from '@/abi/Nadmin.json';

//获取余额usdt abi
import balance_usdt from '@/abi/balance.json'
//cbb购买预约券授权合约地址 abi
import cbbbuyticketapprove from "@/abi/cbbbuyticketapprove.json"
import cbbbuyticketapprove2 from "@/abi/cbbbuyticketapprove2.json"
//cbb测试网
import ceshicbb from "@/abi/ceshicbb.json"
//usdt测试网
import ceshiusdt from "@/abi/ceshiusdt.json"
//lpsakeabi
import lpsakeabi from "@/abi/lpsakeabi.json"
//usdt授权
import usdt_approve from "@/abi/usdt_approve.json"
//cbb授权
import cbb_approve from "@/abi/cbb_approve.json"
//sake授权
import sake_addr from "@/abi/sake_addr.json"

import buycbbtest from "@/abi/buycbbtest.json"

import { Toast } from 'vant';
Vue.use(Toast);
export default {
  install(Vue, options) {

    var web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    var WalletAddress = '';//我的地址
    // var FishToken = '0x0CeF31A468BA7159c1Ce73afe91e041c6bC41fa4';// fish代币
    // var LpToken = "0x40ad44a19953Cd0F51079f64d966fff9cd898418";//LP代币
    // var Relation = '0xA904C257FDf96CCE7F78e085947FbA11EC2C1776';//关系合约
    // var DepositPool = '0xeF81d26e10aCb33042858cf26b0329a3dFE8EA83';//挖矿合约
    // var USDTtoken = '0x5CA7325Bdb1aB7c814d2EAf760eE4221FB86Ef88';
    // var CrowdDaoToken = '0x2D92cF5C0Cf3550Dd570555a341324Dcb784C21B';//认购合约
    // var MysteryBoxToken = '0xE12dc439f473512fd42fFaB0Aee9AE5aEAd54dC2';//盲盒合约
    // var ReleaseToken = '0x690DDd447055d3C2477B167BEDC24A400813cB93';//私募合约
    // var NcompToken = '0xF5c1B2351ccfc5F92D6D3019E472424aB6432D58';//合成



    // var FryNFTToken = '0xeE89690a9E459a507820489BADE7B5823146C1B7';//鱼苗
    // var fishfoodToken = '0x0a5B64472cd7679E91DEc9Bb01D431ce8a45CaA2';//鱼食
    // var FishingrodToken = '0x3e93c0Eb907E2CbC55078830CDEa4D602d5B7386';//鱼缸
    // var FishoxygenTokne = '0x5BA410296790b21279aeC65F97eF5eE5729066DE';//氧气
    // var FryAccessoriesToken = '0x39C71Bd76978Aad169F9DdFF07aC86845bac045E';//鱼苗配件
    // var ERCNFTToken = '0xca32536f419F8085b1eA272A9b1D6a37b164249C';//鱼卡FNT

    // var RearingToken = '0xf7B0d71D1153Bd6f781228B1D7216e323C960e59';//饲养


    // var NmarketToken = '0xf0CE90f1df8b9d8b2dcD9C96b97DFd082953bf46';//市场
    // var NmineToken = '0xd2ecf88c80aad21B11226127937a4639A5F07727';//挖矿

    //  正式链
    // var FishToken='0x5d049cfa912d63086385f61f44ea9de7A552e2f3';// fish代币
    // var ReleaseToken='0x8503F0006d1D5E6Eb0Bb71f72B4187F04238FfEb';//私募合约
    var FishToken = '0x0F678F9556A7bfd494F602F41D65962eA2E4c03C';// fish代币111
    var LpToken = "0x40ad44a19953Cd0F51079f64d966fff9cd898418";//LP代币
    var Relation = '0xA904C257FDf96CCE7F78e085947FbA11EC2C1776';//关系合约
    var DepositPool = '0x336a542fe7FD8bc0cA37Ff4f31A81Fe5Cb7ef669';//挖矿合约2222
    var USDTtoken = '0x55d398326f99059fF775485246999027B3197955';// USDT222
    var CrowdDaoToken = '0xcCA89336d38f6e4Ae0B63d67bd8718F048BcD7c1';//认购合约2222
    var MysteryBoxToken = '0xBd2e7E4Ac254C6ECEBfcb65619143c9D5095f95D';//盲盒合约222
    var ReleaseToken = '0x8503F0006d1D5E6Eb0Bb71f72B4187F04238FfEb';//私募合约222
    var NcompToken = '0xC23184Cf9aF3C57f92C0A7756128950FfCF4E548';//合成111



    var FryNFTToken = '0xE95472A7a92edAd0ae6AD11A8638395F160d692c';//鱼苗111
    var fishfoodToken = '0xF3b0001aA34f4Fb4a2e6d5e7c6e3f62cC033Ac17';//鱼食111
    var FishingrodToken = '0x212bd784721f7552e1f22ec3cf9B7D6094867889';//鱼缸111
    var FishoxygenTokne = '0x19a2229F86a2B5265D60AD78CcD0A74424fd08D8';//氧气1111
    var FryAccessoriesToken = '0x3d12879f48950925Ec2c0a4Bb3d396125aeB1ab6';//鱼苗配件111
    var ERCNFTToken = '0xfFc97bD992Bde862DB225Cd73f72D69a472a7ACC';//鱼卡FNT111

    var RearingToken = '0xF7774F1669c1724aB961F5f62D8FD93d4ed88594';//饲养111


    var NmarketToken = '0x4ebdE70eF149E1b0DA80BCAa23B66207e4750fb1';//市场111
    var NmineToken = '0x5A1a9DFcBd37b7B9695Ad037F26d342E7D4C1b5f';//NFT挖矿111
    var NadminToken = '0x56f4778a333c4a8bE0EF73785E1139F2C316f9da';//nft信息管理

    //获取usdt余额账户合约地址
    var balance_addr = "0x9f37055A4BA925E0678E7447e2164CD833bf3F18"
    //cbb购买预约券授权合约地址
    var approve_addr = "0x021951c4eed886f3a3DffeCbD4B644B74A24CF31";
    var approve_addr2 = '0x72E8DddfB9Dd8E053390ad569d7C01a3Ef6E5Ed4'

    //质押usdt代币+cbb代币合约地址
    var usdt_approve_addr = '0x9f37055A4BA925E0678E7447e2164CD833bf3F18'
    var cbb_approve_addr = '0x021951c4eed886f3a3DffeCbD4B644B74A24CF31'
    //质押合约地址
    var lpsakeabi_addr = '0x596a78BDA9830e0ED05f1e4E4Ce0Fbf381ce5ef0'
    var lpsakeabi_addr2 = '0x0D079A713a6eE5D713368eA23036Fa4702A2242C'

    // usdt_approve_addr
    var usdt_approve_addr = '0x9f37055A4BA925E0678E7447e2164CD833bf3F18'
    // cbb_approve_addr
    var cbb_approve_addr = '0x021951c4eed886f3a3DffeCbD4B644B74A24CF31'

    var approve_addr = '0x596a78BDA9830e0ED05f1e4E4Ce0Fbf381ce5ef0';
    //质押sake_addr代码
    var sake_addr_appr = '0x3d115ef3039f3F59e771350c82523A042A4ECB72'

    //cbb测试网授权
    var ceshicbb_appr = '0x31a7528b09d9f194eeaE2d89594735A6900d00D5';

    //usdt测试网授权
    var ceshiusdt_appr = '0x9f37055A4BA925E0678E7447e2164CD833bf3F18';

    var PoolIndex = 0;//池索引
    var PoolData = [];//池数据

    var SMindex = 0;//我的私募索引
    var SMData = [];//我的私募数据

    var Castingindex = 0;//铸造列表
    var CastingData = [];//铸造数据

    var gameindex = 0;//游戏模块
    var gameData = [];//游戏模块数据

    var MyNFTindex = 0;//我的NFT 
    var MyNFTdata = [];//我的NFT数据

    var Redindex = 0;//盲盒
    var RedData = [];//盲盒数据


    var DepositPoolABI = [];//挖矿合约ABI



    // 链接钱包
    Vue.prototype.LinkBNB = function (e) {
      console.log("进入了链接")
      if (typeof window.ethereum !== 'undefined') {
        ethereum.request({ method: 'net_version' }).then(chain => {
          console.log("当前链ID" + chain)
          // alert(chain) 56主网  97ceshiwang
          console.log(web3.utils.toHex('56'))
          if (chain != 97) {
            const data = [{
              // chainId: '0x38',
              // chainName: 'BNB',
              // nativeCurrency:
              // {
              //   name: 'BNB',
              //   symbol: 'BNB',
              //   decimals: 18
              // },
              chainId: '0x61',
              chainName: 'bnbtest2',
              nativeCurrency:
              {
                name: 'bnbtest2',
                symbol: 'bnbtest2',
                decimals: 18
              },
              // rpcUrls: ['https://bsc-dataseed.binance.org/'],
              // blockExplorerUrls: ['https://bscscan.com']
              rpcUrls: ['https://data-seed-prebsc-2-s3.binance.org:8545'],
              blockExplorerUrls: ['https://testnet.bscscan.com/']
            }]
            ethereum.request({ method: "wallet_addEthereumChain", params: data, }).then((result) => {
              console.log('result=',result)
              ethereum.enable().then(res => {
                console.log(res)
                console.log(res[0])
                WalletAddress = res[0]
                if (e != 1) {
                  this.loginSuccessful(res[0])
                }
              }).catch((error) => {
                // this.$message.error("请登录BNB");
                this.$message.error("请登录测试网");
              })
            }).catch((error) => {
              // this.$message.error("请登录BNB");
              this.$message.error("请登录测试网");
            })
          } else {
            ethereum.enable().then(res => {
              console.log('res=',res)
              WalletAddress = res[0]
              //   this.Checksuperior(res[0])

              //   this.ProductListABI(res[0])
              if (e != 1) {
                this.loginSuccessful(res[0])
                // this.CheckuserABI()
              }

            }).catch((error) => {
              // this.$message.error("请登录BNB");
              this.$message.error("请登录测试网");
            })
          }

        })
      } else {
        // console.log("请登录BNB")
        // this.$message.error("请登录BNB链");
        this.$message.error("请登录测试网");
      }
    };


    //===========================
    //检查用户是否注册
    //===========================
    Vue.prototype.CheckuserABI = function () {
      console.log("查询是否注册")
      var metacoinAbi = new web3.eth.Contract(RelationjsonAbi.abi, Relation, {
        from: WalletAddress
      });

      console.log(metacoinAbi)
      metacoinAbi.methods._recommerMapping(WalletAddress).call().then(res => {
        console.log(res)
        console.log(web3.utils.hexToNumber(res))
        var anExamination = web3.utils.hexToNumber(res);
        if (anExamination == 0) {
          console.log("来了这里没注册")
          this.WhetherToregister = true;
        } else {
          this.WhetherToregister = false;
        }
      })
    };
    //===========================
    //注册
    //===========================
    Vue.prototype.registerABI = function (e) {
      var thip = this;
      var metacoinAbi = new web3.eth.Contract(RelationjsonAbi.abi, Relation, {
        from: WalletAddress
      });
      metacoinAbi.methods.addRelationEx(e).send()
        .on('transactionHash', function (hash) {
          // console.log("哈希")
          //  console.log(hash)
          thip.registerHash(hash)
          Toast.loading({
            // message: '加载中...',
            forbidClick: true,
            duration: 0,
          });
        }).catch((error) => {

          Toast.loading({
            // message: '加载中...',
            forbidClick: true,
            duration: 1,
          });
        })
    };
    //===========================
    //注册hash检查
    //===========================   
    Vue.prototype.registerHash = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.registerHash(hash)
        } else {
          if (res.status == true) {
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.CheckuserABI();
          } else {
            thip.$message.error("授权失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    //===========================
    //查询池长度
    //===========================   
    Vue.prototype.PoollengthABI = function () {
      console.log('查询池长度');
      var tokenabi = new web3.eth.Contract(DepositPooljsonAbi.abi, DepositPool, {
        from: WalletAddress
      });
      DepositPoolABI = tokenabi;
      tokenabi.methods.poolLength().call().then(res => {
        console.log(res)

        this.lengthABI(res)

      })

    };
    //===========================
    //根据池长度 查询信息
    //===========================   
    Vue.prototype.lengthABI = function (e) {


      if (e > PoolIndex) {

        console.log("PoolIndex===" + PoolIndex)
        console.log(DepositPoolABI)
        // 池信息
        DepositPoolABI.methods.poolInfo(PoolIndex).call().then(res => {
          console.log(res)
          res.totalHashRate = Math.floor(web3.utils.fromWei(res.totalHashRate.toString(), 'ether') * 10000) / 10000;
          //池收益     
          DepositPoolABI.methods.pendingCake(PoolIndex, WalletAddress).call().then(resincome => {
            console.log(resincome)
            resincome = Math.floor(web3.utils.fromWei(resincome.toString(), 'ether') * 1000000) / 1000000;
            // 获取用户信息
            DepositPoolABI.methods.userInfo(PoolIndex, WalletAddress).call().then(rexinx => {
              console.log(rexinx)
              rexinx.amount = Math.floor(web3.utils.fromWei(rexinx.amount.toString(), 'ether') * 10000) / 10000;
              var TokenAbi = new web3.eth.Contract(FishTokenjsonAbi.abi, res.lpToken, {
                from: WalletAddress
              });
              console.log(TokenAbi)
              //  查询代币名称
              TokenAbi.methods.symbol().call().then(resName => {
                console.log(resName)
                //  查询余额
                TokenAbi.methods.balanceOf(WalletAddress).call().then(resBalance => {
                  console.log(resBalance)
                  resBalance = Math.floor(web3.utils.fromWei(resBalance.toString(), 'ether') * 10000) / 10000;
                  var abc = {
                    "PoolData": [res],
                    "Myinformation": [rexinx],
                    "TokenName": [resName],
                    "TokenBalance": [resBalance],
                    'Tokenincome': [resincome]
                  }
                  PoolData.push(abc)
                  PoolIndex = PoolIndex + 1;
                  this.lengthABI(e)
                })
              })
            })
          })

        })
      } else {
        console.log('池长度', PoolData)
        this.getPoolallData(PoolData)
        //这一步赋值出了错
        // this.PoolallData = PoolData;
        PoolIndex = 0;
        PoolData = [];
        console.log("结束")

      }

    };
    //质押 usdt+cbb 流动性
    Vue.prototype.lpSake = async function (data){
      try {
        console.log('data=',data)
        var Contract1 = new web3.eth.Contract(balance_usdt, ceshiusdt_appr);
        var Contract2 = new web3.eth.Contract(ceshicbb, ceshicbb_appr);
        var Contract3 = new web3.eth.Contract(lpsakeabi, lpsakeabi_addr2);
        var Contract4 = new web3.eth.Contract(sake_addr, sake_addr_appr); 
        let res = await Contract1.methods.approve(lpsakeabi_addr2,'100000000000000000000000000000000000000000000000000000000').send({ from: WalletAddress });
        let res2 = await Contract2.methods.approve(lpsakeabi_addr2,'100000000000000000000000000000000000000000000000000000000').send({ from: WalletAddress });
        let res3 = await Contract3.methods.addLiquidity(usdt_approve_addr,ceshicbb_appr,data,data).send({ from: WalletAddress });
        console.log(res,res2,res3,'====')
        await Contract4.methods.stake(data).call().then(function(res){
          console.log('res=',res)
        })
        }catch (error) {
          console.log('error=',error)
        }
    };
    //===========================
    //质押
    //===========================  
    Vue.prototype.TopledgeABI = function (data) {
      console.log(data)
      var thip = this;
      var Exchangeamount = web3.utils.toWei(data.PledgeAmount, 'ether');
      //  查询授权额度
      var TokenAbi = new web3.eth.Contract(FishTokenjsonAbi.abi, data.lpToken, {
        from: WalletAddress
      });
      TokenAbi.methods.allowance(WalletAddress, DepositPool).call().then(res => {
        console.log(res)
        if (res == 0) {
          console.log('要授权')
          thip.Purchaseauthorization(data)
        } else {
          console.log("不用授权")
          DepositPoolABI.methods.deposit(data.index, Exchangeamount).estimateGas({ from: WalletAddress }).then(Gesres => {
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DynamicABI = new web3.eth.Contract(DepositPooljsonAbi.abi, DepositPool, {
                from: WalletAddress,
                gas: Gesres + 10000,
                gasPrice: gasPrice
              });
              DynamicABI.methods.deposit(data.index, Exchangeamount).send()
                .on('transactionHash', function (hash) {
                  console.log(hash)
                  Toast.loading({
                    // message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.PledgeHashABi(hash, 'pledge')
                }).catch((error) => {
                  console.log(error)
                  Toast.loading({
                    // message: '加载中...',
                    forbidClick: true,
                    duration: 1,
                  });
                })
            })
          })
        }
      })
    };

    //===========================
    //授权
    //=========================== 
    Vue.prototype.Purchaseauthorization = function (data) {
      var thip = this;
      var boxIndex = web3.utils.toHex('9000000000000000000000000000')
      // 给合约地址授权
      var tokenabi = new web3.eth.Contract(FishTokenjsonAbi.abi, data.lpToken, {
        from: WalletAddress
      });
      tokenabi.methods.approve(DepositPool, boxIndex).estimateGas({ from: WalletAddress }).then(Gesres => {
        console.log(Gesres)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(FishTokenjsonAbi.abi, data.lpToken, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.approve(DepositPool, boxIndex).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.PledgeHash(hash, data)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })
    };

    // ===========================
    // 授权额度Hash查询
    // ===========================
    Vue.prototype.PledgeHash = function (hash, data) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        console.log(res)
        if (res == null) {
          thip.PledgeHash(hash, data)
        } else {

          if (res.status == true) {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            // thip.SGTBalanceTOkenABI();
            thip.TopledgeABI(data)
          } else {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            // thip.$message.error("授权失败");
          }
        }
      })
    };

    // ===========================
    // 质押Hash查询
    // ===========================
    Vue.prototype.PledgeHashABi = function (hash, type) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        console.log(res)
        if (res == null) {
          thip.PledgeHashABi(hash, type)
        } else {

          if (res.status == true) {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            thip.$message({
              message: 'success',
              type: 'success'
            });
            if (type == 'pledge') {
              console.log("质押成功了 =========到这里了时候  去执行新的方法了 新方法触发了  数据没实时更新 PoollengthABI方法 排查下")
              this.pledgeSuccess()
              thip.PoollengthABI()

            }
            // thip.SGTBalanceTOkenABI();
          } else {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            // thip.$message.error("授权失败");
          }
        }
      })
    };
    //===========================
    //领取质押收益
    //===========================  
    Vue.prototype.ReceiveincomeABI = function (index) {
      var thip = this;
      DepositPoolABI.methods.draw(index).estimateGas({ from: WalletAddress }).then(Gesres => {
        console.log(Gesres)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(DepositPooljsonAbi.abi, DepositPool, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.draw(index).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.PledgeHashABi(hash)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })
    };
    //===========================
    //解除质押
    //===========================  
    Vue.prototype.UnzipFABi = function (index, all) {

      var value = web3.utils.toWei(all.toString(), 'ether');
      console.log(value)
      var thip = this;
      DepositPoolABI.methods.withdraw(index, value).estimateGas({ from: WalletAddress }).then(Gesres => {
        console.log(Gesres)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(DepositPooljsonAbi.abi, DepositPool, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.withdraw(index, value).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.PledgeHashABi(hash)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })
    };

    // =====================
    //获取众筹信息
    //======================
    Vue.prototype.CrowdfundingABI = function () {
      var CrowdDao = new web3.eth.Contract(CrowdDaoAbi.abi, CrowdDaoToken, {
        from: WalletAddress
      });
      CrowdDao.methods.getCrowdInfo().call().then(res => {
        console.log(res)

        this.Crowdfundingdata = res;
      })
    };

    // 兑换cbb
    Vue.prototype.ExchangeBUY2ABI =async function(params){
      console.log('params=',params,WalletAddress);
      // let data = Number(params)
      try {
        var boxIndex = '100000000000000000000000000000000000000000000000000000000';
        console.log('boxIndex=',boxIndex)
        var Contract2 = new web3.eth.Contract(balance_usdt, ceshiusdt_appr);
        let res = await Contract2.methods.approve(WalletAddress,boxIndex).send({ from: WalletAddress });
      } catch (error) {
        console.log('error=',error)
        this.$message.error('请授权')
      }
      try {
        console.log('ceshicbb_appr=',ceshicbb_appr)
        var Contract4 = new web3.eth.Contract(buycbbtest,ceshicbb_appr);
        // console.log('111=',Contract4)
        // await Contract4.methods.buyTokens(WalletAddress,params).call().then((res)=>{
        //   console.log('res2=',res)
        // });
        let res = await Contract4.methods.buyTokens(WalletAddress,params).send({ from: WalletAddress });
        console.log('res=',res)
      } catch (error) {
        console.log('error2=',error)
        this.$message.error('购买失败')
      }
      
    }
    // 兑换
    Vue.prototype.ExchangeBUYABI = function (Enterone) {
      console.log("兑换")
      var CrowdDao = new web3.eth.Contract(CrowdDaoAbi.abi, CrowdDaoToken, {
        from: WalletAddress
      });


      if (WalletAddress == '') {
        console.log("请链接钱包")
        return
      }
      var thip = this;
      //  兑换的金额
      var Exchangeamount = web3.utils.toWei(Enterone, 'ether');
      var Usdtabi = new web3.eth.Contract(FishTokenjsonAbi.abi, USDTtoken, {
        from: WalletAddress
      });
      Usdtabi.methods.allowance(WalletAddress, CrowdDaoToken).call().then(res => {
        console.log(res)
        if (res == 0) {

          console.log("还需要授权")
          thip.AuthorizationAbi(Enterone)

        } else {
          var BuyABI = new web3.eth.Contract(CrowdDaoAbi.abi, CrowdDaoToken, {
            from: WalletAddress
          });
          BuyABI.methods.invest(Exchangeamount).estimateGas({ from: WalletAddress }).then(Gesres => {
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DynamicABI = new web3.eth.Contract(CrowdDaoAbi.abi, CrowdDaoToken, {
                from: WalletAddress,
                gas: Gesres + 10000,
                gasPrice: gasPrice
              });
              DynamicABI.methods.invest(Exchangeamount).send()
                .on('transactionHash', function (hash) {
                  console.log(hash)
                  Toast.loading({
                    // message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.exchangeHash(hash)
                }).catch((error) => {
                  console.log(error)
                  Toast.loading({
                    // message: '加载中...',
                    forbidClick: true,
                    duration: 1,
                  });
                })
            })
          })

        }
      })
    };

    // ==========================  
    // 授权
    // ==========================  
    Vue.prototype.AuthorizationAbi = function (Enterone) {
      var thip = this;
      var boxIndex = web3.utils.toHex('9000000000000000000000000000')
      // 给合约地址授权
      var Usdtabi = new web3.eth.Contract(FishTokenjsonAbi.abi, USDTtoken, {
        from: WalletAddress
      });
      Usdtabi.methods.approve(CrowdDaoToken, boxIndex).estimateGas({ from: WalletAddress }).then(Gesres => {
        console.log(Gesres)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(FishTokenjsonAbi.abi, USDTtoken, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.approve(CrowdDaoToken, boxIndex).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.QueryAuthorizationHash(hash, Enterone)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })
    };

    // ==========================  
    // 授权hash查询
    // ==========================  
    Vue.prototype.QueryAuthorizationHash = function (hash, Enterone) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.QueryAuthorizationHash(hash, Enterone)
        } else {

          if (res.status == true) {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            thip.ExchangeBUYABI(Enterone);
          } else {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            // thip.$message.error("授权失败");
          }
        }
      })
    };


    // ==========================  
    // 兑换hash检查
    // ==========================  
    Vue.prototype.exchangeHash = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.exchangeHash(hash)
        } else {

          if (res.status == true) {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            thip.$message({
              message: 'success',
              type: 'success'
            });
            thip.UsdtABI()
            thip.FishABI()
            thip.CbbABI()
            thip.testUsdtABI()
            // thip.ChainexchangerecordABI()
          } else {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            thip.$message.error("Fail");
          }
        }
      })
    };
    //  ===========================
    //  获取USDT余额
    // ===========================
    Vue.prototype.UsdtABI = function (e) {
      // 给合约地址授权
      var UsdtabiToken = new web3.eth.Contract(FishTokenjsonAbi.abi, USDTtoken, {
        from: WalletAddress
      });
      console.log(WalletAddress)
      UsdtabiToken.methods.balanceOf(WalletAddress).call().then(res => {
        console.log(res)
        this.UsdtBalance = Math.floor(web3.utils.fromWei(res.toString(), 'ether') * 10000) / 10000
      })
    };

    //  ===========================
    //  获取USDT余额
    // ===========================
    Vue.prototype.FishABI = function (e) {
      // 给合约地址授权
      var UsdtabiToken = new web3.eth.Contract(FishTokenjsonAbi.abi, FishToken, {
        from: WalletAddress
      });
      console.log(WalletAddress)
      UsdtabiToken.methods.balanceOf(WalletAddress).call().then(res => {
        console.log(res)
        this.FISHBalance = Math.floor(web3.utils.fromWei(res.toString(), 'ether') * 10000) / 10000

      })
    };

    // 获取测试网cbb代币余额
    Vue.prototype.CbbABI =async function (e) {
      console.log('触发cbb合约')
      try {
        var Contract3 = new web3.eth.Contract(ceshicbb, ceshicbb_appr);
        let a1 = await Contract3.methods.balanceOf(WalletAddress).call().then(function(res){
            return res
        })
        let b1 = await Contract3.methods.decimals().call().then(function(res){
            return Math.pow(10,Number(res));
        });
        console.log(a1,b1,333)
        this.cbb_balance = a1/b1;
        console.log('cbb=',this.cbb_balance)
      } catch (error) {
        console.log('error=',error)
      }
    }

    // 获取测试网usdt代币余额
    Vue.prototype.testUsdtABI =async function (e) {
        console.log('触发usdt合约')
        try {
          var Contract3 = new web3.eth.Contract(ceshiusdt, ceshiusdt_appr);
          let a1 = await Contract3.methods.balanceOf(WalletAddress).call().then(function(res){
              return res
          })
          let b1 = await Contract3.methods.decimals().call().then(function(res){
              return Math.pow(10,Number(res));
          });
          console.log(a1,b1,333)
          this.usdt_balance = a1/b1;
          console.log('usdt_balance=',this.usdt_balance)
        } catch (error) {
          console.log('error=',error)
        }
      }

    // 获取测试网cbb价格
    Vue.prototype.testCbbprice =async function (e) {
      console.log('触发cbb-price')
      try {
        var Contract4 = new web3.eth.Contract(ceshicbb, ceshicbb_appr);
        let b4 = await Contract4.methods.price().call().then(function(res){
            return res
        });
        console.log('b4=',b4)
        this.cbb_price = b4;
      } catch (error) {
        console.log('error=',error)
      }
    }

    //  ===========================
    //  获取所有盲盒
    // ===========================

    Vue.prototype.AllBlindBoxesABI = function () {
      console.log("来了购买盲盒")
      var BlindboxAbi = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
        from: WalletAddress
      });
      BlindboxAbi.methods.getBoxs().call().then(res => {
        console.log(res)
        this.AllmheData(res)
        // this.blindBoxList = res;
        // this.TraverseAll(res)

      })

    };
    Vue.prototype.AllmheData = function (kin) {
      console.log(kin)
      console.log(kin.length)
      var allindex = kin.length;
      if (allindex > Redindex) {
        console.log(kin[Redindex].price)
        let data = {
          "price": web3.utils.fromWei(kin[Redindex].price, 'ether'),
          "currency": kin[Redindex].currency,
          "id": kin[Redindex].id,
          "name": kin[Redindex].name,
          "total": kin[Redindex].total,
        }
        RedData.push(data);
        Redindex = Redindex + 1;
        this.AllmheData(kin)
        console.log(data)
      } else {
        ;
        this.blindBoxList = RedData;
        RedData = [];
        Redindex = 0;
        console.log(RedData)
      }
    },
      //==========================
      // 盲盒可开出的nft
      //==========================
      Vue.prototype.CanbeDrawnABI = function () {
        var DynamictokenABI = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
          from: WalletAddress
        });
        DynamictokenABI.methods.getSupportNfts().call().then(res => {
          console.log(res)
          this.XunhData(res)

        })
      },
      //===========================
      // 循环查询详细
      //==========================

      Vue.prototype.XunhData = function (res) {


        var DynamictokenABI = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
          from: WalletAddress
        });

        var a = res.length
        if (a > SMindex) {
          console.log("没结束")
          DynamictokenABI.methods.getNftSupportLevels(res[SMindex]).call().then(resData => {
            console.log(resData)
            if (res[SMindex] == FryNFTToken) {
              var name = "鱼苗"
            }
            if (res[SMindex] == fishfoodToken) {
              var name = "鱼食"
            }
            if (res[SMindex] == FishingrodToken) {
              var name = "鱼缸"
            }
            if (res[SMindex] == FishoxygenTokne) {
              var name = "氧气"
            }
            if (res[SMindex] == FryAccessoriesToken) {
              var name = "鱼苗配件"
            }
            let data = {
              name: name,
              Add: res[SMindex],
              grade: resData,
            }
            SMData.push(data)
            SMindex = SMindex + 1;
            this.XunhData(res)
          })
        } else {
          console.log(SMData)
          this.Fishinformation = SMData;
          SMindex = 0;
          SMData = [];

          console.log("结束了")
        }






      };

    //  ===========================
    //  购买盲盒
    // ===========================

    Vue.prototype.BuyblindBoxABI = function (data) {
      var thip = this;
      var index = data.boxId;
      var useToken = data.useToken;


      var DynamictokenABI = new web3.eth.Contract(FishTokenjsonAbi.abi, useToken, {
        from: WalletAddress
      });
      console.log(DynamictokenABI)
      DynamictokenABI.methods.allowance(WalletAddress, MysteryBoxToken).call().then(res => {
        console.log(res)
        if (res == 0) {
          console.log("需要授权")
          thip.AuthorizationToken(data)
        } else {
          console.log("不需要授权")
          var metacoinAbi = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
            from: WalletAddress
          });
          var Timestamp = Math.round(new Date() / 1000);
          var b = WalletAddress + Timestamp;
          console.log(b)
          metacoinAbi.methods.buyBox(index, b).estimateGas({ from: WalletAddress }).then(resgas => {
            console.log(resgas)
            web3.eth.getGasPrice().then(gasPrice => {
              var dynamicABI = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
                from: WalletAddress,
                gas: resgas + 10000,
                gasPrice: gasPrice
              });
              dynamicABI.methods.buyBox(index, b).send()
                .on('transactionHash', function (hash) {
                  //  console.log("哈希")
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.BoxState = 2;
                  thip.BugABIHahs(hash, b)
                }).catch((error) => {
                  // console.log(error)
                  Toast.loading({
                    forbidClick: true,
                    duration: 1,
                  });
                })
            })
          })
        }
      })
    };
    //============================
    //购买hash查询
    //============================ 
    Vue.prototype.BugABIHahs = function (hash, b) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        console.log(res)
        if (res == null) {
          thip.BugABIHahs(hash, b)
        } else {

          if (res.status == true) {

            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.BlindboxS = true;
            thip.InquireNFT(b)
          } else {
            thip.$message.error("购买失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };
    //============================
    //查询领取的NFT
    //============================
    Vue.prototype.InquireNFT = function (b) {
      var metacoinAbi = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
        from: WalletAddress
      });
      console.log(b)
      metacoinAbi.methods.boxResults(b).call().then(res => {
        console.log(res)
        if (res != '') {
          this.BoxState = 3;
          console.log(res.nft)

          if (res.nft == FryNFTToken) {
            console.log("鱼苗")
            res.yu = 1;
            res.yuname = '鱼苗'
          }
          if (res.nft == fishfoodToken) {
            console.log(console.log("鱼食"))
            res.yu = 2;
            res.yuname = '鱼食'
          }
          if (res.nft == FishingrodToken) {
            console.log(console.log("鱼缸"))
            res.yu = 3;
            res.yuname = '鱼缸'
          }
          if (res.nft == FishoxygenTokne) {
            console.log(console.log("氧气"))
            res.yu = 4;
            res.yuname = '氧气'
          }
          if (res.nft == FryAccessoriesToken) {
            console.log(console.log("鱼苗配件"))
            res.yu = 5;
            res.yuname = '鱼苗配件'
          }
          console.log(res)
          this.$message({
            message: '成功',
            type: 'success'
          });
          this.SuccessData = res;

        }

      })
    },
      //============================
      //购买盲盒授权
      //============================
      Vue.prototype.AuthorizationToken = function (data) {
        var thip = this;
        var useToken = data.useToken;
        var boxIndex = web3.utils.toHex('5000000000000000000000000000')
        var dynamicToken = new web3.eth.Contract(FishTokenjsonAbi.abi, useToken, {
          from: WalletAddress
        });
        dynamicToken.methods.approve(MysteryBoxToken, boxIndex).estimateGas({ from: WalletAddress }).then(res => {
          console.log(res)
          web3.eth.getGasPrice().then(gasPrice => {
            console.log(gasPrice)
            var dynamicABI = new web3.eth.Contract(FishTokenjsonAbi.abi, useToken, {
              from: WalletAddress,
              gas: res,
              gasPrice: gasPrice
            });
            dynamicABI.methods.approve(MysteryBoxToken, boxIndex).send()
              .on('transactionHash', function (hash) {
                //  console.log("哈希")
                console.log(hash)
                Toast.loading({
                  forbidClick: true,
                  duration: 0,
                });
                thip.CheckAuthorizationHash(hash, data)
              }).catch((error) => {
                // console.log(error)

              })
          })

        })
      };


    //============================
    //授权检查hash
    //============================
    Vue.prototype.CheckAuthorizationHash = function (hash, data) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.CheckAuthorizationHash(hash, data)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '授权成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });

            thip.BuyblindBoxABI(data);
          } else {
            thip.$message.error("授权失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    //============================
    //获取私募全网信息
    //============================
    Vue.prototype.networkInfoABI = function () {
      var raiseABI = new web3.eth.Contract(ReleaseAbi.abi, ReleaseToken, {
        from: WalletAddress
      });
      raiseABI.methods.networkInfo().call().then(res => {
        console.log(res)
        res.total = Math.floor(web3.utils.fromWei(res.total.toString(), 'ether'));
        // res.userCount=Math.floor(web3.utils.fromWei(res.userCount.toString(),'ether'));
        res.released = Math.floor(web3.utils.fromWei(res.released.toString(), 'ether'));
        this.PrivatePlacementData = res;
      })
      raiseABI.methods.getReleaseInfo().call().then(Myres => {
        console.log(Myres)

        this.MyPrivatePlacementData = Myres;
      })
    };


    // };
    //============================
    //管理员添加私募
    //============================
    Vue.prototype.AddPrivateplacementABI = function (data) {
      console.log(data)
      var thip = this;
      var address = data.address;
      // var total=data.total;
      var total = web3.utils.toWei(data.total, 'ether');
      var period = data.period;
      var periodRelease = data.periodRelease;
      // var periodRelease=web3.utils.toWei(data.periodRelease, 'ether');
      var raiseABI = new web3.eth.Contract(ReleaseAbi.abi, ReleaseToken, {
        from: WalletAddress
      });
      raiseABI.methods.addRelease(address, total, period, periodRelease).estimateGas({ from: WalletAddress }).then(res => {
        console.log(res)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(ReleaseAbi.abi, ReleaseToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.addRelease(address, total, period, periodRelease).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.raiseHahs(hash)
            }).catch((error) => {
              // console.log(error)

            })
        })

      })



    };

    //============================
    //授权检查hash
    //============================
    Vue.prototype.raiseHahs = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.raiseHahs(hash)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });

            // thip.BuyblindBoxABI(data);
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    //============================
    //领取释放 ，先call查询可释放量，点击领取send交易
    //============================
    Vue.prototype.ReceivereleaseAbi = function () {
      var raiseABI = new web3.eth.Contract(ReleaseAbi.abi, ReleaseToken, {
        from: WalletAddress
      });
      raiseABI.methods.drawRelease().call().then(res => {
        console.log(res)
        res = Math.floor(web3.utils.fromWei(res.toString(), 'ether') * 10000) / 10000;
        this.AvailableForRelease = res;

      })
    };

    //============================
    //领取释放 
    //============================

    Vue.prototype.receiveSfABI = function () {
      var thip = this;
      var raiseABI = new web3.eth.Contract(ReleaseAbi.abi, ReleaseToken, {
        from: WalletAddress
      });
      raiseABI.methods.drawRelease().estimateGas({ from: WalletAddress }).then(res => {
        console.log(res)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(ReleaseAbi.abi, ReleaseToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.drawRelease().send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.drawReleaseHahs(hash)
            }).catch((error) => {
              // console.log(error)

            })
        })

      })

    };

    //============================
    //领取释放 Hahs
    //============================

    Vue.prototype.drawReleaseHahs = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.drawReleaseHahs(hash)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });

            // thip.BuyblindBoxABI(data);
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };


    //============================
    // 合成
    //============================
    Vue.prototype.FindAccessoriesABI = function () {
      console.log("进入了合成")
      var BlindboxAbi = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
        from: WalletAddress
      });
      BlindboxAbi.methods.getTypes(FryAccessoriesToken).call().then(res => {
        console.log(res)
        // 查询我的鱼配件详细
        this.FindAccessoriesdetailed([1, 2, 3, 4])

      })

    };
    // ============================
    //我的鱼配件详细
    //============================
    Vue.prototype.FindAccessoriesdetailed = function (data) {
      console.log(data)
      var a = data.length;
      console.log(a)
      if (a > Castingindex) {
        console.log("没结束")
        console.log(data[Castingindex])
        var DynamicAbi = new web3.eth.Contract(FryNFTAbi.abi, FryAccessoriesToken, {
          from: WalletAddress
        });

        DynamicAbi.methods.balanceOf(WalletAddress, data[Castingindex]).call().then(res => {
          console.log(res)
          let dataken = {
            "id": data[Castingindex],
            'quantity': res,
          }
          CastingData.push(dataken);
          Castingindex = Castingindex + 1;
          this.FindAccessoriesdetailed(data)
        })
      } else {
        this.addList = CastingData;
        console.log("结束了")
      }



    };

    //  合成
    Vue.prototype.synthesisABI = function () {
      var thip = this;
      // 查询授权
      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FryAccessoriesToken, {
        from: WalletAddress
      });
      console.log(FryABI)
      FryABI.methods.isApprovedForAll(WalletAddress, NcompToken).call().then(resdata => {
        console.log(resdata)
        if (resdata == false) {
          console.log("没有授权 现在去授权")
          thip.AuthorizedSynthesis()
        } else {
          console.log("已经授权过")





          var DynamicAbi = new web3.eth.Contract(NcompAbi.abi, NcompToken, {
            from: WalletAddress
          });
          var data = [1, 2, 3, 4]
          var Timestamp = Math.round(new Date() / 1000);
          var b = WalletAddress + Timestamp;
          // DynamicAbi.methods.comp(data,b).send().then(res=>{
          //   console.log(res)
          // })
          DynamicAbi.methods.comp(data, b).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NcompAbi.abi, NcompToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.comp(data, b).send()
                .on('transactionHash', function (hash) {
                  //  console.log("哈希")
                  console.log(hash)
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Synthesishash(hash, b)
                }).catch((error) => {
                  // console.log(error)

                })
            })

          })



        }
      })

    };
    //合成hASH查询
    Vue.prototype.Synthesishash = function (hash, b) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.Synthesishash(hash, b)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '授权成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.Synthesisuccessful(b)
          } else {
            thip.$message.error("授权失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };
    //合成成功了查询
    Vue.prototype.Synthesisuccessful = function (b) {
      var DynamicAbi = new web3.eth.Contract(NcompAbi.abi, NcompToken, {
        from: WalletAddress
      });
      DynamicAbi.methods.boxResults(b).call().then(res => {
        console.log(res)
        if (res != '') {
          this.forging = 2;
          console.log(res.nft)

          if (res.nft == FryNFTToken) {
            console.log("鱼苗")
            res.yu = 1;
            res.yuname = '鱼苗'
          }
          if (res.nft == fishfoodToken) {
            console.log(console.log("鱼食"))
            res.yu = 2;
            res.yuname = '鱼食'
          }
          if (res.nft == FishingrodToken) {
            console.log(console.log("鱼缸"))
            res.yu = 3;
            res.yuname = '鱼缸'
          }
          if (res.nft == FishoxygenTokne) {
            console.log(console.log("氧气"))
            res.yu = 4;
            res.yuname = '氧气'
          }
          if (res.nft == FryAccessoriesToken) {
            console.log(console.log("鱼苗配件"))
            res.yu = 5;
            res.yuname = '鱼苗配件'
          }
          console.log(res)
          this.ForgingresultsData = res;

        }

      })
    };



    //授权合成
    Vue.prototype.AuthorizedSynthesis = function () {
      var thip = this;
      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FryAccessoriesToken, {
        from: WalletAddress
      });
      // 授权给合成合约
      // FryABI.methods.setApprovalForAll(NcompToken,true)

      FryABI.methods.setApprovalForAll(NcompToken, true).estimateGas({ from: WalletAddress }).then(res => {
        console.log(res)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(FryNFTAbi.abi, FryAccessoriesToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.setApprovalForAll(NcompToken, true).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.hchash(hash)
            }).catch((error) => {
              // console.log(error)

            })
        })

      })

    };
    // 合成授权hash查询
    Vue.prototype.hchash = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.hchash(hash)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '授权成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.synthesisABI()
          } else {
            thip.$message.error("授权失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };




    // =========================
    //游戏模块
    //=========================
    //查询我的鱼苗
    Vue.prototype.FishinformationABI = function (e) {
      //鱼缸，鱼苗，鱼食，鱼苗配件，氧气
      // [[1,2,3],[1,2,3,4,5],[1,2,3],[1,2,3,4],[1]]
      // this.Gameformation([1,2,3,4,5], e)
      if (e == 1) {
        this.Gameformation([1, 2, 3, 4, 5], e)
      }
      if (e == 2) {
        this.Gameformation([1, 2, 3], e)
      }
      if (e == 3) {
        this.Gameformation([1, 2, 3], e)
      }
      if (e == 4) {
        this.Gameformation([1], e)
      }
      // if (e == 1) {
      //   var FishDynamicContract = FryNFTToken;
      // }
      // if (e == 2) {
      //   var FishDynamicContract = fishfoodToken;
      // }
      // if (e == 3) {
      //   var FishDynamicContract = FishingrodToken;
      // }
      // if (e == 4) {
      //   var FishDynamicContract = FishoxygenTokne;
      // }
      // console.log("来了查询鱼信息")
      // var BlindboxAbi = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
      //   from: WalletAddress
      // });
      // console.log(BlindboxAbi)
      // BlindboxAbi.methods.getTypes(FishDynamicContract).call().then(res => {
      //   console.log(res)
      //   // 查询我的鱼配件详细


      // })
    };
    Vue.prototype.Gameformation = function (data, e) {
      console.log(e)
      if (e == 1) {
        var FishDynamicContract = FryNFTToken;
      }
      if (e == 2) {
        var FishDynamicContract = fishfoodToken;
      }
      if (e == 3) {
        var FishDynamicContract = FishingrodToken;
      }
      if (e == 4) {
        var FishDynamicContract = FishoxygenTokne;
      }
      console.log('查出来的token', FishDynamicContract);
      var a = data.length;
      console.log(a)
      if (a > gameindex) {
        console.log("没结束")
        var DynamicAbi = new web3.eth.Contract(FryNFTAbi.abi, FishDynamicContract, {
          from: WalletAddress
        });
        console.log(DynamicAbi)
        DynamicAbi.methods.balanceOf(WalletAddress, data[gameindex]).call().then(res => {
          console.log(res)
          let dataken = {
            "id": data[gameindex],
            'quantity': res,
          }
          gameData.push(dataken);
          gameindex = gameindex + 1;
          this.Gameformation(data, e)
        })
      } else {
        console.log('列表', gameData)
        this.materials = gameData.map(item => {
          item.num = 0
          return item
        })
        console.log('列表', this.materials)
        // this.materials=gameData;
        gameindex = 0;
        gameData = [];
        console.log("结束了")
      }
    };

    // 饲养 NgrowthAbi RearingToken
    Vue.prototype.PledgefishFarmingABI = function (id) {
      console.log(id)
      var thip = this;
      // FryNFTToken 鱼苗
      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FryNFTToken, {
        from: WalletAddress
      });
      FryABI.methods.isApprovedForAll(WalletAddress, RearingToken).call().then(resdata => {
        console.log(resdata)
        if (resdata == false) {
          thip.Authorizedbreeding(id)
          console.log("没有授权需要去授权")
        } else {
          console.log("授权成功")
          var DynamicAbi = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
            from: WalletAddress
          });
          DynamicAbi.methods.feeding(id).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.feeding(id).send()
                .on('transactionHash', function (hash) {
                  //  console.log("哈希")
                  console.log(hash)
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Rearinghash(hash)
                }).catch((error) => {
                  thip.$message.error("请检查是否使用鱼池");

                })
            })
          }).catch((error) => {
            console.log(error)
            thip.$message.error("请检查是否使用鱼池");
          })
        }
      })
    };
    Vue.prototype.Rearinghash = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.Rearinghash(hash)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.Gamesuccess()
            // thip.Synthesisuccessful(b)
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    // 授权饲养
    Vue.prototype.Authorizedbreeding = function (id) {
      var thip = this;

      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FryNFTToken, {
        from: WalletAddress
      });
      FryABI.methods.setApprovalForAll(RearingToken, true).estimateGas({ from: WalletAddress }).then(res => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(FryNFTAbi.abi, FryNFTToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.setApprovalForAll(RearingToken, true).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.siyanghash(hash, id)
            }).catch((error) => {
              // console.log(error)

            })
        })
      })
    };
    //饲养hash查询
    Vue.prototype.siyanghash = function (hash, id) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.siyanghash(hash, id)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.PledgefishFarmingABI(id)
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    //==========================
    // 使用鱼缸
    //==========================
    Vue.prototype.UseFishTankABI = function (id) {
      var thip = this;
      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FishingrodToken, {
        from: WalletAddress
      });
      FryABI.methods.isApprovedForAll(WalletAddress, RearingToken).call().then(resdata => {
        console.log(resdata)
        if (resdata == false) {
          console.log("没有授权鱼缸")
          thip.Authorizedfishtank(id)
        } else {
          console.log("授权成功了")
          var DynamicAbi = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
            from: WalletAddress
          });
          DynamicAbi.methods.addSpace(id, 1).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.addSpace(id, 1).send()
                .on('transactionHash', function (hash) {
                  //  console.log("哈希")
                  console.log(hash)
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Rearinghash(hash)
                }).catch((error) => {
                  console.log(error)

                })
            })
          })
        }
      })
    };
    //授权鱼缸
    Vue.prototype.Authorizedfishtank = function (id) {
      var thip = this;

      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FishingrodToken, {
        from: WalletAddress
      });
      FryABI.methods.setApprovalForAll(RearingToken, true).estimateGas({ from: WalletAddress }).then(res => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(FryNFTAbi.abi, FishingrodToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.setApprovalForAll(RearingToken, true).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.Fishtankhash(hash, id)
            }).catch((error) => {
              // console.log(error)

            })
        })
      })
    };
    //鱼缸hash查询
    Vue.prototype.Fishtankhash = function (hash, id) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.Fishtankhash(hash, id)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.UseFishTankABI(id)
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    // 查看我养的鱼苗列表
    Vue.prototype.MyFishPondABI = function () {
      console.log("查询")
      var DynamicAbi = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
        from: WalletAddress
      });
      DynamicAbi.methods.getUserFryInfos().call().then(res => {
        console.log('yuan质押列表', res);

        // for (let i = 1; i < res.length; i++) {
        //  console.log(res[i])

        // }
        var a = Math.round(new Date().getTime() / 1000).toString();
        console.log(a)
        this.currenttime = a;

        let data = res.map(item => {
          let obj = {}
          obj.id = item.id
          obj.level = item.level
          obj.startTime = item.startTime
          obj.surplusFoodLimit = item.surplusFoodLimit
          obj.surplusOxygenLimit = item.surplusOxygenLimit
          obj.surplusgCycle = item.surplusgCycle
          Array.from(item).forEach((item2, i) => {
            obj[i] = item2
          })
          obj.radio = 0 //添加一个单选框数据
          obj.dqsj = Date.parse(new Date()) / 1000
          return obj
        })
        if (data.length) {
          data.splice(0, 1)
        }
        this.MyfishpondData = data
        console.log('质押列表', data);

      })
    };
    // 投放食物
    Vue.prototype.ToServeABI = function (data) {
      var thip = this;
      var foodId = data.foodId;
      var foodAmount = data.foodAmount;
      var fryId = data.fryId;
      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, fishfoodToken, {
        from: WalletAddress
      });
      FryABI.methods.isApprovedForAll(WalletAddress, RearingToken).call().then(resdata => {
        console.log(resdata)
        if (resdata == false) {
          thip.FoodAuthorization(data)
          console.log("投食需要授权")
        } else {
          console.log("不需要授权")
          var DynamicAbi = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
            from: WalletAddress
          });
          DynamicAbi.methods.feed(foodId, foodAmount, fryId).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.feed(foodId, foodAmount, fryId).send()
                .on('transactionHash', function (hash) {
                  //  console.log("哈希")
                  console.log(hash)
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Rearinghash(hash)
                }).catch((error) => {
                  console.log(error)

                })
            })
          })

        }
      })

    };
    //投食授权
    Vue.prototype.FoodAuthorization = function (data) {
      var thip = this;

      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, fishfoodToken, {
        from: WalletAddress
      });
      FryABI.methods.setApprovalForAll(RearingToken, true).estimateGas({ from: WalletAddress }).then(res => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(FryNFTAbi.abi, fishfoodToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.setApprovalForAll(RearingToken, true).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.FeedHahs(hash, data)
            }).catch((error) => {
              // console.log(error)

            })
        })
      })
    };
    //投食物Hash
    Vue.prototype.FeedHahs = function (hash, data) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.FeedHahs(hash, data)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.ToServeABI(data)
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    // 增加氧气
    Vue.prototype.UseoxygenABI = function (data) {
      var thip = this;
      var oxyId = data.foodId;
      var oxyAmount = data.foodAmount;
      var fryId = data.fryId;
      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FishoxygenTokne, {
        from: WalletAddress
      });
      FryABI.methods.isApprovedForAll(WalletAddress, RearingToken).call().then(resdata => {
        console.log(resdata)
        if (resdata == false) {
          console.log("氧气没授权")
          thip.Oxygenauthorization(data)
        } else {
          console.log("授权过")
          var DynamicAbi = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
            from: WalletAddress
          });
          DynamicAbi.methods.oxygen(oxyId, oxyAmount, fryId).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.oxygen(oxyId, oxyAmount, fryId).send()
                .on('transactionHash', function (hash) {
                  //  console.log("哈希")
                  console.log(hash)
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Rearinghash(hash)
                }).catch((error) => {
                  console.log(error)

                })
            })
          })


        }
      })

    };
    //氧气授权
    Vue.prototype.Oxygenauthorization = function (data) {
      var thip = this;
      var FryABI = new web3.eth.Contract(FryNFTAbi.abi, FishoxygenTokne, {
        from: WalletAddress
      });
      FryABI.methods.setApprovalForAll(RearingToken, true).estimateGas({ from: WalletAddress }).then(res => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(FryNFTAbi.abi, FishoxygenTokne, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.setApprovalForAll(RearingToken, true).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.OxygenauthorizationHahs(hash, data)
            }).catch((error) => {
              // console.log(error)

            })
        })
      })
    };
    Vue.prototype.OxygenauthorizationHahs = function (hash, data) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.OxygenauthorizationHahs(hash, data)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.UseoxygenABI(data)
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    //  领取收益
    Vue.prototype.ReceivefishincomeABI = function (data) {
      var thip = this;
      var fryId = data.fryId;
      var elect = data.elect;
      var Timestamp = Math.round(new Date() / 1000);
      var b = WalletAddress + Timestamp;
      console.log(b)
      console.log(fryId)
      console.log(elect)
      var DynamicAbi = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
        from: WalletAddress
      });
      DynamicAbi.methods.harvest(fryId, b).estimateGas({ from: WalletAddress }).then(res => {
        console.log(res)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DdynamicABI = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          DdynamicABI.methods.harvest(fryId, b).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.Fishreceiveincome(hash, b)
            }).catch((error) => {
              console.log(error)

            })
        })
      })
    };
    Vue.prototype.Fishreceiveincome = function (hash, b) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.Fishreceiveincome(hash, b)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.Fishreceivingresult(b)
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };
    Vue.prototype.Fishreceivingresult = function (b) {
      var DynamicAbi = new web3.eth.Contract(NgrowthAbi.abi, RearingToken, {
        from: WalletAddress
      });
      DynamicAbi.methods.harvestResults(b).call().then(res => {
        console.log(res)
        if (res.nft == FryNFTToken) {
          var name = "鱼苗";
          var im = 1;
        }
        if (res.nft == fishfoodToken) {
          var name = "鱼食";
          var im = 2;
        }
        if (res.nft == FishingrodToken) {
          var name = "鱼缸";
          var im = 3;
        }
        if (res.nft == FishoxygenTokne) {
          var name = "氧气";
          var im = 4;
        }
        if (res.nft == FryAccessoriesToken) {
          var name = "鱼苗配件";
          var im = 5;
        }
        let data = {
          name: '鱼卡 ',
          amount: res.amount,
          id: res.id,
          nft: res.nft,
          im: res.id,
        }
        console.log(data)
        this.RevenueSuccessA(data)
      })
    };

    // =================
    //市场功能
    //================
    Vue.prototype.wholeNetworknft = function (e) {
      console.log("获取全网NFT", e)
      var DynamicAbi = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
        from: WalletAddress
      });
      DynamicAbi.methods.fixedOrders(e, 0, 1000).call().then(res => {
        console.log(res)
        this.wholeetworkNFTData = []
        this.wholeetworkNFTData = res._orders
      })
    };


    //我的NFT 
    Vue.prototype.MyNFTabi = function () {
      console.log("点击获取我的NFT")
      //  ERCNFTabi
      var DynamicAbiERC = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
        from: WalletAddress
      });
      DynamicAbiERC.methods.balanceOf(WalletAddress).call().then(res => {
        console.log('查我的NFT之前的余额');
        this.getmyNft(res)
      })

    };

    //获取我的 NFT
    Vue.prototype.getmyNft = function (king) {
      // console.log(king)
      console.log('---------------------', ERCNFTToken);
      var DynamicAbiERC = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
        from: WalletAddress
      });


      if (king > MyNFTindex) {
        //  console.log(MyNFTindex)
        DynamicAbiERC.methods.tokenOfOwnerByIndex(WalletAddress, MyNFTindex).call().then(res => {
          console.log(res)

          MyNFTindex = MyNFTindex + 1;
          MyNFTdata.push(res)
          this.getmyNft(king)
          console.log("大于")
        })
      } else {
        console.log("nft鱼卡查询完毕")
        let data = JSON.parse(JSON.stringify(MyNFTdata))
        for (let i = data.length - 1; i >= 0; i--) {
          let item = data[i]
          if (item == 0) {
            data.splice(i, 1)
          }
        }
        console.log('nft鱼卡数据', data);
        MyNFTindex = 0;
        MyNFTdata = []
        this.chaxunfntxx(data)
      }
      // console.log('挖矿右边数据', MyNFTdata);
      // let data = JSON.parse(JSON.stringify(MyNFTdata))
      // data.splice(0, 1)
      // this.chaxunfntxx(data)
      // MyNFTindex = 0;
      // MyNFTdata = []
      // console.log("没有")
    };



    Vue.prototype.chaxunfntxx = function (data) {
      console.log(data)
      var NFtXINX = new web3.eth.Contract(NadminAbi.abi, NadminToken, {
        from: WalletAddress
      });
      console.log(NFtXINX)
      NFtXINX.methods.get721NftInfo(ERCNFTToken, data).call().then(res => {
        console.log(res)
        let kend = {
          index: data,
          AllData: res
        }
        console.log('我的NFT数据', kend)
        this.fishListData = kend
      })
    },

      //卖出NFT
      Vue.prototype.sellFixedNftabi = function (data) {
        console.log(data)
        var nftId = data.nftId;
        var price = web3.utils.toWei(data.price, 'ether');
        var thip = this;
        var DynamicAbiERC = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
          from: WalletAddress
        });
        console.log(DynamicAbiERC)
        //allowance
        DynamicAbiERC.methods.isApprovedForAll(WalletAddress, NmarketToken).call().then(reskin => {
          console.log(reskin)
          if (reskin == false) {
            console.log("没有授权过")
            thip.NFTshouquan(data)
          } else {
            // var DynamicAbi = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
            //   from: WalletAddress
            // });
            console.log("授权成功了")
            var DynamicAbi = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
              from: WalletAddress
            });

            DynamicAbi.methods.sellFixedNft(nftId, price).estimateGas({ from: WalletAddress }).then(res => {
              console.log(res)
              web3.eth.getGasPrice().then(gasPrice => {
                console.log(gasPrice)
                var DdynamicABI = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
                  from: WalletAddress,
                  gas: res,
                  gasPrice: gasPrice
                });
                DdynamicABI.methods.sellFixedNft(nftId, price).send()
                  .on('transactionHash', function (hash) {
                    //  console.log("哈希")
                    console.log(hash)
                    Toast.loading({
                      forbidClick: true,
                      duration: 0,
                    });
                    thip.Mychushash(hash)
                  }).catch((error) => {
                    // console.log(error)

                  })
              })

            })

          }
        })
      };


    //卖出鱼卡
    Vue.prototype.sellMyFishCardAbi = function (data) {
      console.log(data)
      var nftId = data.nftId;
      var price = web3.utils.toWei(data.price, 'ether');
      var thip = this;
      var DynamicAbiERC = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
        from: WalletAddress
      });
      console.log(DynamicAbiERC)
      //allowance
      DynamicAbiERC.methods.isApprovedForAll(WalletAddress, NmarketToken).call().then(reskin => {
        console.log(reskin)
        if (reskin == false) {
          console.log("没有授权过")
          thip.NFTshouquan(data)
        } else {
          // var DynamicAbi = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
          //   from: WalletAddress
          // });
          console.log("授权成功了")
          var DynamicAbi = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
            from: WalletAddress
          });

          DynamicAbi.methods.setNft721(ERCNFTToken, nftId, price).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.setNft721(ERCNFTToken, nftId, price).send()
                .on('transactionHash', function (hash) {
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Mychushash(hash, 'sellFishCard')
                }).catch((error) => {
                  // console.log(error)

                })
            })

          })

        }
      })
    };
    // 出售鱼卡配件 
    Vue.prototype.sellMyFishPartsAbi = function (data) {
      var nftId = data.nftId;
      var token = data.token;
      var price = web3.utils.toWei(data.price, 'ether');
      var thip = this;
      var DynamicAbiERC = new web3.eth.Contract(ERCNFTabi.abi, token, {
        from: WalletAddress
      });
      console.log(data)
      //allowance
      DynamicAbiERC.methods.isApprovedForAll(WalletAddress, NmarketToken).call().then(reskin => {
        console.log('是否授权', reskin)
        if (reskin == false) {
          console.log("没有授权过")
          thip.NFTshouquan(data)
        } else {
          console.log("授权成功了")
          var DynamicAbi = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
            from: WalletAddress
          });
          console.log(token, nftId);
          DynamicAbi.methods.sellNft1155(token, nftId, price, 1).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.sellNft1155(token, nftId, price, 1).send()
                .on('transactionHash', function (hash) {
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Mychushash(hash, 'sellFishParts')
                }).catch((error) => {
                  // console.log(error)

                })
            })

          })

        }
      })
    };
    ///NFT授权
    Vue.prototype.NFTshouquan = function (data) {
      var token;
      if (data.token) {
        token = data.token
        console.log('用的配件的token', token);
      } else {
        token = ERCNFTToken
      }
      var thip = this;
      var FryABI = new web3.eth.Contract(ERCNFTabi.abi, token, {
        from: WalletAddress
      });
      // 授权给合成合约
      // FryABI.methods.setApprovalForAll(NcompToken,true)

      FryABI.methods.setApprovalForAll(NmarketToken, true).estimateGas({ from: WalletAddress }).then(res => {
        console.log(res)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(ERCNFTabi.abi, token, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.setApprovalForAll(NmarketToken, true).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.NFRhashsq(hash, data)
            }).catch((error) => {
              // console.log(error)

            })
        })

      })

    };
    Vue.prototype.NFRhashsq = function (hash, data) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.NFRhashsq(hash, data)
        } else {

          if (res.status == true) {
            thip.$tip({
              msg: '授权成功,请重新操作',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            // thip.sellFixedNftabi(data)
          } else {
            thip.$message.error("授权失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };
    Vue.prototype.Mychushash = function (hash, type) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        console.log(res)
        if (res == null) {
          Toast.loading({
            // message: '加载中...',
            forbidClick: true,
            duration: 0,
          });
          thip.Mychushash(hash, type)
        } else {
          if (res.status == true) {

            Toast.loading({
              forbidClick: true,
              duration: 1,
            });

            // 解压的刷新数据和弹窗我写了
            if (type == 'NFTjieya') {
              thip.MyMiningInformation()
              thip.MyNFTabi()
              thip.$tip({
                type: 'success',
                msg: 'NFT解压成功'
              })
              return
            }
            if (type == 'pledgeNft') {
              thip.MyMiningInformation()
              thip.MyNFTabi()
              thip.$tip({
                type: 'success',
                msg: '质押成功'
              })
              return
            }
            if (type == 'sellFishCard') {
              thip.MyNFTabi2(0, ERCNFTToken)
              thip.sellFishCardSuccess()
              return
            }
            if (type == 'sellFishParts') {
              thip.sellFishPartSuccess()
              return
            }
            this.$tip({
              type: 'success',
              msg: 'success'
            })
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };


    // 查询我出售中的NFT
    Vue.prototype.mysaleNFTabi = function (e) {
      console.log('查询我出售中的NFT', e);
      var DynamicAbi = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
        from: WalletAddress
      });
      DynamicAbi.methods.userFixedOrders(e).call().then(res => {
        console.log(res)
        this.mysaleNFTabiDAta = []
        this.mysaleNFTabiDAta = res;
        // let data = {

        // }
        // for (let i = 1; i < res.length; i++) {
        //   console.log(res[i])
        //   data[i] = res[i]
        // }
        // console.log(res._orders)

      })
    };

    // 购买NFT
    Vue.prototype.tobuyNFTABi = function (data) {
      console.log(data)
      var thip = this;
      var NFTSqABI = new web3.eth.Contract(FishTokenjsonAbi.abi, FishToken, {
        from: WalletAddress
      });
      NFTSqABI.methods.allowance(WalletAddress, NmarketToken).call().then(resdata => {
        console.log(resdata)
        if (resdata == 0) {
          console.log("需要授权")
          thip.GMNFTsq(data)
        } else {
          console.log("不需要授权")

          var DynamicAbiAAA = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
            from: WalletAddress
          });
          console.log(DynamicAbiAAA)
          DynamicAbiAAA.methods.buyNft(data).estimateGas({ from: WalletAddress }).then(Gesres => {
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DynamicABI = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
                from: WalletAddress,
                gas: Gesres + 10000,
                gasPrice: gasPrice
              });
              DynamicABI.methods.buyNft(data).send()
                .on('transactionHash', function (hash) {
                  console.log(hash)
                  Toast.loading({
                    // message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.NFTagmaishah(hash)
                }).catch((error) => {
                  console.log(error)
                  Toast.loading({
                    // message: '加载中...',
                    forbidClick: true,
                    duration: 1,
                  });
                })
            })
          })
        }
      })

    };
    // 购买HASH查询
    Vue.prototype.NFTagmaishah = function (hash, type) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.NFTagmaishah(hash, type)
        } else {
          if (res.status == true) {
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            if (type == 'redeem') {
              thip.redeemSuccess()
              return
            }
            thip.$message({
              message: '成功',
              type: 'success'
            });

            thip.buyDialogVisible = false;
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    }
    //购买NFT授权
    Vue.prototype.GMNFTsq = function (data) {
      var thip = this;
      var boxIndex = web3.utils.toHex('9000000000000000000000000000')
      // 给合约地址授权
      var NFTSqABI = new web3.eth.Contract(FishTokenjsonAbi.abi, FishToken, {
        from: WalletAddress
      });
      NFTSqABI.methods.approve(NmarketToken, boxIndex).estimateGas({ from: WalletAddress }).then(Gesres => {
        console.log(Gesres)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(FishTokenjsonAbi.abi, FishToken, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.approve(NmarketToken, boxIndex).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.XinNFTgm(hash, data)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })
    },

      // 购买NFT 授权HASH查询
      Vue.prototype.XinNFTgm = function (hash, data) {
        var thip = this;
        web3.eth.getTransactionReceipt(hash).then(res => {
          // console.log(res)
          if (res == null) {
            thip.XinNFTgm(hash, data)
          } else {
            if (res.status == true) {
              thip.$message({
                message: '成功',
                type: 'success'
              });
              Toast.loading({
                forbidClick: true,
                duration: 1,
              });
              thip.tobuyNFTABi(data)
              thip.buyDialogVisible = false;
            } else {
              thip.$message.error("失败");
              Toast.loading({
                forbidClick: true,
                duration: 1,
              });
            }
          }
        })
      };

    Vue.prototype.CancelTheSaleABI = function (data) {
      console.log(data)
      let thip = this;
      var DynamicAbiAAA = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
        from: WalletAddress
      });
      DynamicAbiAAA.methods.cancleFixedNft(data).estimateGas({ from: WalletAddress }).then(Gesres => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(NmarketAbi.abi, NmarketToken, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.cancleFixedNft(data).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.NFTagmaishah(hash, 'redeem')
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })
    };


    // 质押挖矿查询我的NFT
    Vue.prototype.MiningpledgeNFTABI = function (item) {
      console.log(item)
      var thip = this;
      var DynamicAbiERC = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
        from: WalletAddress
      });
      DynamicAbiERC.methods.isApprovedForAll(WalletAddress, NmineToken).call().then(resdata => {
        console.log(resdata)
        if (resdata == false) {
          console.log("没有授权鱼卡")
          thip.shoquanyk(item)
        } else {
          console.log("授权了鱼卡了")

          var DynamicAbiAA = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
            from: WalletAddress
          });

          DynamicAbiAA.methods.pledge(item).estimateGas({ from: WalletAddress }).then(res => {
            console.log(res)
            web3.eth.getGasPrice().then(gasPrice => {
              console.log(gasPrice)
              var DdynamicABI = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
                from: WalletAddress,
                gas: res,
                gasPrice: gasPrice
              });
              DdynamicABI.methods.pledge(item).send()
                .on('transactionHash', function (hash) {
                  //  console.log("哈希")
                  console.log(hash)
                  Toast.loading({
                    forbidClick: true,
                    duration: 0,
                  });
                  thip.Mychushash(hash, 'pledgeNft')
                }).catch((error) => {
                  // console.log(error)

                })
            })

          })
          // var DynamicAbiAAA = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
          //   from: WalletAddress
          // });
          // DynamicAbiAAA.methods.pledge()
        }
      })





    };

    // 授权 鱼卡给挖矿合约授权
    Vue.prototype.shoquanyk = function (item) {

      var thip = this;
      var FryABI = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
        from: WalletAddress
      });
      // 授权给合成合约
      // FryABI.methods.setApprovalForAll(NcompToken,true)

      FryABI.methods.setApprovalForAll(NmineToken, true).estimateGas({ from: WalletAddress }).then(res => {
        console.log(res)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var dynamicABI = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          dynamicABI.methods.setApprovalForAll(NmineToken, true).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.WKNFRhashsq(hash, item)
            }).catch((error) => {
              // console.log(error)

            })
        })

      })
    };
    //挖矿授权hash检查

    Vue.prototype.WKNFRhashsq = function (hash, item) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.WKNFRhashsq(hash, item)
        } else {

          if (res.status == true) {
            thip.$message({
              message: '授权成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.MiningpledgeNFTABI(item)
          } else {
            thip.$message.error("授权失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };

    // 挖矿我的个人信息
    Vue.prototype.MyMiningInformation = function () {
      var DynamicAbiAA = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
        from: WalletAddress
      });
      DynamicAbiAA.methods.getMinerInfo().call().then(res => {
        console.log('我的挖矿个人信息', res)
        if (res.ids.length) {
          let arr = JSON.parse(JSON.stringify(res.ids))
          arr.splice(0, 1)
          res.ids = arr
        }
        this.MiningInformationData = res;
      })
      DynamicAbiAA.methods.pendingCake(WalletAddress).call().then(resss => {
        console.log(resss)
        console.log(web3.utils.fromWei(resss, 'ether'))
        this.Miningincomet = web3.utils.fromWei(resss, 'ether');
      })

    };

    // 挖矿解压
    Vue.prototype.NFTjieyaABI = function (item) {
      var thip = this;
      var DynamicAbiAA = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
        from: WalletAddress
      });

      DynamicAbiAA.methods.unPledge(item).estimateGas({ from: WalletAddress }).then(res => {
        console.log(res)
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DdynamicABI = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
            from: WalletAddress,
            gas: res,
            gasPrice: gasPrice
          });
          DdynamicABI.methods.unPledge(item).send()
            .on('transactionHash', function (hash) {
              //  console.log("哈希")
              console.log(hash)
              Toast.loading({
                forbidClick: true,
                duration: 0,
              });
              thip.Mychushash(hash, "NFTjieya")
            }).catch((error) => {
              // console.log(error)

            })
        })

      })
    },
      //领取收益
      Vue.prototype.WkreceivebenefitsABI = function () {
        var thip = this;
        // var item=web3.utils.toWei(data, 'ether');
        var DynamicAbiAA = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
          from: WalletAddress
        });

        DynamicAbiAA.methods.draw(WalletAddress).estimateGas({ from: WalletAddress }).then(res => {
          console.log(res)
          web3.eth.getGasPrice().then(gasPrice => {
            console.log(gasPrice)
            var DdynamicABI = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
              from: WalletAddress,
              gas: res,
              gasPrice: gasPrice
            });
            DdynamicABI.methods.draw(WalletAddress).send()
              .on('transactionHash', function (hash) {
                //  console.log("哈希")
                console.log(hash)
                Toast.loading({
                  forbidClick: true,
                  duration: 0,
                });
                thip.lqshhashc(hash)
              }).catch((error) => {
                // console.log(error)

              })
          })

        })
      };

    // /领取收益hash查询
    Vue.prototype.lqshhashc = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        // console.log(res)
        if (res == null) {
          thip.lqshhashc(hash)
        } else {
          if (res.status == true) {
            thip.$message({
              message: '成功',
              type: 'success'
            });
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
            thip.MyMiningInformation()
          } else {
            thip.$message.error("失败");
            Toast.loading({
              forbidClick: true,
              duration: 1,
            });
          }
        }
      })
    };



    //==============================
    // 后台功能
    //==============================
    Vue.prototype.GetDailyoreOutputABI = function (e) {
      console.log(e);
      var tokenabi = new web3.eth.Contract(DepositPooljsonAbi.abi, DepositPool, {
        from: WalletAddress
      });
      tokenabi.methods.poolInfo(e).call().then(res => {
        console.log(res)
        this.GetDailyoreOutputData = res;
      })
    };

    Vue.prototype.SetYieldABi = function (data) {
      var pid = data.pid;
      var perBlockAward = data.perBlockAward * 10 ** 18;
      var thip = this;
      var c = perBlockAward.toString()
      // var perBlockAward =web3.utils.toWei(Number(data.perBlockAward), 'ether')

      var tokenabi = new web3.eth.Contract(DepositPooljsonAbi.abi, DepositPool, {
        from: WalletAddress
      });
      tokenabi.methods.setCakePerBlock(pid, c).estimateGas({ from: WalletAddress }).then(Gesres => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(DepositPooljsonAbi.abi, DepositPool, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.setCakePerBlock(pid, c).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.houtaihash(hash)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })






    };
    Vue.prototype.houtaihash = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        console.log(res)
        if (res == null) {
          thip.houtaihash(hash)
        } else {

          if (res.status == true) {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            thip.$message({
              message: 'success',
              type: 'success'
            });

            // thip.SGTBalanceTOkenABI();
          } else {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            // thip.$message.error("授权失败");
          }
        }
      })
    };

    Vue.prototype.InquireNFKKKABI = function () {
      var DynamicAbiAA = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
        from: WalletAddress
      });
      DynamicAbiAA.methods.poolInfo().call().then(res => {
        console.log(res)
        this.nftKKData = res;
      })

    };

    Vue.prototype.AddToXsimABi = function (kin) {
      var thip = this;
      console.log(kin)
      // var  kindata=kin/28800;
      // var  c=(kin/28800)*10**18
      var c = kin * 10 ** 18 / 28800;
      var k = c.toString()
      console.log(c)
      // var kindata =web3.utils.toWei('0.0038541666666666668', 'ether')
      // console.log(kindata)
      var DynamicAbiAA = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
        from: WalletAddress
      });


      DynamicAbiAA.methods.setCakePerBlock(k).estimateGas({ from: WalletAddress }).then(Gesres => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(NmineAbi.abi, NmineToken, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.setCakePerBlock(k).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              thip.houtaihash(hash)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })

    }


    // ===============================
    //2022-1-25 查询盲盒的价格
    //================================
    Vue.prototype.Blindboxprice = function (e) {
      var BlindboxAbi = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
        from: WalletAddress
      });
      BlindboxAbi.methods.getBoxPrice(e).call().then(res => {
        console.log(res)
        this.ChiMHData = web3.utils.fromWei(res, 'ether');
      })
    },

      // ===============================
      //2022-1-25  修改盲盒的价格
      //================================
      Vue.prototype.ModifythepriceABI = function (data) {
        var index = data.index;
        // var price=data.price;
        var price = web3.utils.toWei(data.price, 'ether')

        var BlindboxAbi = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
          from: WalletAddress
        });

        BlindboxAbi.methods.setBoxPrice(index, price).estimateGas({ from: WalletAddress }).then(Gesres => {
          web3.eth.getGasPrice().then(gasPrice => {
            console.log(gasPrice)
            var DynamicABI = new web3.eth.Contract(MysteryBoxAbi.abi, MysteryBoxToken, {
              from: WalletAddress,
              gas: Gesres + 10000,
              gasPrice: gasPrice
            });
            DynamicABI.methods.setBoxPrice(index, price).send()
              .on('transactionHash', function (hash) {
                console.log(hash)
                Toast.loading({
                  // message: '加载中...',
                  forbidClick: true,
                  duration: 0,
                });
                thip.houtaihashAAA(hash)
              }).catch((error) => {
                console.log(error)
                Toast.loading({
                  // message: '加载中...',
                  forbidClick: true,
                  duration: 1,
                });
              })
          })
        })

      };

    Vue.prototype.houtaihashAAA = function (hash) {
      var thip = this;
      web3.eth.getTransactionReceipt(hash).then(res => {
        console.log(res)
        if (res == null) {
          thip.houtaihashAAA(hash)
        } else {

          if (res.status == true) {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            thip.$message({
              message: 'success',
              type: 'success'
            });

            // thip.SGTBalanceTOkenABI();
          } else {
            Toast.loading({
              // message: '加载中...',
              forbidClick: true,
              duration: 1,
            });
            // thip.$message.error("授权失败");
          }
        }
      })
    };


    Vue.prototype.MyNFTabi2 = function (e, token) {
      console.log('nftMarket ----  我的NFT');
      if (e == 0) {
        console.log('查鱼卡 是单独的逻辑方法');
        // this.getmyNft2([1, 2, 3, 4, 5], token)
        this.queryMyFishCard()
      }
      if (e == 1) {
        // 鱼苗
        this.getmyNft2([1, 2, 3, 4, 5], token)
      }
      if (e == 2) {
        //鱼食
        this.getmyNft2([1, 2, 3], token)
      }
      if (e == 3) {
        //鱼缸
        this.getmyNft2([1, 2, 3], token)
      }
      if (e == 4) {
        // 氧气
        this.getmyNft2([1], token)
      }
    };
    Vue.prototype.queryMyFishCard = function () {
      var DynamicAbiERC = new web3.eth.Contract(ERCNFTabi.abi, ERCNFTToken, {
        from: WalletAddress
      });
      DynamicAbiERC.methods.balanceOf(WalletAddress).call().then(res => {
        console.log('查我的NFT之前的余额', res);
        this.getmyNft(res)
      })
    }

    Vue.prototype.getmyNft2 = function (data, token) {
      console.log('查询物品单条结果中。。。。')
      var a = data.length;
      if (a > gameindex) {
        var DynamicAbi = new web3.eth.Contract(FryNFTAbi.abi, token, {
          from: WalletAddress
        });
        DynamicAbi.methods.balanceOf(WalletAddress, data[gameindex]).call().then(res => {
          let dataken = {
            "id": data[gameindex],
            'quantity': res,
          }
          gameData.push(dataken);
          gameindex = gameindex + 1;
          this.getmyNft2(data, token)
        })
      } else {
        console.log('轮询问完的列表', gameData)
        this.myBelongings = []
        this.myBelongings = gameData
        gameindex = 0;
        gameData = [];
      }
    };

Vue.prototype.CUSDTaABI=function(){
  // var BuyABI = new web3.eth.Contract(CrowdDaoAbi.abi, CrowdDaoToken, {
  //   from: WalletAddress
  // });
  var UsdtabiToken = new web3.eth.Contract(FishTokenjsonAbi.abi, USDTtoken, {
    from: WalletAddress
  });
  UsdtabiToken.methods.balanceOf(CrowdDaoToken).call().then(res=>{
    console.log(res)
    this.Utokenyue=web3.utils.fromWei(res, 'ether')
  })
};

Vue.prototype.LlingquUABI=function(data){
   var thip=this;
   var BuyABI = new web3.eth.Contract(CrowdDaoAbi.abi, CrowdDaoToken, {
            from: WalletAddress
          });
     var AllData=web3.utils.toWei(data, 'ether');
       console.log(BuyABI)   
      //  BuyABI.methods.withdraw(AllData)
      BuyABI.methods.withdraw(AllData).estimateGas({ from: WalletAddress }).then(Gesres => {
        web3.eth.getGasPrice().then(gasPrice => {
          console.log(gasPrice)
          var DynamicABI = new web3.eth.Contract(CrowdDaoAbi.abi, CrowdDaoToken, {
            from: WalletAddress,
            gas: Gesres + 10000,
            gasPrice: gasPrice
          });
          DynamicABI.methods.withdraw(AllData).send()
            .on('transactionHash', function (hash) {
              console.log(hash)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 0,
              });
              // thip.houtaihashAAA(hash)
              thip.LlingquUABIHash(hash)
            }).catch((error) => {
              console.log(error)
              Toast.loading({
                // message: '加载中...',
                forbidClick: true,
                duration: 1,
              });
            })
        })
      })
};

Vue.prototype.LlingquUABIHash=function(hash){
  var thip = this;
  web3.eth.getTransactionReceipt(hash).then(res => {
    console.log(res)
    if (res == null) {
      thip.LlingquUABIHash(hash)
    } else {

      if (res.status == true) {
        Toast.loading({
          // message: '加载中...',
          forbidClick: true,
          duration: 1,
        });
        thip.$message({
          message: 'success',
          type: 'success'
        });

        thip.CUSDTaABI();
      } else {
        Toast.loading({
          // message: '加载中...',
          forbidClick: true,
          duration: 1,
        });
        // thip.$message.error("授权失败");
      }
    }
  })
}








  }
}
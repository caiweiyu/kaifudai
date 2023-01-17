| 合约名 | 合约地址 | 合约解释 |
| :-----| :---- | :---- | 
| FishToken | 0x0CeF31A468BA7159c1Ce73afe91e041c6bC41fa4 | fish代币 | 
| LpToken | 0x40ad44a19953Cd0F51079f64d966fff9cd898418 | LP代币 |
| UsdtToken | 0x5CA7325Bdb1aB7c814d2EAf760eE4221FB86Ef88 | usdt代币 |
| CrowdDao | 0x2D92cF5C0Cf3550Dd570555a341324Dcb784C21B | 认购合约 |
| Relation | 0xA904C257FDf96CCE7F78e085947FbA11EC2C1776 | 关系合约 | 
| DepositPool | 0xeF81d26e10aCb33042858cf26b0329a3dFE8EA83 | 挖矿合约 |
| MysteryBox | 0xE12dc439f473512fd42fFaB0Aee9AE5aEAd54dC2 | 盲盒合约 | 

| ERC1155 | 0xeE89690a9E459a507820489BADE7B5823146C1B7 | 鱼苗 | 
| ERC1155 | 0x0a5B64472cd7679E91DEc9Bb01D431ce8a45CaA2 | 鱼食 | 
| ERC1155 | 0x3e93c0Eb907E2CbC55078830CDEa4D602d5B7386 | 鱼缸 | 
| ERC1155 | 0x5BA410296790b21279aeC65F97eF5eE5729066DE | 氧气 | 
| ERC1155 | 0x39C71Bd76978Aad169F9DdFF07aC86845bac045E | 鱼苗配件 | 

| ERC721 | 0xca32536f419F8085b1eA272A9b1D6a37b164249C | 鱼卡 | 


| Ncomp | 0xF5c1B2351ccfc5F92D6D3019E472424aB6432D58 | 合成 | 
| Ngrowth | 0xf7B0d71D1153Bd6f781228B1D7216e323C960e59 | 饲养 | 

| Nmarket | 0xf0CE90f1df8b9d8b2dcD9C96b97DFd082953bf46 | 市场 | 
| Nmine | 0xd2ecf88c80aad21B11226127937a4639A5F07727 | 挖矿 | 


DepositPool
=====================================================

-----------------
* 池信息
* function poolInfo(
        uint256 index               //池索引
        ) external view returns (PoolInfo memory)
* PoolInfo {
        IERC20 lpToken;         //质押代币
        uint256 cakePerBlock;   //每块收益
        uint256 lastRewardBlock;  //上次结算块
        uint256 accCakePerShare;    //累积收益
        uint256 totalHashRate;      //总算力
    }
-----------------

-----------------
* 用户信息
* function userInfo(
        uint256 index,      //池索引
        address owner       //持有者
        ) external view returns (UserInfo memory)
* UserInfo {
        uint256 amount;     //个人质押数量
        uint256 award;      //已结算收益
        uint256 shareAward;     //分享收益
        uint256 rewardDebt;     //负债
    }
-----------------

-----------------
* 池长度
* function poolLength() external view returns (uint256)
-----------------

-----------------
* 等领取收益
* function pendingCake(
        uint256 _pid,       //池索引
        address _user       //持有者
        ) external view returns (uint256)
-----------------

-----------------
* 质押
* function deposit(uint256 _pid, uint256 _amount) public
-----------------

-----------------
* 解押
* function withdraw(uint256 _pid) public 
-----------------

-----------------
* 提取收益
* function draw(uint256 _pid) public 
-----------------


Relation
=====================================================

-----------------
* 我的上级
* function _recommerMapping(address owner) external view returns (address)
* 根地址0xdead
-----------------

-----------------
* 用户信息
* function addRelationEx(address recommer) external returns (bool)
-----------------


CrowdDao
=====================================================

-----------------
* 获取众筹信息
* function getCrowdInfo()external view returns(
        Crowd memory crowd,
        bool isEnd)         //是否结束
* Crowd{
        uint startT;        //开始时间
        uint endT;          //结束时间
        uint price;         //价格 = tokenAmount / price 
        uint tokenAmount;   //代币数量
        uint totalTokenAmount;  //总量
        uint surplusTokenAmount;//剩余总量
    }
* 当用户输入U的数量为a,求可获得代币数量 b = a * tokenAmount / price;
* 当用户输入代币数量为b，求需要发送的U的数量 a = b * price / tokenAmount
-----------------

-----------------
* 认购
* function invest(uint investAmount) external
-----------------



MysteryBox
=====================================================

-----------------
* 获取盲盒信息
* function getBoxs()public view returns(BoxView[] memory boxs)
* BoxView {
        uint256 id;         //盒子id
        string name;        //盒子名称
        uint total;         //总量
        uint price;         //价格数量
        address currency;   //定价代币
    }
-----------------

-----------------
* 购买盲盒
* function buyBox(
                uint256 boxId,          //盲盒索引
                address useToken,       //使用哪个代币购买
                bytes32 flag            //获取购买结果的标签
                ) external
-----------------


-----------------
* 查询购买结果
* function boxResults(bytes32 flag) external view returns(BoxResult memory)
* BoxResult{
        address nft;            //哪个nft
        uint level;             //什么等级
    }
-----------------


-----------------
* 购买盲盒支持的币种
* function getSupportTokens()external view returns(address[] memory)
-----------------


-----------------
* 盲盒可开出的nft
* function getSupportNfts()external view returns(address[] memory)
-----------------


-----------------
* nft支持的等级
* function getNftSupportLevels(address nft)external view returns(uint[] memory)
-----------------




Ncomp
=====================================================

-----------------
* 领取鱼苗配件
* function sendNft(
                address owner,          //接收人
                uint level,             //等级，1，2，3，4
                uint amount             //数量
                )external
-----------------

-----------------
* 合成
* function comp(
                uint[] calldata ids,    //合成需要1，2，3，4 各等级一个nft
                bytes32 flag            //前端传入，用于查询合成结果
                )external
-----------------


-----------------
* 查询合成结果
* function boxResults(bytes32 flag) external view returns(BoxResult memory)
* BoxResult{
        address nft;            //哪个nft
        uint level;             //什么等级
    }
-----------------



Ngrowth
=====================================================

-----------------
* 查看我养的鱼苗列表
* function getUserFryInfos() external view returns(FryInfo[] memory _infos)
* FryInfo{
       uint id;                 //订单ID
       uint level;              //鱼苗等级
       uint startTime;          //放养时间, surplusgCycle 等于0 ,或者放养时间 加 剩余时间 小于当前时间 为鱼苗已成熟，可以收获
       uint surplusgCycle;      //剩余生长周期，秒数
       uint surplusFoodLimit;   //可投鱼食次数
       uint surplusOxygenLimit; //可增养次数
    }
-----------------

-----------------
* 饲养鱼苗
* function feeding(
                uint nftId              //鱼苗ID
                )external
-----------------


-----------------
* 使用鱼缸增加鱼缸容量
* function addSpace(
                uint id,             //鱼缸ID
                uint amount           //鱼缸数量
                )external
-----------------


-----------------
* 投放鱼食
* function feed(
                uint foodId,            //鱼食ID
                uint foodAmount,        //鱼食数量
                uint fryId              //订单ID
                )external
-----------------


-----------------
* 增加氧气
* function oxygen(
                uint oxyId,             //氧气ID
                uint oxyAmount,         //氧气数量
                uint fryId              //订单ID
                )external
-----------------


-----------------
* 收获
* function harvest(
                uint fryId,     //订单ID
                uint elect,     //收获选择，0 获得鱼卡，1 获得鱼苗
                bytes32 flag    //前端传入标识，用户查看收获
                )external
-----------------

-----------------
* 查询收效
* function harvestResults(bytes32 flag)external view returns(Result memory)
* Result{
        address nft;        //获得的nft
        uint id;            //代币Id
        uint amount;        //数量
    }
-----------------




Nmarket
=====================================================

-----------------
* 个人订单
* function userFixedOrders()external view returns(Order[] memory _orders)
* Order{
        uint id;            //订单ID
        address seller;     //卖家
        uint price;         //价格
        uint nftId;         //
        address buyer;      //买家
    }
-----------------



-----------------
* 全网订单  =========
* function fixedOrders(uint start,uint end)external view returns(Order[] memory _orders,uint count)
* Order{
        uint id;            //订单ID
        address seller;     //卖家
        uint price;         //价格
        uint nftId;         //
        address buyer;      //买家
    }
-----------------



-----------------
* 卖出，要授权，卖出的是鱼卡nft   =========
* function sellFixedNft(uint nftId,uint price)external
-----------------
-----------------
* 买入
* function buyFixedNft(uint orderId)external
-----------------

-----------------
* 取消
* function cancleFixedNft(uint orderId)external
-----------------






Nmine
=====================================================

-----------------
* 个人信息
* function getMinerInfo()external view returns(
        uint myPower,       //个人算力  
        uint networkPower,  //全网算力
        uint mined,         //已挖fish
        uint[] memory ids)  //质押的nft id，第一个为0，是占位的，直接跳过
-----------------



-----------------
* 质押，要授权，质押的是鱼卡nft
* function pledge(uint tokenId)external returns(bool)
-----------------



-----------------
* 解押
* function unPledge(uint tokenId)external returns(bool)
-----------------


-----------------
* 查询质押收益  ======
* function pendingCake(address owner) external view returns (uint256)
-----------------


-----------------
* 领取收益
* function draw(address owner) external 
-----------------








DepositPool
=====================================================

-----------------
* 设置每日出矿量
* function setCakePerBlock(
        uint _pid,
        uint perBlockAward  //用户输入1天出矿量 / 28800 = 传给合约的值
        ) external
-----------------


-----------------
* 获取每日出矿量
* function poolInfo(uint _pid) external view returns(PoolInfo)
* PoolInfo {
        IERC20 lpToken;         
        uint256 cakePerBlock;   //每块收益 * 28800 = 1天的出矿量
        uint256 lastRewardBlock;  
        uint256 accCakePerShare;    
        uint256 totalHashRate;          //全网算力
        bool isBurn;
        uint256 outOutMulriple;
    }
-----------------


CrowdDao
=====================================================

-----------------
* 添加新一轮私募
* function addRoundCrowd(
        uint start,     //开始时间
        uint end,       //结束时间  
        uint price,     //单位U值，1e18
        uint amount,    //单位U可获得fish数量 ，如果是50e18，表示 1u = 50fish
        uint total      //总共要私募数量
        )external
-----------------


-----------------
* 提取私募获得的U，u发送到主权限地址
* function withdraw(uint amount) external
-----------------



Nmine
=====================================================

-----------------
* 获取nft质押挖矿每日出矿量
* function poolInfo()external view returns(PoolInfo)
* PoolInfo {
        uint256 mined;                         
        uint256 cakePerBlock;               //每块收益 * 28800 = 每日出矿量
        uint256 lastRewardBlock;            
        uint256 accCakePerShare;            
        uint256 totalHashRate;              //全网算力
    }
-----------------


-----------------
* 添加新一轮私募
* function setCakePerBlock(
        uint cakePerBlock       //用户输入每日出矿量 / 28800 = 每块收益，传给合约
        )external
-----------------








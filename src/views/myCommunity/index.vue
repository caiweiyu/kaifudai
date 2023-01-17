<template>
  <div class="myCommunity">
    <div class="page-head">
      <img class="back" src="@/assets/images/back.png"  @click="$router.back()"  />
      <!-- 我的社区 -->
      My community
    </div>
    <div class="textMain">
      <!-- 我的社区
      社区是若干社会群体或社会组织聚集在某一个领域里所形成的一个生活上相互关联的大集体，是社会有机体最基本的内容，是宏观社会的缩影。社会学家给社区下出的定义有140多种。社区是具有某种互动关系的和共同文化维系力的，在一定领域内相互关联的人群形成的共同体及其活动区域。
      尽管社会学家对社区下的定义各不相同，在构成社区的基本要素上认识还是基本一致的，普遍认为一个社区应该包括一定数量的人口、一定范围的地域、一定规模的设施、一定特征的文化、一定类型的组织。社区就是这样一个“聚居在一定地域范围内的人们所组成的社会生活共同体”。
      社区的特点：有一定的地理区域；有一定数量的人口；居民之间有共同的意识和利益；有着较密切的社会交往。 -->
      My community Community is a large collective of interrelated life formed by a number of social groups or social organizations gathered in a certain field. It is the most basic content of the social organism and the microcosm of the macro society. 
      Sociologists define community in more than 140 ways. Community is a community and its activity area formed by interrelated groups with certain interactive relations and common cultural maintenance. 
      Although sociologists have different definitions of community, they basically agree on the basic elements of community. It is generally believed that a community should include a certain number of population, a certain range of territory, a certain scale of facilities, 
      a certain characteristics of culture, and a certain type of organization. Community is such a "community of social life composed of people living in a certain area". The characteristics of the community: there is a certain geographical area; Having a certain number of people; 
      A common sense and interest among the inhabitants; Have relatively close social contact.
    </div>
  </div>
</template>

<script>
import "./mobile.css";
export default {
  name: "myCommunity",
};
</script>

<style scoped>
.myCommunity {
  padding-top: 62px;
}
.page-head {
  display: none;
}
.textMain {
  width: 952px;
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 30px;
}
</style>

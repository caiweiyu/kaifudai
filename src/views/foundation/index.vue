<template>
  <div class="foundation">
    <div class="page-head">
      <img class="back" src="@/assets/images/back.png"  @click="$router.back()"  />
      <!-- 基金会 -->
      foundation
    </div>
    <div class="textMain">
      <!-- 基金会（慈善基金会，foundation），是指利用自然人、法人或者其他组织捐赠的财产，以从事公益事业为目的，按照本条例的规定成立的非营利性法人。
      基金会分为面向公众募捐的基金会和不得面向公众募捐的基金会。公募基金会按照募捐的地域范围，分为全国性公募基金会和地方性公募基金会。根据《基金会管理条例》规定，基金会必须在民政部门登记方能合法运作，就其性质而言是一种民间非营利组织。
      基金会取得成熟发展最早是在美国。美国基金会在20世纪后开始蓬勃发展。1900年的卡耐基基金会和洛克菲勒基金会是最早成立的一批基金会中比较知名的两家。1936年成立的福特基金会，由福特家族资助，拥有数十亿美元，项目遍布全球，影响范围很广。2000年，比尔及梅琳达·盖茨基金会成立，成为全球最大的慈善基金会，旨在促进全球卫生和教育领域的平等。
      1、公益性
      基金会的公益性集中体现在三个方面：一是基金会源于捐赠，是公益捐赠的制度化和组织化形式；二是基金会有明确的公益宗旨；三是基金会有明确的公益用途，通过各种项目活动使特定群体和整个社会受益。公益性决定了基金会在本质上是一种社会公益组织。 -->
      A foundation (charitable foundation) means a non-profit legal person established in accordance with the provisions of these Regulations for the purpose of engaging in public welfare undertakings by utilizing the assets donated by natural persons, legal persons or other organizations.
      Foundations are divided into those that solicit donations from the public and those that do not. Public funds are divided into national public funds and local public funds according to the geographical scope of fund-raising. According to the Regulations on Foundation Administration, a foundation must be registered with the civil affairs department before it can operate legally. It is a non-governmental non-profit organization in nature.
      Foundations first matured in the United States. American foundations began to flourish after the 20th century. The Carnegie Corporation and the Rockefeller Foundation in 1900 were two of the first foundations to be established. The Ford Foundation, founded in 1936 and funded by the Ford family, has billions of dollars, projects around the world and a wide reach. In 2000, the Bill & Melinda Gates Foundation was established as the world's largest charitable foundation to promote equality in health and education worldwide.
      1. Public welfare
      The commonweal nature of foundations is embodied in three aspects: first, foundations originate from donations and are institutionalized and organized forms of commonweal donations; Second, the foundation has a clear public welfare purpose; Third, foundations have a clear public benefit purpose, benefiting specific groups and society as a whole through various project activities. The commonweal nature determines that foundation is a kind of social commonweal organization in essence.

 
    </div>
  </div>
</template>

<script>
import "./mobile.css";
export default {
  name: "foundation",
};
</script>

<style scoped>
.foundation {
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

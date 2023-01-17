<template>
  <div>
    404页面
    <br />
    <button @click="$router.back()">返回上一页</button>  
    <br>
    <button @click="$router.push('/home')">返回首页</button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

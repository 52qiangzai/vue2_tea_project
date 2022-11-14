<template>
  <van-tabbar route>
    <van-tabbar-item icon="home-o" replace to="/home">主页</van-tabbar-item>
    <van-tabbar-item icon="newspaper-o" replace to="/list"
      >分类</van-tabbar-item
    >
    <van-tabbar-item icon="shopping-cart-o" replace to="/cart"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item icon="friends-o" replace to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style lang="less" scoped></style>

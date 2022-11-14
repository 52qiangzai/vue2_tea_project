<template>
  <van-nav-bar
    :left-arrow="left ? false : true"
    v-on="$listeners"
  >
    <template #title>
      {{ title }}
    </template>
    <template #left v-if="left">
      {{ left }}
    </template>
    <template #right v-if="right">
      {{ right }}
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    title: {
      type: String,
      default: "标题",
    },
    left: {
      type: String,
      default: "",
    },
    right: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  mounted() {},

  methods: {
    aaa() {
      console.log(3);
    },
  },
};
</script>
<style lang="less" scoped></style>

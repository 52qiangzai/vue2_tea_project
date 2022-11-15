<template>
  <div>
    <NavBar
      title="个人中心"
      right="主页"
      @left-click="leftClick"
      @right-click="rightClick"
    />
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar";
import NavBar from "@/components/common/NavBar";
import { myNavBar } from "@/mixins/NavBar";
export default {
  name: "Me",
  components: { Tabbar, NavBar },
  mixins: [myNavBar],
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>

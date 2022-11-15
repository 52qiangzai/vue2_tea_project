<template>
  <div class="list">
    <van-tree-select
      height="100vh"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <van-image
          v-if="active === 0"
          src="https://img01.yzcdn.cn/vant/apple-1.jpg"
        />
        <van-image
          v-if="active === 1"
          src="https://img01.yzcdn.cn/vant/apple-2.jpg"
        />
      </template>
    </van-tree-select>
    <!-- 底部 -->
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar";
export default {
  name: "List",
  components: { Tabbar },
  data() {
    return {
      active: 0,
      items: [{ text: "分组 1" }, { text: "分组 2" }],
    };
  },
};
</script>
<style lang="less" scoped>
.list{
  height: 100vh;
  width: 100vw;
}
</style>

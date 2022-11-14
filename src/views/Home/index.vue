<template>
  <div class="home">
    <!-- topBar -->
    <van-tabs>
      <van-tab
        v-for="item in topBar"
        :title="item.label"
        :key="item.id"
      ></van-tab>
    </van-tabs>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" :touchable="false" class="mySwipe">
      <van-swipe-item v-for="image in swiperListCom" :key="image.id">
        <img v-lazy="image.imgUrl" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- icon -->
    <div class="iconNav">
      <div class="list" v-for="icon in iconListsCom" :key="icon.id">
        <img :src="icon.imgUrl" :alt="icon.title" />
        <span>{{ icon.title }}</span>
      </div>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="title">小七推荐</div>
      <div class="recImage">
        <img src="http://localhost:8080/images/recommend.jpeg" alt="" />
        <img src="http://localhost:8080/images/recommend.jpeg" alt="" />
      </div>
    </div>
    <!-- 底部 -->
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar";
import { reqRecommend } from "@/api/Home.js";
export default {
  name: "Home",
  components: { Tabbar },
  data() {
    return {
      topBar: [],
      swiperList: [],
      iconsList: [],
      recommendList: [],
      likeList: [],
    };
  },
  mounted() {
    this.getRecommend();
  },
  computed: {
    swiperListCom() {
      return this.swiperList.map((item) => {
        item.imgUrl = location.origin + item.imgUrl.slice(1);
        return item;
      });
    },
    iconListsCom() {
      return this.iconsList.map((item) => {
        item.imgUrl = location.origin + item.imgUrl.slice(1);
        return item;
      });
    },
  },
  methods: {
    // 获取首页推荐信息
    async getRecommend() {
      try {
        let res = await reqRecommend();
        if (res.code === 0) {
          this.topBar = res.data.topBar;
          res.data.data.map((item) => {
            this[item.type] = item.data;
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  background-color: #f5f5f5;
  .mySwipe {
    height: 160px;
  }
  .iconNav {
    height: 80px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        text-align: center;
        font-size: 15px;
      }
    }
  }
  .recommend {
    margin-top: 10px;
    height: 150px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      text-align: center;
      font-size: 20px;
      padding: 10px;
    }
    .recImage {
      padding: 10px;
      flex: 1;
      display: flex;
      justify-content: space-around;
      img {
        border-radius: 10px;
        width: 45%;
      }
    }
  }
}
</style>

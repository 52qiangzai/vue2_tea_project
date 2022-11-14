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
        <img
          :src="item"
          alt=""
          v-for="(item, index) in recImgList"
          :key="index"
        />
      </div>
    </div>
    <!-- 爆款推荐 -->
    <div class="recommend">
      <div class="title">爆款推荐</div>
      <div class="cart" v-for="item in recommendListCom" :key="item.id">
        <div class="tag">{{ tags[item.id] }}</div>
        <div class="left">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <div class="right">
          <div class="name">
            {{ item.name }}
            <span>{{ item.content }}</span>
          </div>
          <div class="price">￥{{ item.price }}</div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="recommend">
      <div class="title">猜你喜欢</div>
      <div class="info">
        <div class="product" v-for="item in likeListCom" :key="item.id">
          <div class="pic">
            <img :src="item.imgUrl" :alt="item.name" />
          </div>
          <div class="v">
            <span>{{ item.name }}</span>
            <span>￥{{ item.price }}</span>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
      tags: ["老铁推荐", "爆款", "茶友必备"],
      recImgList: [
        "http://img.tea7.com/0160209_0.png?x-oss-process=image/resize,w_720",
        "http://img.tea7.com/0149845_0.png?x-oss-process=image/resize,w_720",
      ],
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
    recommendListCom() {
      return this.recommendList.map((item) => {
        item.imgUrl = location.origin + item.imgUrl.slice(1);
        return item;
      });
    },
    likeListCom() {
      return this.likeList.map((item) => {
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
    min-height: 150px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      text-align: center;
      font-size: 20px;
      padding: 10px;
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d4c0a7;
        top: 20px;
      }
      &::before {
        left: 120px;
      }
      &::after {
        right: 120px;
      }
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
    .cart {
      position: relative;
      margin: 10px;
      background-color: #f5f5f5;
      border-radius: 10px;
      .tag {
        background-color: #d4c0a7;
        color: #fff;
        border-radius: 0 0 8px 8px;
        padding: 5px;
        position: absolute;
        left: 10px;
      }
      .left,
      img {
        width: 100%;
        border-radius: 10px;
      }
      .right {
        padding: 0 5px;
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #666666;
        .name {
          font-size: 13px;
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            font-size: 16px;
            color: #333333;
          }
        }
        .price {
          padding-right: 20px;
          text-align: right;
          font-size: 20px;
          color: #b0352f;
        }
      }
    }
    .info {
      padding: 5px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      .product {
        width: 48%;
        .pic {
          background-color: #f3f3f3;
        }
        img {
          width: 100%;
        }
        .v {
          display: flex;
          flex-direction: column;
          font-size: 18px;
          & > span:first-child {
            padding: 8px 0;
          }
          & > span:last-child {
            padding: 0 0 8px 0;
            color: #b0352f;
          }
        }
      }
    }
  }
}
</style>

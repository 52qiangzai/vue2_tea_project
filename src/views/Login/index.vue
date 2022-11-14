<template>
  <div class="login">
    <NavBar title="登录" @click-left="leftClick" />
    <div class="logo">
      <img src="./../../assets/images/tea7_logo.png" alt="" srcset="" />
    </div>
    <div class="content">
      <van-field v-model.number="mobile" type="tel" clearable placeholder="请输入手机号" maxlength="11" required/>
      <!-- 图片验证码 -->
      <van-field v-model="code" maxlength="4" center clearable placeholder="请输入右侧验证码" required>
        <template #extra>
          <van-image
            width="100"
            lazy-load
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            style="padding:10px"
          />
        </template>
      </van-field>
      <!-- 手机验证码 -->
      <van-field v-model="sms" center clearable placeholder="请输入短信验证码" required>
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import { loginNavBar } from "@/mixins/NavBar.js";
export default {
  name: "Login",
  components: { NavBar },
  mixins: [loginNavBar],
  data() {
    return {
      mobile: "",
      sms: "",
      code: "",
    };
  },
  // mounted() {
  //   console.log(loginNavBar);
  // },
  methods: {},
};
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #f7f8fa;
}
.logo {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
}
.content {
  padding: 0 30px 30px 30px;
}
</style>

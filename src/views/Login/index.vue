<template>
  <div class="login">
    <NavBar title="登录" @click-left="leftClick" />
    <div class="logo">
      <img src="./../../assets/images/tea7_logo.png" alt="" srcset="" />
    </div>
    <!-- 验证码登录 -->
    <div class="content" v-if="isCode">
      <van-form @submit="onSubmit">
        <van-field
          v-model.number="mobile"
          type="tel"
          clearable
          placeholder="请输入手机号"
          maxlength="11"
          required
          :rules="[
            { validator: phoneValidator_l, message: phoneValidator_msg },
          ]"
        />
        <!-- 手机验证码 -->
        <van-field
          v-model="sms"
          center
          clearable
          placeholder="请输入短信验证码"
          required
          :rules="[{ required: true, message: smsValidator_msg }]"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              @click="sendMsg"
              :disabled="!isSend"
              ref="sendCodeBtn"
              >发送验证码</van-button
            >
          </template>
        </van-field>
        <div style="font-size: 10px; margin: 16px 0; cursor: pointer" @click="isCode = !isCode">
          切换到密码登录
        </div>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
    <!-- 账号密码登录 -->
    <div class="content" v-else>
      <van-form @submit="onSubmit">
        <van-field
          v-model.number="mobile"
          type="tel"
          clearable
          placeholder="请输入手机号"
          maxlength="11"
          required
          :rules="[
            { validator: phoneValidator_l, message: phoneValidator_msg },
          ]"
        />
        <!-- 手机验证码 -->
        <van-field
          v-model="password"
          center
          clearable
          placeholder="请输入密码"
          required
          :rules="[{ required: true, message: '请输入密码' }]"
        >
        </van-field>
        <div style="font-size: 10px; margin: 16px 0; cursor: pointer" @click="isCode = !isCode">
          切换到验证码登录/注册
        </div>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import { loginNavBar } from "@/mixins/NavBar.js";
import { phoneValidator } from "@/utils/validator";
import {
  reqSendMsg,
  reqLoginUserByCode,
  reqLoginUserByPassword,
} from "@/api/User.js";
import { setToken } from "@/utils/auth";
export default {
  name: "Login",
  components: { NavBar },
  mixins: [loginNavBar],
  data() {
    return {
      mobile: "",
      sms: "",
      code: 0,
      isSend: true,
      timer: 60,
      interTimer: null,
      isCode: false,
      password: "",
    };
  },
  methods: {
    // 验证手机号
    phoneValidator_msg() {
      if (this.mobile === null || this.mobile === "") return "手机号不能为空";
      if (!phoneValidator()) return "请输入正确的手机号";
    },
    phoneValidator_l() {
      return phoneValidator(this.mobile);
    },
    smsValidator_msg() {
      if (this.sms === "") return "请输入验证码";
    },
    smsValidator_l() {
      return this.code === +this.sms;
    },

    // 发送验证码
    async sendMsg() {
      if (!this.phoneValidator_l())
        return this.$toast.fail(this.phoneValidator_msg());
      try {
        let res = await reqSendMsg(this.mobile);
        if (res.code === 200) {
          this.code = res.data.data;
          this.$toast.success("发送成功");
          this.isSend = false;
          this.$refs.sendCodeBtn.innerHTML = `${this.timer} 后发送`;
          clearInterval(this.interTimer);
          this.interTimer = setInterval(() => {
            if (this.timer > 0) {
              this.timer--;
              this.$refs.sendCodeBtn.innerHTML = `${this.timer} 后发送`;
            } else {
              this.timer = 60;
              this.$refs.sendCodeBtn.innerHTML = `发送验证码`;
              clearInterval(this.interTimer);
              this.isSend = true;
            }
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    },

    // 登录
    async onSubmit() {
      if (this.isCode) {
        if (!this.smsValidator_l) return this.$toast.fail("验证码错误");
        if (this.smsValidator_l() && this.phoneValidator_l()) {
          try {
            let res = await reqLoginUserByCode({ phone: this.mobile });
            if (res.code === 200) {
              const { token } = res.data.data;
              setToken(token);
              this.$router.push({ name: "my" });
              return this.$toast.success("登录成功");
            } else {
              return this.$toast.fail("登录失败");
            }
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        try {
          let res = await reqLoginUserByPassword({
            userTel: this.mobile,
            userPwd: this.password,
          });
          if (res.code === 200) {
            const { token } = res.data.data;
            setToken(token);
            this.$router.push({ name: "my" });
            return this.$toast.success("登录成功");
          } else {
            return this.$toast.fail("密码不正确");
          }
        } catch (error) {}
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.interTimer);
  },
};
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
  background-color: #f7f8fa;
}
.logo {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 10px;
  }
}
.content {
  padding: 0 30px 30px 30px;
}
</style>

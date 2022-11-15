import request from "@/utils/request";
// 发送验证码
export const reqSendMsg = (phone) => {
  return request({
    method: "post",
    url: "/code",
    data: phone,
  });
};

// 验证码登录
export const reqLoginUserByCode = (data) => {
  return request({
    method: "post",
    url: "/addUser",
    data,
  });
};


// 账号密码登录
export const reqLoginUserByPassword = (data) => {
    return request({
      method: "post",
      url: "/login",
      data,
    });
  };
  

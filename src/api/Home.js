import request from "@/utils/request";
// 首页推荐数据
export const reqRecommend = () => {
  return request.get("/index_list/0/data/1");
};

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  // 底部导航
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home"),
  },
  {
    name: "my",
    path: "/my",
    component: () => import("@/views/My"),
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("@/views/Cart"),
  },
  {
    name: "List",
    path: "/list",
    component: () => import("@/views/List"),
  },
  // 单页面路由
  {
    name:'login',
    path:'/login',
    component:()=>import('@/views/Login')
  }
];

export default routes;

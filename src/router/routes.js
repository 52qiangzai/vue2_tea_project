const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "my",
    path: "/my",
    component: () => import("@/views/My.vue"),
  },
  {
    name: "cart",
    path: "/cart",
    component: () => import("@/views/Cart.vue"),
  },
  {
    name: "List",
    path: "/list",
    component: () => import("@/views/List.vue"),
  },
];

export default routes;

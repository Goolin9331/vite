import BlankLayout from "@/layout/BlankLayout.vue";
import TopNavigation from "@/layout/TopNavigation.vue";
import HomeView from "@/views/home/index.vue";
import ConfigView from "@/views/profile/index.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routeItems: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: TopNavigation,
    name: "首页",
    children: [
      {
        path: "/",
        name: "首页",
        component: HomeView,
      },
    ],
  },
  {
    path: "/profile",
    component: BlankLayout,
    name: "配置",
    children: [
      {
        path: "/profile",
        name: "配置",
        component: ConfigView,
      },
    ],
  },
  {
    path: "/login",
    name: "登录",
    component: () => import("@/views/login/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/vite/dist/"),
  routes: routeItems,
});
/**
 * 1. 排除没有layout的页面
 * 2. 页面如果设置了 hidden : true 的话，也排除
 */
const routes: RouteRecordRaw[] = [];
router.getRoutes().forEach((item) => {
  routes.push(
    ...item.children.filter((child) => {
      if (child.meta?.hidden == true) {
        return false;
      } else {
        return true;
      }
    })
  );
});
export { routes };
export default router;

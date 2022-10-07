import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/introduction",
    name: "introduction",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IntroductionView.vue"),
    props: {
      title: "Phương pháp học Kanji bằng LỤC THƯ",
      breadcrumbList: [],
      className: "pageTitle",
    },
  },
  {
    path: "/learn-kanji",
    name: "learn-kanji",
    component: () => import("../views/LearnKanjiView.vue"),
    props: {
      title: "Learn Kanji",
      breadcrumbList: [
        {
          title: "Kanji",
          path: "/",
        },
        {
          title: "Học kanji",
          path: "/learn-kanji",
        },
        {
          title: "Flashcard",
          path: "/learn-kanji/flashcard",
        },
      ],
      className: "pagetitle",
    },
  },
  {
    path: "/learn-kanji/flashcard",
    name: "flashcard",
    component: () => import("../views/FlashCardView.vue"),
    props: {
      title: "Flashcard",
      breadcrumbList: [
        {
          title: "Kanji",
          path: "/",
        },
        {
          title: "Học kanji",
          path: "/learn-kanji",
        },
        {
          title: "Flashcard",
          path: "/learn-kanji/flashcard",
        },
      ],
      className: "pagetitle",
    },
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserView.vue"),
    props: {
      title: "Profile",
      breadcrumbList: [],
      className: "pagetitle",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

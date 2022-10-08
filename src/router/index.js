import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    props: {
      title: "Login",
      breadcrumbList: [],
      className: "pageTitle",
    },
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
  {
    path: "/question",
    name: "question",
    component: () => import("../views/ExerciseView.vue"),
    props: {
      title: "Câu hỏi trắc nghiệm",
      breadcrumbList: [],
      className: "pagetitle",
    },
  },
  {
    path: "/teacher-contact",
    name: "teacherContact",
    component: () => import("../views/TeacherContactView.vue"),
    props: {
      title: "Liên lạc với giảng viên",
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

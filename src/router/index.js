import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

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
    }, {
        path: "/videocall",
        name: "videocall",
        component: () => import("../views/VideoCallView.vue"),
        props: {
            title: "Trò chuyện ngẫu nhiên",
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

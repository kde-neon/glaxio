import { createRouter, createWebHistory } from "vue-router";

const route = createRouter({
    mode: 'history',
    history: createWebHistory("/"),
    routes: [
        {
            name: "Home",
            path: "/home",
            component: import("../components/Home.vue")
        },
        {
            name: "Fan",
            path: "/fan",
            component: import("../view/Fan.vue")
        },
        {
            name: "Chat",
            path: "/chat",
            component: import("../view/Chat.vue")
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})

export default route
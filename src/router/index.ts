import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {App} from "vue";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/login/register.vue')
    }
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export function setupRouter(app: App<Element>) {
    app.use(router)
}

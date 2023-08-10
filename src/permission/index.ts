import { Router } from "vue-router";
import { userStore } from "@/store/stores";
import pinia from "@/store";

const permissionRoute = ['Home', 'Login', 'NotFound']

function permission(router: Router) {
    router.beforeEach((to, from, next) => {
    const store = userStore()
        
        if (store.token) {
            // 已经登录
            next()
        } else {
            // 没有登录
            if (permissionRoute.includes(to.name as string)) {
                next()
            } else {
                next({
                    path: '/login/index'
                })
                
            }
        }
    })
}

export default permission
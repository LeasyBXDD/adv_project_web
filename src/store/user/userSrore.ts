
import { defineStore } from "pinia"

interface userState {
    token: boolean;
    userInfo: Object
}


export const userStore = defineStore('user', {

    state: (): userState => ({
        token: false,
        userInfo: {}
    }),

    actions: {
        setToken(val: boolean) {
            this.token = val
        },
        setUserInfo(val: Object) {
            this.userInfo = val
        }
    },

    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
              storage: sessionStorage,
              paths: ['token', 'userInfo'],//指定要长久化的字段
            },
            {
                storage: localStorage,
                paths: [''],//指定要长久化的字段
              }
        ]
    }

})
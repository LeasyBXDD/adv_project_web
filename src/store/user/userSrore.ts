
import { defineStore } from "pinia"


interface userState {
    token: boolean;
    userInfo: User.Info;
    userEdu: User.Edu;
}


export const userStore = defineStore('user', {

    state: (): userState => ({
        token: false,
        userInfo: {
            userId: null,
            userAva: '',
            userName: '',
            sex: null,
            profile: '',
            location: '',
            phoneNum: ''
        },
        userEdu: {
            schoolName: '',
            field: '',
            education: ''
        }
    }),

    actions: {

        setToken(val: boolean) {
            this.token = val
        },

        setUserInfo(val: User.Info) {
            this.userInfo = {...this.userInfo, ...val}
        },

        setUserEdu(val: User.Edu) {
            this.userEdu = {...this.userEdu, ...val}
        }
        
    },

    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
              storage: sessionStorage,
              paths: ['token', 'userInfo', 'userEdu'],//指定要长久化的字段
            },
            {
                storage: localStorage,
                paths: [''],//指定要长久化的字段
              }
        ]
    }

})

import { defineStore } from "pinia"


interface userState {
    token: boolean;
    userInfo: User.Info;
    userEdu: User.Edu;
    userFile: string[]
}


export const userStore = defineStore('user', {

    state: (): userState => ({
        token: false,
        userInfo: {
            userId: null,
            userAva: 'https://i.postimg.cc/gJfJXMNT/image.jpg',
            userName: '',
            sex: null,
            profile: '',
            location: '',
            phoneNum: '',
            identity: ''
        },
        userEdu: {
            schoolName: '',
            field: '',
            education: ''
        },
        userFile: []
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
        },

        setUserFile(val: string[]) {
            this.userFile = val
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
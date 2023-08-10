import { defineStore } from "pinia";

interface State {
    managerMenu: Array<Layout.ManagerMenu>
}

const menuStore = defineStore('menuStore', {
    state: (): State => ({
        managerMenu: [
            {
                key: 0,
                title: '首页',               
                pathName: 'ManageHome',
            },
            {
                key: 1,
                title: '声纹记录',
                pathName: 'ManageHistory',
            }
        ]
    })
})


export{
    menuStore
} 
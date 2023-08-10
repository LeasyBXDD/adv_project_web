import { defineStore } from "pinia";



interface Header {
    homeHeader: Array<Layout.HeaderMenu>;
    userHeader: Array<Layout.HeaderMenu>;
    voiceprintHeader: Array<Layout.HeaderMenu>;
    testResultHeader: Array<Layout.HeaderMenu>
    curBreadList: Array<Layout.BreadItem>
}


export const headerStore = defineStore('header', {

    state: (): Header => ({
        // Home下header
        homeHeader: [
            { title: '首页', key: 1 },
            { title: '功能介绍', key: 2 },
            { title: '关于我们', key: 3 },
            { title: '联系我们', key: 4 },
            { title: '常见问题', key: 5 }
        ],

        // 个人信息界面下的header
        userHeader: [
            {
                title: "编辑个人资料",
                key: 1,
                pathName: "EditProfile"
            },
            {
                title: "安全中心",
                key: 2,
                pathName: "SecurityCenter"
            }
        ],

        //Voiceprint下header
        voiceprintHeader: [
            {
                title: '声纹检测',
                key: 1,
                pathName: 'VoiceprintSubmit',
                path: '/voiceprint/submit/stage-first',
                breadList: [
                    {
                        title: '声纹检测',
                        toPathName: 'VoiceprintSubmit'
                    },
                    {
                        title: '上传声纹'
                    }
                ]
            },
            {
                title: '历史声纹记录',
                key: 2,
                pathName: 'VoiceprintHistory',
                breadList: [
                    {
                        title: '声纹历史记录',
                        toPathName: 'VoiceprintHistory'
                    },
                    {
                        title: '查看历史记录',
                        toPathName: 'VoiceprintHistory'
                    }
                ]
            }
        ],

        // 声纹测试结果下的header
        testResultHeader: [
            {
                title: '声纹检测',
                key: 1,
                pathName: 'VoiceprintSubmit',
                path: '/voiceprint/submit/stage-first',
            }
        ],


        // 当前的breadList
        curBreadList: [
            {
                title: '声纹检测',
                toPathName: 'VoiceprintSubmit'
            },
            {
                title: '上传声纹'
            }
        ]

    }),

    actions: {
        setCurBreadList(menuItem: Array<Layout.BreadItem>) {
            this.curBreadList = menuItem
        }
    },

    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                storage: sessionStorage,
                paths: ['curBreadList'],//指定要长久化的字段
            },
            {
                storage: localStorage,
                paths: [''],//指定要长久化的字段
            }
        ]
    }
})

import request from "./request";

const http = {

    // 用户登录接口
    userLogin(params: Object) {
        return request({
            url: '/user/login',
            method: 'post',
            mock: true,
            data: params
        })
    },

    // 用户注册接口
    userRegister(params: Object) {
        return request({
            url: '/user/register',
            method: 'post',
            mock: true,
            data: params
        })
    },

    // 获取首页评价集合展示的接口
    getHomeEvaluations(params: Object) {
        return request({
            url: '/evaluations/get',
            method: 'get',
            mock: true,
            data: params
        })
    },

    // 获取声纹历史记录的接口
    getVoiceprintHistory(params: Object) {
        return request({
            url: '/voiceprint/history',
            method: 'get',
            mock: true,
            data: params
        })
    },

    // 删除声纹接口
    deleteVoiceprint(params: Object) {
        return request({
            url: '/voiceprint/delete',
            method: 'post',
            mock: true,
            data: params
        })
    },

    // 查看声纹详情
    getVoiceprintDetail(params: Object) {
        return request({
            url: '/voiceprint/detail',
            method: 'post',
            mock: true,
            data: params
        })
    }

}


export default http
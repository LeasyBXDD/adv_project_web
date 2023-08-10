
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

    // 上传声纹进行测试的接口
    uploadVoiceprint(params: Object) {
        return request({
            url: '/voiceprint/upload',
            method: 'post',
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
    },

    // 用户评价
    addEvaluation(params: Object) {
        return request({
            url: '/evaluations/add',
            method: 'post',
            mock: true,
            data: params
        })
    },

    // 获取用户信息
    getUserInfo(params: Object) {
        return request({
            url: '/user/get',
            method: 'get',
            mock: true,
            data: params
        })
    },

    // 修改用户信息
    editUserInfo(params: Object) {
        return request({
            url: '/user/edit',
            method: 'post',
            mock: true,
            data: params
        })
    },

    // 修改头像
    editUserAva(params: Object) {
        return request({
            url: '/user/editAva',
            method: 'post',
            mock: true,
            data: params
        })
    },

    // 提交访客量
    setVisit(params: Object) {
        return request({
            url: 'visits/set',
            method: 'post',
            mock: true,
            data: params
        })
    }

}


export default http
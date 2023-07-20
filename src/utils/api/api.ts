
import request from "./request";

const http = {

    // 用户登录接口
    userLogin(params: Object) {
        return request({
            url: '/user/login',
            method: 'post',
            mock: false,
            data: params
        })
    }

}


export default http
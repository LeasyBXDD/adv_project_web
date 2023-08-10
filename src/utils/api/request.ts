import axios from "axios";
import { AxiosRequestHeaders } from 'axios';
import { ElMessage } from "element-plus";
import config from "../../config";
import { useRouter } from "vue-router";


interface RequestOptions {
    method?: string;
    data: Object;
    url: string;
    mock: boolean;
    header?: Object;
    params?: Object;
}


const router = useRouter()

const NETWORK_ERROR = '网络请求异常,请稍后再试'

const service = axios.create({
    baseURL: config.urlApi.baseApi,
    // timeout: 5 * 1000,
    withCredentials: true // 异步携带 Token
})

service.interceptors.request.use((req) => {

    req.headers = <AxiosRequestHeaders> {
        'Content-Type': 'application/json'
    }

    return req

}, (err) => {
    ElMessage({
        message: err || NETWORK_ERROR,
        type: "error"
    })
})

service.interceptors.response.use((res) => {


    // 成功请求到接口，并非请求到数据
    if (res.status && res.status === 200) {

        const { code, data, msg } = res.data

        if (code === 200) {

            return data
    
        } else {
    
            switch (code) {
    
                case 404: 
                    ElMessage({
                        message: '请求错误,未找到该资源',
                        type: 'error'
                    })
                    router.push({name: 'NotFound'})
                    break

                case 500:
                    ElMessage({
                        message: 'code with 500: 逻辑业务错误',
                        type: 'error'
                    })
                    break

                case 401: 
                    ElMessage({
                        message: 'code with 401: 资源找不到',
                        type: 'error'
                    })
                    break

                default: 
                    ElMessage.error(msg || NETWORK_ERROR)
            }

            
            return Promise.reject(msg || NETWORK_ERROR)
        }
    }

    return res.data


    
}, (err) => {

    // 没有访问到后端接口，请求时报错
    switch (err.code) {
        case 404:
            ElMessage({
                message: '请求错误,未找到该资源!',
                type: 'error'
            })
            router.push({name: 'NotFound'})
            break
        
        case 401: 
            ElMessage({
                message: "尚未登陆，请先登录",
                type: 'error'
            })
            break
        default: 
            ElMessage({
                message: NETWORK_ERROR + err.message,
                type: 'error'
            })                        
    }
    
})


function request<T>(options: RequestOptions): T | Promise<string> {

    options.method = options.method || 'get'

    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }

    // 对mock处理
    let isMock = config.mock
    if (typeof options.mock !== 'undefined' && isMock) {
        isMock = options.mock
    }

    // 对线上环境处理
    if (config.env === 'production') {
        // 线上不给予mock处理
        service.defaults.baseURL = config.urlApi.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.urlApi.mockApi : config.urlApi.baseApi
    }

    return service(options)

}

export default request
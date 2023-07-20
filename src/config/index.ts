
interface EConfig {
    [index: string]: {
        baseApi: string;
        mockApi: string;
    };
}

const env = import.meta.env.MODE || 'production' as string

const EnvConfig: EConfig = {
    development: {
        baseApi: 'http://192.168.3.12:8080/api',
        mockApi: 'https://www.fastmock.site/mock/8f44be323a47f8ffd346823cbaf2d3b6/api'
    },
    production: {
        baseApi: '',
        mockApi: ''
    },
    test: {
        baseApi: '',
        mockApi: ''
    }
}

export default {
    env,
    mock: true,
    urlApi: EnvConfig[env]
}
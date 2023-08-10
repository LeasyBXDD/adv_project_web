
// 获取首页展示的声纹检测参数接口
export interface IGET_VOICEPRINT_AVERAGE_PARAMS {
    time: string;
}
export interface IGET_VOICEPRINT_AVERAGE_RESPONSE {
    confidenceLevel: {
        average: number;
        yesterday: number;
        weekYoy: number;
        datYoy: number;
    },
    visits: {
        total: number;
        dayly: number;
    },
    minDetectionCostFunc: number;
    equalErrorRate: {
        average: number;
        weekYoy: number;
        datYoy: number;
    }
}


// 获取声纹检测数/访客量接口 
export interface IGET_VOICEPRINT_ALL_PARAMS {
    type: 1 | 0;
    timeType: 4 | 3 | 2 | 1 | 0;
    timeBegin: string;
    timeEnd: string;
}
export interface IGET_VOICEPRINT_ALL_RESPONSE {
    list: number[];
}


// 今日声纹识别数据统计
export interface IGET_VOICEPRINT_TODAT_PARAMS {
    time: string;
}
export interface IGET_VOICEPRINT_TODAT_RESPONSE {
    voiceprint: {
        total: number;
        raise: number;
    },
    perCapita: {
        average: number;
        raise: number;
    },
    average: {
        confidenceLevel: number;
        minDetectionCostFunc: number;
        equalErrorRate: number;
        runtime: number;
    }
}


// 用户评价统计接口
export interface IGET_MANAGER_EVALUATION_PARAMS {
    timeType: 0 | 1 | 2;
    time?: string;
}
export interface IGET_MANAGER_EVALUATION_RESPONSE {
    list: number[];
}


// 获取声纹记录
export interface IGET_MANAGER_VOICEPRINT_HISTORY_PARAMS {
    historyId?: number | null;
    time?: string;
    projectName?: string;
    page: number;
    size: number;
}
export interface IGET_MANAGER_VOICEPRINT_HISTORY_RESPONSE {
    list: Array<{
        historyId: number;
        projectName: string;
        userName: string;
        time: string;    
    }>
}



export interface IGET_MANAGER_VOICEPRINT_DETAILS_PARAMS {
    historyId: number;
}
export interface IGET_MANAGER_VOICEPRINT_DETAILS_RESPONSE {
    runtime: number;
    confidenceLevel: number;
    equalErrorRate: number;
    minDetectionCostFunc: number;
    files: string[];
    fileName: string[];
}

// 删除声纹记录
export interface IDELETE_MANAGER_VOICEPRINT_PARAMS {
    historyId: number;
}
export interface IDELETE_MANAGER_VOICEPRINT_RESPONSE {
    isDeleted: boolean;
}


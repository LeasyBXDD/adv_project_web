
import request from "../request";

import {
    IGET_VOICEPRINT_AVERAGE_PARAMS,
    IGET_VOICEPRINT_ALL_PARAMS,
    IGET_VOICEPRINT_TODAT_PARAMS,
    IGET_MANAGER_EVALUATION_PARAMS,
    IGET_MANAGER_VOICEPRINT_HISTORY_PARAMS,
    IGET_MANAGER_VOICEPRINT_DETAILS_PARAMS,
    IDELETE_MANAGER_VOICEPRINT_PARAMS,

    IGET_VOICEPRINT_AVERAGE_RESPONSE,
    IGET_VOICEPRINT_ALL_RESPONSE,
    IGET_VOICEPRINT_TODAT_RESPONSE,
    IGET_MANAGER_EVALUATION_RESPONSE,
    IGET_MANAGER_VOICEPRINT_HISTORY_RESPONSE,
    IGET_MANAGER_VOICEPRINT_DETAILS_RESPONSE,
    IDELETE_MANAGER_VOICEPRINT_RESPONSE,
} from "./types";

const managerHttp = {

    getVoiceprintAverage(params: IGET_VOICEPRINT_AVERAGE_PARAMS) {
        return request<IGET_VOICEPRINT_AVERAGE_RESPONSE>({
            url: '/manager/voiceprint/average',
            method: 'get',
            data: params,
            mock: true
        });
    },

    getVoiceprintAll(params: IGET_VOICEPRINT_ALL_PARAMS) {
        return request<IGET_VOICEPRINT_ALL_RESPONSE>({
            url: '/manager/voiceprint/all',
            method: 'get',
            data: params,
            mock: true
        });
    },

    getVoiceprintToday(params: IGET_VOICEPRINT_TODAT_PARAMS) {
        return request<IGET_VOICEPRINT_TODAT_RESPONSE>({
            url: '/manager/voiceprint/today',
            method: 'get',
            data: params,
            mock: true
        });
    },

    getManagerEvaluation(params: IGET_MANAGER_EVALUATION_PARAMS) {
        return request<IGET_MANAGER_EVALUATION_RESPONSE>({
            url: '/manager/evaluations',
            method: 'get',
            data: params,
            mock: true
        });
    },

    getManagerVoiceprintHistory(params: IGET_MANAGER_VOICEPRINT_HISTORY_PARAMS) {
        return request<IGET_MANAGER_VOICEPRINT_HISTORY_RESPONSE>({
            url: '/manager/voiceprint/history',
            method: 'get',
            data: params,
            mock: true
        });
    },

    getManagerVoiceprintDetails(params: IGET_MANAGER_VOICEPRINT_DETAILS_PARAMS) {
        return request<IGET_MANAGER_VOICEPRINT_DETAILS_RESPONSE>({
            url: '/manager/voiceprint/details',
            method: 'get',
            data: params,
            mock: true
        }) 
    },

    deleteManagerVoiceprint(params: IDELETE_MANAGER_VOICEPRINT_PARAMS) {
        return request<IDELETE_MANAGER_VOICEPRINT_RESPONSE>({
            url: '/manager/voiceprint/delete',
            method: 'post',
            data: params,
            mock: true
        })
    }


}


export default managerHttp;
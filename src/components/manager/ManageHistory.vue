<template>
    <div class="manage-history-box">
        <h4>查询声纹记录</h4>
        <div class="table-box">
            <div class="table-header">
                <div class="header-item">
                    <span>声纹编号：</span>
                    <el-input
                    placeholder="请输入声纹编号"
                    size="large"
                    v-model="inputHistoryId"
                     />
                </div>
                <div class="header-item">
                    <span>项目名称：</span>
                    <el-input
                    placeholder="请输入项目名称"
                    size="large"
                    v-model="inputProjectName"
                    />
                </div>
                <div class="header-item">
                    <span>提交日期：</span>
                    <el-date-picker
                    type="date"
                    placeholder="请选择声纹提交日期"
                    size="large"
                    v-model="inputTime"
                />
                </div>
                <div class="ops">
                    <button class="btn-search" @click="handleSerach">
                        <svg t="1690877380855" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2376" width="200" height="200"><path d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z" fill="#ffffff" p-id="2377"></path></svg>
                        搜索
                    </button>
                    <button class="btn-reset" @click="handleReset">
                        <svg t="1690877420751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3387" width="200" height="200"><path d="M938.336973 255.26894c-16.685369-6.020494-35.090879 2.752226-40.939358 19.437594l-24.770032 69.493701c-29.070385-65.537376-74.998152-123.162103-133.48295-166.337645-185.947253-137.611288-450.848984-100.112212-590.180413 83.942886C81.534688 350.908785 52.980346 460.653788 68.805644 570.742819c15.825298 110.605073 74.48211 208.481102 164.789518 275.394591 75.686209 55.904586 164.273476 83.082815 252.172686 83.082815 128.494541 0 255.26894-57.624727 338.007727-166.853687 36.639006-48.335965 61.581052-102.348396 74.48211-160.833193 3.78431-17.373425-7.224593-34.402822-24.426004-38.187133-17.201411-3.78431-34.402822 7.052579-38.187133 24.426004-10.836889 49.36805-31.994625 95.123803-62.957164 135.891147-118.173694 156.016798-342.996136 187.839409-500.90509 70.869814-76.546279-56.592642-126.086343-139.33143-139.503444-232.907106-13.417101-93.059634 10.664875-185.775239 67.77356-261.11742C318.05409 144.491853 542.704519 112.497228 700.785486 229.466823c57.280699 42.315471 100.112212 100.972283 123.334117 167.197715l-110.261045-43.003528c-16.513355-6.364522-35.090879 1.720141-41.627415 18.233496-6.536536 16.513355 1.720141 35.090879 18.233496 41.627415l162.38132 63.473207c3.78431 1.548127 7.740635 2.236183 11.69696 2.236183 0.516042 0 1.032085-0.172014 1.548127-0.172014 1.204099 0.172014 2.408198 0.688056 3.612296 0.688056 13.245087 0 25.630102-8.256677 30.274483-21.32975l57.796741-161.693264C963.623047 279.694944 955.022342 261.289434 938.336973 255.26894z" fill="#2c2c2c" p-id="3388"></path></svg>
                        重置
                    </button>
                </div>
            </div>
            <div class="table-content">
                <HistoryTable :table-data="tableData" @delete-history="deleteHistory"></HistoryTable>
                <el-pagination background layout="prev, pager, next" 
                :total="1000" 
                v-model:current-page="curPage"
                @current-change="changeCurPage" />
            </div>
    
        </div>
    </div>
</template>


<script setup lang="ts">

import HistoryTable from '../form/HistoryTable.vue';
import { nextTick, onMounted, reactive, ref } from 'vue';
import managerHttp from '@/utils/api/manager/managerApi';
import { IGET_MANAGER_VOICEPRINT_HISTORY_RESPONSE, IDELETE_MANAGER_VOICEPRINT_RESPONSE } from "@/utils/api/manager/types"
import { ElMessage } from 'element-plus';
import { getCurDay } from '@/utils/day/getCurDay';

const inputHistoryId = ref<string>("")
const inputProjectName = ref<string>("")
const inputTime = ref<string>("")
const curPage = ref<number>(1)

const tableData = reactive<Array<Props.HistoryTableProps>>([])

onMounted(async () => {
    await initTableData()
})

const changeCurPage = async (): Promise<void> => {
    await initTableData()
}

const handleSerach = async (): Promise<void> => {
    await initTableData()
}

const deleteHistory = async (row: Props.HistoryTableProps): Promise<void> => {
    const params = {
        historyId: row.historyId
    }
    const data = await managerHttp.deleteManagerVoiceprint(params) as IDELETE_MANAGER_VOICEPRINT_RESPONSE
    if (data.isDeleted) {
        ElMessage({
            type: "success",
            message: "删除成功"
        })
        await initTableData()
    } else {
        ElMessage({
            type: "error",
            message: "删除失败"
        })
    }
}

const handleReset = async (): Promise<void> => {
    inputHistoryId.value = ""
    inputProjectName.value = ""
    inputTime.value = ""
    await initTableData()
    
}

const initTableData = async (): Promise<void> => {
    const regex: RegExp = /^\d+$/;
    let id: number | null
    try {
        if (regex.test(inputHistoryId.value) || inputHistoryId.value === '') {
            id = inputHistoryId.value === '' ? null : parseInt(inputHistoryId.value)
        } else {
            // 重置
            handleReset()
            throw("请输入正确格式的编号")
        }
        
    } catch(e: unknown) {
        ElMessage({
            type: "error",
            message: e as string
        })
        return;
    }
    const params = {
        historyId: id,
        time: inputTime.value ? getCurDay(inputTime.value) : "",
        projectName: inputProjectName.value,
        size: 10,
        page: curPage.value
    }
    const data = await managerHttp.getManagerVoiceprintHistory(params) as IGET_MANAGER_VOICEPRINT_HISTORY_RESPONSE
    // 避免响应式丢失
    tableData.length = 0
    await nextTick()
    tableData.push(...data.list)
    
}

</script>


<style lang="less" scoped>
.manage-history-box {
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .table-box {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .table-header {
            background-color: #fff;
            padding: 20px 30px;
            display: flex;
            gap: 20px;
            .header-item {
                display: flex;
                gap: 5px;
                font-size: 0.9rem;
                align-items: center;
                span {
                    white-space: nowrap;
                }
            }
            .ops {
                display: flex;
                align-items: center;
                gap: 5px;
                button {
                    border: none;
                    outline: none;
                    padding: 10px 13px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    border-radius: 4px;
                    background-color: #fff;
                    cursor: pointer;
                    .icon {
                        width: 20px;
                        height: 20px;
                    }
                }
                .btn-search {
                    background-color: #0054fe;
                    color: white;
                }
                .btn-reset {
                    border: 1px solid rgba(131, 131, 131, 0.781);
                }
            }
        }
        .table-content {
            padding: 20px 30px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
        
    }
}
</style>
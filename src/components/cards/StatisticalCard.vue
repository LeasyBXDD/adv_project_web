<template>
    <div class="statistical-card-box">
        <div class="header box-item">
            <div class="ops">
                <div class="ops-item" @click="handleChangeType(0)">
                    <p :style="{color: showHeaderType === 0 ? 'rgb(10, 129, 241)' : ''}">声纹检测数</p>
                    <div class="border-bottom" v-if="showHeaderType === 0"></div>
                </div>
                <div class="ops-item" @click="handleChangeType(1)">
                    <p :style="{color: showHeaderType === 1 ? 'rgb(10, 129, 241)' : ''}">访问量</p>
                    <div class="border-bottom" v-if="showHeaderType === 1"></div>
                </div>
            </div>
            <div class="header-right">
                <div class="time-type-ops">
                    <div class="ops-item" 
                    @click="handleChangeTime(0)"
                    :class="showHeaderTime === 0 ? 'ops-item-active' : ''"
                    >
                        今日
                    </div>
                    <div class="ops-item" 
                    @click="handleChangeTime(1)"
                    :class="showHeaderTime === 1 ? 'ops-item-active' : ''"
                    >
                        本周
                    </div>
                    <div class="ops-item" 
                    @click="handleChangeTime(2)"
                    :class="showHeaderTime === 2 ? 'ops-item-active' : ''"
                    >
                        本月
                    </div>
                    <div class="ops-item" 
                    @click="handleChangeTime(3)"
                    :class="showHeaderTime === 3 ? 'ops-item-active' : ''"
                    >
                        全年
                    </div>
                </div>
                <div class="time-picker">
                    <el-date-picker
                        v-model="pickedTime"
                        type="daterange"
                        range-separator="----"
                        start-placeholder="Start date"
                        end-placeholder="End date"
                        size="default"
                        @change="handleChangeTimePicker"
                    />
                </div>
            </div>
        </div>
        <div class="bodyer box-item">
            <span>{{ chartHeader }}</span>
            <div v-if="refreshChart">
                <StatisticalBarChart :data="chartData" :time-type="showHeaderTime" :x="xData"></StatisticalBarChart>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

import { ref, computed, reactive, onMounted, nextTick } from 'vue';
import StatisticalBarChart from '../charts/StatisticalBarChart.vue';
import { getCurDay } from "@/utils/day/getCurDay"
import { IGET_VOICEPRINT_ALL_RESPONSE } from '@/utils/api/manager/types';
import managerHttp from '@/utils/api/manager/managerApi';
import { ElMessage } from 'element-plus';
import { getBetweenDaysName } from '@/utils/day/getBetweenDaysName'

// showHeaderType 0 -> 声纹检测数，1 -> 访问量
const showHeaderType = ref<0 | 1>(0)
// showHeaderTime 0 -> 今日，1 -> 本周，2 -> 本月，3 -> 全年
const showHeaderTime = ref<0 | 1 | 2 | 3 | 4>(0)
const pickedTime = ref<string>('')
const chartData = reactive<number[]>([])
const refreshChart = ref<boolean>(true)
const xData = ref<string[]>([])

const chartHeader = computed((): string => {
    let title = ''
    title += showHeaderTime.value === 0 ? "日"
            : showHeaderTime.value === 1 ? "周"
            : showHeaderTime.value === 2 ? "月"
            : showHeaderTime.value === 3 ? "年"
            : ""
    title += showHeaderType.value === 0 ? "声纹检测数" : "访问量"
    return title
})

const handleChangeType = async (itemKey: 0 | 1): Promise<void> => {
    showHeaderType.value = itemKey
    await initData()
}
const handleChangeTime = async (itemKey: 0 | 1 | 2 | 3): Promise<void> => {
    showHeaderTime.value = itemKey
    await initData()
}
const handleChangeTimePicker = async (): Promise<void> => {
    const betweenTime = (pickedTime.value[1] as unknown as number - (pickedTime.value[0] as unknown as number)) / 86400000
    if (betweenTime > 7) {
        ElMessage({
            type: "error",
            message: "查询时间不得超过七天"
        })
        pickedTime.value = ''
        return;
    }
    xData.value = getBetweenDaysName(pickedTime.value[0], pickedTime.value[1])   
    showHeaderTime.value = 4 
    await initData()
}

onMounted(async () => {
    await initData()
})


const initData = async (): Promise<void> => {
    let params;
    if (pickedTime.value.length === 0) {
        params = {
            type: showHeaderType.value,
            timeType: showHeaderTime.value,
            timeBegin: getCurDay(pickedTime.value[0]),
            timeEnd: getCurDay(pickedTime.value[1]),
        }
    } else {
        params = {
            type: showHeaderType.value,
            timeType: 4 as 4,
            timeBegin: getCurDay(pickedTime.value[0]),
            timeEnd: getCurDay(pickedTime.value[1]),
        }
    }
    
    const data = await managerHttp.getVoiceprintAll(params) as IGET_VOICEPRINT_ALL_RESPONSE
    // 清空原数组
    chartData.length = 0    
    chartData.push(...data.list)

    // 手动刷新echart 防止数据拿到了不渲染
    refreshChart.value = false
    await nextTick()
    refreshChart.value = true
}

</script>



<style scoped lang="less">
.statistical-card-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .box-item {
        background-color: #fff;
        padding: 20px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .ops {
            display: flex;
            gap: 40px;
            .ops-item {
                color: rgb(183, 183, 183);
                position: relative;
                cursor: pointer;
                .border-bottom {
                    position: absolute;
                    width: 70%;
                    height: 2px;
                    background-color: rgb(10, 129, 241);
                    left: 50%;
                    top: 120%;
                    transform: translateX(-50%);
                    border-radius: 10px;
                }
            }
        }
        .header-right {
            display: flex;
            gap: 20px;
            .time-type-ops {
                display: flex;
                gap: 5px;
                align-items: center;
                .ops-item {
                    padding: 5px 10px;
                    cursor: pointer;
                    background-color: rgba(237, 237, 237, 0.715);
                    color: grey;
                    font-size: 0.9rem;
                    border-radius: 5px;
                    transition: color 0.5s;
                    transition: background-color 0.5s;
                }
                .ops-item-active {
                    background-color: #0054fe;
                    color: white;
                }

            }
          
        }
    }
} 
</style>
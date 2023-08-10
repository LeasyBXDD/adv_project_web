<template>
    <div class="user-evalution-box">
        <div class="title">
            <p>用户评价统计</p>
            <div class="ops">
                <div class="ops-item" :class="selectedTime === 2 ? 'ops-item-active' : '' " @click="changeSelectedTime(2)">
                    全部历史
                </div>
                <div class="ops-item" :class="selectedTime === 0 ? 'ops-item-active' : '' " @click="changeSelectedTime(0)">
                    今日
                </div>
                <div class="ops-item" :class="selectedTime === 1 ? 'ops-item-active' : '' " @click="changeSelectedTime(1)">
                    昨日
                </div>
            </div>
        </div>
        <div class="chart">
            <div class="chart-left chart-item">
                <HollowPieChart v-if="refresh" :data="chartData.data"></HollowPieChart>
            </div>
            <div class="chart-right chart-item">
                <div class="details">
                    <div class="detile-item">
                        <div class="color-dot" :style="{backgroundColor: chartData.data[5].itemStyle.color}"></div>
                        <div class="data">
                            <span>五星好评</span>
                            <span>{{ chartData.data[5].value }}%</span>
                        </div>
                    </div>
                    <div class="detile-item">
                        <div class="color-dot" :style="{backgroundColor: chartData.data[4].itemStyle.color}"></div>
                        <div class="data">
                            <span>四星好评</span>
                            <span>{{ chartData.data[4].value }}%</span>
                        </div>
                    </div>
                    <div class="detile-item">
                        <div class="color-dot" :style="{backgroundColor: chartData.data[3].itemStyle.color}"></div>
                        <div class="data">
                            <span>三星中评</span>
                            <span>{{ chartData.data[3].value }}%</span>
                        </div>
                    </div>
                    <div class="detile-item">
                        <div class="color-dot" :style="{backgroundColor: chartData.data[2].itemStyle.color}"></div>
                        <div class="data">
                            <span>二星中评</span>
                            <span>{{ chartData.data[2].value }}%</span>
                        </div>
                    </div>
                    <div class="detile-item">
                        <div class="color-dot" :style="{backgroundColor: chartData.data[1].itemStyle.color}"></div>
                        <div class="data">
                            <span>一星差评</span>
                            <span>{{ chartData.data[1].value }}%</span>
                        </div>
                    </div>
                    <div class="detile-item">
                        <div class="color-dot" :style="{backgroundColor: chartData.data[0].itemStyle.color}"></div>
                        <div class="data">
                            <span>无评价</span>
                            <span>{{ chartData.data[0].value }}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { nextTick, onMounted, reactive, ref } from 'vue';
import HollowPieChart from '../charts/HollowPieChart.vue';
import { IGET_MANAGER_EVALUATION_RESPONSE } from '@/utils/api/manager/types';
import manageHttp from "@/utils/api/manager/managerApi"
import { getCurDay } from '@/utils/day/getCurDay';

interface DataType {
    value: number;
    itemStyle: {
        color: string;
    }
}

// selectedTime 0 -> 今日，1 -> 昨日，2 -> 全部历史
const selectedTime = ref<0 | 1 | 2>(0)
const refresh = ref<boolean>(true)
const chartData = reactive<{
    data: Array<DataType>
}>({
    data: [
        {
            // 无评价
            value: 0,
            itemStyle: {
                color: "#0f2f68"
            }
        },
        {
            // 一星
            value: 0,
            itemStyle: {
                color: "#4d7bf3"
            }
        },
        {
            // 二星
            value: 0,
            itemStyle: {
                color: "#4fccff"
            }
        },
        {
            // 三星
            value: 0,
            itemStyle: {
                color: "#6fe621"
            }
        },
        {
            // 四星
            value: 0,
            itemStyle: {
                color: "#ffc760"
            }
        },
        {
            // 五星
            value: 0,
            itemStyle: {
                color: "#fb497c"
            }
        }
    ]
})

const changeSelectedTime = (key: 0 | 1 | 2): void => {
    selectedTime.value = key
    initData()
}

onMounted(async () => {
    await initData()
})

const initData = async (): Promise<void> => {
    const params = {
        timeType: selectedTime.value,
        time: getCurDay()
    }
    const data = await manageHttp.getManagerEvaluation(params) as IGET_MANAGER_EVALUATION_RESPONSE
    for (let i = 0; i < chartData.data.length; i++ ) {
        chartData.data[i].value = data.list[i]
    }

    // 刷新echarts 防止不更新
    refresh.value = false
    await nextTick()
    refresh.value = true

}

</script>


<style lang="less" scoped>
.user-evalution-box {
    display: flex;
    flex-direction: column;
    gap: 13px;
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .ops {
            display: flex;
            align-items: center;
            gap: 10px;
            .ops-item {
                padding: 5px 13px;
                font-size: 0.9rem;
                border-radius: 5px;
                background-color: #f2f2f2;
                color: #74798c;
                cursor: pointer;
            }
            .ops-item-active {
                background-color: #0054fe;
                color: white;
            }
        }
    }
    .chart {
        display: flex;
        width: 100%;
        .chart-item {
            width: 50%;
            height: 100%;
        }
        .chart-right {
            .details {
                height: 100%;
                display: flex;
                flex-direction: column;
                gap: 10px;
                .detile-item {
                    padding: 10px 20px;
                    background-color: #f8f9fb;
                    font-size: 0.9rem;
                    color: grey;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    .color-dot {
                        width: 7px;
                        height: 7px;
                        background-color: black;    
                        border-radius: 50%;                 
                    }
                    .data {
                        flex: 1;
                        display: flex;
                        justify-content: space-between;
                    }   
                }
            }
        }
    }
}
</style>
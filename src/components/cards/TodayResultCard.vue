<template>
    <div class="today-result-card-box">
        <p>今日声纹识别数据统计</p>
        <div class="inner-card">
            <div class="card-item">
                <div class="item-left">
                    <p class="title">声纹识别次数</p>
                    <p class="data">{{ numberFixed(cardData.data.voiceprint.total) }}</p>
                </div>
                <div class="item-right">
                    <p>本日<span style="color: rgb(0, 209, 70);">{{ numberFixed(cardData.data.voiceprint.raise) }}%</span></p>
                </div>
            </div>
            <div class="card-item">
                <div class="item-left">
                    <p class="title">人均识别次数</p>
                    <p class="data">{{ numberFixed(cardData.data.perCapita.average) }}</p>
                </div>
                <div class="item-right">
                    <p>本周<span style="color: red;">{{ numberFixed(cardData.data.perCapita.raise, 2) }}%</span></p>
                </div>
            </div>
        </div>
        <div class="chart">
            <LineProgressPurpleBar
            title="声纹置信度"
            :data="numberFixed(cardData.data.average.confidenceLevel)"
            :progress="cardData.data.average.confidenceLevel * 100"
            >
            </LineProgressPurpleBar>
            <LineProgressPurpleBar
            title="最小成本函数"
            :data="numberFixed(cardData.data.average.minDetectionCostFunc)"
            :progress="cardData.data.average.minDetectionCostFunc * 100"
            >
            </LineProgressPurpleBar>
            <LineProgressPurpleBar
            title="等错误率"
            :data="numberFixed(cardData.data.average.equalErrorRate)"
            :progress="cardData.data.average.equalErrorRate * 100"
            >
            </LineProgressPurpleBar>
            <LineProgressPurpleBar
            title="运行时间"
            :data="numberFixed(cardData.data.average.runtime)"
            :progress="cardData.data.average.runtime"></LineProgressPurpleBar>
        </div>
    </div>
</template>


<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import LineProgressPurpleBar from "@/components/progressBar/LineProgressPurpleBar.vue"
import managerHttp from '@/utils/api/manager/managerApi';
import { IGET_VOICEPRINT_TODAT_RESPONSE } from '@/utils/api/manager/types';
import { getCurDay } from '@/utils/day/getCurDay';
import { useNumberFixed } from '@/hooks/fixed';

interface Voiceprint {
    total: number;
    raise: number;
}
interface PerCapita {
    average: number;
    raise: number;
}

interface Average {
    confidenceLevel: number;
    minDetectionCostFunc: number;
    equalErrorRate: number;
    runtime: number;
}

const cardData = reactive<{
    data: {
        voiceprint: Voiceprint;
        perCapita: PerCapita;
        average: Average  
    }
}>({
    data: {
        voiceprint: {
            total: 0,
            raise: 0
        },
        perCapita: {
            average: 0,
            raise: 0
        },
        average: {
            confidenceLevel: 0,
            minDetectionCostFunc: 0,
            equalErrorRate: 0,
            runtime: 0
        }
    }
})
const numberFixed = useNumberFixed()

onMounted(async () => {
    await getData()
})

const getData = async (): Promise<void> => {
    const params = {
        time: getCurDay()
    }
    const data = await managerHttp.getVoiceprintToday(params) as IGET_VOICEPRINT_TODAT_RESPONSE
    cardData.data.voiceprint = data.voiceprint
    cardData.data.perCapita = data.perCapita
    cardData.data.average = data.average
}
</script>


<style scoped lang="less">
.today-result-card-box {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 440px;
    .inner-card {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .card-item {
            padding: 15px;
            border-radius: 3px;
            background-color: #f8f9fb;
            display: flex;
            justify-content: space-between;
            width: 45%;
            .item-left {
                display: flex;
                flex-direction: column;
                gap: 10px;
                .title {
                    color: rgb(161, 161, 161);
                    font-size: 0.9rem;
                }
                .data {
                    font-size: 1.2rem;
                }
            }
            .item-right {
                display: flex;
                align-items: flex-end;
                font-size: 0.8rem;
                span {
                    margin-left: 5px;
                }
            }
        }
    }
    .chart {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>
<template>
    <div class="manage-home">
        <div class="cards">
            <ResultCard :data="resultCardData" type="TConfidenceLevel" title="平均声纹识别置信度">
                <template #icon-box>
                    <div class="icon-box" style="backgroundColor: #774afe;">
                        <svg t="1690793146218" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2308" width="200" height="200"><path d="M512 0a51.2 51.2 0 0 1 51.2 51.2v921.6a51.2 51.2 0 1 1-102.4 0V51.2a51.2 51.2 0 0 1 51.2-51.2zM716.8 153.6a51.2 51.2 0 0 1 51.2 51.2v563.2a51.2 51.2 0 1 1-102.4 0V204.8a51.2 51.2 0 0 1 51.2-51.2zM921.6 256a51.2 51.2 0 0 1 51.2 51.2v358.4a51.2 51.2 0 1 1-102.4 0V307.2a51.2 51.2 0 0 1 51.2-51.2zM102.4 256a51.2 51.2 0 0 1 51.2 51.2v358.4a51.2 51.2 0 1 1-102.4 0V307.2a51.2 51.2 0 0 1 51.2-51.2zM307.2 153.6a51.2 51.2 0 0 1 51.2 51.2v563.2a51.2 51.2 0 1 1-102.4 0V204.8a51.2 51.2 0 0 1 51.2-51.2z" fill="#ffffff" p-id="2309"></path></svg>
                    </div>
                </template>
                <template #details>
                    <span>昨日声纹识别置信率 </span>
                    <span>{{ numberFixed(resultCardData.confidenceLevel.yesterday) }}</span>
                </template>
                <template #chart>
                    <div class="cfl-chart">
                        <span>周同比{{ numberFixed(resultCardData.confidenceLevel.weekYoy) }}%</span>
                        <span>日环比{{ numberFixed(resultCardData.confidenceLevel.datYoy) }}%</span>
                    </div>
                </template>
            </ResultCard>
            <ResultCard :data="resultCardData" type="TVisits" title="访问量">
                <template #icon-box>
                    <div class="icon-box" style="backgroundColor: #bd52ff;">
                        <svg t="1690793258880" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3395" width="200" height="200"><path d="M485.506 479.076c-2.099 0-4.213 0.108-6.335 0.318l-316.325 31.364c-27.907 2.769-50.687 23.327-56.083 50.61s7.868 54.857 32.654 67.867l58.333 30.613L76.757 779.81c-11.926 11.826-18.626 27.866-18.626 44.586s6.7 32.763 18.626 44.586l79.081 78.401c12.419 12.319 28.697 18.471 44.972 18.471s32.553-6.151 44.972-18.471l120.993-119.955 30.878 57.837c11.171 20.916 32.986 33.557 56.198 33.557 4.059 0 8.158-0.385 12.251-1.182 27.522-5.348 48.262-27.939 51.051-55.609l31.635-313.618c1.898-18.822-4.823-37.497-18.309-50.868-11.984-11.877-28.194-18.469-44.97-18.469z m-31.643 376.682l-71.171-133.293-181.885 180.331-79.081-78.401 181.885-180.331-134.439-70.56 316.325-31.364-31.635 313.618z m62.027-576.272c17.561 0 31.803-14.114 31.803-31.525V89.671c0-17.41-14.244-31.525-31.803-31.525-17.561 0-31.803 14.114-31.803 31.525v158.288c0 17.41 14.243 31.526 31.803 31.526z m182.812 75.076c8.139 0 16.27-3.079 22.483-9.237l112.889-111.924c12.419-12.305 12.419-32.275 0-44.58-12.419-12.319-32.547-12.319-44.972 0L676.22 300.74c-12.428 12.31-12.428 32.275 0 44.586 6.207 6.16 14.346 9.237 22.483 9.237z m235.367 118.186H774.417c-17.566 0-31.803 14.114-31.803 31.533 0 17.41 14.237 31.525 31.803 31.525h159.652c17.566 0 31.803-14.114 31.803-31.525 0.001-17.418-14.237-31.533-31.803-31.533zM721.185 663.23c-12.419-12.319-32.547-12.319-44.966 0-12.428 12.31-12.428 32.275 0 44.586l112.882 111.919c6.213 6.159 14.352 9.237 22.49 9.237 8.131 0 16.27-3.079 22.483-9.237 12.419-12.305 12.419-32.275 0-44.58L721.185 663.231zM310.597 345.324c6.207 6.159 14.346 9.237 22.483 9.237s16.27-3.079 22.483-9.237c12.419-12.31 12.419-32.275 0-44.586L242.674 188.819c-12.419-12.319-32.547-12.319-44.966 0-12.419 12.305-12.419 32.275 0 44.58l112.889 111.924z" fill="#ffffff" p-id="3396"></path></svg>
                    </div>
                </template>
                <template #details>
                    <span>日访问量 </span>
                    <span>{{ numberFixed(resultCardData.visits.dayly) }}</span>
                </template>
                <template #chart>
                    <ManagerLineChart></ManagerLineChart>
                </template>
            </ResultCard>
            <ResultCard :data="resultCardData" type="TMinDetectionCostFunc" title="最小检测成本函数">
                <template #icon-box>
                    <div class="icon-box" style="backgroundColor: rgb(84, 166, 247);">
                        <svg t="1690793292814" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4463" width="200" height="200"><path d="M528.8 865h-334c-9.5 0-17.3-8.6-17.3-19.2V168.2c0-10.6 7.8-19.2 17.3-19.2h582.8c9.5 0 17.3 8.6 17.3 19.2v410.6c0 13.3 10.7 24 24 24s24-10.7 24-24V168.2c0-37.1-29.3-67.2-65.3-67.2H194.8c-36 0-65.3 30.2-65.3 67.2v677.6c0 37.1 29.3 67.2 65.3 67.2h334c13.3 0 24-10.7 24-24s-10.7-24-24-24z" fill="#ffffff" p-id="4464"></path><path d="M485.2 736.9c13.3 0 24-10.7 24-24V578H643c13.3 0 24-10.7 24-24s-10.7-24-24-24H509.2v-83h107c13.3 0 24-10.7 24-24s-10.7-24-24-24h-84l98-95.9c7.9-7.7 8-20.4 0.3-28.3s-20.4-8-28.3-0.3L485.5 388.7 368.8 274.5c-7.9-7.7-20.6-7.6-28.3 0.3-7.7 7.9-7.6 20.6 0.3 28.3l98 95.9h-84.7c-13.3 0-24 10.7-24 24s10.7 24 24 24h107v83H327.3c-13.3 0-24 10.7-24 24s10.7 24 24 24h133.8v134.8c0.1 13.3 10.8 24.1 24.1 24.1zM884.5 883.1l-58.7-48.8c11.1-20.1 17-42.9 17-66.1 0-75.5-61.4-137-137-137s-137 61.4-137 137 61.4 137 137 137c33.3 0 65-12 89.7-33.5l58.2 48.4c4.5 3.7 9.9 5.5 15.3 5.5 6.9 0 13.7-3 18.5-8.7 8.6-10.1 7.2-25.3-3-33.8z m-178.6-25.9c-49 0-89-39.9-89-89 0-49 39.9-89 89-89 49 0 89 39.9 89 89 0 21-7.4 41.3-20.9 57.3-17 20.2-41.8 31.7-68.1 31.7z" fill="#ffffff" p-id="4465"></path></svg>
                    </div>
                </template>
                <template #chart>
                    <div class="columns">
                        <SingleColumnChart :top="20"></SingleColumnChart>
                        <SingleColumnChart :top="40"></SingleColumnChart>
                        <SingleColumnChart :top="10"></SingleColumnChart>
                        <SingleColumnChart :top="60"></SingleColumnChart>
                        <SingleColumnChart :top="30"></SingleColumnChart>
                        <SingleColumnChart :top="5"></SingleColumnChart>
                        <SingleColumnChart :top="70"></SingleColumnChart>
                    </div>
                </template>
            </ResultCard>
            <ResultCard :data="resultCardData" type="TEqualErrorRate" title="等错误率">
                <template #icon-box>
                    <div class="icon-box" style="backgroundColor: rgba(0, 230, 0, 0.772);">
                        <svg t="1690793349439" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6376" width="200" height="200"><path d="M481.28 1024c-189.44 0-358.4-102.4-450.56-266.24-5.12-10.24 0-25.6 10.24-35.84s25.6 0 35.84 10.24C158.72 880.64 312.32 972.8 481.28 972.8c256 0 460.8-204.8 460.8-460.8s-204.8-460.8-460.8-460.8C312.32 51.2 158.72 143.36 76.8 291.84c-5.12 15.36-20.48 20.48-30.72 15.36s-20.48-20.48-15.36-30.72l46.08-204.8c0-15.36 15.36-20.48 25.6-20.48s20.48 15.36 20.48 30.72l-15.36 81.92C199.68 61.44 337.92 0 481.28 0c138.24 0 266.24 51.2 363.52 148.48s148.48 225.28 148.48 363.52-51.2 266.24-148.48 363.52S619.52 1024 481.28 1024z" p-id="6377" fill="#ffffff"></path><path d="M199.68 665.6c-15.36 0-25.6-10.24-25.6-25.6V409.6h-25.6c-10.24 0-25.6-10.24-25.6-25.6s15.36-25.6 25.6-25.6h51.2c15.36 0 25.6 10.24 25.6 25.6v256c0 15.36-10.24 25.6-25.6 25.6zM404.48 665.6h-102.4c-15.36 0-25.6-10.24-25.6-25.6v-256c0-15.36 15.36-25.6 25.6-25.6h102.4c15.36 0 25.6 10.24 25.6 25.6v256c0 15.36-10.24 25.6-25.6 25.6z m-76.8-51.2h51.2V409.6h-51.2v204.8zM609.28 665.6h-102.4c-15.36 0-25.6-10.24-25.6-25.6v-256c0-15.36 15.36-25.6 25.6-25.6h102.4c15.36 0 25.6 10.24 25.6 25.6v256c0 15.36-10.24 25.6-25.6 25.6z m-76.8-51.2h51.2V409.6h-51.2v204.8zM711.68 665.6h-10.24c-15.36-5.12-20.48-20.48-15.36-30.72l102.4-256c5.12-15.36 20.48-20.48 35.84-15.36 15.36 5.12 20.48 20.48 15.36 35.84l-102.4 256c-5.12 5.12-15.36 10.24-25.6 10.24zM711.68 409.6c-5.12 0-15.36-5.12-20.48-5.12s-5.12-10.24-5.12-20.48 5.12-15.36 5.12-20.48c10.24 0 15.36-5.12 20.48-5.12s15.36 5.12 20.48 5.12c5.12 5.12 5.12 10.24 5.12 20.48s-5.12 15.36-5.12 20.48c-5.12 0-10.24 5.12-20.48 5.12zM814.08 665.6c-5.12 0-15.36-5.12-20.48-5.12s-5.12-10.24-5.12-20.48 5.12-15.36 5.12-20.48c5.12-5.12 10.24-5.12 20.48-5.12 5.12 0 15.36 5.12 20.48 5.12 5.12 5.12 5.12 10.24 5.12 20.48s-5.12 15.36-5.12 20.48c-5.12 0-10.24 5.12-20.48 5.12z" p-id="6378" fill="#ffffff"></path></svg>
                    </div>
                </template>
                <template #details>
                    <div class="more">
                        <span>周同比{{ numberFixed(resultCardData.equalErrorRate.weekYoy) }}%</span>
                        <span>日环比{{ numberFixed(resultCardData.equalErrorRate.datYoy) }}%</span>
                    </div>
                </template>
                <template #chart>
                    <div class="line-pro">
                        <LineProgressBar :cur-progress="80"></LineProgressBar>
                    </div>
                </template>
            </ResultCard>
        </div>
        <div class="statistical-card">
            <StatisticalCard></StatisticalCard>
        </div>
        <div class="footer">
            <div class="footer-item footer-left">
                <TodayResultCard></TodayResultCard>
            </div>
            <div class="footer-item footer-right">
                <UserEvalution></UserEvalution>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import ResultCard from "@/components/cards/ResultCard.vue"
import { reactive, onMounted } from "vue";
import ManagerLineChart from '../charts/ManagerLineChart.vue';
import SingleColumnChart from "../charts/SingleColumnChart.vue";
import LineProgressBar from "@/components/progressBar/LineProgressBar.vue"
import StatisticalCard from "../cards/StatisticalCard.vue";
import TodayResultCard from "../cards/TodayResultCard.vue";
import UserEvalution from "../cards/UserEvalution.vue";
import managerHttp from "@/utils/api/manager/managerApi";
import { getCurDay } from "@/utils/day/getCurDay"
import { IGET_VOICEPRINT_AVERAGE_RESPONSE } from "@/utils/api/manager/types"
import { useNumberFixed } from "@/hooks/fixed/index"

interface ConfidenceLevel {
    average: number;
    yesterday: number;
    weekYoy: number;
    datYoy: number;
}

interface Visits {
    total: number;
    dayly: number;
}

interface EqualErrorRate {
    average: number;
    weekYoy: number;
    datYoy: number;
}

type MinDetectionCostFunc = number

interface ResultCardData {
    confidenceLevel: ConfidenceLevel;
    visits: Visits;
    equalErrorRate: EqualErrorRate;
    minDetectionCostFunc: MinDetectionCostFunc;
}

const resultCardData = reactive<ResultCardData>({
    confidenceLevel: {
        average: 0,
        yesterday: 0,
        weekYoy: 0,
        datYoy: 0
    },
    equalErrorRate: {
        average: 0,
        weekYoy: 0,
        datYoy: 0
    },
    minDetectionCostFunc: 0,
    visits: {
        total: 0,
        dayly: 0
    }
})
const numberFixed = useNumberFixed()


onMounted(async () => {

    const params = {
        time: getCurDay()
    }
    // 获取数据
    const data = await managerHttp.getVoiceprintAverage(params) as IGET_VOICEPRINT_AVERAGE_RESPONSE
    // 赋值
    resultCardData.confidenceLevel = data.confidenceLevel
    resultCardData.equalErrorRate = data.equalErrorRate
    resultCardData.minDetectionCostFunc = data.minDetectionCostFunc
    resultCardData.visits = data.visits
    
})


</script>


<style lang="less" scoped>
.manage-home {
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .cards {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 30px;
        
        .icon-box {
            height: 40px;
            width: 40px;
            border-radius: 5px;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
                width: 25px;
                height: 25px;
            }
        }
        .more {
            display: flex;
            align-items: center;
            gap: 30px;
        }
        .cfl-chart {
            padding: 5% 7%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: var(--font-color);
            margin-top: 15px;
        }
        .columns {
            display: flex;
            align-items: center;
            gap: 30px;
            padding-top: 15px;
        }
        .line-pro  {
            padding-top: 30px;
        }
        
    }
   .footer {
    display: flex;
    align-items: flex-start;
    gap: 25px;
    .footer-item {
        background-color: #fff;
        padding: 20px;
    }
    .footer-right {
        flex: 1;
        min-width: 585px;
    }
   }
}
</style>
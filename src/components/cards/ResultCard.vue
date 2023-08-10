<template>
    <div class="result-card-box">
        <div class="card-header">
            <p>{{ props.title }}</p>
            <div class="ops">
                <div class="ops-item"></div>
                <div class="ops-item"></div>
                <div class="ops-item"></div>
            </div>
        </div>
        <div class="icon">
            <slot name="icon-box"></slot>
            <p class="data">
                {{ 
                props.type === "TConfidenceLevel" ? numberFixed(props.data.confidenceLevel.average)
                : props.type === "TVisits" ? numberFixed(props.data.visits.total)
                : props.type === "TMinDetectionCostFunc" ? numberFixed(props.data.minDetectionCostFunc)
                : props.type === "TEqualErrorRate" ? numberFixed(props.data.equalErrorRate.average) + "%"
                : ""
                }}
            </p>
        </div>
        <div class="detail">
            <div>
                <slot name="details"></slot>
            </div>
        </div>
        <div class="chart">
            <slot name="chart"></slot>
        </div>
    </div>
</template>


<script lang="ts" setup>

import { useNumberFixed } from '@/hooks/fixed';

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

const props = defineProps<{
    data: ResultCardData;
    type: "TConfidenceLevel" | "TVisits" | "TEqualErrorRate" | "TMinDetectionCostFunc";
    title: string;
}>()
const numberFixed = useNumberFixed()


</script>


<style lang="less" scoped>
.result-card-box {
    --font-color: rgb(151, 151, 151);
    width: 250px;
    height: 200px;
    padding: 20px;
    background-color: rgb(252, 252, 252);
    border-radius: 5px;
    
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--font-color);
        font-size: 0.8rem;
        .ops {
            display: flex;
            flex-direction: column;
            gap: 3px;
            cursor: pointer;
            .ops-item {
                height: 3px;
                width: 3px;
                border-radius: 50%;
                background-color: var(--font-color);
            }
        }
    }
    .icon {
        padding: 10px 0 5px;
        display: flex;
        align-items: center;
        gap: 30px;
        .data {
            font-size: 1.7rem;
        }
    }
    .detail {
        min-height: 20px;
        color: var(--font-color);
        font-size: 0.6rem;
    }
}
</style>
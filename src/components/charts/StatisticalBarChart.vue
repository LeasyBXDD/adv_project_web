<template>
    <div>
        <div id="main1" style="width:100%;height:276px"></div>
    </div>
</template>


<script setup lang="ts">

import { onMounted, reactive, watch } from 'vue';
import * as echarts from 'echarts';

const xAxisType = reactive([
    ["0:00-1:59", "2:00-3:59", "4:00-5:59", "6:00-7:59", "8:00-9:59", "10:00-11:59",
    "12:00-13:59", "14:00-15:59", "16:00-17:59", "18:00-19:59", "20:00-21:59", "22:00-23:59"],
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    [],
    ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
    []
])
const props = defineProps<{
    data: Array<number>;
    timeType: number;
    x?: string[]
}>()

watch(
    [() => props.data, () => props.timeType],
    () => {
        updated()
    }
)

onMounted(() => {
    updated()
})

/**
 * 补全xAxisType的月份部分
 */
const initXAxisType = (): void => {

    if (props.timeType === 2) {
        for(let i = 1; i < props.data.length; i++) {
            xAxisType[2].push(i + "日")
        }
    } else if(props.timeType === 4) {
        xAxisType[4] = props.x!
    } else {
        xAxisType[2] = []
    }
}

const updated = (): void => {

    initXAxisType()

    var chartDom = document.getElementById('main1');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
    xAxis: {
        type: 'category',
        data: xAxisType[props.timeType],
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: props.data,
            type: 'bar',
            color: "rgb(98, 0, 255)",
            barWidth: "20px"
        }
    ]
    };

    option && myChart.setOption(option);
}
</script>


<style scoped lang="less">
div {
    color: rgb(98, 0, 255);
}
</style>
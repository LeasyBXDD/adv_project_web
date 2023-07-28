<template>
    <div>
        <div id="main" style="width:100%;height:176px"></div>
    </div>
</template>




<script setup lang="ts">
import { onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const props = defineProps(['data'])


watch(props, () => {
    update()
})

onMounted(() => {
    update()
})

const update = (): void => {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['average', 'my']
    },
    series: [
        {
        name: 'Confidence level',
        type: 'bar',
        data: [props.data.my.confidenceLevel, props.data.average.confidenceLevel]
        },
        {
        name: 'Equal Error Rate',
        type: 'bar',
        data: [props.data.my.equalErrorRate, props.data.average.equalErrorRate]
        },
        {
        name: 'Minimum detection cost function',
        type: 'bar',
        data: [props.data.my.minDetectionCostFunc, props.data.my.minDetectionCostFunc]
        }
    ]
    };

    option && myChart.setOption(option);
}

</script>


<style lang="less" scoped>
    
</style>
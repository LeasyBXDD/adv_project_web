<template>
    <div class="hollow-pie-chart-box">
        <div id="main3" style="width:100%;height:306px"></div>
    </div>
</template>



<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';

interface DataType {
    value: number;
    itemStyle: {
        color: string;
    }
}

const props = defineProps<{
    data: Array<DataType>
}>()

onMounted(() => {
    updated()
})

const updated = (): void => {
    var chartDom = document.getElementById('main3');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        sort: "asc",
        roseType: 'area',
        series: [
            {
                type: 'pie',
                radius: [20, 140],
                roseType: 'area',
                data: props.data.sort((a,b) => a.value - b.value),
                itemStyle: {
                    borderWidth: 0
                },
                label: {
                    show: false
                },
            }
        ]
    };

    option && myChart.setOption(option);
}
</script>


<style scoped lang="less">
</style>
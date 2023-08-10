<template>
    <div>
        <div id="main" style="width:100%;height:76px"></div>
    </div>
</template>


<script setup lang="ts">

import { onMounted } from 'vue';
import * as echarts from 'echarts';

onMounted(() => {
    update()
})

const update = (): void => {

    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: false
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                color: '#cf81ffad',
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#cf81ffad',
                            },
                            {
                                offset: 0.6,
                                color: '#e5bcffad',
                            },
                            {
                                offset: 1,
                                color: 'white',
                            }
                        ],
                        global: false,
                    },
                }
            }
        ]
    };

    option && myChart.setOption(option);
}

</script>



<style lang="less" scoped>
div {
    color: #e5bcffad;
}
</style>
<template>
    <div class="box">
        <div class="img-box">
            图片
        </div>
        <div class="bar-box">
            <div class="bar-item">
                <div class="bar-inner">
                    <CircleProgressBar :rate="results.confidenceLevel * 100"></CircleProgressBar>
                    <div class="detials">
                        <p> <span>{{ results.confidenceLevel }}</span> / 1 </p>
                        <p class="title">置信度</p>
                    </div>
                </div>
            </div>
            <div class="bar-item">
                <div class="bar-inner">
                    <CircleProgressBar :rate="results.equalErrorRate * 10"></CircleProgressBar>
                    <div class="detials">
                        <p><span>{{ results.equalErrorRate }} </span> %</p>
                        <p class="title">等错误率</p>
                    </div>
                </div>
            </div>
            <div class="bar-item">
                <div class="bar-inner">
                    <CircleProgressBar :rate="results.minDetectionCostFunc * 1000"></CircleProgressBar>
                    <div class="detials">
                        <p><span>{{ results.minDetectionCostFunc }}</span></p>
                        <p class="title">最小检测成本函数</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="more-ops">
            <div class="more-ops-left more-ops-item">
                <div class="title">
                    <p>下载</p>
                </div>
                <div class="content">
                    <div class="content-item content-record">
                        <el-button>下载声纹记录</el-button>
                        <p>点击下载声纹记录文档</p>
                    </div>
                    <div class="content-item content-files">
                        <div class="files">
                            <div class="file-item">
                                <svg t="1689769539594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2850" width="32" height="32"><path d="M639.45 107.46L848 316v531.46a60.07 60.07 0 0 1-60 60H236a60.07 60.07 0 0 1-60-60v-680a60.07 60.07 0 0 1 60-60h403.45m19.89-48H236a108 108 0 0 0-108 108v680a108 108 0 0 0 108 108h552a108 108 0 0 0 108-108V296.12L659.34 59.46z" fill="#333333" p-id="2851"></path><path d="M869.98 320.12H635.34V85.5h48v186.62h186.64v48zM488 353.72h48v287.52h-48zM297.67 726.28h428.66v48H297.67z" fill="#333333" p-id="2852"></path><path d="M512 669.36L355.92 513.28l33.94-33.94L512 601.48l122.14-122.14 33.94 33.94L512 669.36z" fill="#333333" p-id="2853"></path></svg>
                                <p>声纹1</p>
                            </div>
                            <div class="file-item">
                                <svg t="1689769539594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2850" width="32" height="32"><path d="M639.45 107.46L848 316v531.46a60.07 60.07 0 0 1-60 60H236a60.07 60.07 0 0 1-60-60v-680a60.07 60.07 0 0 1 60-60h403.45m19.89-48H236a108 108 0 0 0-108 108v680a108 108 0 0 0 108 108h552a108 108 0 0 0 108-108V296.12L659.34 59.46z" fill="#333333" p-id="2851"></path><path d="M869.98 320.12H635.34V85.5h48v186.62h186.64v48zM488 353.72h48v287.52h-48zM297.67 726.28h428.66v48H297.67z" fill="#333333" p-id="2852"></path><path d="M512 669.36L355.92 513.28l33.94-33.94L512 601.48l122.14-122.14 33.94 33.94L512 669.36z" fill="#333333" p-id="2853"></path></svg>
                                <p>声纹2</p>
                            </div>
                            <div class="file-item">
                                <svg t="1689769539594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2850" width="32" height="32"><path d="M639.45 107.46L848 316v531.46a60.07 60.07 0 0 1-60 60H236a60.07 60.07 0 0 1-60-60v-680a60.07 60.07 0 0 1 60-60h403.45m19.89-48H236a108 108 0 0 0-108 108v680a108 108 0 0 0 108 108h552a108 108 0 0 0 108-108V296.12L659.34 59.46z" fill="#333333" p-id="2851"></path><path d="M869.98 320.12H635.34V85.5h48v186.62h186.64v48zM488 353.72h48v287.52h-48zM297.67 726.28h428.66v48H297.67z" fill="#333333" p-id="2852"></path><path d="M512 669.36L355.92 513.28l33.94-33.94L512 601.48l122.14-122.14 33.94 33.94L512 669.36z" fill="#333333" p-id="2853"></path></svg>
                                <p>声纹3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more-ops-right more-ops-item">
                <div class="title">
                    <p>可视化</p>
                </div>
                <div class="chart">
                    <BarY :data="chartData"></BarY>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">

import CircleProgressBar from "../progressBar/CircleProfressBar.vue"
import BarY from "../charts/BarY.vue"
import { reactive } from "vue"

interface Results {
    confidenceLevel: number;
    equalErrorRate: number;
    minDetectionCostFunc: number;
}

interface ChartData {
    my: Results;
    average: Results;
}

let results = reactive<Results>({
    confidenceLevel: 0.95,
    equalErrorRate: 0.03,
    minDetectionCostFunc: 0.05
})

let chartData = reactive<ChartData>({
    my: {
        confidenceLevel: results.confidenceLevel * 100,
        equalErrorRate: results.equalErrorRate * 100,
        minDetectionCostFunc: results.minDetectionCostFunc * 1000
    },
    average: {
        confidenceLevel: results.confidenceLevel * 100,
        equalErrorRate: results.equalErrorRate * 100,
        minDetectionCostFunc: results.minDetectionCostFunc * 1000
    }
})

</script>


<style lang="less" scoped>
.box {
    padding: 20px 0px 0px;
    width: 100%;
    --border-color: rgb(218, 218, 218);
    .img-box {
        width: 100%;
        height: 30vh;
        min-height: 230px;
        border-radius: 20px;
        background-color: rgb(184, 184, 184);
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .bar-box {
        margin-top: 30px;
        width: 100%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        .bar-item {
            flex: 1;
            padding: 20px 30px;
            .bar-inner {
                width: 80%;
                margin: 0 auto;
                padding: 30px 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 40px;
                background-color: rgba(236, 236, 236, 0.425);
                border-radius: 20px;
                cursor: pointer;
                .detials {
                    span {
                        font-size: 2rem;
                        font-weight: 600;
                    }
                    .title {
                        font-size: 0.9rem;
                        color: grey;
                    }
                }
            }
            .bar-inner:hover {
                box-shadow: 0 0 20px 10px rgba(228, 228, 228, 0.801);
            }
        }
    }
    .more-ops {
        display: flex;
        padding: 20px 10px;
        .more-ops-item {
            .title {
                font-size: 1.15em;
                font-weight: 600;
            }
        }
        .more-ops-left {
            flex: 3;
            border-right: 1px solid var(--border-color);
            max-width: 30%;
            .content{
                padding: 30px 0px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                .content-files {
                    .files {
                        display: flex;
                        .file-item {
                            flex: 1;
                            max-width: 33.3%;
                            svg {
                                cursor: pointer;
                            }
                            p {
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                overflow: hidden;
                            }
                        }
                        
                    }
                }
                .content-record {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }
            }
        }
        .more-ops-right {
            flex: 7;
            padding-left: 30px;
        }
    }
}
</style>
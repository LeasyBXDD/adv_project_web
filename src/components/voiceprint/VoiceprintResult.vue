<template>
    <div class="box">
        <div class="img-box">
            
        </div>
        <div class="elu-div">
            <el-button link type="primary" @click="handleFeedback">反馈</el-button>
        </div>
        <div class="bar-box">
            <div class="bar-item">
                <div class="bar-inner">
                    <CircleProgressBar :rate="chartData ? chartData.my.confidenceLevel*100 : 0"></CircleProgressBar>
                    <div class="detials">
                        <p> <span>{{ chartData ? chartData.my.confidenceLevel : 0 }}</span> / 1 </p>
                        <p class="title">置信度</p>
                    </div>
                </div>
            </div>
            <div class="bar-item">
                <div class="bar-inner">
                    <CircleProgressBar :rate="chartData ? chartData.my.equalErrorRate*100 : 0"></CircleProgressBar>
                    <div class="detials">
                        <p><span>{{ chartData ? chartData.my.equalErrorRate : 0 }} </span> %</p>
                        <p class="title">等错误率</p>
                    </div>
                </div>
            </div>
            <div class="bar-item">
                <div class="bar-inner">
                    <CircleProgressBar :rate="chartData ? chartData.my.minDetectionCostFunc*100 : 0"></CircleProgressBar>
                    <div class="detials">
                        <p><span>{{ chartData ? chartData.my.minDetectionCostFunc : 0 }}</span></p>
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
                        <el-button @click="handleDownloadResult">下载声纹记录</el-button>
                        <p>点击下载声纹记录文档</p>
                    </div>
                    <div class="content-item content-files">
                        <div class="files">
                            <div class="file-item" @click="handleDownloadFile(0)">
                                <svg t="1689769539594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2850" width="32" height="32"><path d="M639.45 107.46L848 316v531.46a60.07 60.07 0 0 1-60 60H236a60.07 60.07 0 0 1-60-60v-680a60.07 60.07 0 0 1 60-60h403.45m19.89-48H236a108 108 0 0 0-108 108v680a108 108 0 0 0 108 108h552a108 108 0 0 0 108-108V296.12L659.34 59.46z" fill="#333333" p-id="2851"></path><path d="M869.98 320.12H635.34V85.5h48v186.62h186.64v48zM488 353.72h48v287.52h-48zM297.67 726.28h428.66v48H297.67z" fill="#333333" p-id="2852"></path><path d="M512 669.36L355.92 513.28l33.94-33.94L512 601.48l122.14-122.14 33.94 33.94L512 669.36z" fill="#333333" p-id="2853"></path></svg>
                                <p>声纹1</p>
                            </div>
                            <div class="file-item" @click="handleDownloadFile(1)">
                                <svg t="1689769539594" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2850" width="32" height="32"><path d="M639.45 107.46L848 316v531.46a60.07 60.07 0 0 1-60 60H236a60.07 60.07 0 0 1-60-60v-680a60.07 60.07 0 0 1 60-60h403.45m19.89-48H236a108 108 0 0 0-108 108v680a108 108 0 0 0 108 108h552a108 108 0 0 0 108-108V296.12L659.34 59.46z" fill="#333333" p-id="2851"></path><path d="M869.98 320.12H635.34V85.5h48v186.62h186.64v48zM488 353.72h48v287.52h-48zM297.67 726.28h428.66v48H297.67z" fill="#333333" p-id="2852"></path><path d="M512 669.36L355.92 513.28l33.94-33.94L512 601.48l122.14-122.14 33.94 33.94L512 669.36z" fill="#333333" p-id="2853"></path></svg>
                                <p>声纹2</p>
                            </div>
                            <div class="file-item" @click="handleDownloadFile(2)">
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

import CircleProgressBar from "../progressBar/CircleProgressBar.vue"
import BarY from "../charts/BarY.vue"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router";
import http from "@/utils/api/api";
import router from "@/router";
import { userStore } from "@/store/stores";

interface Results {
    confidenceLevel: number;
    equalErrorRate: number;
    minDetectionCostFunc: number;
    runtime?: number;

}
interface DetailResponse {
    my: Results;
    average: Results;
}

interface ChartData {
    my: Results;
    average: Results;
}

const route = useRoute()
const store = userStore()


const chartData = ref<ChartData>({
    my: {
        confidenceLevel: 0,
        equalErrorRate: 0,
        minDetectionCostFunc: 0,
    },
    average: {
        confidenceLevel: 0,
        equalErrorRate: 0,
        minDetectionCostFunc: 0
    }
})

onMounted(async () => {
    // 获取histpryId，发请求
    const historyId = route.params.id
    const params = {
        id: Number(historyId), 
    }
    try {
        let data: DetailResponse = await <DetailResponse>http.getVoiceprintDetail(params)
        chartData.value = data
    } catch(e) { 
        console.error(e);
    }
})


/**
 * 下载声纹检测记录按钮
 */
const handleDownloadResult = (): void => {
    // 借助时间戳生成下载的文件名
    const fileName = (Date.now() / 10000+ "") + ".txt"
    // 文件内容
    const fileData = `
        测试名为：${route.query.projectName} \n
        置信度为：${chartData.value.my.confidenceLevel} \n
        等错误率为：${chartData.value.my.equalErrorRate} \n
        最小检测成本函数为：${chartData.value.my.minDetectionCostFunc} \n
    `
    // 下载文件
    const urlObject = window.URL || window.webkitURL || window;
    const export_blob = new Blob([fileData]);
    const save_link: any = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = fileName;
    save_link.click();

}

/**
 * 反馈
 */
const handleFeedback = (): void => {

    router.push({
        name: 'Evalution',
        params: {
            id: route.params.id
        }
    })
    
}

/**
 * 下载
 */
const handleDownloadFile = (key: number): void => {
    function dataURLtoBlob(dataurl: string) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)![1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }
 
    function downloadFile(url: string,name='文件默认名'){
        var a = document.createElement("a")
        a.setAttribute("href",url)
        a.setAttribute("download",name)
        a.setAttribute("target","_blank")
        let clickEvent = document.createEvent("MouseEvents");
        clickEvent.initEvent("click", true, true);  
        a.dispatchEvent(clickEvent);
    }
 
    function downloadFileByBase64(base64: string,name: string){
        var myBlob = dataURLtoBlob(base64)
        var myUrl = URL.createObjectURL(myBlob)
        downloadFile(myUrl,name)
    }
    
    downloadFileByBase64('data:audio/mpeg;base64,' + store.userFile[key], "声纹" +(key + 1) + ".mp3")

}
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
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background-image: url('../../assets/remove.png');
    }
    .elu-div {
        display: flex;
        justify-content: flex-end;
        padding-top: 10px;
    }
    .bar-box {
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

@media screen and (max-width: 481px) {
    .box {
        .bar-box {
            flex-direction: column;
            .bar-item {
                padding: 5px;
            }
        }
        .more-ops {
            flex-direction: column;
            gap: 20px;
            .more-ops-item {
                width: 100%;
            }
            .more-ops-left {
                border: none;
                max-width: 100%;
                border-bottom: 1px solid rgb(218, 218, 218);
                .content {
                    flex-direction: column;
                    width: 100%;
                    .content-item {
                        width: 100%;
                        display: flex;
                    }
                }
            }
            .more-ops-right {
                padding-left: 0px;
            }
        }
    }
}
</style>
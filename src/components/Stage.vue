<template>
    <div class="stages">
        <div class="stage-begin" data-no="id">
            <div class="stage-veiling"></div>   
            <div class="details">
                <div class="title">
                    <h1>安全声纹识别系统</h1>
                    <p>本系统基于GAN技术,为您提供快捷、准确、安全的声纹识别服务,可<br>
                        应用于金融、保险、公安等领域。</p>
                </div>
                <div class="ops">
                    <div class="ops-item ops-use">
                        <router-link
                         :to="{path: ROUTER_SETTING[store.userInfo.identity!] ? ROUTER_SETTING[store.userInfo.identity!] : '/login/index' }" 
                         style="color:white;">
                            立即试用
                        </router-link>
                    </div>
                    <div class="ops-item ops-more">了解更多</div>
                </div>
            </div>
        </div>
        <div class="stage-playground" ref="stagePlayground">
            <div class="animation-container">
                <div class="details-box">
                    <h1>智能声纹识别系统</h1>
                    <p>我们的安全声纹识别系统采用最先进的技术,可以准确识别每个人的声音，从<br>
                    而确保只有授权的人才能进入您的系统。</p>
                    <button>立即体验</button>
                </div>
                <div class="image-box">
                    <img class="stage-voice-img" src="../assets/voice.png" alt="voice">
                </div>
            </div>
        </div>
        <div class="stage-playground-sec" ref="stagePlaygroundSec">
            <div class="animation-container-sec">
                <div class="sec-title">
                    <h2>系统特色</h2>
                    <p>我们的安全声纹识别系统具有以下特色</p>
                </div>
                <div class="sec-container">
                    <div class="sec-con-item sec-item1">
                        <div class="img-box" >
                            <svg t="1691654595176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4250" width="200" height="200"><path d="M698.368 835.584H339.968c-10.24 0-18.432-8.192-18.432-18.432s8.192-18.432 18.432-18.432h358.4c10.24 0 18.432 8.192 18.432 18.432s-8.192 18.432-18.432 18.432zM698.368 729.088H339.968c-10.24 0-18.432-8.192-18.432-18.432s8.192-18.432 18.432-18.432h358.4c10.24 0 18.432 8.192 18.432 18.432s-8.192 18.432-18.432 18.432z" p-id="4251" fill="#8a8a8a"></path><path d="M788.48 942.08H249.856c-43.008 0-75.776-34.816-75.776-75.776V184.32c0-43.008 34.816-75.776 75.776-75.776h538.624c43.008 0 75.776 34.816 75.776 75.776v681.984c2.048 40.96-32.768 75.776-75.776 75.776zM249.856 143.36c-22.528 0-40.96 18.432-40.96 40.96v681.984c0 22.528 18.432 40.96 40.96 40.96h538.624c22.528 0 40.96-18.432 40.96-40.96V184.32c0-22.528-18.432-40.96-40.96-40.96H249.856z" p-id="4252" fill="#8a8a8a"></path><path d="M493.568 581.632c-92.16 0-165.888-75.776-165.888-165.888s75.776-165.888 165.888-165.888 165.888 75.776 165.888 165.888c0 6.144-2.048 10.24-6.144 14.336-4.096 4.096-10.24 4.096-14.336 2.048l-67.584-24.576c-8.192-2.048-14.336-12.288-10.24-20.48 2.048-8.192 12.288-14.336 20.48-10.24l43.008 14.336c-12.288-61.44-65.536-108.544-131.072-108.544-73.728 0-133.12 59.392-133.12 133.12s59.392 133.12 133.12 133.12c47.104 0 90.112-24.576 114.688-63.488 4.096-8.192 14.336-10.24 22.528-6.144 8.192 4.096 10.24 14.336 6.144 22.528-30.72 51.2-83.968 79.872-143.36 79.872z" p-id="4253" fill="#8a8a8a"></path><path d="M645.12 432.128c-4.096 0-8.192-2.048-12.288-4.096-6.144-6.144-6.144-16.384 0-24.576l47.104-47.104c6.144-6.144 16.384-6.144 24.576 0 6.144 6.144 6.144 16.384 0 24.576l-47.104 47.104c-4.096 2.048-8.192 4.096-12.288 4.096z" p-id="4254" fill="#8a8a8a"></path></svg>
                        </div>
                        <p>基于C&W的样本恢复</p>
                    </div>
                    <div class="sec-con-item sec-item2">
                        <div class="img-box">
                            <svg t="1691654745848" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5709" width="200" height="200"><path d="M1245.159868 527.133322h-87.181145l-25.242424-167.617675a47.890764 47.890764 0 0 0-46.09486-39.90897h-0.239454c-18.956761 0-42.662689 14.407138-47.711174 37.813749L998.043525 563.051395 941.352833 168.830588a47.890764 47.890764 0 0 0-94.604214-0.778225l-76.824767 476.912193-83.928564-603.543355a47.890764 47.890764 0 0 0-94.903531 0l-83.928565 603.56331-76.824767-476.912193a47.890764 47.890764 0 0 0-94.604214 0.778224L279.043519 563.051395l-40.647286-205.531196a46.972858 46.972858 0 0 0-47.07263-37.913522h-0.997724a47.890764 47.890764 0 0 0-45.895316 39.90897l-25.322242 167.617675H31.927176a31.927176 31.927176 0 0 0-31.927176 31.927176v31.927176a31.927176 31.927176 0 0 0 31.927176 31.927176h162.010464l46.573769 233.467475c5.108348 23.725883 23.825655 38.75161 48.150172 37.913522a48.0504 48.0504 0 0 0 46.074906-40.806922l50.883937-355.34947L463.622506 982.095581c3.631716 22.209342 25.202515 39.50988 47.591447 40.008743a47.890764 47.890764 0 0 0 47.07263-41.126194L638.543522 402.81688l80.256939 578.101387a47.890764 47.890764 0 0 0 94.664077 1.077542l78.002082-483.896263 50.883937 355.449243a47.890764 47.890764 0 0 0 45.895316 40.747058c23.945382 0 43.580595-15.963588 48.269899-37.813749l46.573768-233.467475H1245.159868a31.927176 31.927176 0 0 0 31.927176-31.927177V559.060498a31.927176 31.927176 0 0 0-31.927176-31.927176z" p-id="5710" fill="#707070"></path></svg>
                        </div>
                        <p>基于ResCNN和TDNN方法的声纹识别</p>
                    </div>
                    <div class="sec-con-item sec-item3">
                        <div class="img-box" >
                            <svg t="1691654784003" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6789" width="200" height="200"><path d="M904.5 604.6c0-2.8-0.1-5.7-0.4-8.6V235.7h-0.4v-0.9c0-19.8-7-49.5-40.1-78.8-21.2-18.8-50.7-35.3-87.6-49.1-71.2-26.6-165.1-41.3-264.4-41.3s-193.2 14.7-264.4 41.3c-36.8 13.8-66.3 30.3-87.6 49.1-33.2 29.3-40.1 59-40.1 78.8 0 2.9 0.1 5.7 0.4 8.6v171.8c-0.1 1.4-0.1 2.8-0.1 4.2 0 1.4 0 2.9 0.1 4.2V790c0.1 19.8 7.2 49.3 40.1 78.4 21.2 18.8 50.7 35.3 87.6 49.1 71.2 26.6 165.1 41.3 264.4 41.3s193.2-14.7 264.4-41.3c36.8-13.8 66.3-30.3 87.6-49.1 32.9-29.1 40-58.6 40.1-78.4V613.2c0.3-2.9 0.4-5.8 0.4-8.6zM191.9 336.8c14 8.3 30.6 16.4 50.3 24C314 388.6 409.6 404 511.6 404c102 0 197.8-15.4 269.6-43.3 19.1-7.4 36.1-15.6 50.9-24.5v83.2c0 14.5-23.8 38.4-76.9 59C692.3 503 603.5 517 511.6 517c-91.8 0-180.5-14-243.2-38.5-50.7-19.8-74.7-42.8-76.4-57.3v-84.4z m15.4-126.9c14.4-12.7 36.9-25 65.1-35.6 63.3-23.7 148.3-36.7 239.2-36.7s175.9 13 239.2 36.7c28.2 10.5 50.7 22.8 65.1 35.6 5.8 5.2 15.6 15.2 15.8 24.6v0.5c-0.2 14.4-24 38.1-76.5 58.5C692.3 318 603.5 332 511.6 332S331 318 268.2 293.7c-51.7-20-73.2-41.9-76.3-55.3v-2.7h-0.4v-0.9c0-9.4 9.9-19.6 15.8-24.9z m-15.4 311.5c14.7 8.7 31.5 16.8 50.3 24.2 71.8 28 167.5 43.4 269.4 43.4 102 0 197.7-15.4 269.7-43.4 19-7.4 36-15.6 50.8-24.4v86.9c-3.1 13.4-24.8 35.3-76.8 55.4-63 24.3-151.8 38.3-243.7 38.3-91.6 0-180.1-14-242.7-38.3-53.1-20.6-76.9-44.6-76.9-59.2v-82.9z m624.4 293c-14.4 12.7-36.9 25-65.1 35.6-63.3 23.7-148.3 36.7-239.2 36.7-90.9 0-175.9-13-239.2-36.7-28.2-10.5-50.7-22.8-65.1-35.6-5.9-5.2-15.8-15.4-15.8-24.9v-83.3c14.8 8.8 31.8 17 50.8 24.4 71.7 27.9 167.2 43.2 268.8 43.2 101.9 0 197.7-15.3 269.7-43.1 19.9-7.7 36.7-15.9 50.9-24.2v83.1c0 9.4-9.9 19.6-15.8 24.8z" fill="#707070" p-id="6790"></path><path d="M731.521085 429.78218a31.2 31.2 0 1 0 61.595038-9.990562 31.2 31.2 0 1 0-61.595038 9.990562Z" fill="#707070" p-id="6791"></path><path d="M762.7 606.5m-31.2 0a31.2 31.2 0 1 0 62.4 0 31.2 31.2 0 1 0-62.4 0Z" fill="#707070" p-id="6792"></path><path d="M762.7 793.9m-31.2 0a31.2 31.2 0 1 0 62.4 0 31.2 31.2 0 1 0-62.4 0Z" fill="#707070" p-id="6793"></path></svg>
                        </div>
                        <p>大型音频对抗样本数据集</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="stage-playground-third" ref="stagePlaygroundThird">
            <div class="animation-container-third">
                <div class="third-left">
                    <div class="container">
                        <div class="item" id="item-0"></div>
                        <div class="item" id="item-1"></div>
                        <div class="item" id="item-2"></div>
                        <div class="item" id="item-3"></div>
                        <div class="item" id="item-4"></div>
                        <div class="item" id="item-5"></div>
                        <div class="item" id="item-6"></div>
                        <div class="item" id="item-7"></div>
                        <div class="item" id="item-8"></div>
                        <div class="item" id="item-9"></div>
                    </div>
                </div>
                <div class="third-right">
                    <h1>基于Gan安全声纹识别系统</h1>
                    <p>我们的声纹识别系统基于最先进的GAN技术,高效准确地识别用户身份,是一种高度安全可靠的身份验证解决方案。</p>
                    <div class="ops-third">
                        <button class="ops-third-item osp-third-more">了解我们</button>
                        <button class="ops-third-item">联系我们</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="stage-playground-forth" ref="stagePlaygroundForth">
            <div class="animation-container-forth">
                <h1>用户评价</h1>
                <p>以下是一些用户对我们声纹识别系统的评价</p>
                <div class="rows">
                    <template v-if="HomeEvalutionData.list.length > 0">
                        <div class="item" v-for="i in 3">
                            <HomeEvalution :data="HomeEvalutionData.list[i + j]" v-for="j in 3" :key="j"></HomeEvalution>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">

import lax from "lax.js"
import { onMounted, ref, onUnmounted } from 'vue';
import http from "@/utils/api/api";
import { userStore } from "@/store/stores";
import HomeEvalution from "./cards/HomeEvalution.vue";

interface HomeEvalutionProp {
    level: number;
    evaluation: string;
    userName: string;
    userAva: string;
}

interface Rseponse {
    list: Array<HomeEvalutionProp>
}

const stagePlayground = ref<HTMLDivElement | null>(null)
const stagePlaygroundSec = ref<HTMLDivElement | null>(null)
const stagePlaygroundThird = ref<HTMLDivElement | null>(null)
const stagePlaygroundForth = ref<HTMLDivElement | null>(null)
const HomeEvalutionData = ref<Rseponse>({
    list: []
})
const store = userStore()
let timer:any = null
const ROUTER_SETTING: {[key: string]: string} = {
    "USER": '/voiceprint/submit/stage-submit',
    "ADMIN": '/manager' 
}

onMounted(async() => {
    const spHeight: number = stagePlayground.value ? stagePlayground.value.getBoundingClientRect().top : 0
    const spsHeight: number = stagePlaygroundSec.value ? stagePlaygroundSec.value.getBoundingClientRect().top : 0
    const sptHeight: number = stagePlaygroundThird.value ? stagePlaygroundThird.value.getBoundingClientRect().top : 0
    const spfHeight: number = stagePlaygroundForth.value ? stagePlaygroundForth.value.getBoundingClientRect().top : 0
    lax.init();
    timer = setInterval(() => {
      for(let i = 0; i < 10; i++) {
        let ele: HTMLElement  = document.getElementById(`item-${i}`)!
        let height = 300 * Math.sin(Math.PI / 10 * i) * Math.random()
        ele.style.cssText = `transition: height 0.15s ease;height:${height}px;`
      }
    }, 150);
    lax.addDriver('scrollY', function () {
        return window.scrollY;
    })
    lax.addElements('.stage-voice-img', {
        scrollY: {
          translateX: [
            [spHeight+300, spHeight+900],
            [0, 600]
          ],
          opacity: [
            [spHeight-300,spHeight+300],
            [0, 1]
          ]
        }
    })
    lax.addElements('.animation-container-third', {
        scrollY: {
          opacity: [
            [sptHeight-300,sptHeight+300],
            [0, 1]
          ]
        }
    })
    lax.addElements('.details-box', {
        scrollY: {
            opacity: [
            [spHeight+300,spHeight+900],
            [0, 1]
          ]
        }
    })
    lax.addElements('.sec-item2', {
        scrollY: {
            opacity: [
            [spsHeight,spsHeight+300],
            [0, 1]
          ]
        }
    })
    lax.addElements('.sec-title', {
        scrollY: {
            opacity: [
                [spsHeight-300,spsHeight],
                [0, 1]
            ],
        }
    })
    lax.addElements('.sec-item1', {
        scrollY: {
            opacity: [
            [spsHeight+300,spsHeight+900],
            [0, 1]
          ],
          translateX: [
            [spsHeight+300,spsHeight+900],
            [0, -400]
          ]
        }
    })
    lax.addElements('.sec-item3', {
        scrollY: {
            opacity: [
            [spsHeight+300,spsHeight+900],
            [0, 1]
          ],
          translateX: [
            [spsHeight+300,spsHeight+900],
            [0, 400]
          ]
        }
    })
    lax.addElements('.animation-container-forth', {
        scrollY: {
            opacity: [
                [spfHeight-300,spfHeight],
                [0, 1]
            ],
        }
    })


    // 获取首页评价
    const data = await http.getHomeEvaluations({}) as Rseponse;
    console.log(data);
    
    HomeEvalutionData.value = data
})
onUnmounted(() => {
    clearInterval(timer)
})
</script>


<style scoped lang="less">
.stages {
    width: 100%;
    .stage-begin {
        width: 100%;
        height: calc(100vh - 70px);
        max-height: fit-content;
        background-image: url('../assets/stage-start-bc.jpg');
        background-attachment: fixed;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;

        .details {
            z-index: 10;
            position: relative;
            height: 70%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-left: 10%;
            .title {
                font-size: 2rem;
                color: white;
                p {
                    padding-top: 40px;
                    white-space: normal;
                }
            }
            .ops {
                display: flex;
                font-size: 1.3rem;
                margin-top: 7%;
                .ops-item {
                    margin-right: 20px;
                    padding: 12px 30px;
                    border-radius: 10px;
                    cursor: pointer;
                }
                .ops-item:hover {
                    opacity: 0.9;
                }
                .ops-use {
                    background-color: rgb(32, 173, 255);
                    color: white;
                    padding: 0;
                    a {
                        display: flex;
                        
                        padding: 12px 30px;
                    }
                }
                .ops-more {
                    background-color: #fff;
                }
            }
        }
        .stage-veiling {
            position: absolute;
            top: 70px;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
            opacity: 1;
            backdrop-filter: blur(13px);
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
        }
    }
    .stage-playground {
        width: 100%;
        height: 2000px;
        // background-color: black;
        .details-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            left: -50px;
            opacity: 0;
            h1 {
                font-size: 50px;
            }
            p {
                font-weight: 600;
            }
            button {
                margin-top: 20px;
                min-width: 100px;
                max-width: fit-content;
                border: none;
                outline: none;
                padding: 15px 25px;
                border-radius: 10px;
                background-color: #f1f1f1;
                cursor: pointer;
                font-weight: 600;
                display: flex;
            }
        }
        .animation-container {
            position: sticky;
            height: 100vh;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .image-box {

                img {
                    height: 600px;
                    border-radius: 30px;
                    position: relative;
                    left: -600px;
                }
            }
        }
    }
    .stage-playground-sec {
        width: 100%;
        height: 2000px;
        .animation-container-sec {
            position: sticky;
            height: 100vh;
            top: 0;
            width: 100%;
            .sec-title {
                padding: 30px ;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom: 80px;
                opacity: 0;
                h2 {
                    font-size: 2rem;
                }
            }
            .sec-container {
                max-width: 80%;
                min-width: fit-content;
                display: flex;
                margin: 0 auto;
                justify-content: space-around;
                .sec-con-item {
                    font-size: 1.3rem;
                    text-align: center;
                    .img-box {
                        height: 300px;
                        width: 300px;
                        // background-color: rgb(78, 175, 255);
                        border-radius: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                    }
                    
                }
                .sec-item1 {
                    position: relative;
                    left: 400px;
                    opacity: 0;
                }
                .sec-item2 {
                    opacity: 0;
                }
                .sec-item3 {
                    position: relative;
                    left: -400px;
                    opacity: 0;
                }

            }
        }
    }
    .stage-playground-third {
        width: 100%;
        height: 2000px;
        .animation-container-third {
            position: sticky;
            height: 100vh;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 40px 150px 200px;
            opacity: 0;
            .third-left {
                .container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    height: 100px;
                    width: 400px;
                    // padding-top: 510px;
                    .item {
                        background-color: blue;
                        width: 20px;
                        margin-right: 8px;
                    }
                }
            }
            .third-right {
                h1 {
                    margin-bottom: 10px;
                }
                .ops-third {
                    .ops-third-item {
                        margin-top: 40px;
                        border: none;
                        padding: 10px 20px;
                        margin-right: 20px;
                        border-radius: 10px;
                        font-weight: 500;
                        cursor: pointer;
                    }
                    .osp-third-more {
                        background-color: rgb(86, 165, 255);
                        color: white;
                    }
                    
                }
            }
        }
    }
    .stage-playground-forth {
        width: 100%;
        height: 2000px;
        .animation-container-forth {
            position: sticky;
            height: 100vh;
            opacity: 0;
            top: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px;
            .rows {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 20px;
                .item {
                    display: flex;
                    gap: 30px;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }
    }
}

@media screen and (max-width: 481px) {
    .stages {
        .stage-playground {
            display: none;
        }
        .stage-playground-sec {
            display: none;
        }
        .stage-playground-third {
            display: none;
        }
        .stage-playground-forth {
            display: none;
        }
    }
}
</style>
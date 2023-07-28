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
                        <router-link :to="{path: '/voiceprint/submit/stage-submit'}" style="color:white;">
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
                        <div class="img-box" style="background-color:orange">
                            我是一张图片
                        </div>
                        <p>Details。。。</p>
                    </div>
                    <div class="sec-con-item sec-item2">
                        <div class="img-box">
                            我是一张图片
                        </div>
                        <p>Details。。。</p>
                    </div>
                    <div class="sec-con-item sec-item3">
                        <div class="img-box" style="background-color:rgb(0, 231, 31)">
                            我是一张图片
                        </div>
                        <p>Details。。。</p>
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
    </div>
</template>



<script setup lang="ts">

import lax from "lax.js"
import { onMounted, ref, onUnmounted } from 'vue';
import http from "@/utils/api/api";

const stagePlayground = ref<HTMLDivElement | null>(null)
const stagePlaygroundSec = ref<HTMLDivElement | null>(null)
const stagePlaygroundThird = ref<HTMLDivElement | null>(null)
let timer:any = null

onMounted(async() => {
    const spHeight: number = stagePlayground.value ? stagePlayground.value.getBoundingClientRect().top : 0
    const spsHeight: number = stagePlaygroundSec.value ? stagePlaygroundSec.value.getBoundingClientRect().top : 0
    const sptHeight: number = stagePlaygroundThird.value ? stagePlaygroundThird.value.getBoundingClientRect().top : 0
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


    // 获取首页评价 to-do show it
    const data = await http.getHomeEvaluations({});
    console.log(data);
    
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
                    .img-box {
                        height: 300px;
                        width: 300px;
                        background-color: rgb(78, 175, 255);
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
}
</style>
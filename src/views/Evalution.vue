<template>
    <Header :menu="headerState.testResultHeader"></Header>
    <div class="evlution-box">
        <div class="title">
            <h1>声纹测试结果反馈</h1>
            <p>请按照以下步骤进行声纹反馈</p>
        </div>
        <div class="content">
            <div class="row">
                <div class="row-item">
                    <p>姓名</p>
                    <input type="text" placeholder="请输入您的姓名">
                </div>
                <div class="row-item">
                    <p>邮箱</p>
                    <input type="text" placeholder="请输入您的邮箱">
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <p>手机号</p>
                    <input type="text" placeholder="请输入您的手机号">
                </div>
                <div class="row-item">
                    <p>地址</p>
                    <input type="text" placeholder="请输入您的地址">
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <p>声纹测试满意度</p>
                    <div class="star-box">
                        <span>
                            不满意
                        </span>
                        <div class="stars">
                            <div class="star" v-for="item in 5" :key="item" 
                            :ref="setRef"
                            @mouseover="handleOverStar(item - 1)"
                            ></div>
                        </div>
                        <span>
                            满意
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <p>声纹测试反馈</p>
                    <textarea v-model="inputContent" rows="7" class="feed-back" style="resize: none;width: 100%;border: none; background-color: rgba(242, 243, 245, 1);outline: none;padding: 10px;font-size: 1.2rem;border-radius: 10px;"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <el-checkbox v-model="isLongTime">运行时间过长</el-checkbox>
                </div>
                <div class="row-item">
                    <el-checkbox v-model="isUnclearDescription">描述不清晰</el-checkbox>
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <el-checkbox v-model="issObsolescence">样式陈旧</el-checkbox>
                </div>
                <div class="row-item">
                    <el-checkbox v-model="isTestDataInaccurate">测试数据不准确</el-checkbox>
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <el-checkbox>其他</el-checkbox>
                </div>
            </div>
            <div class="row">
                <div class="row-item">
                    <el-button type="primary" @click="handleAddEvalution">提交</el-button>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import Header from "@/components/layout/Header.vue"
import { headerStore, userStore } from "@/store/stores";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import http from "@/utils/api/api"

interface EvalutionRequset {
    id: number;
    userId: number;
    content: string;
    level: number;
    longTime?: number;
    obsolescence?: number;
    unclearDescription?: number;
    testDataInaccurate?: number;
    otherQuestion?: string;
}

interface EvalutionResponse {
    isUpload: boolean
}


const stars = ref<Array<HTMLDivElement>>([])
const headerState = headerStore()
const userState = userStore()
const route = useRoute()
const router = useRouter()
const inputContent = ref<string>("")
const inputLevel = ref<number>(0)
const isLongTime = ref<boolean>(false)
const issObsolescence = ref<boolean>(false)
const isUnclearDescription = ref<boolean>(false)
const isTestDataInaccurate = ref<boolean>(false)
const otherQuestion = ref<string>("")

const setRef = (el: any): void => {
    stars.value.push(el as HTMLDivElement)
}

/**
 * 当移入第几个星星
 */
const handleOverStar = (index: number): void => {
    if (index > inputLevel.value - 1) {
        for(let i = inputLevel.value; i <= index; i++) {
            stars.value[i].style.setProperty("--border-color", "rgb(247, 186, 30)")
        }
        inputLevel.value = index + 1
    } else if (index < inputLevel.value - 1) {
        for(let i = inputLevel.value - 1; i > index; i--) {
            stars.value[i].style.setProperty("--border-color", "rgba(218, 218, 218, 0.893)")
        }
        inputLevel.value = index + 1
    }
    
}



/**
 * 提交反馈
 */
const handleAddEvalution = async (): Promise<void> => {

    if (!isValid()) {
        return void 0;
    }

    const params: EvalutionRequset = {
        id: parseInt(route.params.id as string) as number,
        userId: userState.userInfo.userId!,
        content: inputContent.value,
        level: inputLevel.value,
        longTime: isLongTime.value ? 1 : 0,
        obsolescence: issObsolescence.value ? 1 : 0,
        unclearDescription: isUnclearDescription.value ? 1 : 0,
        testDataInaccurate: isTestDataInaccurate.value ? 1 : 0,
        otherQuestion: otherQuestion.value
    }

    const data: EvalutionResponse = await <EvalutionResponse>http.addEvaluation(params)

    if (data.isUpload) {
        ElMessage({
            type: "success",
            message: "反馈成功"
        })
        router.go(-1)
    } else {
        ElMessage({
            type: "error",
            message: "反馈失败"
        })
    }

}

const isValid = (): boolean => {
    if (inputLevel.value === 0) {
        ElMessage({
            type: "warning",
            message: "请打星"
        })
        return false;
    }
    if (inputContent.value === "") {
        ElMessage({
            type: "warning",
            message: "请输入反馈内容"
        })
        return false;
    }
    return true
}

</script>


<style lang="less" scoped>
.evlution-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 25%;
    gap: 30px;
    .title {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
      
    }
    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        .row {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 20px;
            .row-item {
                display: flex;
                flex-direction: column;
                flex: 1;
                gap: 6px;
                input {
                    border: none;
                    outline: none;
                    background-color: rgba(242, 243, 245, 1);
                    padding: 10px 10px;
                    font-size: 1.1rem;
                    border-radius: 8px;
                }
                input::-webkit-input-placeholder {
                    line-height: 100%;
                    font-size: 0.8rem;
                }
                
                .star-box {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    color: grey;
                    font-size: 0.8rem;
                    .stars {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 20px;
                        .star {
                            --border-color: rgba(218, 218, 218, 0.893);
                            margin: 100px 0;
                            cursor: pointer;
                            zoom: 20%;
                            position: relative;
                            display: block;
                            color: red;
                            width: 0px;	/*设置元素宽高为0*/
                            height: 0px;
                            border-right:  100px solid transparent;	/*设置右部分为透明*/
                            border-bottom: 70px  solid var(--border-color);			/*设置底部为红色*/
                            border-left:   100px solid transparent;	/*设置左部分为透明*/
                            transform: rotate(35deg);
                                /*旋转角度为顺时针35度*/
                            -moz-transform:    rotate(35deg);	/*Firefox*/
                            -webkit-transform: rotate(35deg);	/*Safari 和 Chrome*/
                            -ms-transform:     rotate(35deg);	/*IE 9*/
                            -o-transform:      rotate(35deg);	/*Opera*/
                        }
                        .star::before {
                            border-bottom: 80px solid var(--border-color);
                            // rgb(247, 186, 30)
                            border-left: 30px solid transparent;
                            border-right: 30px solid transparent;
                            position: absolute;
                            height: 0;
                            width: 0;
                            top: -45px;
                            left: -65px;
                            display: block;
                            content: '';
                            transform: rotate(-35deg);
                            -webkit-transform: rotate(-35deg);
                            -moz-transform:    rotate(-35deg);
                            -ms-transform:     rotate(-35deg);
                            -o-transform:      rotate(-35deg);
                        }
                        .star::after {
                            position: absolute;
                            display: block;
                            color: red;
                            top: 3px;
                            left: -105px;
                            width: 0px;
                            height: 0px;
                            border-right: 100px solid transparent;
                            border-bottom: 70px solid var(--border-color);
                            border-left: 100px solid transparent;
                            transform: rotate(-70deg);
                            -webkit-transform: rotate(-70deg);
                            -moz-transform:    rotate(-70deg);
                            -ms-transform:     rotate(-70deg);
                            -o-transform:      rotate(-70deg);
                            content: '';
                        }
                    }
                }

            }
        }
    }
}
@media screen and (max-width: 481px) {
    .evlution-box {
        padding: 20px 10px;
    }
}
</style>
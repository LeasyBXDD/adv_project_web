<template>
    <div class="tot-box"
    @mouseover="!isShowInput ? (isShowEdit=true) : ''"
    @mouseleave="isShowEdit=false"
    >
        <div class="title">
            <p>{{ props.inputData.title }}</p>
        </div>
        <div class="show-box">
            <div class="show" v-if="!isShowInput" >
                <p :style="{color: props.inputData.value ? '' : 'rgb(179, 179, 179)'}">
                    {{ props.inputData.value ? props.inputData.value : props.inputData.defaultValue }}
                </p>
                <div class="ops" @click="handleEdit" v-if="isShowEdit && !props.inputData.disabled">
                    <svg t="1690281028516" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2453" id="mx_n_1690281028518" width="20" height="20"><path d="M358.165868 554.624796c-0.533143 0.680499-1.066285 1.391696-1.303692 2.251274l-41.104163 150.700257c-2.400676 8.772804 0.059352 18.226107 6.550183 24.892947 4.860704 4.742001 11.261485 7.350408 18.077727 7.350408 2.252297 0 4.504594-0.267083 6.727215-0.860601l149.630902-40.808428c0.23843 0 0.357134 0.207731 0.534166 0.207731 1.718131 0 3.408633-0.62217 4.683672-1.927909l400.113747-400.054395c11.883655-11.897981 18.404162-28.109198 18.404162-45.74281 0-19.989263-8.476045-39.963177-23.324218-54.767348l-37.786605-37.844933c-14.81645-14.848173-34.822087-23.338544-54.797024-23.338544-17.631566 0-33.842783 6.520507-45.75816 18.388812L358.758362 553.232077C358.344946 553.615816 358.462626 554.179658 358.165868 554.624796M862.924953 257.19778l-39.742143 39.71349-64.428382-65.451688 39.180348-39.179324c6.193049-6.222725 18.194384-5.318122 25.308409 1.822508l37.813211 37.845956c3.943822 3.941775 6.195096 9.18622 6.195096 14.372336C867.223862 250.574942 865.710392 254.42769 862.924953 257.19778M429.322487 560.907896l288.712541-288.728914 64.459081 65.49569L494.314711 625.838721 429.322487 560.907896zM376.718409 677.970032l20.863167-76.580143 55.656601 55.657624L376.718409 677.970032z" fill="#34b3f5" p-id="2454"></path><path d="M888.265084 415.735539c-15.144932 0-27.562752 12.313443-27.620058 27.665083l0 372.98283c0 19.559475-15.885805 35.444257-35.475979 35.444257L194.220958 851.827709c-19.559475 0-35.504632-15.883759-35.504632-35.444257L158.716326 207.602222c0-19.575848 15.945157-35.474956 35.504632-35.474956l406.367171 0c15.231913 0 27.592428-12.371772 27.592428-27.606755 0-15.202237-12.360516-27.590382-27.592428-27.590382L190.013123 116.930129c-47.684022 0-86.49291 38.779212-86.49291 86.49291L103.520213 820.59231c0 47.713698 38.808888 86.47756 86.49291 86.47756l639.334083 0c47.715745 0 86.509283-38.763862 86.509283-86.47756L915.856489 443.222567C915.794068 428.048983 903.408993 415.735539 888.265084 415.735539" fill="#34b3f5" p-id="2455"></path></svg>
                    编辑
                </div>
            </div>
            <div class="input-item" v-else>
                <input :type="props.inputData.inputType" v-model="inputVal" v-focus>
                <div class="ops">
                    <button class="btn btn-submit" @click="handleSubmit">确定</button>
                    <button class="btn btn-cancel" @click="isShowInput=false">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">

import { ref } from 'vue';
import http from '@/utils/api/api';
import { userStore } from '@/store/stores';
import { ElMessage } from 'element-plus';
import { inject } from 'vue';
import { REFRESH_SYMBOL } from '@/symbol';

interface EditUserInfoResponse {
    isEdited: boolean
}

const props = defineProps<{
    inputData: Props.FormInputProps
}>()
const isShowInput = ref<boolean>(false)
const isShowEdit = ref<boolean>(false)
const inputVal = ref<string | null | number>("")
const store = userStore()
const refresh = inject(REFRESH_SYMBOL) as Function

const handleEdit = (): void => {
    isShowInput.value = !isShowInput.value
    inputVal.value = props.inputData.value
}

const handleSubmit = async (): Promise<void> => {
    // to-do ajax

    if (props.inputData.key === 'gender') {
        inputVal.value = '男' ? "1" : "0"
    }
    const params = {
        id: store.userInfo.userId,
        [props.inputData.key]: inputVal.value
    }

    const data = await http.editUserInfo(params) as EditUserInfoResponse

    if (data.isEdited) {
        ElMessage({
            message: "修改成功",
            type: "success"
        })
    } else {
        ElMessage({
            message: "修改失败",
            type: "error"
        })
         
    }
    // 刷新 重新获取个人信息
    refresh()       
    isShowInput.value = false
}
</script>


<style lang="less" scoped>
    .tot-box {
        padding: 5px 0;
        display: flex;
        align-items: center;
        gap: 30px;
        font-size: 1rem;
        .title {
            color: grey;
            p {
                min-width: 64px;
                max-width: fit-content;
                text-align-last: justify
            }
        }
        .show-box {
            .show {
                display: flex;
                align-items: center;
                gap: 35px;
                .ops {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    cursor: pointer;
                    color: rgba(66, 164, 255, 0.781);
                }
            }
            .input-item {
                display: flex;
                gap: 35px;
                align-items: center;
                
                input {
                    border: none;
                    outline: none;
                    padding: 8px 13px;
                    border: 1px solid rgb(211, 211, 211);
                    transition: border-color 0.5s;
                }
                input:hover {
                    border-color: rgb(173, 173, 173);
                }
                input:focus {
                    border-color: rgb(33, 137, 255);
                }
                .ops {
                    display: flex;
                    gap: 20px; 
                    --btn-color: rgba(24, 132, 255, 0.664);
                    .btn {
                        padding: 7px 20px;
                        border: none;
                        outline: none;
                        background-color: #fff;
                        cursor: pointer;
                        border-radius: 20px;

                    }  
                    .btn:hover {
                        opacity: 0.8;
                    }
                    .btn-submit {
                        background-color: var(--btn-color);
                        color: white;
                    }
                    .btn-cancel {
                        border: 1px solid var(--btn-color);
                        color: var(--btn-color);
                    }
                }
            }
        }
    }
</style>
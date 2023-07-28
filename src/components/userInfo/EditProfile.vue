<template>
    <div class="box">
        <div class="main">
            <div class="header">
                <div class="header-left">
                    <div class="ava">
                        <img src="../../assets/user.jpg" alt="用户头像" @click="handleChangeFile">
                        <input type="file" @change="updateAva($event as HTMLInputEvent)" ref="avaInput"> 
                        <div class="mask" 
                        @click="handleChangeFile"
                        :style="{opacity: isShowMask ? 1 : 0}"
                        @mouseover="isShowMask=true"
                        @mouseout="isShowMask=false">
                            <svg t="1690269959152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2468" width="64" height="64"><path d="M512 288c-124.8 0-224 99.2-224 224s99.2 224 224 224 224-99.2 224-224S636.8 288 512 288zM512 688c-96 0-176-80-176-176s80-176 176-176 176 80 176 176S608 688 512 688z" p-id="2469" fill="#ffffff"></path><path d="M768 371.2a1.6 1.6 0 1 0 102.4 0 1.6 1.6 0 1 0-102.4 0Z" p-id="2470" fill="#ffffff"></path><path d="M864 224l-96 0-22.4-67.2c-6.4-16-25.6-28.8-41.6-28.8l-384 0c-19.2 0-35.2 12.8-41.6 28.8l-22.4 67.2-96 0c-54.4 0-96 41.6-96 96l0 448c0 54.4 44.8 96 96 96l704 0c54.4 0 96-41.6 96-96l0-448C960 265.6 918.4 224 864 224zM912 768c0 25.6-22.4 48-48 48l-704 0c-25.6 0-48-22.4-48-48l0-448c0-25.6 22.4-48 48-48l96 0 35.2 0 9.6-32 22.4-64 377.6 0 22.4 64 9.6 32 35.2 0 96 0c25.6 0 48 22.4 48 48L912 768z" p-id="2471" fill="#ffffff"></path></svg>
                        </div>
                    </div>
                </div>
                <div class="header-right">
                    <p>基本信息</p>
                    <div class="inner-box">
                        <FormInput v-for="item in inputBasicInfo" :key="item.title" :input-data="item"></FormInput>
                    </div>
                </div>
            </div>
            <div class="bodyer bodyer-item">
                <p>用户信息</p>
                <div class="content content-item">
                    <FormInput v-for="item in inputUserInfo" :key="item.title" :input-data="item"></FormInput>
                </div>
            </div>
            <div class="edu bodyer-item">
                <p>教育经历</p>
                <div class="content-item">
                    <FormInput v-for="item in inputEduInfo" :key="item.title" :input-data="item"></FormInput>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref, reactive } from "vue";
import FormInput from "@/components/form/FormInput.vue"; 

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

const avaInput = ref<HTMLInputElement | null>(null)
const isShowMask = ref<boolean>(false)
const inputBasicInfo = reactive<Array<Props.FormInputProps>>([
    {
        title: "用户昵称",
        value: "Aiis",
        inputType: "text",
        disabled: false,
        defaultValue: "未设置"
    },
    {
        title: "用户ID",
        value: "qq_272798802",
        inputType: "text",
        disabled: true,
        defaultValue: "admin"
    }
])
const inputUserInfo = 	reactive<Array<Props.FormInputProps>>([
    {
        title: "性别",
        value: "男",
        inputType: "text",
        disabled: false,
        defaultValue: "未选择"
    },
    {
        title: "个人简介",
        value: "你也在为拯救世界而烦恼吗",
        inputType: "text",
        disabled: false,
        defaultValue: "这个家伙有点懒，还没有简介"
    },
    {
        title: "所在地",
        value: "",
        inputType: "text",
        disabled: false,
        defaultValue: "未设置"
    },
    {
        title: "手机号",
        value: "",
        inputType: "text",
        disabled: false,
        defaultValue: "暂未绑定手机号"
    }
])
const inputEduInfo = reactive<Array<Props.FormInputProps>>([
    {
        title: "学校名称",
        value: "杭州师范大学",
        inputType: "text",
        disabled: false,
        defaultValue: "暂未认证"
    },
    {
        title: "专业",
        value: "",
        inputType: "text",
        disabled: false,
        defaultValue: "暂未认证"
    },
    {
        title: "学历",
        value: "本科",
        inputType: "text",
        disabled: false,
        defaultValue: "暂未认证"
    }
])

const handleChangeFile = (): void => {
    if(avaInput.value) {
        avaInput.value.click()
    }
}

const updateAva = (e: HTMLInputEvent): void => {
    if (e.target.files && e.target.files?.length !== 0) {
        const file: File = e.target.files[0]
        // to-do ajax file
        console.log(file);
    } else {
        ElMessage({
            message: "请上传头像",
            type: "error"
        })        
        return void 0
    }
}


</script>


<style lang="less" scoped>
    .box {
        background-color: rgb(238, 238, 238);
        min-height: calc(100vh - 70px);
        padding: 100px 0;
        .main {
            width: 80%;
            margin: 0 auto;
            .header {
                background-color: #fff;
                display: flex;
                .header-left {
                    position: relative;
                    top: -50px;
                    left: 40px;
                    .ava {
                        position: relative;
                        z-index: 1;
                        img {
                            width: 150px;
                            height: 150px;
                            border-radius: 50%;
                            cursor: pointer;
                            border: 5px solid white;
                            outline: 1px solid rgba(179, 179, 179, 0.555);
                        }
                        input {
                            position: absolute;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                            display: none;
                        }
                        .mask {
                            background-color: rgba(0, 0, 0, 0.199);
                            position: absolute;
                            width: 150px;
                            height: 150px;
                            top: 0px;
                            border-radius: 50%;
                            cursor: pointer;
                            opacity: 0;
                            .icon {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                            }
                        }
                    }
                }
                .header-right {
                    font-size: 1.5rem;
                    position: absolute;
                    width: 80%;
                    p {
                        border-bottom: 1px solid rgb(224, 224, 224);
                        width: 100%;
                        padding: 5px 200px;
                        white-space: nowrap;
                        font-weight: 600;
                    }
                    .inner-box {
                        font-size: 1.2rem;
                        padding: 10px 230px;
                        display: flex;
                        flex-direction: column;
                        gap: 5px;
                    }
                }
            }
            .bodyer-item {
                margin-top: 15px;
                width: 100%;
                background-color: #fff;
                p {
                    border-bottom: 1px solid rgb(224, 224, 224);
                    font-size: 1.5rem;
                    padding: 7px 20px;
                    font-weight: 600;
                }
                .content-item {
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }
            }
        }
    }
</style>
<template>
    <div class="login-box">
        <div class="title">
            <h2>Login Me</h2>
        </div>
        <div class="login-ops">
            <div class="login-item">
                <input type="text"
                 @click="isFocusInput.isAccountFocus=true" 
                 @blur="isFocusInput.isAccountFocus=false"
                 v-model="userInfo.phoneNum"
                 :class="isShowAccountClass ? 'input-add' : ''">
                <p :class="isShowAccountClass ? 'p-add' : ''">邮箱号</p>
            </div>
            <div class="login-item">
                <input type="password" 
                @click="isFocusInput.isPasswordFocus=true"
                @blur="isFocusInput.isPasswordFocus=false"
                v-model="userInfo.password"
                :class="isShowPasswordClass ? 'input-add' : ''">
                <p :class="isShowPasswordClass ? 'p-add' : ''">密码</p>
            </div>
        </div>
        <div class="ops">
            <button class="btn-login" @click="handleLogin">登录</button>
            <button class="btn-register" @click="handleGoRegister">没有账号? 点我注册</button>
        </div>
    </div>
</template>




<script setup lang="ts">

import { reactive, computed, watch } from 'vue';
import { userStore } from '../../store/stores';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import http from '../../utils/api/api.ts'

const store = userStore()
const router = useRouter()

const emit = defineEmits(['changeBox'])

interface FocusInput {
    isAccountFocus: boolean,
    isPasswordFocus: boolean
}
interface HasInputWord {
    hasInputAccount: boolean,
    hasInputPassword: boolean
}
const isFocusInput = reactive<FocusInput>({
    isAccountFocus: false,
    isPasswordFocus: false
})
const hasInputWord = reactive<HasInputWord>({
    hasInputAccount: false,
    hasInputPassword: false
})
const userInfo = reactive<{
    phoneNum: string,
    password: string
}>({
    phoneNum: '',
    password: ''
})
const isShowAccountClass = computed((): boolean => {
    return isFocusInput.isAccountFocus || hasInputWord.hasInputAccount 
})
const isShowPasswordClass = computed((): boolean => {
    return isFocusInput.isPasswordFocus || hasInputWord.hasInputPassword
})

watch(
    () => userInfo.phoneNum,
    () => {
        if (userInfo.phoneNum) {
            hasInputWord.hasInputAccount = true
        } else {
            hasInputWord.hasInputAccount = false  
        }
    }
)
watch(
    () => userInfo.password,
    () => {
        if (userInfo.password) {
            hasInputWord.hasInputPassword = true
        } else {
            hasInputWord.hasInputPassword = false
        }
    }
)

const handleGoRegister = (): void => {   
    emit('changeBox','register')
}

const handleLogin = async (): Promise<void> => {

    // to-do axios
    if (isValid()) {

        const params = {
            email: userInfo.phoneNum,
            password: userInfo.password
        }

        try {
            const data = await <Response.Login>http.userLogin(params)
            store.setToken(true)
            store.setUserInfo(data)            
        } catch {
            return void 0
        }

    } else {
        return void 0
    }

    // to-do 登录鉴权
    ElMessage({
        message: '登陆成功',
        type: 'success'
    })
    router.push({
        name: 'Home'
    })
}

const isValid = (): boolean => {
    if (userInfo.password && userInfo.phoneNum) {
        return true
    }
    ElMessage({
        message: "邮箱或密码不得为空",
        type: "error"
    })
    return false
}
</script>

<style scoped lang="less">
.login-box {
    color: black;
    background-color: #fff;
    padding: 30px 50px;
    border-radius: 20px;
    width: 500px;
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
            font-size: 1.7rem;
            position: relative;  
            background-image: linear-gradient(to left, rgb(189, 215, 255) 
                            ,var(--brand-color), rgb(30, 109, 255), var(--brand-color), 
                            rgb(169, 203, 255));   
            background-clip: text;
            color: transparent;
            -webkit-background-clip: text;
            background-size: 400%;
            animation: bg-move 4s ease-in-out infinite ;
        }
        h2::before {
            content: '';
            position: absolute;
            width: 60px;
            height: 4px;
            background-image: linear-gradient(to left, rgb(66, 142, 255), rgb(167, 220, 255));
            border-radius: 5px;
            top: calc(50% - 1px);
            right: 110%;
        }
        h2::after {
            content: '';
            position: absolute;
            width: 60px;
            height: 4px;
            background-image: linear-gradient(to right, rgb(66, 142, 255), rgb(167, 220, 255));
            border-radius: 5px;
            top: calc(50% - 1px);
            left: 110%;
        }
        @keyframes bg-move {
            0% {
                background-position: 0 0;
            }
            50% {
                background-position: 100% 0;
            }
            100% {
                background-position: 0 0;
            }
        }
        
    }
    .login-ops {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        .login-item {
            position: relative;
            width: 80%;
            input {
                width: 100%;
                font-size: 1.3rem;
                padding: 7px 10px;
                border: 1px solid transparent;
                outline: none;
                border-bottom: 1px solid grey;
                background-color: transparent;
                z-index: 10;
                position: relative;
                transition: all 0.7s ease-in-out;
            }
            p {
                padding: 0 10px;
                position: absolute;
                top: 18px;
                left: 3%;
                transform: translateY(-50%);
                color: grey;
                transition: all 0.7s ease-in-out;
                background-color: white;
            }
            .p-add {
                top: 0%;
                transform: translateY(-50%);
                left: 15%;
                color: var(--brand-color);
                z-index: 11;
            }
            .input-add {
                border: 1px solid var(--brand-color);
                border-radius: 7px;
            }
        }
    }
    .ops {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
        gap: 20px;
        button {
            background-color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
        }
        .btn-login {
            background-color: var(--brand-color);
            color: white;
            padding: 10px;
            border-radius: 7px;
            font-size: 1.1rem;
        }
        .btn-register {
            color: rgb(190, 190, 190);
        }

    }
}
</style>
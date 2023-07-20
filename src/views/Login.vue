<template>
    <div class="box">
        <div class="box-left box-item">  
            <transition name="login">
                <div v-if="isShowTran">
                    <div class="welcome-title">
                        <h1>欢迎加入我们</h1>
                        <p>Welcome To Join Us</p>
                    </div>
                    <div class="ops">
                        <button class="login-btn" @click="hanldeRouter('Home')">返回首页</button>
                        <button>前往小程序端</button>
                    </div>
                </div>
            </transition>
        </div>
        <div class="box-right box-item">
            <component :is="componentName" @changeBox="changeBox"></component>
        </div>
        <div class="mask"></div>
    </div>
    <div>
        <Footer></Footer>
    </div>
</template>


<script setup lang="ts">

import LoginBox from "../components/login/LoginBox.vue"
import RegisterBox from "../components/login/RegisterBox.vue";
import Footer from "../components/layout/Footer.vue"
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";


const router = useRouter()
const route = useRoute()
const isLogin = ref<boolean>(true)
const isShowTran = ref<boolean>(false)

onMounted(() => {
    // 获取动态路由参数
    // 判断当前是登录还是注册
    route.params.name === 'index' ? isLogin.value = true
    : route.params.name === 'register' ? isLogin.value = false
    : isLogin.value = false

    // Transition过渡效果
    isShowTran.value = true

})




const componentName = computed(() => { 
    return isLogin.value ? LoginBox : RegisterBox
})

/**
 * @description 处理ComponentLogin的hasAccount事件
 */
const changeBox = (pathName: string) => {
    isLogin.value = !isLogin.value
    router.push({
        path: '/login/' + pathName
    })
}

const hanldeRouter = (pathName: string):void => {
    router.push({
        name: pathName
    })
}
</script>



<style scoped lang="less">
.box{
    min-height: 608px;
    height: 100vh;
    width: 100%;
    background-image: url('../assets/login-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(to right, rgba(3, 3, 3, 0.7), rgba(56, 56, 56, 0.4));
    }
    .box-item {
        position: relative;
        z-index: 20;
        color: white;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
    }
    .box-left {
        padding-bottom: 10%;
        .login-enter-active {
            transition: opacity 0.5s ease;
        }

        .login-enter-from,
        .login-leave-to {
            opacity: 0;
        }
        .welcome-title {
            font-size: 1.7rem;
            gap: 10px;
            display: flex;
            flex-direction: column;
            p {
                font-size: 1.2rem;
                margin-bottom: 10px;
            }
        }
        .ops {
            display: flex;
            width: 100%;
            justify-content: center;
            gap: 20px;
            button {
                padding: 10px 20px;
                font-size: 1.2rem;
                border-radius: 8px;
                cursor: pointer;
                border: none;
                outline: none;
            }
            button:hover {
                opacity: 0.9;
            }
            .login-btn {
                background-color: rgb(0, 153, 255);
                color: white;
            }
        }
    }
    
}

</style>
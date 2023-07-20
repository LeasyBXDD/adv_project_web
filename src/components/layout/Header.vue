<template>
    <div class="header">
        <div class="header-left">
            <img src="../../assets/Logo.png" alt="Logo" @click="router.push({name: 'Home'})">
            <h2>基于GAN的安全声纹识别系统</h2>
            <div class="header-title" >
                <div class="title-item" v-for="item in menu" :key="item.key" @click="handleRouterView(item)">
                    <p>{{ item.title }}</p>
                </div>
            </div>
        </div>
        <div class="header-right">
            <div class="ops" v-if="!isLogin">
                <div class="ops-item ops-login" @click="handleLogin('index')">登录</div>
                <div class="ops-item ops-register" @click="handleLogin('register')">注册</div>
            </div>
            <div class="user" v-else>
                <div class="user-ava">
                    <el-dropdown ref="dropdown" trigger="contextmenu" style="margin-right: 30px">
                        <span class="el-dropdown-link">
                            <img src="../../assets/user.jpg" alt="UserAva" @mouseover="showDropDown" > 
                        </span>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item :icon="User">个人信息</el-dropdown-item>
                            <el-dropdown-item :icon="Fold" @click="handleLogout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { userStore } from '../../store/stores';
import type { DropdownInstance } from 'element-plus';
import { User, Fold } from '@element-plus/icons-vue';


const store = userStore()
const router = useRouter()
const props = defineProps(['menu'])
const emit = defineEmits(['changeBread'])
const menu = ref<Array<Layout.HeaderMenu>>()
const isLogin = ref<boolean>()
const dropdown = ref<DropdownInstance>()

onMounted(() => {
    menu.value =  props.menu
    isLogin.value = store.token ? true : false
})

const handleLogin = (path: string): void => {
    router.push({
        path: '/login/' + path
    })
}

const handleRouterView = (menuItem: Layout.HeaderMenu):void => {
    if (menuItem.path) {
        router.push({
            path: menuItem.path
        })
    } else {
        router.push({
            name: menuItem.pathName
        })
    }
    
    emit('changeBread', menuItem.breadList, true)
}

const showDropDown = (): void => {
    if (!dropdown.value) return
    dropdown.value.handleOpen()
}

const handleLogout = (): void => {
    store.setToken(false)
    isLogin.value = false
}
</script>


<style scoped lang="less">
.header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(236, 236, 236);
    padding: 0 30px;

    .header-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100%;

        img {
            height: 60px;
            cursor: pointer;
        }


        .header-title {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-left: 20px;
            height: 100%;
            .title-item {
                padding: 0px 20px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: background-color 0.3s ease-in-out;
                position: relative;
                cursor: pointer;
            }
            .title-item:hover {
                background-color: #ecf5ff;
                color: #409EFF;
            }
            .title-item:hover::before{
                content: '';
                width: 100%;
                position: absolute;
                bottom: 0;
                border: 1px solid rgb(56, 103, 255);
            }
            .title-item:active {
                opacity: 0.7;
            }
        }
    }

    .header-right {
        margin-right: 30px;

        .ops {
            display: flex;

            .ops-item {
                margin-right: 20px;
                padding: 8px 17px;
                border-radius: 10px;
                cursor: pointer;
            }
            .ops-login {
                background-color: var(--brand-color);
                color: white;
            }
            .ops-register {
                background-color: #f5f5f5;
            }

            
        }
        .user {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            .user-ava {
                img {
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                }
            }
            
        }
    }
    
}

</style>
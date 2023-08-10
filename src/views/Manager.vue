<template>
    <div class="m-header">
        <Header></Header>
    </div>
    <div class="t-header"></div>
    <div class="content">
        <div class="left content-item">
            <Sidebar :menu="store.managerMenu"></Sidebar>
        </div>
        <div class="t-left"></div>
        <div class="right content-item">
            <router-view></router-view>
        </div>
    </div>
</template>


<script lang="ts" setup>

import Header from '@/components/layout/Header.vue';
import Sidebar from '@/components/layout/Sidebar.vue';
import {menuStore} from '@/store/stores.ts'

const store = menuStore()



</script>


<style lang="less" scoped>
.m-header {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 100;
}
.t-header {
    height: 70px;
    background-color: transparent;
}
.content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #eeeef3b9;
    height: 100%;
    .content-item {
        height: 100%;
    }
    .left {
        position: fixed;
    }
    .t-left {
        width: 236px;
        height: calc(100vh - 70px);
    }
}
</style>
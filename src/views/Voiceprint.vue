<template>
    <Header :menu="header" @change-bread="changeBread"></Header>
    <div class="box-bodyer">
        <BreadList :bread-list="breadList"></BreadList>
        <router-view  @change-bread="changeBread"></router-view>
    </div>
</template>


<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import { headerStore } from '../store/stores';
import { ref } from 'vue';
import BreadList from '../components/layout/BreadList.vue';

const header = ref<Array<Layout.HeaderMenu>>()

const store = headerStore()

header.value = store.voiceprintHeader

const breadList = ref<Array<Layout.BreadItem>>()
breadList.value = store.curBreadList



/**
 * @description 改变面包屑,由HeaderVue触发,提交到Store做存储
 */
const changeBread = (breadItem: Array<Layout.BreadItem>, isUpdate: boolean): void => {
    if (isUpdate) {
        store.setCurBreadList(breadItem)
        breadList.value = breadItem
    } else {
        breadList.value?.push(...breadItem)
    }
    
}


</script>


<style scoped lang="less">
.box-bodyer {
    padding: 20px 60px;
}
</style>
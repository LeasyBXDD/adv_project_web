

<template>
    <router-view v-if="isShow"></router-view>
</template>

<script setup lang="ts">
import { ref, provide, nextTick } from 'vue';
import { REFRESH_SYMBOL } from './symbol/index'

const isShow = ref<boolean>(true)

const refresh = (): void => {
    isShow.value = false
    nextTick(() => {
        isShow.value = true
    })
}

// 注入刷新函数refresh
provide(REFRESH_SYMBOL, refresh)


</script>

<style scoped lang="less">

</style>

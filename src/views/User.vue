<template>
    <Header :menu="store.userHeader"></Header>
    <div>
        <router-view></router-view>
    </div>
</template>



<script setup lang="ts">
import Header from '../components/layout/Header.vue';

import { headerStore } from '../store/stores';

const store = headerStore()




</script>

<style lang="less" scoped>
    
</style>
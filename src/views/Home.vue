<template>
    <Header :menu="header" />
    <div class="bodyer">
        <Stage></Stage>
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Stage from '../components/Stage.vue';
import Footer from '../components/layout/Footer.vue';

import { headerStore } from '../store/layout/headerStore';


const store = headerStore()

const header: Array<Layout.HeaderMenu> = store.homeHeader

</script>


<style scoped lang="less">

</style>
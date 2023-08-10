<template>
    <Header :menu="header" />
    <div class="bodyer">
        <Stage />
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Stage from '@/components/Stage.vue';
import Footer from '../components/layout/Footer.vue';
import http from '@/utils/api/api';
import { getCurDay } from '@/utils/day/getCurDay';
import { headerStore } from '../store/layout/headerStore';
import { onMounted } from 'vue';

interface SentVistorResponse {
    isPost: boolean
}

const store = headerStore()
const header: Array<Layout.HeaderMenu> = store.homeHeader


onMounted(() => {
    submitVisitor()
})

// 提交访客量
const submitVisitor = async (): Promise<void> => {
    const params = {
        time: getCurDay()
    }
    const data = await http.setVisit(params) as SentVistorResponse
    if (data.isPost) {    
        console.log("访客+1");
    }

}
</script>


<style scoped lang="less">

</style>
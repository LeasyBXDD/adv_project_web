<template>
    <div class="single-column-chart-box">
        <div class="block" ref="block"></div>
    </div>
</template>



<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';

const block = ref<HTMLDivElement | null>(null)
const props = defineProps<{
    top: number
}>()

watch(
    () => props.top,
    () => {
        updated()
    }
)

onMounted(() => {
    updated()
})


const updated = (): void => {
    block.value?.style.setProperty("--top", (props.top / 2) + "%")
}
</script>


<style lang="less" scoped>
.single-column-chart-box {
    height: 40px;
    width: 2px;
    background-color: rgb(217, 217, 217);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .block {
        --top: 0%;
        height: 20px;
        width: 8px;
        background-color: rgb(84, 166, 247);
        position: absolute;
        top: var(--top);
        transition: top 2s ease-in-out;
    }
}
</style>
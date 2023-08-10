<template>

    <div class="line-progress-bar-box">
        <div class="cur-progress" ref="curProgress"></div>
    </div>

</template>


<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';


const props = defineProps<{
    curProgress: number
}>()
const curProgress = ref<HTMLDivElement | null>(null)

onMounted(() => {
    updated()
})

watch(
    () => props.curProgress,
    () => {
        updated()
    }
)

const updated = (): void => {
    curProgress.value?.style.setProperty("--width", props.curProgress + "%")
}

</script>


<style lang="less" scoped>
.line-progress-bar-box {
    width: 100%;
    height: 10px;
    background-color: rgb(234, 234, 234);
    border-radius: 10px;
    .cur-progress {
        --width: 0%;
        height: 100%;
        width: var(--width);
        background-color: rgba(0, 230, 0, 0.772);
        border-radius: 10px;
        transition: width 2s ease-in-out;
    }
}
</style>
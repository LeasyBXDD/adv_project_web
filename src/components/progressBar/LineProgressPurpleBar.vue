<template>
    <div class="line-progress-purple-bar-box">
        <div class="title">
            <span>
                {{ props.title }}
            </span>
            <span>
                {{ props.data }}
            </span>
        </div>
        <div class="progress">
            <div class="cur-progress" ref="curProgress"></div>
        </div>
    </div>
</template>



<script setup lang="ts">

import { ref, onMounted, watch } from 'vue';

const curProgress = ref<HTMLDivElement | null>(null)
const props = defineProps<{
    title: string;
    data: number;
    progress: number;
}>()

watch(
    () => props.progress,
    () => {
        update()
    }
)

onMounted(() => {
    update()
})

const update = (): void => {
    curProgress.value?.style.setProperty("--width", (props.progress > 100 ? 100 : props.progress) + "%")
}

</script>


<style scoped lang="less">

.line-progress-purple-bar-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 7px;
    .title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 0.8rem;
        color: grey;
    }
    .progress {
        width: 100%;
        height: 10px;
        background-color: #f6f6f8;
        .cur-progress {
            --width: 0%;
            height: 100%;
            width: var(--width);
            background-color: #b620e0;
            transition: width 1s ease-in-out;
        }
    }
}
</style>
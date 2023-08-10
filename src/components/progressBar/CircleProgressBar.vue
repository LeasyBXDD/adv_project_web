<template>
    <div class="my-box">
        <div class="circle-box">
            <div class="circle-left circle-item" ref="circleLeft"></div>
            <div class="circle-right circle-item" ref="circleRight"></div>
        </div>
    </div>
</template>



<script setup lang="ts">

import { ref, onMounted, watch } from 'vue';

const props = defineProps(['rate'])
const circleLeft = ref<HTMLDivElement | null>(null)
const circleRight = ref<HTMLDivElement | null>(null)


let timer: number | null = null
let percent = 0


const step = (): void => {

    percent += 1

    if (percent < 50) {
        circleRight.value!.style.transform = 'rotate(' + 3.6 * percent + 'deg)';
    } else {
        circleRight.value!.style.transform = 'rotate(0)';
        circleRight.value!.style.borderColor = '#54c4fd';
        circleLeft.value!.style.transform = 'rotate(' + 3.6 * (percent - 50) + 'deg)';
    }

    if (percent < props.rate) {
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(step, 10);
    }

}

onMounted(() => {
    step()
})
watch(props, () => {
    step()
})
</script>

<style lang="less" scoped>

.my-box {
    // padding: 0 !important;
    
    .circle-box {
        width: 80px;
        height: 80px;
        position: relative;
        border-radius: 50%;
        --progress-width: 9px;
        box-shadow: inset 0 0 0 var(--progress-width) #54c4fd;
        .circle-item {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        .circle-left {
            border: var(--progress-width) solid #d3d3d3;
            border-radius: 50%;
            clip: rect(0, 40px, 80px, 0);
        }
        .circle-right {
            border: var(--progress-width) solid #d3d3d3;
            border-radius: 50%;
            clip: rect(0, 80px, 80px, 40px);
        }
    }
}
</style>
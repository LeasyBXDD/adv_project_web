<template>
    <div class="sidebar-box">
        <div class="sidebar-item" v-for="item in props.menu" :key="item.key" :style="getTitleStyle(item)" @click="handleRouter(item)">
            <div class="title" >
                {{ item.title }}
            </div>
        </div>
        
    </div>
</template>


<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import { useRouter , useRoute} from 'vue-router';

const router = useRouter()
const route = useRoute()
const props = defineProps(["menu"])
const showKey = ref<number>(0)

onMounted(() => {
    showKey.value = route.meta.key as number
})

watch(
    () => route.meta.key,
    () => {        
        showKey.value = route.meta.key as number
    }
)



/**
 * title的样式 计算而成
 */
const getTitleStyle = (item: Layout.ManagerMenu) => {
    return {
        color: item.key === showKey.value ? '#fff' : '#c0c0c0',
        backgroundColor: item.key === showKey.value ? 'rgb(45, 133, 255)' : '#fff'
    }
}

/**
 * 切换导航栏，并且进行路由
 */
const handleRouter = (item: Layout.ManagerMenu): void => {
    showKey.value = item.key
    router.push({
        name: item.pathName
    })
}
</script>



<style scoped lang="less">
    .sidebar-box {
        width: 236px;
        min-height: calc(100vh - 70px);
        height: 100%;
        background-color: #fff;
        padding: 5% 12%;
        display: flex;
        flex-direction: column;
        color: #c0c0c0;
        .sidebar-item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 20px;
            background-color: rgb(45, 133, 255);
            border-radius: 7px;
            cursor: pointer;
            padding: 10px 20px;
            transition: background-color 0.5s;
            transition: color 0.2s;
            .icon-item {
                .icon {
                    width: 30px;
                    height: 30px;
                }
            }
            .icon-item /deep/ .icon {
                width: 30px;
                height: 30px;
            }
        }
    }
</style>
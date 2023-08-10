<template>
    <div class="home-evalution-box">
        <div>
            <div class="stars">
                <div class="star" v-for="i in props.data.level" :key="i"></div>
            </div>
            <div class="content">
                {{ props.data.evaluation }}
            </div>
        </div>
        <div class="user">
            <img :src="props.data.userAva ? props.data.userAva : 'https://i.postimg.cc/gJfJXMNT/image.jpg'" alt="">
            <p>{{ props.data.userName }}</p>
        </div>
    </div>
</template>



<script setup lang="ts">

const props = defineProps<{
    data: {
        level: number;
        evaluation: string;
        userName: string;
        userAva: string;
    }
}>()

</script>


<style scoped lang="less">
.home-evalution-box {
    width: 300px;
    height: 200px;
    padding: 20px 30px;
    background-color: rgba(237, 237, 237, 0.496);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    border-radius: 10px;
    .stars {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .star {
            --border-color: rgb(247, 186, 30);
            margin: 100px 0;
            zoom: 10%;
            position: relative;
            display: block;
            color: red;
            width: 0px;
            /*设置元素宽高为0*/
            height: 0px;
            border-right: 100px solid transparent;
            /*设置右部分为透明*/
            border-bottom: 70px solid var(--border-color);
            /*设置底部为红色*/
            border-left: 100px solid transparent;
            /*设置左部分为透明*/
            transform: rotate(35deg);
            /*旋转角度为顺时针35度*/
            -moz-transform: rotate(35deg);
            /*Firefox*/
            -webkit-transform: rotate(35deg);
            /*Safari 和 Chrome*/
            -ms-transform: rotate(35deg);
            /*IE 9*/
            -o-transform: rotate(35deg);
            /*Opera*/
        }

        .star::before {
            border-bottom: 80px solid var(--border-color);
            // rgb(247, 186, 30)
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
            position: absolute;
            height: 0;
            width: 0;
            top: -45px;
            left: -65px;
            display: block;
            content: '';
            transform: rotate(-35deg);
            -webkit-transform: rotate(-35deg);
            -moz-transform: rotate(-35deg);
            -ms-transform: rotate(-35deg);
            -o-transform: rotate(-35deg);
        }

        .star::after {
            position: absolute;
            display: block;
            color: red;
            top: 3px;
            left: -105px;
            width: 0px;
            height: 0px;
            border-right: 100px solid transparent;
            border-bottom: 70px solid var(--border-color);
            border-left: 100px solid transparent;
            transform: rotate(-70deg);
            -webkit-transform: rotate(-70deg);
            -moz-transform: rotate(-70deg);
            -ms-transform: rotate(-70deg);
            -o-transform: rotate(-70deg);
            content: '';
        }
    }
    .content {
        text-align: center;
    }
    .user {
        display: flex;
        gap: 20px;
        align-items: center;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>
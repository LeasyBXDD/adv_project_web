<template>
  <div class="bread-list">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="item.toPathName ? {name: item.toPathName} : ''" 
      v-for="(item) in props.breadList" :key="item.title"
      >{{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>




<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'

const props = defineProps(['breadList'])


</script>


<style lang="less" scoped>
</style>
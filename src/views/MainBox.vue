<template>
  <div class="common-layout">
    <el-container>
      <SideMenu></SideMenu>
      <el-container direction="vertical">
        <TopHeader></TopHeader>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
import {defineComponent, ref, reactive, toRefs} from 'vue'
import SideMenu from '@/components/mainbox/SideMenu.vue';
import TopHeader from '@/components/mainbox/TopHeader.vue';

</script>

<style lang="scss" scoped>

</style>
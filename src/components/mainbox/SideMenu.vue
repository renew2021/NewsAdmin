<template>
    <el-aside :width="$store.state.isCollapsed?'64px':'200px'">
        <el-menu
            :default-active="route.fullPath"
            :collapse = "$store.state.isCollapsed"
            class="el-menu-vertical-demo"
            router
            collapse-transition="false"
            @open="handleOpen"
            @close="handleClose"
        >
            <el-menu-item index="/index">
                <el-icon><HomeFilled /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="/center">
                <el-icon><Avatar /></el-icon>
                <span>个人中心</span>
            </el-menu-item>
            <el-sub-menu index="/user-manage">
                <template #title>
                    <el-icon><UserFilled /></el-icon>
                    <span>用户管理</span>
                </template>
                <el-menu-item index="/user-manage/adduser">新增用户</el-menu-item>
                <el-menu-item index="/user-manage/userlist">用户列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/news-manage">
                <template #title>
                    <el-icon><Reading /></el-icon>
                    <span>新闻管理</span>
                </template>
                <el-menu-item index="/news-manage/addnews">发表新闻</el-menu-item>
                <el-menu-item index="/news-manage/newslist">新闻列表</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="/product-manage">
                <template #title>
                    <el-icon><MessageBox /></el-icon>
                    <span>产品管理</span>
                </template>
                <el-menu-item index="/product-manage/addproduct">新增产品</el-menu-item>
                <el-menu-item index="/product-manage/productlist">产品列表</el-menu-item>
            </el-sub-menu>
            
        </el-menu>
    </el-aside>
</template>

<script setup>
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import {
    HomeFilled,
    Avatar,
    UserFilled,
    MessageBox,
    Reading,
    Pointer
} from "@element-plus/icons-vue";
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
};
const route = useRoute()
</script>

<style lang="scss" scoped>
.el-aside {
    height: 100vh;
    .el-menu{
        height: 100vh;
    }
}
</style>

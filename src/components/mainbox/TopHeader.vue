<template>
  <el-header>
    <div class="left">
      <el-icon><Menu @click="handleCollapsed" /></el-icon>
      <span>企业门户管理系统</span>
    </div>
    <div class="right">
      <span>欢迎{{ username }}回来</span>
      <el-dropdown>
        <span class="el-dropdown-link">
            <el-icon :size="30"><User /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      
    </div>
  </el-header>
</template>

<script setup>
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Menu, User } from "@element-plus/icons-vue";
const store = useStore();
const router = useRouter();

const username = "xzy";

const handleCollapsed = () => {
  store.commit("changeCollapsed");
};

const handleCenter = () => {
  router.push("/center");
};

const handleLogout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #fff;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #DDD;
}
.left, .right{
    display: flex;
}
.left{

    i{
        margin: auto;
    }
}

.right{
    .el-dropdown{
        margin: auto;
    }
}
</style>

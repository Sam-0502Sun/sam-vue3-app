<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form" :model="loginForm">
          <h1>Hello</h1>
          <h2>欢迎来到</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { userAccountLogin } from '@/api/user/user'
import store from '@/store'
import { getTime } from '@/utils/time/time'
import { ElNotification } from 'element-plus'

// 账号密码数据
const loginForm = reactive({
  username: 'Sam',
  password: '111111'
})
// 点击按钮登录
const login = () => {
  userAccountLogin(loginForm).then((res) => {
    store.commit('user/setUser', res.data)
    ElNotification({
      type: 'success',
      title: `Hi,${getTime()}好！`,
      message: ('欢迎回来！')
    })
  }).catch(err => {
    ElNotification({
      type: 'error',
      title: `Hi,${getTime()}好！`,
      message: (err as Error).message
    })
  })
}

</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/background.jpg");
  background-size: cover;
  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
  }
}
</style>

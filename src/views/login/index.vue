<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          ref="ruleFormRef"
          :model="loginForm"
          :rules="rules"
        >
          <h1>Hello</h1>
          <h2>欢迎来到</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username" ></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
import { reactive, ref } from 'vue'
import { userAccountLogin } from '@/api/user/user'
import store from '@/store'
import { getTime } from '@/utils/time/time'
import { ElNotification, ElMessage } from 'element-plus'
import type { FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import routes from '@/router/index'

const router = useRouter()
interface RuleForm {
  username: string,
  password: string
}
const ruleFormRef = ref()
// 账号密码数据
const loginForm = reactive<RuleForm>({
  username: 'Sam',
  password: '111111'
})

// 自定义校验函数
const validateUserName = (rule: any, value: string, callback: any) => {
  if (value.length >= 5 && value.length <= 10) {
    callback()
  } else {
    callback(new Error(`当前账号长度${value.length}位！要求账号长度5-10位！`))
  }
}
const validatePassword = (rule: any, value: string, callback: any) => {
  if (value.length >= 6 && value.length <= 15) {
    callback()
  } else {
    callback(new Error(`当前密码长度${value.length}位！要求密码长度6-15位！`))
  }
}
const rules = reactive<FormRules<RuleForm>>({
  username: [
    // { required: true, message: '用户名不能为空！', trigger: 'blur' },
    // { min: 6, max: 10, message: '账号长度在6 - 10位！', trigger: 'blur' }
    { trigger: 'blur', validator: validateUserName }
  ],
  password: [
    // { required: true, message: '密码不能为空！', trigger: 'blur' },
    // { min: 6, max: 15, message: '密码长度在6 - 15位！', trigger: 'blur' }
    { trigger: 'blur', validator: validatePassword }
  ]
})

// 点击按钮登录
const login = () => {
  // 表单验证通过在发起请求
  ruleFormRef.value.validate().then(() => {
    userAccountLogin(loginForm).then((res) => {
      const { token, message, username, avatar } = res.data
      store.commit('user/setUser', { token, message, username, avatar })
      ElNotification({
        type: 'success',
        title: `Hi,${getTime()}好！`,
        message: ('欢迎回来！')
      })
      router.push('/')
    }).catch(err => {
      ElNotification({
        type: 'error',
        title: `Hi,${getTime()}好！`,
        message: (err as Error).message
      })
    })
  }).catch(() => {
    ElMessage.error({
      message: ('表单验证格式错误！')
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

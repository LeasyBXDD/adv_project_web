<template>
  <div class="register-box">
    <div class="register-box-header">
      <h2>欢迎加入我们</h2>
      <p>输入以下信息以创建您的账户</p>
    </div>
    <div class="register-ops">
      <div class="register-input-item">
        <input type="text" placeholder="请输入邮箱" v-model="userInfo.email" />
        <input type="text" placeholder="请输入用户名" v-model="userInfo.userName" />
        <input type="password" placeholder="请输入密码" v-model="userInfo.password" />
        <input type="password" placeholder="请确认密码" v-model="userInfo.checkPassword" />
      </div>
      <div class="register-btn">
        <button @click="handleRegister">注册</button>
      </div>
      <div class="has-account">
        <button @click="handleHasAccount">已有账号? 请登录</button>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">

import { reactive } from 'vue';
import { ElMessage } from 'element-plus';
import http from '../../utils/api/api';

interface UserInfo {
  email: string,
  userName: string,
  password: string,
  checkPassword: string
}

const userInfo = reactive<UserInfo>({
  email: '',
  userName: '',
  password: '',
  checkPassword: ''
})

const emit = defineEmits(['changeBox'])

const handleHasAccount = (): void => {
  emit('changeBox','index')
}

const handleRegister = async (): Promise<void> => {

  if(isValid()) {
    const params = {
      email: userInfo.email,
      name: userInfo.userName,
      password: userInfo.password
    }
    const data = await <Response.Register>http.userRegister(params)
    if (data.isRegistered) {
      ElMessage({
        message: "注册成功",
        type: 'success'
      })
      emit('changeBox','index')
    } else {
      ElMessage({
        message: "注册失败，请重试",
        type: "error"
      })
    } 
  }

}
const isValid = (): boolean => {

  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (!emailRegex.test(userInfo.email)) {
    ElMessage({
      message: "邮箱不合法",
      type: "error"
    })
    return false
  }

  if (userInfo.password !== userInfo.checkPassword) {
    ElMessage({
      message: "密码与确认密码不一致",
      type: "error"
    })
    return false
  }

  if (!passwordRegex.test(userInfo.password)) {
    ElMessage({
      message: "密码应由数字字母组合且大于等于六位",
      type: "error"
    })
    return false
  }

  if (!userInfo.userName) {
    ElMessage({
      message: "用户名不得为空",
      type: "error"
    })
  }

  return true
}

</script>

<style scoped lang="less">
.register-box {
  background-color: #fff;
  color: black;
  padding: 30px 50px;
  border-radius: 20px;
  width: 500px;
  .register-box-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    p {
      font-size: 0.9rem;
      font-weight: 600;
      line-height: 30px;
    }
  }
  .register-ops {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    .register-input-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 15px;
      margin-top: 20px;
      input {
        padding: 10px 10px;
        width: 90%;
        border-radius: 7px;
        font-size: 1.1rem;
        display: flex;
        margin: 0 auto;
        outline: none;
        border: none;
        background-color: #e7eaec98;
      }
      input::placeholder {
        color: rgb(151, 151, 151);
        font-weight: 500;
      }
    }
    .has-account {
      margin-top: 15px;
      button {
        border: none;
        outline: none;
        background-color: #fff;
        color: rgb(177, 177, 177);
        cursor: pointer;
      }
    }
  }
  .register-btn {
    width: 100%;
    margin-top: 15px;
    button {
      display: flex;
      margin: 0 auto;
      width: 90%;
      justify-content: center;
      padding: 10px;
      border-radius: 7px;
      outline: none;
      border: none;
      background-color: var(--brand-color);
      color: white;
      font-size: 1.1rem;
      cursor: pointer;
    }
  }
}
</style>
<template>
  <div class="login-page">
    <div class="wrapper">
      <div class="left">
        <img src="@/assets/images/login_banner.png" height="380" alt="login_banner" />
      </div>

      <div class="form-wrapper">
        <h5 class="brand">
          <img src="@/assets/images/logo.svg" width="45" mr-15 alt="logo" />
          {{ title }}
        </h5>
        <div class="form-item" mt-35>
          <input
            v-model="loginInfo.username"
            autofocus
            type="text"
            class="input"
            placeholder="userusername"
            @keydown.enter="handleLogin"
          />
        </div>
        <div class="form-item" mt-35>
          <input
            v-model="loginInfo.password"
            type="password"
            class="input"
            placeholder="password"
            @keydown.enter="handleLogin"
          />
        </div>
        <div class="form-item" mt-35>
          <button class="submit-btn" @click="handleLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '@/api/auth'
import { createLocalStorage } from '@/utils/cache'
import { setToken } from '@/utils/token'

const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()
const query = unref(router.currentRoute).query
//默认账号密码
const loginInfo = ref({
  username: 'ljq',
  password: 123,
})
//为localstorage设置前缀
const ls = createLocalStorage({ prefixKey: 'login_' })
//如果loginInfo已有值，则直接获取，否则在下面的handleLogin中创建一个ls loginInfo
const lsLoginInfo = ls.get('loginInfo')
if (lsLoginInfo) {
  loginInfo.value.username = lsLoginInfo.username || ''
  loginInfo.value.password = lsLoginInfo.password || ''
}
//点击登录处理
async function handleLogin() {
  const { username, password } = loginInfo.value
  if (!username || !password) {
    $message.warning('请输入用户名和密码')
    return
  }
  try {
    $message.loading('正在验证...')
    //发送login请求 获取用户信息
    const res = await login({ username, password: password.toString() })
    if (res.code === 0) {
      $message.success('登录成功')
      ls.set('loginInfo', { username, password })
      //TODO:加上refreshToken api

      setToken(res.data.token)

      if (query.redirect) {
        const path = query.redirect
        Reflect.deleteProperty(query, 'redirect')
        router.push({ path, query })
      } else {
        router.push('/')
      }
    } else {
      $message.warning(res.message)
    }
  } catch (error) {
    $message.error(error.message)
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  background-image: url(@/assets/images/login_bg.jpg);
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  width: 100%;
  max-width: 1020px;
  box-shadow: 1.5px 3.99px 27px 0px rgb(0 0 0 / 10%);
  background-color: rgba(255, 255, 255, 0.3);

  display: flex;
  .left {
    padding: 40px;
    border-right: 1px solid #cccccc5e;
  }
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .brand {
    width: 100%;
    padding: 15px;
    color: #6a6a6a;
    font-size: 24px;
    font-weight: normal;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-item {
    width: 100%;
    max-width: 360px;
    height: 50px;
    input {
      width: 100%;
      height: 100%;
      padding: 0 20px;
      border: 1px solid #6a6a6a;
      border-radius: 5px;
      color: $primaryColor;
      font-size: 16px;
      transition: 0.5s;
      &:focus {
        border-color: $primaryColor;
        box-shadow: 0 0 5px $primaryColor;
      }
    }
    button {
      width: 100%;
      height: 100%;

      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background-color: $primaryColor;

      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>

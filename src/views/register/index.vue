<script setup>
import { registerAPI , getCodeAPI } from '@/apis/register'
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from 'vue-router';

const rules = {
  account: [{
    required: true,
    message: '用户名不能为空',
    trigger: 'blur'
  }, {
    min: 6,
    max: 20,
    message: '用户名长度为6-20个字符',
    trigger: 'blur'
  },
  {
    pattern: /^[a-zA-Z]/,
    message: '用户名必须以字母开头',
    trigger: 'blur'
  }],
  password: [{
    required: true,
    message: '密码不能为空',
    trigger: 'blur'
  }, {
    min: 6,
    max: 24,
    message: '密码长度为6-24个字符',
    trigger: 'blur'
  }],
  mobile: [{
    required: true,
    message: '手机号不能为空',
    trigger: 'blur'
  }, {
    pattern: /^1[3-9]\d{9}$/,
    message: '手机号不合法',
    trigger: 'blur'
  }],
  agree: [{
    validator: (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error("请勾选协议"))
      }
    }
  }],
  conPassword: [{
    validator: (rule, value, callback) => {
      if (value == regForm.value.password) {
        callback()
      } else {
        callback(new Error("两次密码不一致"))
      }
    },
    trigger: 'blur'
  }]
}

//注册
const regForm = ref({
  account: '',
  mobile: '',
  code: '',
  password: '',
  conPassword: '',
  agree: true
})
const regFormRef = ref(null)
const regRouter = useRouter()
const doRegister = () => {
  const { account, mobile, code, password } = regForm.value
  regFormRef.value.validate(async (valid) => {
    if (valid) {
      // TODO LOGIN
      const res = await registerAPI({ account, mobile, code, password })
      console.log(res);
      //1.提示用户
      ElMessage({
        type: 'sucess',
        message: '注册成功',
        //2.跳转登录
      })
      regRouter.replace({ path: '/login' })
    } else {

    }
  })
}

const sendCode = async() => {
  const res = await getCodeAPI(regForm.value.mobile)
  console.log(res);
  }
</script>
<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户注册</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="regFormRef" :model="regForm" :rules="rules" label-position="right" label-width="80px"
              status-icon>
              <el-form-item prop="account" label="用户名" placeholder="请输入手机号">
                <el-input v-model="regForm.account" />
              </el-form-item>
              <el-form-item prop="mobile" label="手机号" placeholder="请输入手机号">
                <el-input v-model="regForm.mobile" />
              </el-form-item>
              <el-form-item prop="code" label="验证码" placeholder="请输入验证码">
                <el-input v-model="regForm.code" />
                <el-button type="primary" style="height: 32px" @click="sendCode">发送验证码</el-button>
              </el-form-item>
              <el-form-item prop="password" label="密码" placeholder="请输入密码">
                <el-input v-model="regForm.password" />
              </el-form-item>
              <el-form-item prop="conPassword" label="确认密码" placeholder="请确认密码">
                <el-input v-model="regForm.conPassword" />
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox size="large" v-model="regForm.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doRegister">注册</el-button>
              <div class="action">
                <div class="url">
                  <a href="javascript:;" @click="regRouter.push('/login')">已有账号? 去登录</a>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </div>

    </section>
    <footer class="register-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>

</template>

<style scoped lang='scss'>
.login-header {
  background: #fff;
  border-bottom: 1px solid #e4e4e4;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center 18px / contain;
    }
  }

  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }

  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;

    i {
      font-size: 14px;
      color: $xtxColor;
      letter-spacing: -5px;
    }
  }
}

.login-section {
  background: url('@/assets/images/login-bg.png') no-repeat center / cover;
  height: 528px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 6px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }
  }
}

.register-footer {
  padding: 30px 0 50px;
  background: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~a {
        border-left: 1px solid #ccc;
      }
    }
  }
}

.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: $xtxColor;

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        >i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;

          &.error {
            border-color: $priceColor;
          }

          &.active,
          &:focus {
            border-color: $xtxColor;
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: #069;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: $xtxColor;

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 10px 10px 0 70px;
    display: block;
    justify-content: space-between;

    .url {
      a {
        color: #999;
        padding-left: 125px;

      }
    }
  }
}

.subBtn {
  background: $xtxColor;
  width: 100%;
  color: #fff;
}
</style>
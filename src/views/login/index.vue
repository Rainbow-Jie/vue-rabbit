<script setup>
import { mobileLoginAPI } from '@/apis/user'
import { ref } from 'vue';
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userStore'
import { useCartStore } from '@/stores/cartStore'
import { mergeCartAPI } from '@/apis/cart'
import {getCodeAPI}  from '@/apis/register'

const cartStore = useCartStore()
const userStore = useUserStore()
//登录表单检验
const form = ref({
  account: '',
  password: '',
  agree: true
})

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
  phone: [{
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
  }]
}


//获取表单实例进行统一校验
const formRef = ref(null)
const router = useRouter()
const doLogin = () => {
  const { account, password } = form.value
  formRef.value.validate(async (valid) => {
    if (valid) {
      // TODO LOGIN
      await userStore.getUserInfo({ account, password })
      //1.提示用户
      ElMessage.success('登陆成功')
      router.replace({ path: '/' })
    } else {

    }
  })
}

const mobileRules = {
  mobile: [{
    required: true,
    message: '手机号不能为空',
    trigger: 'blur'
  }, {
    pattern: /^1[3-9]\d{9}$/,
    message: '手机号不合法',
    trigger: 'blur'
  }],
  code: [{
    required: true,
    message: '验证码不能为空',
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
  }]
}
const form1Ref = ref(null)
const mobileForm = ref({
  mobile: '',
  code: '',
  agree: true
})
const doMObileLogin = () => {
  const { mobile, code } = mobileForm.value
  form1Ref.value.validate(async (valid) => {
    if (valid) {
      const res = await mobileLoginAPI({ mobile, code })
      console.log(res);
      // TODO LOGIN
      userInfo.value = res.result
      await mergeCartAPI(cartStore.cartList.map(item => {
        return {
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
        }
      }))
      cartStore.updateNewList()
      //提示用户
      ElMessage.success('注册成功')
      router.replace({ path: '/login' })
    } else {

    }
  })
}

const sendCode = async () => {
  const res = await getCodeAPI(mobileForm.value.mobile)
  console.log(res);
}
const tab = ref(0);
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
      <div class="wrapper" v-if="tab === 0">
        <nav>
          <!--切换 -->
          <el-button type="info" @click="tab = 0">
             账号登录 
          </el-button>
          <el-button type="info" @click="tab = 1">
            手机号登录
          </el-button>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="60px" status-icon>
              <el-form-item prop="account" label="账户">
                <el-input v-model="form.account" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input v-model="form.password" />
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
              <div class="action">
                <div class="url">
                  <a href="javascript:;" @click="router.push('/reset'), ElMessage.error('功能未实现')">忘记密码</a>
                  <a href="javascript:;" @click="router.push('/register')">免费注册</a>
                </div>
              </div>
            </el-form>
          </div>

        </div>

      </div>

      <div class="wrapper" v-else>
        <nav>
          <!--切换 -->
          <el-button type="info" @click="tab = 0">
            账号登录
          </el-button>
          <el-button type="info" @click="tab = 1">
             手机号登录 
          </el-button>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="form1Ref" :model="mobileForm" :rules="mobileRules" label-position="right" label-width="75px"
              status-icon>
              <el-form-item prop="mobile" label="手机号">
                <el-input v-model="mobileForm.mobile" />
              </el-form-item>
              <el-button type="primary" style="height: 32px; margin-left: 76px;margin-bottom:5px"
                @click="sendCode">发送验证码</el-button>
              <el-form-item prop="code" label="验证码">
                <el-input v-model="mobileForm.code" />
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox size="large" v-model="mobileForm.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doMObileLogin">点击登录</el-button>
              <div class="action">
                <div class="url">
                  <a href="javascript:;" @click="router.push('/reset'), ElMessage.error('功能未实现')">忘记密码</a>
                  <a href="javascript:;" @click="router.push('/register')">免费注册</a>
                </div>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </section>


    <footer class="login-footer">
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
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 10px 80px;
      text-align: right;
      align-items: center;

      // a {
      //   flex: 1;
      //   line-height: 1;
      //   display: inline-block;
      //   font-size: 18px;
      //   position: relative;
      //   text-align: center;
      // }
    }
  }
}

.login-footer {
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
    padding: 20px 40px;
    display: block;
    justify-content: space-between;

    .url {
      a {
        color: #999;
        margin-left: 45px;

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
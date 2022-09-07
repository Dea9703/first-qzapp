<template>
  <div class="register">
    <a-form :model="formState" :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }" autocomplete="off">
      <h1 class="c-title">江南智薪管理系统</h1>

      <a-form-item label="账户" name="account" :rules="[{ required: true, message: 'Please input your account!' }]">
        <a-input v-model:value="formState.account">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" autocomplete="off">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 11 }">
        <a-button type="primary" html-type="submit" @click="submitForm(formState)">{{ register }}</a-button>
      </a-form-item>
      <a-button type="primary" class="switch" @click.prevent="changeTag">{{ isLogin ? '注册' : '登录' }}</a-button>
    </a-form>
  </div>

</template>

<script>
import { ref, reactive, getCurrentInstance, computed, defineComponent } from 'vue';
import { message } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
  setup() {
    const { proxy } = getCurrentInstance()

    let isLogin = ref(true)
    const formState = reactive({ account: '', password: '' })

    let register = computed(() => {
      return isLogin.value ? '登录' : '注册'
    })

    const changeTag = () => {
      isLogin.value = !isLogin.value
    }
    const submitForm = async (formState) => {
      try {
        const res = await proxy.$axios({
          url: '/user',
          method: 'post',
          data: formState
        })

        if (res.status === 200) {
          if (res.data.code === 400) {
            message.warning(res.data.message)
          }
          if (res.data.code === 200) {
            message.success(res.data.message)
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    return {
      isLogin,
      formState,
      register,
      changeTag,
      submitForm,
    }
  }
})


</script>

<style lang="scss" scoped>
.register {
  position: relative;
  background-image: url('../../assets/images/bg2.8319929a.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  .ant-form {
    position: absolute;
    width: 520px;
    padding: 35px;
    top: 50%;
    right: 8%;
    transform: translateY(-50%);
    background-color: rgba(31, 67, 71, 0.189);
    border: 1px solid #ccc;
    border-radius: 10px;

    .c-title {      
      font-size: 26px;
      color: #2d3a4b;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: 900;
    }

    .switch {
      position: absolute;
      right: -1px;
      top: -1px;
      display: inline-block;
      padding: 0 20px;
      height: 50px;
      cursor: pointer;
      border: none;
      border-radius: 0px 10px 0 20px;
      font-size: 18px;
      color: rgb(227, 226, 226);
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>
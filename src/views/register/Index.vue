<template>
  <div class="register">
    <a-form :model="formState" :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }" autocomplete="off">
      <h1 class="c-title">{{  register  }}</h1>

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
        <a-button type="primary" html-type="submit" @click="submitForm(formState)">{{  register  }}</a-button>
      </a-form-item>
    </a-form>
  </div>

</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';
import { message } from 'ant-design-vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';

const { proxy } = getCurrentInstance()

const register = ref('注册')
const formState = reactive({ account: '', password: '' })

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


</script>

<style lang="scss" scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;

  .ant-form {
    width: 500px;
    background-color: #ccc;
    border: 1px solid #ccc;
    border-radius: 10px;

    .c-title {
      margin-top: 14px;
      text-align: center;
      color: rgb(144, 151, 102);
    }
  }
}
</style>
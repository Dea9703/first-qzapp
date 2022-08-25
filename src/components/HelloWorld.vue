
<template>
  <div class="hello">
    <h1>Hello World</h1>
    {{ data.value }}
    {{ data2 }}
  </div>
</template>

<script setup>

import { onMounted, getCurrentInstance, reactive, ref } from 'vue'

const { proxy } = getCurrentInstance()

let data = reactive({ value: null })
let data2 = ref(null)

onMounted(() => {
  proxy.$axios({
    url: '/user',
    method: 'get',
    params: {
      uid: 2
    }
  }).then(res => {
    console.log('res=>', res);
    data.value = res.data.info
    console.log(data2);
    data2.value = res.data.info
  }).catch(err => {
    console.log('err=>', err);
  })
})
</script>

<style scoped>
</style>

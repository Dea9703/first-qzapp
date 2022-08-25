import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import './style.css'
import App from './App.vue'
import axios from './utils/request.mjs'

import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

/** 挂载全局对象 - start */
app.config.globalProperties.$axios = axios
/** 挂载全局对象 - end */

app.use(Antd).mount('#app')

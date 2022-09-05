import { createApp } from "vue";
import Antd from "ant-design-vue";
import "./assets/scss/reset.scss";
import App from "./App.vue";
import router from "./router";
import axios from "./utils/request.mjs";
import { createPinia } from "pinia";

import "ant-design-vue/dist/antd.css";

const app = createApp(App);

/** 挂载全局对象 - start */
app.config.globalProperties.$axios = axios;
/** 挂载全局对象 - end */

app.use(createPinia()).use(router).use(Antd).mount("#app");

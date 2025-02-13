import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import "primeicons/primeicons.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");

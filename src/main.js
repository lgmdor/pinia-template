import { createApp } from "vue";
import { createPinia } from "pinia";
import { Test } from "./classes.js";
import App from "./App.vue";

export const app = createApp(App);

app.use(createPinia());
app.mount("#app");

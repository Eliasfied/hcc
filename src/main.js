import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseHeader from "./components/UI/BaseHeader.vue";

const app = createApp(App);

app.use(router);

app.component("base-card", BaseCard);
app.component("base-header", BaseHeader);

app.mount('#app');

//createApp(App).mount("#app");

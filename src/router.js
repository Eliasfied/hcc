import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import InfoPage from "./pages/InfoPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/",
    },
    { path: "/", component: MainPage },
    { path: "/info", component: InfoPage },
    { path: "/contact", component: ContactPage },
  ],
});
export default router;

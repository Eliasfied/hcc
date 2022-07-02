import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./pages/MainPage.vue";
import InfoPage from "./pages/InfoPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import CharacterOutput from "../src/components/comp/CharacterOutput.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/hcc",
    },
    { path: "/hcc", component: MainPage },
    { path: "/info", component: InfoPage },
    { path: "/contact", component: ContactPage },
   // {path: "/charname/realm", component: CharacterOutput}
  ],
});
export default router;

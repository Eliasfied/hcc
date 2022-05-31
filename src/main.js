import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseHeader from "./components/UI/BaseHeader.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAlignLeft, faSearch, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
library.add(faSpinner);
library.add(faAlignLeft);
library.add(faSearch);

const app = createApp(App);

app.use(router);
app.component("base-card", BaseCard);
app.component("base-header", BaseHeader);
app.component("fa", FontAwesomeIcon);

app.mount("#app");

//createApp(App).mount("#app");

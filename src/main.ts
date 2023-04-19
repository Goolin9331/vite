import "@/style/index.ts";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "./store";

async function bootstrap() {
  const app = createApp(App);
  setupStore(app);
  app.use(router);
  app.mount("#app");
}

void bootstrap();

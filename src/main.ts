import { createApp } from 'vue';
import { createMetaManager } from 'vue-meta';

import router from '@/views/router/router';
import store from '@/store';
import i18n from './i18n';

class Application {
  public async create(): Promise<void> {
    const App = (await import('@/views/App.vue')).default;
    const app = createApp(App)
      .use(store)
      .use(i18n)
      .use(router)
      .use(createMetaManager());

    await router.isReady();
    app.mount('#app');
  }
}

function main() {
  const app = new Application();
  void app.create();
}

main();

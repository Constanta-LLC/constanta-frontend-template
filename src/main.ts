import { createApp } from 'vue';
import router from '@/views/router/router';

class Application {
  public async create(): Promise<void> {
    const App = (await import('@/views/App.vue')).default;

    createApp(App).use(router).mount('#app')
  }
}

function main() {
  const app = new Application();

  void app.create();
}

main();

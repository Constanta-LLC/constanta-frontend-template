import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'WelcomePage',
  component: () => import('../pages/WelcomePage.vue')
}];

export default routes;

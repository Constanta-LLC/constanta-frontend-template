import path from 'path';
import {
  ResolvedConfig,
  defineConfig,
  loadEnv
} from 'vite';

import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

import svgLoader from 'vite-svg-loader';
import { VitePWA } from 'vite-plugin-pwa';
import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

import i18nHotReload from './src/plugins/i18nHotReload';

const stylesPath = path
  .resolve(__dirname, './src/assets/styles')
  .replace(/\\/g, '/');

export default ({ mode }: ResolvedConfig) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    define: {
      BACKEND_BASE_URL: JSON.stringify(env.VITE_BACKEND_BASE_URL)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      exclude: ['vue', 'vue-router', 'vue-i18n']
    },
    build: {
      ssr: false,
      minify: 'esbuild',
      emptyOutDir: true,
      sourcemap: process.env.mode === 'production'
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "${stylesPath}/index.scss";
        `,
          charset: false
        }
      }
    },
    plugins: [
      checker({
        vueTsc: true,
        eslint: {
          lintCommand: 'eslint --fix --ext .ts,.vue .'
        }
      }),
      vue(),
      svgLoader(),
      vueI18n({
        runtimeOnly: false,
        include: path.resolve(__dirname, '@/locales/**')
      }),
      i18nHotReload(),
      VitePWA({
        mode: 'production',
        strategies: 'generateSW',
        registerType: 'autoUpdate',
        disable: process.env.mode !== 'production'
      }),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      eslintPlugin({
        fix: true
      })
    ]
  });
};

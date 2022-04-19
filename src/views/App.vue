<template>
  <div class="app">
    <metainfo>
      <template #title="{ content }">
        {{ content }}
      </template>
    </metainfo>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

export default defineComponent({
  name: 'App',
  setup () {
    useMeta({
      title: '',
      htmlAttrs: { lang: 'en', amp: true }
    });
  }
});
</script>

<style lang="scss" scoped>
.app {
  display: contents;
}
</style>

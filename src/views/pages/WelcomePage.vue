<template>
  <div class="page">
    <constanta-logo/>

    <div class="page__helper">
      {{ $t('welcomePage.helperText') }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ConstantaLogo from '@/assets/icons/logo/constanta.svg';

export default defineComponent({
  name: 'WelcomePage',
  components: {
    ConstantaLogo
  }
});
</script>

<style lang="scss" scoped>
.page {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;

  &__helper {
    color: #f7ce45;
    font-family: Arial Black, Arial Bold, Gadget, sans-serif;
    font-size: 48px;
    line-height: 1;
    opacity: 1;
    transition: opacity .3s cubic-bezier(0, 0, .2, 1) .4s;
    margin-top: 48px;
    max-width: 850px;
    text-align: center;
    z-index: 10;
  }
}
</style>

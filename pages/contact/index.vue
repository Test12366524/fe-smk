<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <contact />
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import SiteMap from '@/components/Footer';
import Contact from '@/components/Forms/Contact';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    Contact,
  },
  head() {
    return {
      title: 'Contact | ' + brand.education.desc,
    };
  },
});
</script>

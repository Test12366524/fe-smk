<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="8" cols="12">
            <article-blog />
          </v-col>
          <v-col md="4" cols="12">
            <sidebar />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import BlogHeader from '@/components/Header/BlogHeader';
import Article from '@/components/Blog/Article';
import Sidebar from '@/components/Blog/Sidebar';
import Footer from '@/components/Footer';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': BlogHeader,
    'main-footer': Footer,
    Sidebar,
    'article-blog': Article,
  },
  head() {
    return {
      title: 'Blog Detail | ' + brand.education.desc,
    };
  },
});
</script>

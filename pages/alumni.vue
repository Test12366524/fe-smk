<template>
  <div class="main-wrap">
    <main-header />
    <div
      style="padding-top: 6rem"
      class="space-bottom-short text-center text-md-start"
    >
      <v-container>
        <alumni-title
          head="Alumni"
          desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis
          eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit."
          align="center"
          color="primary"
        />
        <team-grid />
      </v-container>
    </div>
    <div class="space-bottom-short">
      <photo-slider />
    </div>
    <div class="bottom-deco-wrap">
      <section id="subscribe">
        <deco-footer />
        <subscribe-form />
      </section>
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import imgAPI from '@/assets/images/imgAPI';
import Header from '@/components/Header';
import Banner from '@/components/About/Banner';
import Counter from '@/components/Counter';
import PhotoSlider from '@/components/About/PhotoSlider';
import DecoFooter from '@/components/Footer/DecorationTop';
import TeamGrid from '@/components/About/TeamGrid';
import SubscribeForm from '@/components/SubscribeForm';
import Footer from '@/components/Footer';
import { defineNuxtComponent } from '#app';
import Title from '@/components/Title/Title';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    TeamGrid,
    Banner,
    Counter,
    SubscribeForm,
    DecoFooter,
    PhotoSlider,
    'alumni-title': Title,
  },
  data() {
    return {
      imgAPI,
    };
  },
  head() {
    return {
      title: 'Alumni | ' + brand.education.desc,
    };
  },
});
</script>

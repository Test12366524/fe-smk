<template>
  <div class="main-wrap">
    <main-header />
    <banner>
      <img
        :src="imgAPI.ui[5]"
        :data-2d="imgAPI.ui[4]"
        :data-3d="imgAPI.ui[5]"
        class="img-2d3d"
        alt="services 3d"
      >
    </banner>
    <div class="space-top-short">
      <counter />
    </div>
    <div class="space-top-short space-bottom-short text-center text-md-start">
      <v-container>
        <h4 class="use-text-title2 use-text-primary mb-3">
          {{ $t('common.about_team') }}
        </h4>
        <p class="use-text-subtitle2">
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
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
  },
  data() {
    return {
      imgAPI,
    };
  },
  head() {
    return {
      title: 'Team | ' + brand.education.desc,
    };
  },
});
</script>

<template>
  <div>
    <div class="main-wrap">
      <main-header home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <section id="feature" class="space-top">
          <feature />
        </section>
        <section id="about" class="space-top">
          <about />
        </section>
        <section id="blog" class="space-top">
          <blog />
        </section>
        <section id="testimonials" class="space-top">
          <testimonials />
        </section>
        <section id="achivement" class="space-top">
          <AchivementCard />
        </section>
      </div>
      <div class="bottom-deco-wrap">
        <section id="subscribe">
          <deco-footer />
          <subscribe-form />
        </section>
        <main-footer />
      </div>
      <hidden point="smDown">
        <corner />
      </hidden>
      <!-- <hidden point="mdDown">
        <notification />
      </hidden> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

<script>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import BannerSlider from '@/components/Home/BannerSlider';
import Feature from '@/components/Home/Feature';
import PopularCourse from '@/components/Home/PopularCourse';
import Explore from '@/components/Home/Explore';
import About from '@/components/Home/About';
import Testimonials from '@/components/Home/Testimonials';
import Blog from '@/components/Home/Blog';
import DecoFooter from '@/components/Footer/DecorationTop';
import SubscribeForm from '@/components/SubscribeForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hidden from '@/components/Hidden';
import Corner from '@/components/Corner';
import Notification from '@/components/Notification';

import brand from '@/assets/text/brand';
import { defineNuxtComponent, useRouter, useCookie } from '#app';
import AchivementCard from '~/components/Home/AchivementCard.vue';

export default defineNuxtComponent({
  components: {
    AchivementCard,
    'main-header': Header,
    BannerSlider,
    Feature,
    PopularCourse,
    Explore,
    About,
    Testimonials,
    Blog,
    SubscribeForm,
    DecoFooter,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
  },
  head() {
    return {
      title: brand.education.desc,
    };
  },
  setup() {
    // push route to the stored cookie languages only for index page
    const router = useRouter();
    const storedLang = useCookie('i18n_redirected');
    const i18nLocale = useI18n();

    const defaultLocale = '/' + i18nLocale.fallbackLocale.value;
    onMounted(() => {
      // const rootUrl =
      //   document.location.pathname === '/' ||
      //   document.location.pathname === defaultLocale;
      // if (storedLang.value && rootUrl) {
      //   router.push({ path: `/${storedLang.value}` });
      // }
    });
  },
  computed: {
    isTablet() {
      return this.$vuetify.display.mdAndDowm;
    },
    isMobile() {
      return this.$vuetify.display.smAndDown;
    },
  },
});
</script>

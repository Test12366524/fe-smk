<template>
  <div class="banner-wrap py-16">
    <div class="bg-deco" />
    <v-container class="small-deco">
      <div />
    </v-container>
    <div class="slide center-content">
      <div class="inner">
        <v-container>
          <v-row align="center">
            <v-col md="12" lg="6" cols="12" class="px-6 d-flex align-center">
              <div class="text">
                <h4 class="use-text-title">
                  Berita SMK Tunas Kasih 
                </h4>
                <h5 class="use-text-subtitle">
                  Prestasi Tiada Henti, Cerdas Islami dan Berkelas Dunia
                </h5>
                <div class="btn-area">
                  <v-btn
                    variant="text"
                    size="large"
                    href="/about"
                    class="button"
                  >
                    Tentang Kami
                  </v-btn>
                  <v-btn
                    size="large"
                    color="primary"
                    :href="link.education.contact"
                    class="button"
                  >
                    Kontak Kami
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col md="5" lg="6" cols="12">
              <div class="img">
                <img
                  :src="imgAPI.educationInner[1]"
                  :data-2d="imgAPI.educationInner[0]"
                  :data-3d="imgAPI.educationInner[1]"
                  class="img-2d3d"
                  alt="services 3d"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- <hidden point="smDown">
      <div class="slide-nav-group">
        <v-container>
          <nav class="slide-nav">
            <v-btn
              :class="{ active: currentSlide === 0 }"
              variant="text"
              @click="gotoSlide(0)"
            >
              <strong>First Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 1 }"
              variant="text"
              @click="gotoSlide(1)"
            >
              <strong>Second Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 2 }"
              variant="text"
              @click="gotoSlide(2)"
            >
              <strong>Third Slide</strong>
              Interdum et malesuada fames ac ante
            </v-btn>
          </nav>
        </v-container>
      </div>
    </hidden> -->
  </div>
</template>

<style scoped lang="scss">
@import './banner-styles';
</style>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';

const sliderBanner = ref(null);
const currentSlide = ref(0);
const slickOptions = {
  pagination: false,
  arrows: false,
  speed: 800,
  perPage: 1,
  type: 'loop',
  autoplay: false,
  easing: 'ease',
  direction: 'ltr',
  reducedMotion: {
    speed: 1000,
    rewindSpeed: 1000,
  },
  breakpoints: {
    960: {
      pagination: true,
    },
  },
};

const isMobile = computed(() => {
  return window.innerWidth <= 960; // Adjust this logic based on your responsive design
});

onMounted(() => {
  setTimeout(() => {
    slickOptions.direction =
      document.documentElement.dir === 'rtl' ? 'rtl' : 'ltr';
  }, 100);
});

const handleAfterChange = (slide) => {
  currentSlide.value = slide.index;
};

const gotoSlide = (index) => {
  sliderBanner.value.go(index);
};
</script>

<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />
  <v-container>
    <div class="gallery-root">
      <title-main
        :head="$t('common.about_gallery')"
        :align="isMobile ? 'center' : 'left'"
        desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        color="secondary"
      />
      <div v-if="loaded" class="carousel">
        <v-btn
          icon
          size="small"
          variant="text"
          class="nav prev"
          @click="slickPrev()"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <splide ref="slider" :options="slickOptions">
          <splide-slide v-for="index in 6" :key="index">
            <div
              class="item px-3"
              @click="() => showImg(index - 1)"
              @keydown.enter="() => showImg(index)"
            >
              <media-card
                title="Sed lacinia velit, ut malesuada eros interdum a"
                orientation="portrait"
                type="photo"
                thumb="https://images.unsplash.com/photo-1735760672876-1c6f801f6436?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </splide-slide>
        </splide>
        <v-btn
          icon
          variant="text"
          size="small"
          class="nav next"
          @click="slickNext()"
        >
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MediaCard from '../Cards/MediaCard';
import Title from '../Title';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    'title-main': Title,
    MediaCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      visible: false,
      index: 0,
      item: 0,
      imgAPI,
      loaded: false,
      imgs: [
        imgAPI.photo[11],
        imgAPI.photo[12],
        imgAPI.photo[13],
        imgAPI.photo[14],
        imgAPI.photo[15],
        imgAPI.photo[16],
      ],
      slickOptions: {
        pagination: false,
        arrows: false,
        perPage: 3,
        perMove: 1,
        type: 'loop',
        direction: 'ltr',
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          800: {
            perPage: 2,
          },
          600: {
            perPage: 1,
          },
        },
      },
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>

<template>
  <div v-if="isDesktop" class="scrollactive-nav">
    <template v-if="singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'/' + item.link"
        :class="{ active: activeMenu === item.name }"
      >
        <span>{{ item.name }}</span>
      </v-btn>
      <!-- <v-btn
        key="1"
        href="/profile"
        :class="{ active: activeMenu === 'profile' }"
        class="menu-link"
      >
        <span>Profile</span>
      </v-btn>
      <v-btn
        key="2"
        href="/berita"
        :class="{ active: activeMenu === 'berita' }"
        class="menu-link"
      >
        <span>Berita</span>
      </v-btn>
      <v-btn
        key="3"
        href="/prestasi"
        :class="{ active: activeMenu === 'prestasi' }"
        class="menu-link"
      >
        <span>Prestasi</span>
      </v-btn>
      <v-btn
        key="4"
        href="/ppdb"
        :class="{ active: activeMenu === 'ppdb' }"
        class="menu-link"
      >
        <span>PPDB</span>
      </v-btn>
      <v-btn
        key="5"
        href="/alumni"
        :class="{ active: activeMenu === 'alumni' }"
        class="menu-link"
      >
        <span>Alumni</span>
      </v-btn>
      <v-btn
        key="6"
        href="/agenda"
        :class="{ active: activeMenu === 'agenda' }"
        class="menu-link"
      >
        <span>Agenda</span>
      </v-btn> -->
    </template>
    <template v-if="!singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'/' + item.link"
      >
        <span>{{ item.name }}</span>
      </v-btn>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import { inject } from 'vue';
import { useRouter } from '#app';

export default {
  props: {
    menuPrimary: {
      type: Array,
      required: true,
    },
    menuSecondary: {
      type: Array,
      required: true,
    },
    activeMenu: {
      type: String,
      required: true,
    },
    singleNav: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -100,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      hover: false,
      curURL: '',
      curOrigin: '',
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.curURL = window.location.href;
    this.curOrigin = window.location.origin;
    this.langPath = '/' + this.$i18n.locale;

    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }
  },
};
</script>

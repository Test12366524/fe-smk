<template>
  <v-navigation-drawer
    v-if="isTablet"
    v-model="openNavMobile"
    fixed
    temporary
    class="mobile-nav"
  >
    <mobile-menu :data-menu="dataMenu" />
  </v-navigation-drawer>
  <v-app-bar
    v-scroll="handleScroll"
    :class="{ fixed: fixed, 'open-side-nav': openNavMobile }"
    class="header"
    fixed
    dense
    app
    height="auto"
  >
    <v-container>
      <div class="header-content">
        <nav class="nav-menu">
          <v-btn
            v-if="isTablet"
            :class="{ 'is-active': openNavMobile }"
            class="hamburger hamburger--spin mobile-menu"
            icon
            small
            @click.stop="handleToggleOpen"
          >
            <span class="hamburger-box">
              <span class="bar hamburger-inner" />
            </span>
          </v-btn>
          <div class="logo">
            <a :href="link.education.home">
              <logo type="landscape" />
            </a>
          </div>
          <div v-if="isDesktop && loaded" class="main-menu">
            <header-menu :data-menu="dataMenu" />
          </div>
          <user-menu />
        </nav>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import Logo from '../Logo';
import UserMenu from './TopNav/UserMenu';
import MultiLevel from './TopNav/MultiLevel';
import MultiMobile from './SideNav/MultiMobile';
import multiple from './data/multiple';

export default {
  components: {
    Logo,
    'mobile-menu': MultiMobile,
    'header-menu': MultiLevel,
    UserMenu,
  },
  data() {
    return {
      link,
      fixed: false,
      loaded: false,
      openNavMobile: null,
      dataMenu: multiple,
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen() {
      this.openNavMobile = !this.openNavMobile;
    },
  },
};
</script>

<template>
  <nav class="user-menu">
    <v-btn
      v-if="isDesktop"
      href="/ppdb"
      color="primary"
      variant="flat"
    >
      PPDB
    </v-btn>
    <v-spacer
      v-if="isDesktop"
      class="vertical-divider"
    />
    <setting-menu v-if="loaded" />
  </nav>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import Settings from './Settings';

export default {
  components: {
    'setting-menu': Settings,
  },
  data() {
    return {
      link,
      loaded: false,
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  mounted() {
    this.loaded = true;
  },
};
</script>

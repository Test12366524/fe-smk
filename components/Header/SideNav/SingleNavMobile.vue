<template>
  <v-list dense>
    <v-list-item
      v-for="(item, index) in dataMenu"
      :key="index"
      :href="item.link"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ item.name }}
        </v-list-item-title>
      </div>
    </v-list-item>
    <!-- <v-list-item href="/sample-pages" link>
      <div>
        <v-list-item-title class="menu-list">
          {{ $t('common.header_sample_page') }}
        </v-list-item-title>
      </div>
    </v-list-item> -->
  </v-list>
  <v-divider />
  <v-list dense>
    <v-list-item
      v-for="(item, index) in ['login', 'register']"
      :key="index"
      :href="'/' + item"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ $t('common.header_' + item) }}
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import mega from '../data/mega';

export default {
  props: {
    dataMenu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      menuList: mega,
      isOpen: false,
    };
  },
};
</script>

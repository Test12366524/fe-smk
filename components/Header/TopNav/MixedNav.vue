<template>
  <div v-if="isDesktop" class="scrollactive-nav">
    <template v-if="singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'/' + item.link"
        :class="{
          active: getActiveMenu === item.name || routeName.includes(item.name),
        }"
      >
        <span>{{ item.name }}</span>
      </v-btn>
    </template>
    <template v-if="!singleNav">
      <v-btn
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="'/' + item.link"
        :class="{
          active: getActiveMenu === item.name || routeName.includes(item.name),
        }"
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
    getActiveMenu() {
      const route = useRoute();
      const path = route.path.substring(4, route.path.length);
      return path;
    },
    routeName() {
      const route = useRoute();
      return route.name;
    },
  },
  mounted() {
    console.log('mounted', this.menuPrimary);
    const route = useRoute();
    console.log('route', route);
  },
};
</script>

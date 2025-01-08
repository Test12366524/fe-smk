<template>
  <v-list dense>
    <v-list-item
      v-for="(item, index) in menuPrimary"
      :key="index"
      :href="'/' + item.link"
      :class="{
        active: getActiveMenu === item.name || routeName.includes(item.name),
      }"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ item.name }}
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
  <v-divider />
  <v-list dense>
    <v-list-item
      v-for="(item, index) in ['PPDB']"
      :key="index"
      :href="'/' + item"
      :class="{
        active: getActiveMenu === item.name || routeName.includes(item.name),
      }"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ item }}
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
@import '../sidenav-style';

.active {
  background-color: #e0e0e0;
  color: black;
}
</style>

<script>
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
  },
  data() {
    return {
      isOpen: false,
      curURL: '',
      curOrigin: '',
      langPath: '',
    };
  },
  computed: {
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
};
</script>

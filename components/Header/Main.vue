<template>
  <div>
    <Mixed v-if="type === 'mixed'" :home="props.home" />
    <Basic v-if="type === 'basic'" />
    <DropList v-if="type === 'droplist'" />
    <Mega v-if="type === 'mega'" />
    <Hamburger v-if="type === 'hamburger'" :home="props.home" />
    <NavScroll v-if="type === 'navscroll'" :home="props.home" />
    <SearchBar v-if="type === 'search'" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ui from '@/composables/uiTheme';
import Mixed from './Mixed';
import Basic from './Basic';
import DropList from './DropList';
import Mega from './Mega';
import Hamburger from './Hamburger';
import NavScroll from './NavScroll';
import SearchBar from './Search';

const props = defineProps({
  home: {
    type: Boolean,
    default: false,
  },
});

const type = ref(ui.header());

watch(ui.header, (newValue) => {
  console.log('Header type changed to:', newValue);
});
</script>

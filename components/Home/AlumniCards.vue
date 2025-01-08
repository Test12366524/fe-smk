<template>
  <div class="root">
    <v-container class="fixed-width">
      <Title
        head="Prestasi Kami"
        desc="ini adalah sebagian prestasi sekolah kami"
        align="center"
        color="primary"
      />
      <TeamGrid list="alumniList" />
    </v-container>
  </div>
</template>

<script setup>
import imgAPI from '@/assets/images/imgAPI';
import PostCard from '../Cards/PostCard.vue';
import Title from '../Title/Title.vue';
import TeamGrid from '../Alumni/TeamGrid.vue';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

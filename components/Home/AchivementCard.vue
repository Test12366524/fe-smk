<template>
  <div class="root">
    <v-container class="fixed-width">
      <Title
        head="Prestasi Kami"
        desc="ini adalah sebagian prestasi sekolah kami"
        align="center"
        color="primary"
      />
      <v-row>
        <v-col v-for="(item, index) in list" :key="index" md="4" cols="12">
          <PostCard
            :img="item.cover ? getFileUrl(item.cover) : imgAPI.photo[36]"
            :title="item.title"
            :desc="item.content"
            :date="formatFullDate(item.created_at).dateOnly"
            orientation="portrait"
            type="round"
            :href="`prestasi/${item.id}`"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import imgAPI from '@/assets/images/imgAPI';
import PostCard from '../Cards/PostCard.vue';
import Title from '../Title/Title.vue';

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

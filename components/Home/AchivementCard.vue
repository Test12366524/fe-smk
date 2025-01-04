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
        <v-col v-for="index in 3" :key="index" sm="4" cols="12">
          <PostCard
            :img="imgAPI.photo[36]"
            title="Maecenas rutrum dolor sed nisi"
            desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
            date="12 Nov 2020"
            orientation="portrait"
            type="round"
            href="#"
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
</script>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

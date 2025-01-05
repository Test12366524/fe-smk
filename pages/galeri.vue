<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <Title head="Galeri" align="center" color="primary" />
        <v-row>
          <v-col v-for="index in 9" :key="index" sm="4" cols="12">
            <MediaCard
              :thumb="imgAPI.photo[10]"
              title="Sed lacinia velit, ut malesuada eros interdum a"
              orientation="portrait"
              type="photo"
              href="#"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script setup>
import brand from '@/assets/text/brand';
import MainHeader from '@/components/Header';
import MainFooter from '@/components/Footer';
import PostCard from '~/components/Cards/PostCard.vue';
import imgAPI from '~/assets/images/imgAPI';
import Title from '~/components/Title/Title.vue';
import NewsCard from '~/components/Cards/NewsCard.vue';
import MediaCard from '~/components/Cards/MediaCard.vue';

useHead({
  title: `Agenda | ${brand.education.descSecondary}`,
});
</script>

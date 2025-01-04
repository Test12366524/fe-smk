<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <Title head="Info" align="center" color="primary" />
        <v-row>
          <v-col md="12">
            <template v-for="index in 5" :key="index">
              <NewsCard
                :img="imgAPI.photo[37]"
                title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                headline="news"
                orientation="landscape"
                type="round"
                href="#"
              />
              <br /><br />
            </template>
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

useHead({
  title: `Info | ${brand.education.descSecondary}`,
});
</script>

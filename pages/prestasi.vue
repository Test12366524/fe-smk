<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <Title head="Prestasi" align="center" color="primary" />
        <v-row>
          <v-col v-for="index in 10" :key="index" sm="4" cols="12">
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

useHead({
  title: `Prestasi | ${brand.education.descSecondary}`,
});
</script>

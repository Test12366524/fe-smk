<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="8" cols="12">
            <profile-article />
          </v-col>
          <v-col md="4" cols="12">
            <sidebar @handleSelectMenu="handleSelectMenu" />
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
import ProfileArticle from '@/components/Profil/Article';
import Sidebar from '@/components/Profil/Sidebar';
import MainFooter from '@/components/Footer';

const selectedMenu = ref('');

const handleSelectMenu = (menu) => {
  selectedMenu.value = menu;
  console.log('PARENT', menu);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

useHead({
  title: `Profil | ${brand.education.descSecondary}`,
});
</script>

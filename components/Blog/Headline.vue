<template>
  <v-card :href="link.education.blogDetail" class="blog-headline" dark>
    <v-img
      :src="imgAPI.photo[0]"
      class="text-white align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
      max-height="460px"
      width="100%"
      cover
    >
      <span class="content">
        <v-card-title class="headline-title use-text-title">Pellentesque habitant morbi tristique senectus </v-card-title>
        <v-card-subtitle class="text-h6 use-text-subtitle">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. </v-card-subtitle>
      </span>
    </v-img>
  </v-card>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';

export default {
  data() {
    return {
      imgAPI,
      link,
    };
  },
};
</script>

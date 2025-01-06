<template>
  <article class="blog-content">
    <figure class="image-blog">
      <img :src="imgAPI.photo[8]" alt="blog" />
    </figure>
    <strong>Heading</strong>
    <p>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros.
    </p>
    <strong>Sub-heading</strong>
    <p>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros.
    </p>
    <p>
      Example code block Aenean lacinia bibendum nulla sed consectetur. Etiam
      porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
      commodo. Tortor mauris condimentum nibh, ut fermentum massa.
    </p>
    <div class="share-socmed">
      <h3 class="subtitle">
        {{ $t('common.blog_share') }}
      </h3>
      <v-btn :icon="isMobile" rounded="xl" variant="outlined" class="facebook">
        <v-icon>mdi-facebook</v-icon>
        {{ isMobile ? '' : 'facebook' }}
      </v-btn>
      <v-btn :icon="isMobile" variant="outlined" rounded="xl" class="twitter">
        <v-icon>mdi-twitter</v-icon>
        {{ isMobile ? '' : 'twitter' }}
      </v-btn>
      <v-btn :icon="isMobile" variant="outlined" rounded="xl" class="linkedin">
        <v-icon>mdi-linkedin</v-icon>
        {{ isMobile ? '' : 'linkedin' }}
      </v-btn>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script setup>
import { computed } from 'vue';
import imgAPI from '@/assets/images/imgAPI';
import { useDisplay } from 'vuetify';

const { xs } = useDisplay();

const route = useRoute();
const selectedMenu = computed(() => route.query.menu || 'sejarah-singkat');

const isMobile = computed(() => xs.value);
</script>

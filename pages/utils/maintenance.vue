<template>
  <div class="coloured-page">
    <page-deco />
    <v-container class="max-md">
      <div class="full-screen-container">
        <v-row align="center">
          <v-col md="12" class="text-center">
            <section>
              <v-icon v-if="isDesktop" class="maintenance-icon primary-color">
                mdi-wrench
              </v-icon>
              <v-icon class="maintenance-icon secondary-color">
                mdi-cog
              </v-icon>
              <v-icon v-if="isDesktop" class="maintenance-icon accent-color">
                mdi-alert
              </v-icon>
            </section>
            <div class="text-center text-white">
              <h3 class="use-text-title2">
                {{ $t('common.util_maintenance') }}
              </h3>
              <h5 class="use-text-subtitle2">
                {{ $t('common.util_maintenance_dec') }}
              </h5>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages.scss';
</style>

<script>
import brand from '@/assets/text/brand';
import PageDeco from '@/components/Decoration/PageDeco';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    PageDeco,
  },
  head() {
    return {
      title: brand.education.name + ' - Maintenance',
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
});
</script>

<template>
  <div class="main-wrap">
    <main-header />
    <v-container class="pt-16">
      <v-row class="pt-5">
        <v-col v-if="isSmallScreen" md="4" cols="12" order-md="2" order="1">
          <CreatorWidget :details="articleDetails" />
        </v-col>
        <v-col md="8" cols="12" order-md="1" order="2">
          <DetailContent
            :title="articleDetails.title"
            :content="articleDetails.content"
            :image="articleDetails.cover"
            parentTitle="Berita"
            parentUrl="/berita"
          />
        </v-col>
      </v-row>
    </v-container>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script setup>
import MainHeader from '@/components/Header';
import MainFooter from '@/components/Footer';
import DetailContent from '~/components/DetailContent.vue';
import CreatorWidget from '~/components/Berita/CreatorWidget.vue';
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay();
const isSmallScreen = computed(() => mdAndUp.value);

const { fetchData } = useApi();

const route = useRoute();
const getSlug = computed(() => route.params.slug);

const categoryUrl = '/article-category/all';
const articleUrl = '/article';

const categoryList = ref([]);
const articleDetails = ref({});

const getCategory = async () => {
  const { data } = await fetchData(categoryUrl);
  if (data) categoryList.value = [{ id: null, text: 'All' }, ...data.data];
};

const getArticleDetails = async (id) => {
  const { data } = await fetchData(`${articleUrl}/${id}`);
  if (data) articleDetails.value = data.data;
};

onMounted(async () => {
  await getCategory();
  if (getSlug.value) {
    await getArticleDetails(getSlug.value);
  }
});

useHead({
  title: `Berita | ${articleDetails.title}`,
});
</script>

<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="4" cols="12" order-md="2" order="1">
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
import DetailContent from '~/components/DetailContent.vue';
import CreatorWidget from '~/components/Berita/CreatorWidget.vue';

const { fetchData } = useApi();

const route = useRoute();
const router = useRouter();
const selectedMenu = ref('');
const getSlug = computed(() => route.params.slug);

const categoryUrl = '/article-category/all';
const articleUrl = '/article';

const params = reactive({
  page: 1,
  limit: 10,
  category_id: null,
});

const pagination = ref({
  currentPage: 1,
  pageTotal: 0,
  total: 0,
});

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
  title: `Berita | ${brand.education.descSecondary}`,
});
</script>

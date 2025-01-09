<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="4" cols="12" order-md="2" order="1">
            <sidebar
              @handleSelectMenu="handleSelectMenu"
              :categories="categoryList"
            />
          </v-col>
          <v-col md="8" cols="12" order-md="1" order="2">
            <NewsSections
              defaultTitle="Layanan"
              :articles="articleList"
              href="/layanan"
              key-image="image"
              key-id="id"
            />
            <PaginationComponent
              v-if="articleList.length > 0"
              :totalItems="pagination.total"
              :currentPage="pagination.currentPage"
              @onPageChange="
                (page) => {
                  params.page = page;
                  getArticle(params);
                }
              "
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
import Sidebar from '@/components/Berita/Sidebar';
import MainFooter from '@/components/Footer';
import NewsSections from '~/components/Berita/NewsSections.vue';
import { kebabToNormalText } from '~/utils/helper';
import PaginationComponent from '~/components/PaginationComponent.vue';

const { fetchData } = useApi();

const route = useRoute();
const router = useRouter();
const selectedMenu = ref('');
const getQuery = computed(() => route.query.category);

const categoryUrl = '/layanan-category/all';
const articleUrl = '/layanan';

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
const articleList = ref([]);

const handleSelectMenu = (menu) => {
  selectedMenu.value = menu;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const getCategory = async () => {
  const { data } = await fetchData(categoryUrl);
  if (data) categoryList.value = [{ id: null, text: 'All' }, ...data.data];
};

const getArticle = async (params) => {
  const { data } = await fetchData(articleUrl, params);
  if (data) articleList.value = data.data.items;
  console.log('getArticle', articleList.value);
  const cloneData = { ...data.data };
  delete cloneData.items;
  cloneData.currentPage = Number(cloneData.currentPage);
  pagination.value = cloneData;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

watch(getQuery, (newValue) => {
  const currentCategory = categoryList.value.find(
    (item) => item.text === kebabToNormalText(newValue)
  );
  params.category_id = currentCategory ? currentCategory.id : null;
  getArticle(params);
});

onMounted(async () => {
  await getCategory();
  if (getQuery.value) {
    const currentCategory = categoryList.value.find(
      (item) => item.text === kebabToNormalText(getQuery.value)
    );
    console.log('currentCategory', currentCategory);
    params.category_id = currentCategory ? currentCategory.id : null;
    getArticle(params);
  } else {
    router.push(`${route.path}?category=all`);
  }
});

useHead({
  title: `Layanan | ${brand.education.descSecondary}`,
});
</script>

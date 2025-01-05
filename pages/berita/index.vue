<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="8" cols="12">
            <NewsSections :articles="articleList" />
          </v-col>
          <v-col md="4" cols="12">
            <sidebar
              @handleSelectMenu="handleSelectMenu"
              :categories="categoryList"
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

const { fetchData } = useApi();

const route = useRoute();
const router = useRouter();
const selectedMenu = ref('');
const getQuery = computed(() => route.query.category);
const menus = {
  sejarahSingkat: 'sejarah-singkat',
  visiMisi: 'visi-misi',
  saranaPrasarana: 'sarana-prasarana',
  kepalaMadrasah: 'kepala-madrasah',
  strukturKepengurusan: 'struktur-kepengurusan',
  pendidik: 'pendidik',
  tenagaKependidikan: 'tenaga-kependidikan',
  peseratDidik: 'peserat-didik',
};

const categoryUrl = '/article-category/all';
const articleUrl = '/article';

const params = reactive({
  page: 1,
  limit: 10,
  category_id: null,
});

const categoryList = ref([]);
const articleList = ref([]);

const defaultForm = {
  id: 0,
  author_id: 0,
  title: '',
  subtitle: '',
  slug: '',
  cover: '',
  content: '',
  publish_date: '',
  status: 0,
  created_at: '',
  updated_at: '',
  article_category_id: 0,
  category_name: '',
  status_desc: '',
  author_name: '',
};

const handleSelectMenu = (menu) => {
  selectedMenu.value = menu;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const getCategory = async () => {
  const { data } = await fetchData(categoryUrl);
  if (data) categoryList.value = data.data;
};

const getArticle = async (params) => {
  const { data } = await fetchData(articleUrl, params);
  if (data) articleList.value = data.data.items;
  console.log('articleList', articleList.value);
};

watch(getQuery, (newValue) => {
  if (newValue) {
    const currentCategory = categoryList.value.find(
      (item) => item.text === kebabToNormalText(newValue)
    );
    console.log('currentCategory', currentCategory);
    params.category_id = currentCategory.id;
    getArticle(params);
  }
});

onMounted(async () => {
  await getCategory();
  // await getArticle();
  if (getQuery.value) {
    console.log('categoryList', categoryList.value);
    console.log('getQuery', kebabToNormalText(getQuery.value));
    const currentCategory = categoryList.value.find(
      (item) => item.text === kebabToNormalText(getQuery.value)
    );
    console.log('currentCategory', currentCategory);
    params.category_id = currentCategory.id;
    getArticle(params);
  } else {
    getArticle(params);
  }
});

useHead({
  title: `Berita | ${brand.education.descSecondary}`,
});
</script>

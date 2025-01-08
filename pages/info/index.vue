<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <InfoTitle head="Info" align="center" color="primary" />
        <v-row>
          <v-col cols="12">
            <InfoSections
              defaultTitle="Info"
              :articles="articleList"
              href="/info"
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
import InfoSections from '~/components/Info/InfoSections.vue';
import InfoTitle from '@/components/Title/Title';
import { kebabToNormalText } from '~/utils/helper';
import PaginationComponent from '~/components/PaginationComponent.vue';

const { fetchData } = useApi();

const route = useRoute();
const router = useRouter();
const selectedMenu = ref('');
const getQuery = computed(() => route.query.category);

const articleUrl = '/info';

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

const getArticle = async (params) => {
  const { data } = await fetchData(articleUrl, params);
  if (data) articleList.value = data.data.items;
  const cloneData = { ...data.data };
  delete cloneData.items;
  cloneData.currentPage = Number(cloneData.currentPage);
  pagination.value = cloneData;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(async () => {
  getArticle(params);
});

useHead({
  title: `Info | ${brand.education.descSecondary}`,
});
</script>

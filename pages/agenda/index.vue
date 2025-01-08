<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <InfoTitle head="Agenda" align="center" color="primary" />
        <v-row>
          <v-col cols="12">
            <AgendaSections
              defaultTitle="Agenda"
              :articles="articleList"
              href="/agenda"
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
import MainFooter from '@/components/Footer';
import AgendaSections from '~/components/Agenda/AgendaSections.vue';
import InfoTitle from '@/components/Title/Title';
import PaginationComponent from '~/components/PaginationComponent.vue';

const { fetchData } = useApi();

const articleUrl = '/agenda';

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

const articleList = ref([]);

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
  title: `Agenda | ${brand.education.descSecondary}`,
});
</script>

<template>
  <div class="main-wrap">
    <main-header />
    <div
      style="padding-top: 6rem"
      class="space-bottom-short text-center text-md-start"
    >
      <v-container>
        <alumni-title head="Alumni" align="center" color="primary" />
        <team-grid :list="alumniList" />
        <PaginationComponent
          v-if="alumniList.length > 0"
          :totalItems="pagination.total"
          :currentPage="pagination.currentPage"
          @onPageChange="
            (page) => {
              params.page = page;
              getList(params);
            }
          "
        />
      </v-container>
    </div>
    <div class="bottom-deco-wrap">
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
import TeamGrid from '@/components/Alumni/TeamGrid';
import MainFooter from '@/components/Footer';
import AlumniTitle from '@/components/Title/Title';
import PaginationComponent from '~/components/PaginationComponent.vue';

const { fetchData } = useApi();

const alumniList = ref([]);
const params = reactive({
  page: 1,
  limit: 10,
});

const pagination = ref({
  currentPage: 1,
  pageTotal: 0,
  total: 0,
});

const baseUrl = '/siswa/alumni';

const getList = async (params) => {
  const { data } = await fetchData(baseUrl, params);
  if (data) alumniList.value = data.data.items;
  const cloneData = { ...data.data };
  delete cloneData.items;
  cloneData.currentPage = Number(cloneData.currentPage);
  pagination.value = cloneData;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Set the page title
useHead({
  title: 'Alumni | ' + brand.education.desc,
});

onMounted(() => {
  getList(params);
});
</script>

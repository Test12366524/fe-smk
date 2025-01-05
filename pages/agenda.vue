<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <Title head="Agenda" align="center" color="primary" />
        <v-row>
          <v-col md="12">
            <template v-for="(item, index) in contentList" :key="index + item">
              <NewsCard
                :img="item.cover ? getFileUrl(item.cover) : imgAPI.photo[37]"
                :title="item.title"
                headline="agenda"
                orientation="landscape"
                type="round"
                href="#"
              />
            </template>
          </v-col>
          <v-col cols="12">
            <PaginationComponent
              v-if="contentList.length > 0"
              :totalItems="pagination.total"
              :currentPage="pagination.currentPage"
              @onPageChange="
                (page) => {
                  params.page = page;
                  getList(params);
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
import imgAPI from '~/assets/images/imgAPI';
import Title from '~/components/Title/Title.vue';
import NewsCard from '~/components/Cards/NewsCard.vue';
import PaginationComponent from '~/components/PaginationComponent.vue';

useHead({
  title: `Agenda | ${brand.education.descSecondary}`,
});

const { fetchData } = useApi();
const contentList = ref([]);
const params = reactive({
  page: 1,
  limit: 10,
});

const pagination = ref({
  currentPage: 1,
  pageTotal: 0,
  total: 0,
});

const baseUrl = '/agenda';

const getList = async (params) => {
  const { data } = await fetchData(baseUrl, params);
  if (data) contentList.value = data.data.items;
  const cloneData = { ...data.data };
  delete cloneData.items;
  cloneData.currentPage = Number(cloneData.currentPage);
  pagination.value = cloneData;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  getList(params);
});
</script>

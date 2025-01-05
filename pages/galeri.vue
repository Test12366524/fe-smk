<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <Title head="Galeri" align="center" color="primary" />
        <v-row>
          <v-col v-for="index in 9" :key="index" sm="4" cols="12">
            <MediaCard
              :thumb="imgAPI.photo[10]"
              title="Sed lacinia velit, ut malesuada eros interdum a"
              orientation="portrait"
              type="photo"
              href="#"
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
import MediaCard from '~/components/Cards/MediaCard.vue';

useHead({
  title: `Galeri | ${brand.education.descSecondary}`,
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

const baseUrl = '/gallery';

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

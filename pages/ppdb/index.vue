<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="4" cols="12" order-md="2" order="1">
            <sidebar :list="navigationOptions" />
          </v-col>
          <v-col md="8" cols="12" order-md="1" order="2">
            <h4 class="use-text-title2 title-blog mb-4">
              {{ getTitle }}
            </h4>
            <template v-if="isInfoSection">
              <InfoSections :selectedContent="selectedContent" />
            </template>
            <template v-else>
              <RegisterPpdb />
            </template>
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
import Sidebar from '@/components/PPDB/Sidebar';
import MainFooter from '@/components/Footer';
import InfoSections from '~/components/PPDB/InfoSections.vue';
import RegisterPpdb from '~/components/PPDB/RegisterPpdb.vue';

const route = useRoute();
const router = useRouter();
const getCurrentNavigation = computed(() => route.query.navigasi);
const infoSections = [
  'informasi-ppdb-regular',
  'informasi-ppdb',
  'snpdb',
  'pengumuman-ppdb',
];

const { fetchData } = useApi();

const dataDashboard = ref({});

const isInfoSection = computed(() =>
  infoSections.includes(getCurrentNavigation.value)
);

const navigationOptions = computed(() => {
  return [
    {
      text: 'Informasi PPDB Regular',
      url: 'informasi-ppdb-regular',
      image: dataDashboard.value.ppdb_reguler_image || null,
      description: dataDashboard.value.ppdb_reguler_description,
    },
    {
      text: 'Informasi PPDB',
      url: 'informasi-ppdb',
      image: dataDashboard.value.ppdb_image || null,
      description: dataDashboard.value.ppdb_description,
    },
    {
      text: 'SNPDB',
      url: 'snpdb',
      image: dataDashboard.value.snpdb_image || null,
      description: dataDashboard.value.snpdb_description,
    },
    {
      text: 'Daftar PPDB',
      url: 'daftar-ppdb',
      image: null,
      description: '',
    },
    {
      text: 'Pengumuman PPDB',
      url: 'pengumuman-ppdb',
      image: dataDashboard.value.pengumuman_ppdb_image || null,
      description: dataDashboard.value.pengumuman_ppdb_description,
    },
  ];
});

const selectedContent = computed(() => {
  return navigationOptions.value.find(
    (item) => item.url === getCurrentNavigation.value
  );
});

watch(selectedContent, (newValue) => {
  console.log(newValue);
});

const getCurrentTitle = (query) => {
  const currentItem = navigationOptions.value.find(
    (item) => item.url === query
  );
  return currentItem ? currentItem : 'Informasi PPDB Regular';
};

const getTitle = ref(getCurrentTitle(getCurrentNavigation.value).text);

watch(getCurrentNavigation, (newValue) => {
  getTitle.value = getCurrentTitle(newValue).text;
});

const getDashboard = async () => {
  const url = '/configuration/tentang-kami';
  const { data } = await fetchData(url);
  if (data.data) {
    dataDashboard.value = data.data;
    console.log(dataDashboard.value);
  }
};

onMounted(() => {
  if (!getCurrentNavigation.value) {
    router.replace(`${route.path}?navigasi=${navigationOptions.value[0].url}`);
  }
  getDashboard();
});

useHead({
  title: `PPDB | ${brand.education.descSecondary}`,
});
</script>

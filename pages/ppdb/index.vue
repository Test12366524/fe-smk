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
              <InfoSections />
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

const isInfoSection = computed(() =>
  infoSections.includes(getCurrentNavigation.value)
);

const navigationOptions = [
  {
    text: 'Informasi PPDB Regular',
    url: 'informasi-ppdb-regular',
  },
  {
    text: 'Informasi PPDB',
    url: 'informasi-ppdb',
  },
  {
    text: 'SNPDB',
    url: 'snpdb',
  },
  {
    text: 'Daftar PPDB',
    url: 'daftar-ppdb',
  },
  {
    text: 'Pengumuman PPDB',
    url: 'pengumuman-ppdb',
  },
];

const getCurrentTitle = (query) => {
  const currentItem = navigationOptions.find((item) => item.url === query);
  return currentItem ? currentItem : 'Informasi PPDB Regular';
};

const getTitle = ref(getCurrentTitle(getCurrentNavigation.value).text);

watch(getCurrentNavigation, (newValue) => {
  getTitle.value = getCurrentTitle(newValue).text;
});

onMounted(() => {
  if (!getCurrentNavigation.value) {
    router.replace(`${route.path}?navigasi=${navigationOptions[0].url}`);
  }
});

useHead({
  title: `PPDB | ${brand.education.descSecondary}`,
});
</script>

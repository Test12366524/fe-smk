<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="4" cols="12" order-md="2" order="1">
            <sidebar
              @handleSelectMenu="handleSelectMenu"
              :categories="navigationList"
            />
          </v-col>
          <v-col md="8" cols="12" order-md="1" order="2">
            <ProfileSections :selectedContent="selectedContent" />
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
import ProfileSections from '~/components/Profil/ProfileSections.vue';

const { fetchData } = useApi();

const route = useRoute();
const router = useRouter();
const selectedMenu = ref('');
const getCurrentCategory = computed(() => route.query.category);

const articleUrl = '/configuration/tentang-kami';
const dashboardData = ref({});
const navigationList = computed(() => {
  return [
    {
      id: 1,
      text: 'Sejarah Singkat',
      title: dashboardData.value?.profile_sejarah_title || 'Sejarah Singkat',
      image: dashboardData.value?.profile_sejarah_image || null,
      content: dashboardData.value?.profile_sejarah_description,
    },
    {
      id: 2,
      text: 'Visi Misi',
      title: dashboardData.value?.profile_visi_misi_title || 'Visi Misi',
      image: dashboardData.value?.profile_visi_misi_image || null,
      content: dashboardData.value?.profile_visi_misi_description,
    },
    {
      id: 3,
      text: 'Sarana Prasarana',
      title:
        dashboardData.value?.profile_sarana_prasana_title || 'Sarana Prasarana',
      image: dashboardData.value?.profile_sarana_prasana_image || null,
      content: dashboardData.value?.profile_sarana_prasana_description,
    },
    {
      id: 4,
      text: 'Kepala Madrasah',
      title:
        dashboardData.value?.profile_kepala_madrasah_title || 'Kepala Madrasah',
      image: dashboardData.value?.profile_kepala_madrasah_image || null,
      content: dashboardData.value?.profile_kepala_madrasah_description,
    },
    // {
    //   id: 5,
    //   text: 'Struktur Kepengurusan',
    //   title: 'Struktur Kepengurusan',
    //   image: null,
    //   content: '',
    // },
    // {
    //   id: 6,
    //   text: 'Pendidik',
    //   title: 'Pendidik',
    //   image: null,
    //   content: '',
    // },
    {
      id: 7,
      text: 'Tenaga Kependidikan',
      title:
        dashboardData.value.tenaga_kependidikan_title || 'Tenaga Kependidikan',
      image: dashboardData.value.tenaga_kependidikan_image || null,
      content: dashboardData.value.tenaga_kependidikan_description,
    },
    {
      id: 8,
      text: 'Peserat Didik',
      title: dashboardData.value.peserta_didik_title || 'Peserat Didik',
      image: dashboardData.value.peserta_didik_image || null,
      content: dashboardData.value.peserta_didik_description,
    },
  ];
});

const selectedContent = computed(() => {
  return navigationList.value.find(
    (item) => toKebabCase(item.text) === getCurrentCategory.value
  );
});

const handleSelectMenu = (menu) => {
  selectedMenu.value = menu;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const getData = async () => {
  const { data } = await fetchData(articleUrl);
  if (data.data) {
    console.log('getData', data.data);
    dashboardData.value = data.data;
  }
};

onMounted(async () => {
  await getData();
  console.log('selectedContent', selectedContent.value);
  if (!getCurrentCategory.value)
    router.push(`${route.path}?category=sejarah-singkat`);
});

useHead({
  title: `Profil | ${brand.education.descSecondary}`,
});
</script>

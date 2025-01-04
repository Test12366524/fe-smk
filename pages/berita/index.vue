<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="8" cols="12">
            <NewsSections />
          </v-col>
          <v-col md="4" cols="12">
            <sidebar @handleSelectMenu="handleSelectMenu" />
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

const route = useRoute();
const router = useRouter();
const selectedMenu = ref('');
const getQuery = computed(() => route.query.menu);
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

const handleSelectMenu = (menu) => {
  selectedMenu.value = menu;
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  if (getQuery.value) {
    selectedMenu.value = getQuery.value;
  } else {
    selectedMenu.value = menus.sejarahSingkat;
    router.push(`${route.path}?menu=${selectedMenu.value}`);
  }
});

useHead({
  title: `Berita | ${brand.education.descSecondary}`,
});
</script>

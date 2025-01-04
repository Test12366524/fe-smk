<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <v-container class="mt-10 mt-sm-0">
        <v-row>
          <v-col md="8" cols="12">
            <VisiMisiSection v-if="selectedMenu === menus.visiMisi" />
            <SaranaPrasaranaSection
              v-else-if="selectedMenu === menus.saranaPrasarana"
            />
            <KepalaMadrasahSection
              v-else-if="selectedMenu === menus.kepalaMadrasah"
            />
            <StrukturKepengurusanSection
              v-else-if="selectedMenu === menus.strukturKepengurusan"
            />
            <PendidikSection v-else-if="selectedMenu === menus.pendidik" />
            <TenagaKependidikanSection
              v-else-if="selectedMenu === menus.tenagaKependidikan"
            />
            <PesertaDidikSection
              v-else-if="selectedMenu === menus.peseratDidik"
            />
            <SejarahSingkatSection v-else />
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
import Sidebar from '@/components/Profil/Sidebar';
import MainFooter from '@/components/Footer';
import VisiMisiSection from '~/components/Profil/VisiMisiSection.vue';
import SejarahSingkatSection from '~/components/Profil/SejarahSingkatSection.vue';
import SaranaPrasaranaSection from '~/components/Profil/SaranaPrasaranaSection.vue';
import KepalaMadrasahSection from '~/components/Profil/KepalaMadrasahSection.vue';
import StrukturKepengurusanSection from '~/components/Profil/StrukturKepengurusanSection.vue';
import PendidikSection from '~/components/Profil/PendidikSection.vue';
import TenagaKependidikanSection from '~/components/Profil/tenagaKependidikanSection.vue';
import PesertaDidikSection from '~/components/Profil/PesertaDidikSection.vue';

const route = useRoute();
const selectedMenu = ref('');
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
  const getMenu = route.query.menu || menus.sejarahSingkat;
  handleSelectMenu(getMenu);
});

useHead({
  title: `Profil | ${brand.education.descSecondary}`,
});
</script>

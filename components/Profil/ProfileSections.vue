<template>
  <article class="blog-content">
    <h4 class="use-text-title2 title-blog">{{ selectedContent.title }}</h4>
    <figure class="image-blog" v-if="selectedContent.image">
      <img :src="getFileUrl(selectedContent.image)" alt="blog" />
    </figure>
    <p class="pt-2">
      {{ selectedContent.content }}
    </p>
    <div class="share-socmed">
      <h3 class="subtitle">
        {{ $t('common.blog_share') }}
      </h3>
      <v-btn :icon="isMobile" rounded="xl" variant="outlined" class="facebook">
        <v-icon>mdi-facebook</v-icon>
        {{ isMobile ? '' : 'facebook' }}
      </v-btn>
      <v-btn :icon="isMobile" variant="outlined" rounded="xl" class="twitter">
        <v-icon>mdi-twitter</v-icon>
        {{ isMobile ? '' : 'twitter' }}
      </v-btn>
      <v-btn :icon="isMobile" variant="outlined" rounded="xl" class="linkedin">
        <v-icon>mdi-linkedin</v-icon>
        {{ isMobile ? '' : 'linkedin' }}
      </v-btn>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script setup>
import { computed } from 'vue';
import imgAPI from '@/assets/images/imgAPI';
import { useDisplay } from 'vuetify';

const { xs } = useDisplay();

const route = useRoute();

const props = defineProps({
  selectedContent: {
    type: Object,
    default: {
      id: 1,
      text: 'Sejarah Singkat',
      title: 'Sejarah Singkat',
      image: null,
      content:
        'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    },
  },
});

const selectedMenu = computed(() => route.query.menu || 'sejarah-singkat');
const getTitle = ref('');
const menus = ref([
  {
    key: 'sejarah-singkat',
    title: 'Sejarah Singkat Berita MA Miftahul Ulum Bettet Pamekasan',
  },
  {
    key: 'visi-misi',
    title: 'Visi Misi Berita MA Miftahul Ulum Bettet Pamekasan',
  },
  {
    key: 'sarana-prasarana',
    title: 'Sarana Prasarana',
  },
  {
    key: 'kepala-madrasah',
    title: 'Kepala Madrasah',
  },
  {
    key: 'struktur-kepengurusan',
    title: 'Struktur Kepengurusan',
  },
  {
    key: 'pendidik',
    title: 'Pendidik',
  },
  {
    key: 'tenaga-kependidikan',
    title: 'Tenaga Kependidikan',
  },
  {
    key: 'peserat-didik',
    title: 'Peserta Didik',
  },
]);

const handleSetContent = (keyValue) => {
  const pageTitle = menus.value.find((menu) => menu.key === keyValue).title;
  getTitle.value =
    pageTitle || 'Visi Misi Berita MA Miftahul Ulum Bettet Pamekasan';
};

watch(selectedMenu, (newValue) => {
  handleSetContent(newValue);
});

onMounted(() => {
  handleSetContent(selectedMenu.value);
});

const isMobile = computed(() => xs.value);
</script>

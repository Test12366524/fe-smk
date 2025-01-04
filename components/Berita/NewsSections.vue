<template>
  <article class="blog-content">
    <h4 class="use-text-title2 title-blog">{{ getTitle }}</h4>
    <v-row>
      <v-col md="12">
        <template v-for="index in 10" :key="index">
          <div class="mb-8">
            <post-card
              :img="imgAPI.photo[32]"
              title="Maecenas rutrum dolor sed nisi"
              desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
              date="12 Nov 2020"
              orientation="landscape"
              type="round"
              href="/blog/detail-blog"
            />
          </div>
        </template>
      </v-col>
    </v-row>
  </article>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script setup>
import { computed } from 'vue';
import imgAPI from '@/assets/images/imgAPI';
import PostCard from '@/components/Cards/PostCard';
import { useDisplay } from 'vuetify';

const { xs } = useDisplay();

const route = useRoute();
const selectedMenu = computed(() => route.query.menu || 'sejarah-singkat');
const getTitle = ref('');
const menus = ref([
  {
    key: 'sejarah-singkat',
    title: 'Sejarah Singkat MAN 1 Yogyakarta',
  },
  {
    key: 'visi-misi',
    title: 'Visi Misi MAN 1 Yogyakarta',
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
  getTitle.value = pageTitle || 'Visi Misi MAN 1 Yogyakarta';
};

watch(selectedMenu, (newValue) => {
  handleSetContent(newValue);
});

onMounted(() => {
  handleSetContent(selectedMenu.value);
});

const isMobile = computed(() => xs.value);
</script>

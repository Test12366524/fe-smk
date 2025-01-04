<template>
  <article class="blog-content">
    <h4 class="use-text-title2 title-blog">{{ getTitle }}</h4>
    <time class="caption">June 19, 2024 by Admin</time>
    <figure class="image-blog">
      <img :src="imgAPI.photo[8]" alt="blog" />
    </figure>
    <p>
      Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
      ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>
    <p>
      Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur
      purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
    </p>
    <strong>Heading</strong>
    <p>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros.
    </p>
    <strong>Sub-heading</strong>
    <p>
      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
      lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac,
      vestibulum at eros.
    </p>
    <p>
      Example code block Aenean lacinia bibendum nulla sed consectetur. Etiam
      porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
      commodo. Tortor mauris condimentum nibh, ut fermentum massa.
    </p>
    <strong>Sub-heading</strong>
    <p>
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta
      sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus
      commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
      risus.
    </p>
    <figure class="image-blog">
      <img :src="imgAPI.photo[9]" alt="blog" />
    </figure>
    <ul class="list">
      <li>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
      </li>
      <li>Donec id elit non mi porta gravida at eget metus.</li>
      <li>Nulla vitae elit libero, a pharetra augue.</li>
    </ul>
    <p>
      Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
      libero, a pharetra augue.
    </p>
    <ol>
      <li>Vestibulum id ligula porta felis euismod semper.</li>
      <li>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </li>
      <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
    </ol>
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

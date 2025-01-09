<template>
  <div>
    <div class="main-wrap">
      <MainHeader home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <Banner />
        </div>
        <section id="about" class="space-top">
          <About :desc="dataDashboard.home_tantang_kami_description" />
        </section>
        <section id="feature" class="space-top">
          <Feature :list="featureData" />
        </section>

        <section id="blog" class="space-top" v-if="articleList.length >= 3">
          <Blog
            :article-list="articleList"
            :youtube-id="dataDashboard.home_link_youtube"
          />
        </section>
        <section
          id="testimonials"
          class="space-top"
          v-if="alumniList.length >= 3"
        >
          <v-container>
            <Title
              head="Alumni"
              desc="ini adalah sebagian alumni dari sekolah kami"
              align="center"
              color="primary"
            />
            <TeamGrid :list="alumniList" />
          </v-container>
        </section>
        <section id="achivement" class="space-top">
          <achivement-card :list="prestasiList" />
        </section>
      </div>
      <div class="bottom-deco-wrap">
        <section id="subscribe">
          <DecoFooter />
          <SubscribeForm />
        </section>
        <MainFooter />
      </div>
      <PageNav />
    </div>
  </div>
</template>

<script setup>
import Banner from '@/components/Home/Banner.vue';
import Feature from '@/components/Home/Feature/Feature.vue';
import About from '@/components/Home/About/About.vue';
import Testimonials from '@/components/Home/Testimonials/Testimonials.vue';
import Blog from '@/components/Home/Blog/Blog.vue';
import DecoFooter from '@/components/Footer/DecorationTop.vue';
import SubscribeForm from '@/components/SubscribeForm/SubscribeForm.vue';
import MainHeader from '@/components/Header';
import MainFooter from '@/components/Footer';
import AchivementCard from '@/components/Home/AchivementCard.vue';
import brand from '@/assets/text/brand';
import TeamGrid from '~/components/Alumni/TeamGrid.vue';
import AlumniCards from '~/components/Home/AlumniCards.vue';
import Title from '~/components/Title/Title.vue';
import imgAPI from '@/assets/images/imgAPI';
import PageNav from '~/components/PageNav/PageNav.vue';

useHead({
  title: brand.education.desc,
});

const { fetchData } = useApi();

const articleList = ref([]);
const alumniList = ref([]);
const prestasiList = ref([]);
const dataDashboard = ref({});
const featureData = computed(() => {
  return [
    {
      img: imgAPI.education[28],
      title: dataDashboard.value.home_statistik_title || 500,
      desc: dataDashboard.value.home_statistik_description || 'Alumni',
    },
    {
      img: imgAPI.education[30],
      title: dataDashboard.value.home_statistik_title2 || 100,
      desc:
        dataDashboard.value.home_statistik_description2 || 'Sarana Prasarana',
    },
    {
      img: imgAPI.education[32],
      title: dataDashboard.value.home_statistik_title3 || 100,
      desc: dataDashboard.value.home_statistik_description3 || 'Pengajar',
    },
    {
      img: imgAPI.education[34],
      title: dataDashboard.value.home_statistik_title4 || 500,
      desc:
        dataDashboard.value.home_statistik_description4 || 'Lulusan Terbaik',
    },
  ];
});
const params = reactive({
  page: 1,
  limit: 3,
});

const getArticleList = async () => {
  const url = '/article';
  const { data } = await fetchData(url, params);
  if (data.data.items) {
    articleList.value = data.data.items.map((item) => {
      return {
        title: item.title,
        category: item.category_name,
        date: item.created_at,
        details: item,
      };
    });
  }
};

const getAlumniList = async () => {
  const url = '/siswa/alumni';
  const { data } = await fetchData(url, params);
  if (data.data.items) {
    alumniList.value = data.data.items;
  }
};

const getPrestasiList = async () => {
  const url = '/prestasi';
  const { data } = await fetchData(url, params);
  if (data.data.items) {
    prestasiList.value = data.data.items;
  }
};

const getDashboard = async () => {
  const url = '/configuration/tentang-kami';
  const { data } = await fetchData(url);
  if (data.data) {
    dataDashboard.value = data.data;
  }
};

onMounted(() => {
  getDashboard();
  getArticleList();
  getAlumniList();
  getPrestasiList();
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

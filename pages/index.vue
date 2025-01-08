<template>
  <div>
    <div class="main-wrap">
      <MainHeader home />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <BannerSlider />
        </div>
        <section id="feature" class="space-top">
          <Feature />
        </section>
        <section id="about" class="space-top">
          <About />
        </section>
        <section id="blog" class="space-top" v-if="articleList.length >= 3">
          <Blog :article-list="articleList" />
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
      <Corner />
    </div>
  </div>
</template>

<script setup>
import BannerSlider from '@/components/Home/BannerSlider/BannerSlider.vue';
import Feature from '@/components/Home/Feature/Feature.vue';
import About from '@/components/Home/About/About.vue';
import Testimonials from '@/components/Home/Testimonials/Testimonials.vue';
import Blog from '@/components/Home/Blog/Blog.vue';
import DecoFooter from '@/components/Footer/DecorationTop.vue';
import SubscribeForm from '@/components/SubscribeForm/SubscribeForm.vue';
import MainHeader from '@/components/Header';
import MainFooter from '@/components/Footer';
import Corner from '@/components/Corner/Corner.vue';
import AchivementCard from '@/components/Home/AchivementCard.vue';
import brand from '@/assets/text/brand';
import TeamGrid from '~/components/Alumni/TeamGrid.vue';
import AlumniCards from '~/components/Home/AlumniCards.vue';
import Title from '~/components/Title/Title.vue';

useHead({
  title: brand.education.desc,
});

const { fetchData } = useApi();

const articleList = ref([]);
const alumniList = ref([]);
const prestasiList = ref([]);
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
    console.log('articleList', articleList.value);
  }
};

const getAlumniList = async () => {
  const url = '/siswa/alumni';
  const { data } = await fetchData(url, params);
  if (data.data.items) {
    alumniList.value = data.data.items;
    console.log('alumniList', alumniList.value);
  }
};

const getPrestasiList = async () => {
  const url = '/prestasi';
  const { data } = await fetchData(url, params);
  if (data.data.items) {
    prestasiList.value = data.data.items;
    console.log('prestasiList', prestasiList.value);
  }
};

onMounted(() => {
  getArticleList();
  getAlumniList();
  getPrestasiList();
});
</script>

<style scoped lang="scss">
@import '@/assets/scss/pages';
</style>

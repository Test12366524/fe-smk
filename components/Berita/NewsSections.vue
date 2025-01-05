<template>
  <article class="blog-content">
    <h4 class="use-text-title2 title-blog">
      {{ getTitle }}
    </h4>
    <v-row>
      <v-col md="12">
        <template v-for="(item, index) in articleList" :key="index + item.id">
          <div class="mb-8">
            <NewsCard
              :img="item.cover ? getFileUrl(item.cover) : imgAPI.photo[37]"
              :title="item.title"
              :headline="item.category_name"
              orientation="landscape"
              type="round"
              href="/blog/detail-blog"
              :date="formatFullDate(item.created_at).dateOnly"
            />
          </div>
        </template>
        <h4 v-if="articleList.length === 0">Berita tidak tersedia</h4>
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
import NewsCard from '~/components/Cards/NewsCard.vue';
import { formatFullDate, kebabToNormalText } from '~/utils/helper';

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
});

const defaultTitle = 'Berita MAN 1 Yogyakarta';
const route = useRoute();
const getCategoryFromQuery = computed(() => route.query.category);
const articleList = computed(() => props.articles);
const getTitle = computed(() =>
  getCategoryFromQuery.value
    ? kebabToNormalText(getCategoryFromQuery.value)
    : defaultTitle
);
</script>

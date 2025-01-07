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
              :img="
                item[keyImage] ? getFileUrl(item[keyImage]) : imgAPI.photo[37]
              "
              :title="item.title"
              :headline="item.category_name"
              orientation="landscape"
              type="round"
              :href="`${href}/${item[keyId]}`"
              :date="formatFullDate(item.created_at).dateOnly"
            />
          </div>
        </template>
        <h4 v-if="articleList.length === 0">Data kosong</h4>
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
import NewsCard from '~/components/Cards/NewsCard.vue';
import { formatFullDate, kebabToNormalText } from '~/utils/helper';

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
  defaultTitle: {
    type: String,
    default: 'Berita MAN 1 Yogyakarta',
  },
  href: {
    type: String,
    default: '/berita',
  },
  keyImage: {
    type: String,
    default: 'cover',
  },
  keyId: {
    type: String,
    default: 'slug',
  },
});

const route = useRoute();
const getCategoryFromQuery = computed(() => route.query.category);
const articleList = computed(() => props.articles);
const getTitle = computed(() => {
  if (getCategoryFromQuery.value === 'all') return props.defaultTitle;
  return getCategoryFromQuery.value
    ? kebabToNormalText(getCategoryFromQuery.value)
    : props.defaultTitle;
});
</script>

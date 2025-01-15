<template>
  <article class="blog-content">
    <v-row>
      <v-col cols="12">
        <template v-for="(item, index) in articleList" :key="index + item.id">
          <div class="mb-8">
            <PostCard
              :img="
                item[keyImage] ? getFileUrl(item[keyImage]) : imgAPI.photo[32]
              "
              :title="item.title"
              :desc="item.description"
              :date="formatFullDate(item.created_at).dateOnly"
              orientation="landscape"
              type="round"
              :href="`${href}/${item[keyId]}`"
            />
          </div>
        </template>
        <h4 v-if="articleList.length === 0">Data kosong</h4>
      </v-col>
    </v-row>
  </article>
</template>

<style scoped lang="scss">
.blog-headline {
  cursor: pointer;
  :deep(.v-img__img) {
    height: auto;
  }
}

h1 {
  text-align: center;
  font-size: 2rem;
}

.content {
  display: block;
  color: #fff;
  text-decoration: none;
  box-sizing: border-box;
  padding: $spacing2;
  @include breakpoints-up(md) {
    padding: $spacing8;
  }
  .text-h6 {
    @include breakpoints-down(xs) {
      display: none;
    }
  }
  & > * {
    white-space: normal;
  }
}

.headline-title {
  font-weight: $font-medium;
  margin-bottom: $spacing4;
}

.title-blog {
  font-weight: $font-medium;
}

.image-blog {
  margin: spacing(5, 0);
  img {
    width: 100%;
  }
}

.blog-content {
  @include breakpoints-down(xs) {
    margin-top: $spacing2;
    padding: spacing(0, 2);
  }
  ul,
  ol,
  p {
    margin-bottom: $spacing2;
  }
}

.list {
  list-style: disc;
}

.share-socmed {
  border-top: 1px solid;
  border-bottom: 1px solid;
  @include palette-divider;
  padding: spacing(3, 0);
  margin: spacing(3, 0);
  :deep(.v-btn) {
    border-width: 2px;
    @include margin-right($spacing2);
  }
}

.facebook {
  border-color: #0d47a1;
  :deep(.v-icon) {
    color: #0d47a1;
  }
}

.twitter {
  border-color: #00bcd4;
  :deep(.v-icon) {
    color: #00bcd4;
  }
}

.linkedin {
  border-color: #2196f3;
  :deep(.v-icon) {
    color: #2196f3;
  }
}

.subtitle {
  font-weight: $font-bold;
  margin-bottom: $spacing3;
  @include use-theme(color, $palette-primary-dark, $palette-primary-light);
}

.gallery-item {
  padding: 2px;
}

.form {
  display: flex;
  align-items: center;
  padding: spacing(1, 2);
}

.input {
  flex: 1;
}

.send {
  @include margin-left($spacing2);
}
</style>

<script setup>
import { computed } from 'vue';
import imgAPI from '@/assets/images/imgAPI';
import NewsCard from '~/components/Cards/NewsCard.vue';
import PostCard from '@/components/Cards/PostCard.vue';
import { formatFullDate, kebabToNormalText } from '~/utils/helper';

const props = defineProps({
  articles: {
    type: Array,
    default: () => [],
  },
  defaultTitle: {
    type: String,
    default: 'Berita Berita SMK Tunas Kasih Bettet Pamekasan',
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

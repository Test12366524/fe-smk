<template>
  <article class="blog-content">
    <figure v-if="selectedContent.image" class="image-blog">
      <img
        :src="
          selectedContent.image
            ? getFileUrl(selectedContent.image)
            : imgAPI.photo[8]
        "
        alt="blog"
      />
    </figure>
    <p>
      {{ selectedContent.description }}
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
      text: 'Informasi PPDB Regular',
      url: 'informasi-ppdb-regular',
      image: null,
      description:
        'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
    },
  },
});

const isMobile = computed(() => xs.value);
</script>

<style scoped lang="scss">
.blog-headline {
  cursor: pointer;
  :deep(.v-img__img) {
    height: auto;
  }
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

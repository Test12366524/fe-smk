<template>
  <hero-banner>
    <div class="banner-wrap">
      <div class="inner">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="text">
                <h4 class="use-text-title">
                  Pellentesque habitant morbi tristique senectus
                </h4>
                <h5 class="use-text-subtitle2">
                  Multiple lines of text that form the lede, informing new
                  readers quickly and efficiently about what's most interesting
                  in this post's contents
                </h5>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="img">
                <slot />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </hero-banner>
</template>

<script setup>
import HeroBanner from '../HeroBanner';
import imgAPI from '@/assets/images/imgAPI';
</script>

<style scoped lang="scss">
.banner-wrap {
  position: relative;
  display: block;
  @include breakpoints-up('md') {
    height: 500px;
    padding-top: $spacing10;
  }
  @include breakpoints-down('sm') {
    padding: spacing(20, 0, 5);
    text-align: center;
  }
  @include breakpoints-down('xs') {
    padding: spacing(12, 0, 0);
  }
}

.slide {
  position: relative;
}

.img {
  text-align: center;
  @include breakpoints-down('xs') {
    margin-top: $spacing3;
  }
  :deep(img) {
    max-width: 100%;
    @include breakpoints-up(sm) {
      max-height: 350px;
    }
  }
}

.inner {
  height: 100%;
  display: flex;
  align-items: center;
}

.text {
  h4 {
    font-weight: $font-bold;
    margin-bottom: $spacing2;
  }
  h5 {
    @include palette-text-secondary;
  }
}

.video-root {
  @include breakpoints-down(sm) {
    text-align: center;
  }
}

.video-popup {
  max-width: none;
  h4 {
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    overflow: hidden;
  }
  @include breakpoints-up(sm) {
    width: 690px;
  }
  :deep(iframe) {
    width: 100%;
  }
}

.video-wrap {
  @include breakpoints-down(sm) {
    max-width: 400px;
    margin: 0 auto;
  }
}

.progress-wrap {
  padding-top: $spacing4;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      margin-bottom: $spacing5;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.text-icon {
  margin-bottom: $spacing1;
  display: flex;
  align-items: center;
  i {
    @include palette-text-secondary;
    font-size: 28px;
  }
  h5 {
    @include margin-left($spacing1);
  }
}

.progress {
  border-radius: 10px;
  @include use-theme(background, $light-divider, $dark-divider);
  :deep(.v-progress-linear__determinate) {
    transition: all 0.5s cubic-bezier(0, 0, 0, 0.96);
    border-radius: 10px;
  }
}

.bg-wrapper {
  padding: spacing(4, 0, 8);
  position: relative;
  @include use-theme(
    background-color,
    $palette-secondary-light,
    $palette-secondary-dark
  );
  @include breakpoints-down(xs) {
    border-radius: 40px 40px 0 0;
    overflow: hidden;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include use-theme(
      background-color,
      $palette-common-white,
      $palette-common-black
    );
    opacity: 0.8;
  }
  & > div {
    position: relative;
  }
}

.gallery-root,
.team-root {
  @include breakpoints-down(xs) {
    text-align: center;
  }
  :deep(.splide__pagination) {
    bottom: -55px;
  }
}

.team-root {
  .item > * {
    @include breakpoints-down(xs) {
      width: 280px;
    }
  }
}

.team-item > * {
  margin-left: auto;
  margin-right: auto;
}

.carousel {
  position: relative;
}

.nav {
  position: absolute;
  top: 50%;
  font-size: 24px;
  @include breakpoints-down(sm) {
    display: none;
  }
}

.prev {
  left: -30px;
}

.next {
  right: -30px;
}

.headline {
  display: flex;
  align-items: center;
  .title-main {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>

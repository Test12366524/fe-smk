<template>
  <div class="testimonial">
    <v-img
      src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
    <p class="text">
      {{ text }}
    </p>
    <h6 class="use-text-subtitle2">
      {{ name }}
    </h6>
    <p class="caption-title">
      {{ title }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-card2.scss';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

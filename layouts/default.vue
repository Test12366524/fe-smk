<template>
  <div
    id="preloader"
    style="
      position: absolute;
      z-index: 10000;
      background: #fafafa;
      width: 100%;
      height: 100%;
    "
  >
    <img
      style="
        opacity: 0.2;
        position: absolute;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
      "
      src="/images/loading.gif"
      alt="loading"
    />
  </div>
  <theme-wrapper theme="smart">
    <v-progress-linear
      v-model="loading"
      :active="loading < 100"
      :buffer-value="bufferValue"
      absolute
      color="primary"
      class="top-loading"
    />
    <v-app>
      <v-main
        id="main-wrap"
        class="page-enter-active"
        :class="{ 'page-fade-transition-exit': loading >= 100 }"
      >
        <slot />
      </v-main>
      <Corner v-if="loading >= 100" />
    </v-app>
  </theme-wrapper>
</template>

<style lang="scss">
.top-loading {
  z-index: 9999;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import ThemeWrapper from '@/components/ThemeWrapper';
import Corner from '@/components/Corner/Corner.vue';

const loading = ref(0);
const interval = ref(0);
const bufferValue = ref(10);

const startBuffer = () => {
  clearInterval(interval.value);

  interval.value = setInterval(() => {
    loading.value += Math.random() * (15 - 5) + 5;
    bufferValue.value += Math.random() * (15 - 5) + 6;
  }, 100);
};

onMounted(() => {
  // Preloader and Progress bar setup
  startBuffer();
  setTimeout(() => {
    loading.value = 100;
    clearInterval(interval.value);
  }, 500);

  // Remove Loading Screen
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.remove();
  }
});
</script>

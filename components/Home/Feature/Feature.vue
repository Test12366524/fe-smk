<template>
  <div ref="wrapper" v-scroll="runCounter" class="root">
    <v-container class="max-md">
      <v-row class="spacing8 grid">
        <v-col sm="6" class="px-8" v-for="(item, index) in list" :key="index">
          <div class="counter-item">
            <figure>
              <img
                class="img-2d3d"
                :src="item.img"
                :data-2d="imgAPI.education[27]"
                :data-3d="item.img"
                alt="feature"
              />
            </figure>
            <div v-if="loaded" class="text">
              <h4
                class="use-text-subtitle"
                v-if="typeof item.title === 'number'"
              >
                {{ !visible ? 0 : '' }}
                <count-up v-if="visible" :start-val="0" :end-val="item.title" />
              </h4>
              <h4 class="use-text-subtitle" v-else>{{ item.title }}</h4>
              <h6 class="use-text-subtitle2">{{ item.desc }}</h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'feature-style.scss';
</style>

<script setup>
import { ref, onMounted } from 'vue';
import CountUp from 'vue-countup-v3';
import imgAPI from '@/assets/images/imgAPI';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const visible = ref(false);
const wrapper = ref(null);
const loaded = ref(false);
const offset = 500;

const runCounter = () => {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  const topPosition = scrollPosition + offset;

  if (topPosition > wrapper.value.offsetTop) {
    visible.value = true;
  }
};

onMounted(() => {
  loaded.value = true;
  window.addEventListener('scroll', runCounter);
});

onUnmounted(() => {
  window.removeEventListener('scroll', runCounter);
});
</script>

<template>
  <v-row justify="center">
    <v-col
      v-for="(item, index) in list"
      :key="index + item"
      md="4"
      sm="6"
      cols="12"
      class="pa-5"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="-40"
        :data-aos-delay="200 + 100 * index"
        data-aos-duration="500"
      >
        <div class="team-item">
          <profile-card
            :company="item.perusahaan"
            :favorites="10"
            :albums="12"
            :cover="bgCover"
            :avatar="imgAPI.avatar[index]"
            :name="item.siswa_name"
            :title="item.kerja"
            :address="item.alamat_perusahaan"
            type="round"
            orientation="portrait"
          />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import ProfileCard from '../Cards/ProfileCard';
import bgCover from '@/assets/images/bg-mui.jpg';

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

// Initialize AOS on component mount
onMounted(() => {
  AOS.init({
    once: true,
  });
});
</script>

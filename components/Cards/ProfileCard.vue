<template>
  <v-card :class="[orientation, type]" class="profile-card">
    <div class="figure">
      <v-img :src="cover" height="200px" cover />
    </div>
    <v-avatar :size="orientation === 'portrait' ? 92 : '60'" class="avatar">
      <img :src="avatar" alt="avatar" />
    </v-avatar>
    <div class="properties text-truncate">
      <div>
        <h4 class="use-text-subtitle2">
          <strong>
            {{ name }}
          </strong>
        </h4>
        <v-card-subtitle class="use-text-paragraph pa-0">
          {{ title }}
        </v-card-subtitle>
        <v-card-text class="desc">
          <span>{{ company }}</span>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './profile-card';
</style>

<script>
import avatarDefault from '@/assets/images/avatars/pp_boy4.svg';

export default {
  props: {
    cover: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: avatarDefault,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    connection: {
      type: Number,
      default: 0,
    },
    favorites: {
      type: Number,
      default: 0,
    },
    albums: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: 'full', // available props: full, rounded, over, oval
    },
    orientation: {
      type: String,
      default: 'portrait', // available props: full, rounded, over, oval
    },
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>

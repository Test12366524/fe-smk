<template>
  <v-card
    :class="[orientation, type]"
    class="post-card mx-auto"
    max-width="1000"
  >
    <div class="figure">
      <v-img :src="img" class="white--text" height="200px" cover />
    </div>
    <div :class="startPadding" class="properties">
      <v-card-subtitle class="head-line">
        {{ headline }}
      </v-card-subtitle>
      <v-card-subtitle v-if="date"> {{ date }} </v-card-subtitle>
      <div class="use-text-subtitle2 news-title">
        {{ title }}
      </div>
      <v-card-actions>
        <v-spacer v-if="orientation === 'portrait'" />
        <v-btn
          :size="orientation === 'landscape' ? 'small' : 'regular'"
          variant="text"
          class="action-btn"
          color="primary"
          @click="handleNavigateTo"
        >
          Selengkapnya
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './post-news-card';
</style>

<script setup>
// Define props
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    default: 'news',
  },
  orientation: {
    type: String,
    default: 'portrait',
  },
  type: {
    type: String,
    default: 'full', // available props: full, rounded, over, oval
  },
  href: {
    type: String,
    default: '#',
  },
  date: {
    type: String,
    default: '',
  },
});

const handleNavigateTo = () => {
  navigateTo(props.href);
};

// Computed property for startPadding
const startPadding = computed(
  () => props.orientation === 'landscape' && props.type !== 'over' && 'ps-0'
);
</script>

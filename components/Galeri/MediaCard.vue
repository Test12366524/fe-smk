<template>
  <v-card :class="[orientation, type]" class="media-card">
    <v-badge
      v-if="type === 'video'"
      :content="duration"
      color="grey darken-4"
      offset-x="60"
      offset-y="40"
    />
    <figure>
      <img :src="thumb" alt="cover" />
    </figure>
    <div class="property">
      <p class="">{{ title }}</p>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
/* General */

.media-card {
  overflow: hidden;
  position: relative;
  margin: spacing(6, 0, 2);
  height: 340px;
  figure {
    margin: 0;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .v-badge {
    width: 100%;
    position: absolute;
  }
}

.play-btn.v-btn {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  @include palette-background-paper;
  span {
    &:before {
      font-size: 60px;
      margin-left: $spacing1;
      @include use-theme(
        color,
        $palette-secondary-main,
        $palette-secondary-light
      );
    }
  }
}

.property {
  transition: all 0.3s ease-out;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 170px;
  padding: $spacing3;
  top: 0;
  @include text-align(left);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @include left(0);
  color: $palette-common-white;
  background: linear-gradient(to bottom, rgba(238, 238, 238, 0) 20%, #000 90%);
}

.media-title {
  color: $palette-common-white;
  line-height: 22px;
}

/* Orientation */
.landscape {
  .media-title {
    text-align: left;
  }
}

.portrait {
  max-width: 400px;
  .media-title {
    text-align: center;
    justify-content: center;
  }
}

/* Type */

.cover-link {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>

<script>
export default {
  props: {
    thumb: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: '',
    },
    orientation: {
      type: String,
      default: 'portrait',
    },
    duration: {
      type: String,
      default: '00:01',
    },
    type: {
      type: String,
      default: 'video', // available props: photo, video
    },
  },
};
</script>

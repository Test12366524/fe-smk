<template>
  <div class="blog-card">
    <div class="text">
      <v-btn
        variant="text"
        :href="`/berita?category=${toKebabCase(details.category_name)}`"
      >
        {{ category }}
      </v-btn>
      <h4>
        <v-btn variant="text" :href="`/berita/${details.slug}`">
          {{ title }}
        </v-btn>
      </h4>
    </div>
    <div class="date">
      <h3>{{ month }}</h3>
      <h2>{{ day }}</h2>
      <h4>{{ year }}</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Blog Card */
.blog-card {
  display: flex;
  margin-bottom: $spacing6;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @include breakpoints-down(xs) {
    margin-bottom: $spacing3;
  }
  &:before {
    border-radius: 15px;
    content: '';
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    background: $palette-secondary-main;
    opacity: 0.1;
    position: absolute;
    top: -10px;
    @include left(-25px);
  }
  .text {
    a.v-btn {
      padding: 0;
      position: relative;
      text-transform: none;
      z-index: 1;
      white-space: inherit;
      @include palette-text-primary;
      :deep(.v-btn__content) {
        white-space: inherit;
      }
    }
    > a.v-btn {
      font-weight: $font-regular;
      @include palette-text-secondary;
    }
    h4 {
      line-height: normal;
      &:before {
        border-radius: 10px;
        content: '';
        width: 50px;
        height: 50px;
        transform: rotate(45deg);
        @include use-theme(
          background,
          $palette-secondary-light,
          $palette-secondary-dark
        );
        position: absolute;
        top: -6px;
        @include left(-25px);
      }
      a.v-btn {
        display: block;
        font-size: 24px;
        font-weight: $font-medium;
        transition: all 0.3s ease;
        height: 80px;
        @include breakpoints-down(xs) {
          font-size: 16px;
          line-height: 22px;
        }
        &:hover {
          color: $palette-primary-main;
        }
      }
    }
  }
  .date {
    text-align: center;
    @include margin-left($spacing3);
    @include palette-text-hint;
    & > * {
      display: block;
      line-height: normal;
      font-weight: $font-regular;
    }
    h3 {
      font-size: 28px;
      text-transform: uppercase;
      @include breakpoints-down(xs) {
        font-size: 20px;
      }
    }
    h2 {
      font-size: 46px;
      @include breakpoints-down(xs) {
        font-size: 32px;
      }
    }
    h4 {
      font-size: 22px;
      @include breakpoints-down(xs) {
        font-size: 16px;
      }
    }
  }
}
</style>

<script>
const month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    details: {
      type: Object,
    },
  },
  data() {
    return {
      dateRaw: new Date(this.date),
    };
  },
  computed: {
    month() {
      return month[this.dateRaw.getMonth()];
    },
    day() {
      return this.dateRaw.getDate() < 10
        ? '0' + this.dateRaw.getDate()
        : this.dateRaw.getDate();
    },
    year() {
      return this.dateRaw.getFullYear();
    },
  },
};
</script>

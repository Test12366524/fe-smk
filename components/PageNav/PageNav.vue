<template>
  <div v-scroll="handleScroll" :class="{ show: show }" class="page-nav">
    <v-tooltip :nudge-top="25" location="left">
      <template #activator="{ props }">
        <v-btn
          v-smooth-scroll
          icon
          class="fab anchor-link scrollactive-item"
          href="#home"
          color="primary"
          size="large"
          v-bind="props"
        >
          <v-icon dark> mdi-arrow-up </v-icon>
        </v-btn>
      </template>
      <span class="tooltip">To Top</span>
    </v-tooltip>
  </div>
</template>

<style scoped lang="scss">
.fab {
  transform: scale(0.5);
  transition: all 0.5s ease;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 50%; /* Center the button horizontally */
  transform: translateX(-50%); /* Center the button horizontally */
  font-weight: $font-bold;
  .icon {
    color: $palette-common-white;
    font-size: 40px;
  }
  &:hover {
    .icon {
      color: $palette-primary-light;
    }
  }
}

.page-nav {
  z-index: 200;
  position: fixed;
  bottom: 40px; /* Keep the button 40px from the bottom */
  left: 50%; /* Center the nav horizontally */
  transform: translateX(-50%); /* Center the nav horizontally */
  width: 56px;

  &.show {
    .fab {
      opacity: 1;
      transform: scale(1);
    }
  }

  .section-nav {
    margin: 0 0 76px 22px;
    padding: 0;
    position: relative;
    a {
      margin-bottom: $spacing2;
      opacity: 0;
      position: relative;
      transition: all 0.4s ease;
      transform-origin: bottom center;
      width: 12px;
      height: 12px;
      @include shadow2;
      border-radius: 12px;
      @include palette-background-paper;
      border: 1px solid;
      @include use-theme(border-color, $light-text-hint, $dark-text-hint);
      display: block;
      transition: all 0.4s ease;
      color: transparent;
      &.active {
        background: $palette-primary-main;
        border: 1px solid $palette-primary-light;
      }
    }
  }

  &:hover {
    .section-nav a {
      opacity: 1;
      top: 0 !important;
    }
  }
}

.tooltip {
  text-transform: capitalize;
  font-size: 14px;
}

/* Media query to hide the button on mobile devices */
@media (max-width: 768px) {
  .fab {
    display: none; /* Hide the button on mobile */
  }
}
</style>

<script>
import navMenu from '../Header/data/single';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

export default {
  data() {
    return {
      menu: navMenu,
      show: false,
      sections: {},
      activeMenu: '',
      menuList: [
        createData(navMenu[0], navMenu[0]),
        createData(navMenu[1], navMenu[1]),
        createData(navMenu[2], navMenu[2]),
        createData(navMenu[3], navMenu[3], -40),
      ],
    };
  },
  mounted() {
    // Get section id's
    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop || 0;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 50;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (window.scrollY > 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>

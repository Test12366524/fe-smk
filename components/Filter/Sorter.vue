<template>
  <v-row class="sorter" align="center">
    <v-col class="py-1" lg="9" sm="6" cols="12">
      <h2 class="use-text-subtitle">
        {{ resultLength }} Items Found
      </h2>
    </v-col>
    <v-col class="py-1" lg="3" sm="6" cols="12">
      <div class="d-flex justify-end align-end">
        <v-btn
          v-if="isMobile"
          color="primary"
          small
          class="me-4"
          outlined
          @click="handleOpenFilter"
        >
          <v-icon left>
            mdi-filter-variant
          </v-icon>
          Filter
        </v-btn>
        <v-btn-toggle
          v-if="isDesktop"
          :model-value="view"
          variant="outlined"
          class="pe-8 toggle"
          @update:model-value="(e) => switchView(e)"
        >
          <v-btn size="small">
            <v-icon>mdi-view-grid</v-icon>
          </v-btn>
          <v-btn size="small">
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-btn>
        </v-btn-toggle>
        <v-select
          class="sorter"
          :items="sortList"
          item-text="title"
          item-value="value"
          label="Sort By:"
          return-object
          single-line
          hide-details
          variant="filled"
          persistent-hint
          @update:model-value="(e) => handleSortBy(e)"
        />
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
@import './filter';
</style>

<script>
export default {
  props: {
    view: {
      type: Number,
      default: 0,
    },
    sortBySelected: {
      type: Object,
      required: true,
    },
    resultLength: {
      type: Number,
      required: true,
    },
  },
  emits: ['switch-view', 'sort-by', 'open-filter'],
  data() {
    return {
      sortList: [
        {
          title: 'Title A to Z',
          value: 'title-asc',
        },
        {
          title: 'Title Z to A',
          value: 'title-desc',
        },
        {
          title: 'Highest Price',
          value: 'price-asc',
        },
        {
          title: 'Lowest Price',
          value: 'price-desc',
        },
      ],
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  methods: {
    switchView(view) {
      this.$emit('switch-view', view);
    },
    handleSortBy(sortBySelected) {
      this.$emit('sort-by', sortBySelected);
    },
    handleOpenFilter() {
      this.$emit('open-filter');
    },
  },
};
</script>

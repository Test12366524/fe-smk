<template>
  <div class="pagination-container">
    <v-pagination
      v-model="currentPageInternal"
      :total-visible="totalVisible"
      :length="pageCount"
      @update:modelValue="onPageChange"
      class="mt-4"
    />
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
  itemsPerPage: {
    type: Number,
    default: 10, // Default items per page
  },
  currentPage: {
    type: Number,
    default: 1, // Default current page
  },
  totalVisible: {
    type: Number,
    default: 7, // Default current page
  },
});

// Define emits
const emit = defineEmits(['onPageChange']);

// Internal state for current page
const currentPageInternal = ref(props.currentPage);

// Watch for changes in the currentPage prop
watch(
  () => props.currentPage,
  (newPage) => {
    currentPageInternal.value = newPage;
  }
);

// Computed property to calculate the total number of pages
const pageCount = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage);
});

// Method to handle page change
const onPageChange = (page) => {
  currentPageInternal.value = page;
  console.log('onPageChange', page);
  emit('onPageChange', page); // Emit event to fetch new data with the new page number
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
}
</style>

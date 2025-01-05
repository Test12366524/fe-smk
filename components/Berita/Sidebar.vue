<template>
  <v-card>
    <header>
      <div class="text">
        <v-card-title class="use-text-subtitle2"> Kategori </v-card-title>
      </div>
    </header>
    <v-divider />
    <div class="content">
      <div>
        <v-list lines="one">
          <v-list-item
            v-for="(item, index) in getCategories"
            :key="index"
            :class="{ active: toKebabCase(item.text) === getCategoryFromQuery }"
          >
            <div
              style="cursor: pointer"
              @click="handleSelectCategory(toKebabCase(item.text))"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </v-card>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const getCategories = computed(() => props.categories);
const getCategoryFromQuery = computed(() => route.query.category);

const handleSelectCategory = (category) => {
  router.push(`${route.path}?category=${category}`);
};
</script>

<style scoped>
.active {
  background-color: #e0e0e0;
  color: black;
}
</style>

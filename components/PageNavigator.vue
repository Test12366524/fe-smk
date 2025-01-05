<template>
  <v-autocomplete
    v-if="isSmallScreen"
    label="Kategori"
    :items="getList"
    item-title="text"
    item-value="text"
    required
    clearable
    clear-icon="ri-close-line"
    @update:model-value="
      (text) => {
        handleSelectCategory(toKebabCase(text));
      }
    "
  />
  <v-card v-else>
    <header>
      <div class="text">
        <v-card-title class="use-text-subtitle2">
          {{ props.title }}
        </v-card-title>
      </div>
    </header>
    <v-divider />
    <div class="content">
      <div>
        <v-list lines="one">
          <v-list-item
            v-for="(item, index) in getList"
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
import { useDisplay } from 'vuetify';
const route = useRoute();
const router = useRouter();
const { smAndDown } = useDisplay();

const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
  key: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
    default: '',
  },
  selectedValue: {
    type: String,
    default: '',
  },
});

const getList = computed(() => props.list);
const getCategoryFromQuery = computed(() => route.query.category);
const isSmallScreen = computed(() => smAndDown.value);
const selectedItem = ref(props.selectedValue);

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

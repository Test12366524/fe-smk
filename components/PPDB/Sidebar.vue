<template>
  <v-select
    v-if="isSmallScreen"
    v-model="selectedValue"
    label="Navigasi"
    :items="getList"
    item-title="text"
    item-value="url"
    required
    clearable
    clear-icon="ri-close-line"
    @update:model-value="
      (url) => {
        handleSelectItem(url);
      }
    "
  />
  <v-card v-else>
    <header>
      <div class="text">
        <v-card-title class="use-text-subtitle2"> Navigasi </v-card-title>
      </div>
    </header>
    <v-divider />
    <div class="content">
      <div>
        <v-list lines="one">
          <v-list-item
            v-for="(item, index) in getList"
            :key="index"
            :class="{ active: item.url === getCurrentKey }"
          >
            <div style="cursor: pointer" @click="handleSelectItem(item.url)">
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
});

const getList = computed(() => props.list);
const getCurrentKey = computed(() => route.query.navigasi);
const isSmallScreen = computed(() => smAndDown.value);
const selectedValue = ref('');

const getSelectedValue = (query) => {
  const currentItem = getList.value.find((item) => item.url === query);
  return currentItem ? currentItem : null;
};

watch(getCurrentKey, (newValue) => {
  selectedValue.value = getSelectedValue(newValue);
});

onMounted(() => {
  selectedValue.value = getSelectedValue(getCurrentKey.value);
});

const handleSelectItem = (url) => {
  router.replace(`${route.path}?navigasi=${url}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.active {
  background-color: #e0e0e0;
  color: black;
}
</style>

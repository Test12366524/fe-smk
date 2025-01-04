<template>
  <v-card>
    <header>
      <div class="text">
        <v-card-title class="use-text-subtitle2"> Menu </v-card-title>
      </div>
    </header>
    <v-divider />
    <div class="content">
      <div>
        <v-list lines="one">
          <v-list-item
            v-for="(item, index) in menus"
            :key="index"
            :class="{ active: toKebabCase(item.title) === selectedMenu }"
          >
            <div
              style="cursor: pointer"
              @click="() => handleSelectMenu(toKebabCase(item.title))"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const menus = ref([
  {
    title: 'Sejarah Singkat',
  },
  {
    title: 'Visi Misi',
  },
  {
    title: 'Sarana Prasarana',
  },
  {
    title: 'Kepala Madrasah',
  },
  {
    title: 'Struktur Kepengurusan',
  },
  {
    title: 'Pendidik',
  },
  {
    title: 'Tenaga Kependidikan',
  },
  {
    title: 'Peserat Didik',
  },
]);

const emit = defineEmits(['handleSelectMenu']);
const getQuery = computed(() => route.query.menu);

const selectedMenu = ref('');
const handleSelectMenu = (menu) => {
  selectedMenu.value = menu;
  emit('handleSelectMenu', menu);
  router.push(`${route.path}?menu=${menu}`);
};

onMounted(() => {
  if (getQuery.value) {
    selectedMenu.value = getQuery.value;
  } else {
    selectedMenu.value = toKebabCase(menus.value[0].title);
  }
});
</script>

<style scoped>
.active {
  background-color: #e0e0e0;
  color: black;
}
</style>

<template>
  <v-card class="mt-10 mt-md-16">
    <v-card-title class="headline">Info</v-card-title>
    <v-divider />
    <div>
      <v-list lines="two">
        <v-list-item>
          <template #prepend>
            <v-avatar color="grey-lighten-4">
              <v-icon class="grey lighten-3" color="primary">
                mdi-account-edit
              </v-icon>
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>Author</v-list-item-title>
            <v-list-item-subtitle>{{
              details.author_name
            }}</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item>
          <template #prepend>
            <v-avatar color="grey-lighten-4">
              <v-icon class="grey lighten-3" color="primary">
                mdi-shape
              </v-icon>
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>Kategori</v-list-item-title>
            <v-list-item-subtitle>{{
              details.category_name
            }}</v-list-item-subtitle>
          </div>
        </v-list-item>
        <v-list-item three-line>
          <template #prepend>
            <v-avatar color="grey-lighten-4">
              <v-icon class="grey lighten-3" color="primary">
                mdi-calendar
              </v-icon>
            </v-avatar>
          </template>
          <div>
            <v-list-item-title>Tanggal</v-list-item-title>
            <v-list-item-subtitle>
              {{ getDate }}
            </v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
  details: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const getDate = computed(() =>
  props.details.created_at
    ? formatFullDate(props.details.created_at).dateOnly
    : ''
);

onMounted(() => {
  console.log('pro', props.details);
});
</script>

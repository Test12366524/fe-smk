<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-img v-if="imageUrl" :src="imageUrl" max-width="300" alt="Preview" />
      </v-col>
      <v-col cols="12">
        <v-file-input
          v-model="file"
          accept="image/*"
          label="Upload Photo"
          @change="onFileChange"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['file-uploaded']);
const file = ref(null);
const imageUrl = ref(null);

const onFileChange = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    imageUrl.value = URL.createObjectURL(selectedFile);
    emit('file-uploaded', selectedFile);
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>

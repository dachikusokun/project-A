<script setup lang="ts">
import CForm from '@/components/CForm.vue';
</script>
<template>
  <v-card class="mx-auto pa-16" width="600px" style="background-color: aqua:  !important;">
    <div>
      <div class="upload-box">
        <input type="file" accept="image/*" hidden>
      </div>
      <v-file-input
      :append-icon=null
      variant="outlined"
      ></v-file-input>
    </div>
    <CForm></CForm>
  </v-card>
</template>
<style scope>
.upload-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
  cursor: pointer;
}
</style>
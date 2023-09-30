<template>
  <v-app class="background">
    <v-main>
      <!-- <v-app-bar elevation="1">
        <v-app-bar-title>Title</v-app-bar-title>
        <v-btn icon="mdi-magnify"></v-btn>
      </v-app-bar> -->
      <v-container fill-height>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',

  components: {
    HelloWorld,
  },

  data () {
    return {
      //
    }
  },
})
</script>

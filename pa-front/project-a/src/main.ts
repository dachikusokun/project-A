import { createApp } from 'vue' //VueElement
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
loadFonts()

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Vee-validate
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';

// Vee-validate-config
configure({
  generateMessage: localize({
    ja,
  }),
});
localize('ja');

// Vuetify-config
const customTheme = {
  dark: false,
  colors: {
    background: "#F8E5D8",
  },
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme,
      },
    },
  })
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')

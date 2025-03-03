import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType:'autoUpdate',
      devOptions:{
        enabled:true,
      },
      manifest:{
        name:"Music App",
        theme_color:"#ff5e3a",
        icons:[
         { src:'assets/img/pwa-192x192.png',
          sizes:"192x192",
          type:"image/png"
         }
        ]
      },
      workbox:{
        globPatterns:["**/*.{js,css,html,png,jpg,}"],
      },
    })
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

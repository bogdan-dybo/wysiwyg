import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry:    resolve(__dirname, 'src/index.js'),
      name:     'DyboWysiwyg',
      formats:  ['es', 'umd'],
      fileName: (format) => format === 'es' ? 'wysiwyg.esm.js' : `wysiwyg.${format}.js`,
    },

    rollupOptions: {
      // Vue rămâne externă — consumatorul o aduce el
      external: ['vue'],

      output: {
        // Numele global pentru build-ul UMD (vanilla JS / CDN)
        globals: { vue: 'Vue' },

        // CSS-ul se scoate ca fișier separat: dist/wysiwyg.css
        assetFileNames: (assetInfo) =>
          assetInfo.name === 'style.css' ? 'wysiwyg.css' : assetInfo.name,
      },
    },

    // Păstrăm .vue-ul ca fișier separat în dist/
    // astfel încât importul `@dybo/wysiwyg/vue` să funcționeze
    copyPublicDir: false,
  },
})

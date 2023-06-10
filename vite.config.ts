import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/
      ],
      imports: [
        'vue',
        'pinia',
        'vue-router'
      ],
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    // 自动导入 src/components 下的组件
    Components({
      dirs: [
        path.resolve(__dirname, './src/components')
      ],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: ' QF Application'
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '#': path.resolve(__dirname, 'src/config')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/static/styles/normalize.scss" as *;
          @use "@/static/styles/flex.scss" as *;
        `
      }
    }
  }
})

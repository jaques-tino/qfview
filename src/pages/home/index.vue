<script lang="ts" setup>
import { useStore } from '@/store/config'
import { image, menus } from '#/index.json'

const route = useRoute()
const store = useStore()
const showBtn = ref(false)
const isCollapse = ref(false)
const themeRef = ref()
const defaultActive = ref('/pages/home/index')

const switchTheme = () => {
  const body = document.body
  const isDart = body.classList.contains('dart')
  body.classList.remove(isDart ? 'dart' : 'light')
  body.classList.add(isDart ? 'light' : 'dart')
  store.setTheme(isDart ? 'light' : 'dart')
  themeRef.value.setAttribute('content', isDart ? '#fff' : '#000')
}

onMounted(() => {
  const body = document.body
  themeRef.value = document.querySelector('meta[name="theme-color"]')
  themeRef.value.setAttribute('content', store.theme === 'dart' ? '#000' : '#fff')
  body.classList.remove(store.theme === 'dart' ? 'light' : 'dart')
  body.classList.add(store.theme)
})

watch(route, () => {
  defaultActive.value = route.path
}, { immediate: true })
</script>

<template>
  <div id="home" class="tino-flex tino-flex-row">
    <aside class="tino-flex tino-flex-col" :style="{ width: isCollapse ? '60px' : '200px' }" @mousemove="showBtn = true" @mouseleave="showBtn = false">

      <a href="javascript:;" class="logo" :style="{ width: isCollapse ? '40px' : '160px', padding: isCollapse ? '30px 10px 0' : '30px 20px 0' }">
        <img :src="isCollapse ? 'src/static/images/logo-min.png' : 'src/static/images/logo.png'" :alt="image.ALT">
        <img src="src/static/images/logo-min.png" alt="" style="display: none;">
      </a>

      <el-menu :default-active="defaultActive" router :collapse="isCollapse" :collapse-transition="false">
        <el-menu-item v-for="menu in menus" :key="menu.index" :index="menu.index">
          <i :class="['icon', 'iconfont', `icon-${menu.icon}`]" />
          <span>{{ menu.title }}</span>
        </el-menu-item>
      </el-menu>

      <el-button @click="switchTheme">切换主题色</el-button>

      <transition>
        <div v-if="showBtn" class="btn" @click="isCollapse = !isCollapse">{{ isCollapse ? '&gt;' : '&lt;' }}</div>
      </transition>
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" src="./index.scss" scoped />

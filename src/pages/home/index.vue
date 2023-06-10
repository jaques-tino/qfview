<script lang="ts" setup>
import { image, menus } from '#/index.json'

const isCollapse = ref(false)
const showBtn = ref(false)
</script>

<template>
  <div id="home" class="tino-flex tino-flex-row">
    <aside class="tino-flex tino-flex-col" :style="{ width: isCollapse ? '60px' : '200px' }" @mousemove="showBtn = true" @mouseleave="showBtn = false">

      <a href="javascript:;" class="logo" :style="{ width: isCollapse ? '40px' : '160px', padding: isCollapse ? '30px 10px 0' : '30px 20px 0' }">
        <img :src="isCollapse ? 'src/static/images/logo-min.png' : 'src/static/images/logo.png'" :alt="image.ALT">
      </a>

      <el-menu default-active="/pages/home/index" router :collapse="isCollapse">
        <el-menu-item v-for="menu in menus" :key="menu.index" :index="menu.index">
          <i :class="['icon', 'iconfont', `icon-${menu.icon}`]" />
          <span>{{ menu.title }}</span>
        </el-menu-item>
      </el-menu>

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

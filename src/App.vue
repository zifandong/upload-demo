<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import UploadList from '@/components/upload-list.vue'
import UploadArea from '@/components/upload-area.vue'
</script>

<template>
  <div id="main">
    <UploadList />
    <UploadArea />
  </div>
</template>

<style lang="less" scoped>
#main {
  display: flex;
}
</style>

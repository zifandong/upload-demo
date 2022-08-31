<script setup>
import useUpload from '@/hooks/use-upload'
import { onUnmounted } from 'vue'
import fileItem from './file-item.vue'

const { fileList } = useUpload()

const changeEvent = e => {
  const { files } = e.target
  if (!files.length) {
    alert('不能上传空文件夹')
    return
  }
  const tempList = Array.from(files)
  fileList.value = fileList.value.concat(tempList)
}
const uploadFile = type => {
  const fileDom = document.getElementById('file-upload-input')
  if (type === 'file') {
    // 上传文件逻辑
    fileDom.multiple = true
  } else {
    fileDom.webkitdirectory = true
  }
  fileDom.click()
}
onUnmounted(() => {
  const fileDom = document.getElementById('file-upload-input')
  fileDom.removeEventListener('change')
})
</script>
<template>
  <div class="upload-list">
    <div class="header">
      <span @click="uploadFile('file')">上传文件</span>
      <span @click="uploadFile('folder')">上传文件夹</span>
      <input type="file" id="file-upload-input" @change="changeEvent" />
    </div>
    <div class="list">
      <template v-for="(item, index) in fileList" :key="index">
        <fileItem :fileItem="item"></fileItem>
      </template>
    </div>
  </div>
</template>
<style lang="less" scoped>
.upload-list {
  flex: 1;
  font-size: 14px;
  .header {
    height: 30px;
    line-height: 30px;
    text-align: center;
    #file-upload-input {
      display: none;
    }
    span {
      display: inline-block;
      margin-right: 10px;
      padding: 0 10px;
      border-radius: 2px;
      background: #0a64fa;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>

<script setup>
import { useFileStore } from '@/stores/fileList'
import { reactive, ref } from 'vue'

const fileStore = useFileStore()

const contentStyle = reactive({
  borderColor: '#3b83fb',
})
const isDragging = ref(false)
const drageEnter = () => {
  isDragging.value = true
  contentStyle.borderColor = 'pink'
}
const drageLeave = () => {
  isDragging.value = false
  contentStyle.borderColor = '#3b83fb'
}
const drop = e => {
  const { files } = e.dataTransfer
  const tempList = Array.from(files)
  fileStore.setFileList(fileStore.fileList.concat(tempList))
  isDragging.value = false
  contentStyle.borderColor = '#3b83fb'
}
</script>
<template>
  <div class="upload-mask">
    <div class="header">上传区域</div>
    <div class="mask">
      <div
        class="area"
        @dragenter.prevent.stop="drageEnter"
        @dragend.prevent.stop="drageEnd"
        @dragstart.prevent.stop="drageStart"
        @dragleave.prevent.stop="drageLeave"
        @dragover.prevent.stop="drageOver"
        @drop.prevent.stop="drop"
        :style="contentStyle"
      >
        {{ isDragging ? '放手吧' : '拖拽文件至此' }}
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.upload-mask {
  flex: 1;
  text-align: center;
  .header {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .mask {
    height: 600px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 50px;
    .area {
      width: 100%;
      height: 500px;
      line-height: 500px;
      border: 3px dashed;
      color: #ccc;
      font-size: 30px;
    }
  }
}
</style>

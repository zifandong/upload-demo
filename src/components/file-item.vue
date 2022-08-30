<script setup>
// import { defineProps } from 'vue'  可以不引

const props = defineProps({ fileItem: Object }) // 可以不接返回值直接使用fileItem
const formatByte = size => {
  const unitDivisors = [1099511627776, 1073741824, 1048576, 1024, 1]
  const unitLabels = ['TB', 'GB', 'MB', 'KB', 'B']
  let unit
  let unitLabel
  if (size === 0) {
    return size + unitLabels[unitLabels.length - 1]
  }
  for (let i = 0; i < unitDivisors.length; i++) {
    if (size >= unitDivisors[i]) {
      unit = (size / unitDivisors[i]).toFixed(2)
      unitLabel = unitLabels[i]
      break
    }
  }
  return unit + unitLabel
}
</script>
<template>
  <div class="file-item">
    <span>{{ fileItem.name }}</span>
    <span>{{ formatByte(fileItem.size) }}</span>
    <span>文件</span>
  </div>
</template>
<style scoped lang="less">
.file-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-bottom: 1px dashed #0a64fa;
  span {
    flex: 1;
    text-align: center;
  }
}
</style>

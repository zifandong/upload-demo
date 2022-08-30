import { ref } from 'vue'

const useUpload = () => {
  const fileList = ref([])

  return {
    fileList,
  }
}
export default useUpload

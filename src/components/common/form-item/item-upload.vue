<template>
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button type="primary">点击上传</el-button>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, toRefs } from 'vue'
import { ElUpload, ElButton } from 'element-plus'
import type { UploadFile } from 'element-plus'
interface DataProps {
  fileList: UploadFile[]
}
const handleRemove = (file: UploadFile, fileList: UploadFile[]) => {
  console.log(file, fileList)
}
const handlePreview = (file: UploadFile) => {
  console.log(file)
}
const handleExceed = (files: File[], fileList: UploadFile[]) => {
  ElMessage.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
}
const beforeRemove = (file: UploadFile, fileList: UploadFile[]) => {
  console.log(fileList, '-fileList-')
  return ElMessageBox.confirm(`Cancel the transfert of ${file.name} ?`).then(
    () => true,
    () => false
  )
}
let state = reactive<DataProps>({ fileList: [] })
let { fileList } = toRefs(state)
</script>
<style lang="scss" scoped></style>

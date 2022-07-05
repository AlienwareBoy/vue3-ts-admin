<!--  -->
<template>
  <div>二级目录</div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
interface DataProps {
  num: number
}
const state = reactive<DataProps>({ num: 3 })
const { num } = toRefs(state)
</script>
<style scoped></style>

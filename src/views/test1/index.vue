<!--  -->
<template>
  <BaseLayout>
    <div>基础目录</div>
  </BaseLayout>
</template>

<script lang="ts" setup>
import BaseLayout from '@/components/layout/index.vue'
import { reactive, toRefs } from 'vue'
interface DataProps {
  num: number
}
const state = reactive<DataProps>({ num: 3 })
const { num } = toRefs(state)
</script>
<style scoped></style>

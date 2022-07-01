<!--  -->
<template>
  <div>
    <lowCode></lowCode>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import lowCode from '@/components/low-code/index.vue'
interface DataProps {
  num: number
}
const state = reactive<DataProps>({ num: 3 })
const { num } = toRefs(state)
</script>
<style scoped></style>

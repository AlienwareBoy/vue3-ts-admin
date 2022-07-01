<template>
  <div>3</div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
interface DataProps {
  num: 1
}
let state = reactive<DataProps>({ num: 1 })
let { num } = toRefs(state)
</script>
<style lang="scss" scoped></style>

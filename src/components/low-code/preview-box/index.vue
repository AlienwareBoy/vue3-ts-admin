<!--  -->
<template>
  <div style="height: 100vh">
    <filterConfig ref="filterRefs" v-model:config="filterconfig" v-bind="{ ...$attrs }" v-if="filterconfig.length > 0"></filterConfig>
  </div>
</template>

<script lang="ts" setup>
import { initial } from 'lodash'
import { ref, Ref, reactive, toRefs, watch, onMounted } from 'vue'
import filterConfig from '../components/filter-config/index.vue'
import { commonFormRef, createFormItem } from '../components/filter-config/types'
interface DataProps {
  filterconfig: createFormItem[]
}
interface defalutProps {
  addConfig: createFormItem
}
const filterRefs: Ref<commonFormRef | null> = ref(null)
const props = withDefaults(defineProps<defalutProps>(), {})
watch(
  () => props.addConfig,
  cur => {
    console.log(cur, 'addConfigType')
    if (cur?.formKey) {
      state.filterconfig.push(cur)
      filterRefs.value && filterRefs.value.init()
    }
  }
)
const init = () => {
  console.log(props.addConfig, '初始化方法')
  if (props.addConfig) {
    state.filterconfig.push(props.addConfig)
  }
}
onMounted(() => {
  init()
})
const state = reactive<DataProps>({ filterconfig: [] })
const { filterconfig } = toRefs(state)
</script>
<style scoped></style>

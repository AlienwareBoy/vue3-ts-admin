// 禁止拖拽
const stopDrag = {
  created(el: { onmousedown: (e: any) => void }) {
    el.onmousedown = function (e) {
      e.stopPropagation()
    }
  }
}
export default stopDrag

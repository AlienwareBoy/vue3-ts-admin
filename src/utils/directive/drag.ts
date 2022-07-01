// 拖拽的指令
const drag = {
  mounted(el: HTMLDivElement) {
    el.onmousedown = ev => {
      // 鼠标按下的位置
      const mouseXStart = ev.clientX
      const mouseYStart = ev.clientY
      // 当前滑块位置
      const rectLeft = el.offsetLeft
      const rectTop = el.offsetTop
      document.onmousemove = e => {
        // 鼠标移动的位置
        const mouseXEnd = e.clientX
        const mouseYEnd = e.clientY
        const moveX = mouseXEnd - mouseXStart + rectLeft
        const moveY = mouseYEnd - mouseYStart + rectTop
        console.log(rectLeft, rectTop)
        el.style['top'] = moveY + 'px'
        el.style['left'] = moveX + 'px'
        return false
      }
      document.onmouseup = () => {
        console.log('鼠标抬起')
        // 取消事件
        document.onmousemove = null
        document.onmouseup = null
      }
      return false
    }
  }
}
export default drag

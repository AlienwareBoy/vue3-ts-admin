import drag from './drag'
import stopDrag from './stopDrag'

const directives: { [dir: string]: any } = {
  // 指令对象
  drag,
  stopDrag
}

export default {
  install(app: any) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
  }
}

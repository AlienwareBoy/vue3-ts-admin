class mitt {
  private all = new Map()
  constructor() {
    console.log()
  }
  on(type: string, handler: () => void) {
    const handlers = this.all.get(type)
    if (!handlers) {
      this.all.set(type, handler)
    } else {
      handlers.push(handler)
    }
  }
  off(type: string, handler?: () => void) {
    const handlers = this.all.get(type)
    if (!handlers) {
      this.all.set(type, handler)
    } else {
      handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    }
  }
  emit(type: string, evt: string) {}
}

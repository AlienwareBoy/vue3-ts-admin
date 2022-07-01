// eslint-disable-next-line @typescript-eslint/ban-types

export default class utils {
  // 对象数组去重
  static removeDuplication(data: any, itemKey: string) {
    const result = data.reduce(function (a: any[], b: { [x: string]: string | number }) {
      data[b[itemKey]] ? '' : (data[b[itemKey]] = true && a.push(b))
      return a
    }, [])
    return result
  }
  //
  static throttle(func: ({ ...arg }) => void, time: number, immediate = false) {
    if (immediate) {
      let prevTime = 0
      return (...args: any) => {
        const nowTime = Date.now()
        if (nowTime - prevTime >= time) {
          func.apply(this, args)
          prevTime = nowTime
        }
      }
    } else {
      let timer: number | null = null
      return (...args: any) => {
        if (!timer) {
          func.apply(this, args)
          timer = window.setTimeout(() => {
            if (timer) clearInterval(timer)
            timer = null
          }, time)
        }
      }
    }
  }
}

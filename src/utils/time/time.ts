// 封装一个函数获取当前时间，上午，中午，下午，晚上

export const getTime = () => {
  let msg = ''
  const hours = new Date().getHours()
  if (hours <= 9) {
    msg = '早上'
  } else if (hours <= 12) {
    msg = '上午'
  } else if (hours <= 14) {
    msg = '中午'
  } else if (hours <= 17) {
    msg = '下午'
  } else {
    msg = '晚上'
  }
  return msg
}

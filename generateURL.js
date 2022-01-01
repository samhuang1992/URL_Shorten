// 短網址輸出格式為 5 碼英數組合
const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const MAX = chars.length - 1
const MIN = 0

function randomValue() {
  let randIndex = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
  return chars[randIndex]
}
function generateCode(num) {
  // console.log('enter generateUTM start ')
  let result = ''
  for (let i = 1; i <= num; i++) {
    result += randomValue()
  }
  // console.log(result)
  return result
}

module.exports = generateCode
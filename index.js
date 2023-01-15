function createCube (size) {
  let result = ''
  for (let i = 0; i < size; i++) {
    const stringer = '\\_'.repeat(size)
    const spaces = ' '.repeat(size - i - 1)
    const add = '\\/'.repeat(i)
    result += `${spaces}/${add}${stringer}\\\n`
  }
  for (let i = 0; i < size; i++) {
    const stringer = '_/'.repeat(size)
    const spaces = ' '.repeat(i)
    const add = '\\/'.repeat(size - i)
    if (i !== size - 1) {
      result += `${spaces}${add}${stringer}\n`
    }
    if (i === size - 1) {
      result += `${spaces}${add}${stringer}`
    }
  }

  return result
}
module.exports = { createCube }

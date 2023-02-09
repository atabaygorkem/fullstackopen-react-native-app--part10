export const numToFixedStr = (num) => {
  if (isNaN(+num)) return "0"
  return +num > 1000 ? (+num / 1000).toFixed(1) + "k" : `${num}`
}

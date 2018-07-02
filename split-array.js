const getLast = (arr) => arr[arr.length - 1]

const splitArrayF = (n, arr) => 
  arr.reduce( (acc, num) => {
    const last = getLast(acc)
    return last && last.length < n
      ? [...acc.splice(0, acc.length - 1), [...last, num ]]
      : [...acc, [num]]
  },
  []
)

const splitArray = (arr, n) => 
  arr.reduce( (acc, num) => {
    const last = getLast(acc)
    if (last && last.length < n) {
      getLast(acc).push(num)
    } else {
      acc.push([num])
    }
    return acc
  },
  []
)

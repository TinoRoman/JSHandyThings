const splitArray = (arr, n) => 
  arr.reduce( (acc, num) => {
    const last = acc[acc.length - 1];
    return last && last.length < n
      ? [...acc.splice(0, acc.length - 1), [...last, num ]]
      : [...acc, [num]]
  },
  []
)

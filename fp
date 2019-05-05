function flatten(arr) {
  return arr
    .reduce(
      (acc, cur) => [...acc, ...cur],
      [],
    )
}

function curry(fun) {
  return function currify(...args) {
    return args.length < fun.length
      ? (...rest) => currify(...[...args, ...rest])
      : fun(...args)
  }
}

function compose(...funcs) {
  return funcs
    .reduce(
      (f,g) => (...args) => f(g(...args))
    )
}

function pipe(...funcs) {
  return compose(...funcs.reverse())
}

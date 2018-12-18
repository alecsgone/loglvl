const toBoolean = require('./toBoolean')

function queryStringParser(qs) {
  return (
    (qs &&
      window
        .decodeURIComponent(qs)
        .replace('?', '')
        .split('&')
        .reduce((acc, item) => {
          const [key, value = true] = item.split('=')
          const result = toBoolean(value) && value

          if (acc[key]) {
            acc[key] = acc[key]
              .toString()
              .split(',')
              .concat(result)
          } else {
            acc[key] = result
          }

          return acc
        }, {})) ||
    {}
  )
}

module.exports = queryStringParser

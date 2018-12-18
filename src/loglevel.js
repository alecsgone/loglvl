const queryStringParser = require('./queryStringParser')
const qs = parseQueryString(document.location.search)
const loglevel = {
  ...console
}

loglevel.log = function log() {
  if (
    qs.loglevel &&
    qs.loglevel !== 'error' &&
    qs.loglevel !== 'warn' &&
    qs.loglevel !== 'info'
  ) {
    console.log.apply(console, arguments)
  }
}

loglevel.error = function error() {
  if (qs.loglevel === 'error' || qs.loglevel === 'verbose') {
    console.error.apply(console, arguments)
  }
}

loglevel.warn = function warn() {
  if (qs.loglevel === 'warn' || qs.loglevel === 'verbose') {
    console.warn.apply(console, arguments)
  }
}

module.exports = loglevel

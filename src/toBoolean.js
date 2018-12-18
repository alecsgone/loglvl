function toBoolean(value) {
  switch (value) {
    case 'false':
    case false:
      return false

    default:
      return true
  }
}

module.exports = toBoolean

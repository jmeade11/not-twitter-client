'use strict'

const store = require('../../store')

const getuser = () => {
  return store.user ? store.user : false
}

module.exports = getuser

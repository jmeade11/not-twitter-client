'use strict'

const store = require('../../store')

const isowner = owner => {
  return store.user ? store.user._id === owner : false
}

module.exports = isowner

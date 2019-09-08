'use strict'

const authEvents = require('./auth/events')
const messageEvents = require('./messages/events')

$(() => {
  authEvents.addHandlers()
  messageEvents.addHandlers()
  messageEvents.onGetMessages()
})

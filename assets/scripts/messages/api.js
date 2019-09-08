'use strict'

const config = require('../config')
const store = require('../store')

const getMessages = () => {
  return $.ajax({
    url: config.apiUrl + '/messages',
    method: 'GET'
  })
}

const getMessage = messageId => {
  return $.ajax({
    url: config.apiUrl + '/messages/' + messageId + '?socket=' + store.socketId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const sendMessage = data => {
  return $.ajax({
    url: config.apiUrl + '/messages?socket=' + store.socketId,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteMessage = messageId => {
  return $.ajax({
    url: config.apiUrl + '/messages/' + messageId + '?socket=' + store.socketId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMessage = data => {
  return $.ajax({
    url: config.apiUrl + '/messages/' + data.message._id + '?socket=' + store.socketId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getMessages,
  getMessage,
  deleteMessage,
  sendMessage,
  updateMessage
}

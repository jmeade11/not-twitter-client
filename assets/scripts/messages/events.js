'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const { apiUrl } = require('../config')
const socket = require('socket.io-client')(apiUrl)

const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')

const onGetMessages = () => {
  api.getMessages()
    .then(ui.getMessagesSuccess)
    .catch(ui.failure)
}

const onGetMessage = id => {
  api.getMessage(id)
    .then(ui.replaceMessage)
    .catch(ui.failure)
}

const onSendMessage = event => {
  event.preventDefault()
  if (!socket.connected) {
    socket.connect(apiUrl)
  }
  const form = event.target
  const formData = getFormFields(form)
  api.sendMessage(formData)
    .then(ui.appendMessage)
    .then(ui.clearForms)
    .catch(ui.failure)
}

const onDeleteMessage = event => {
  const id = event.target.dataset.id
  api.deleteMessage(id)
    .then(() => ui.removeMessage(id))
    .catch(ui.failure)
}

const onUpdateMessage = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  formData.message._id = event.target.parentElement.id
  api.updateMessage(formData)
    .then(() => onGetMessage(formData.message._id))
    .catch(ui.failure)
}

const onMessageBroadcast = message => {
  ui.appendMessage(message)
}

const onMessageUpdate = message => {
  ui.replaceMessage(message)
}

const onMessageDelete = messageId => {
  ui.removeMessage(messageId)
}

const onReceiveId = socketId => {
  store.socketId = socketId
}

const onClickShowMessageForm = event => {
  const id = event.target.dataset.id
  ui.showEditMessageForm(id)
}

const addHandlers = () => {
  $('.content').on('submit', '.send-message', onSendMessage)
  $('.content').on('click', '.delete-message', onDeleteMessage)
  $('.content').on('click', '.edit-message', onClickShowMessageForm)
  $('.content').on('submit', '.update-message', onUpdateMessage)
  socket.on('message broadcast', onMessageBroadcast)
  socket.on('message update', onMessageUpdate)
  socket.on('message delete', onMessageDelete)
  socket.on('id', onReceiveId)
}

module.exports = {
  addHandlers,
  onGetMessages
}

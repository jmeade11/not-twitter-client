'use strict'

const store = require('../store')
const showMessagesTemplate = require('../templates/messages.handlebars')
const showMessageTemplate = require('../templates/message.handlebars')

const getMessagesSuccess = data => {
  const messages = data.messages.reverse()
  const showMessagesHtml = showMessagesTemplate({ messages })
  $('.content')
    .find('ul')
    .html(showMessagesHtml)
  store.messages = messages
}

const appendMessage = data => {
  const message = data.message
  const showMessageHtml = showMessageTemplate({ message })
  $('.content')
    .find('ul')
    .prepend(showMessageHtml)
  store.messages.push(data)
}

const replaceMessage = message => {
  const showMessageHtml = showMessageTemplate({ message })
  $('#' + message._id)
    .replaceWith(showMessageHtml)
}

const removeMessage = id => {
  $('#' + id).fadeOut('slow', function () {
    $(this).remove()
  })
}

const showEditMessageForm = id => {
  const $messageElement = $('#' + id)
  const message = {
    _id: id,
    message: $messageElement.find('.message').text()
  }
  const showEditMessageHtml = `
  <form class="update-message" autocomplete="off">
    <textarea name="message[message]" placeholder="Something to change?" required>${message.message}</textarea>
    <button>Update</button>
  </form>`
  $messageElement.html(showEditMessageHtml)
}

module.exports = {
  getMessagesSuccess,
  appendMessage,
  removeMessage,
  replaceMessage,
  showEditMessageForm
}

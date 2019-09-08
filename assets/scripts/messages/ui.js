'use strict'

const store = require('../store')

const getMessagesSuccess = data => {
  const messages = data.messages.reverse()
  let showMessagesHtml = ''
  messages.forEach(message => {
    showMessagesHtml += `
    <li id="${message._id}">
      <span>${message.owner.username}: </span>
      <span>${message.message} </span>
      <button data-id="${message._id}" class="delete-message">Delete</button>
      <button data-id="${message._id}" class="edit-message">Edit</button>
    </li>`
  })
  $('.content').find('ul').html(showMessagesHtml)
  store.messages = messages
}

const appendMessage = data => {
  const showMessageHtml = `
  <li id="${data.message._id}">
    <span>${data.message.owner.username}: </span>
    <span>${data.message.message} </span>
    <button data-id="${data.message._id}" class="delete-message">Delete</button>
    <button data-id="${data.message._id}" class="edit-message">Edit</button>
  </li>`
  $('.content')
    .find('ul')
    .prepend(showMessageHtml)
  store.messages.push(data)
}

const replaceMessage = message => {
  const showMessageHtml = `
  <li id="${message._id}">
    <span>${message.owner.username}: </span>
    <span>${message.message} </span>
    <button data-id="${message._id}" class="delete-message">Delete</button>
    <button data-id="${message._id}" class="edit-message">Edit</button>
  </li>`
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

'use strict'

const $alerts = $('#alerts')

const showAlert = (content, type) => {
  const alertTemplate = `
  <div class="alert-${type} alert alert-dismissible fade show animated bounceInLeft" role="alert">
    ${content}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

  const $alert = $(alertTemplate)
    .appendTo($alerts)

  setTimeout(() => {
    $alert
      .addClass('animated fadeOutUp')
      .one('animationend', event => $(event.target).remove())
  }, 5000)
}

module.exports = showAlert

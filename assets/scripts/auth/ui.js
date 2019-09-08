'use strict'

const store = require('../store')
const showAlert = require('../shared/alerts')
const $forms = $('form')

const onSignUpSuccess = responseData => {
  showAlert('You signed up... Now sign in!', 'success')
  $forms.trigger('reset')
}

const onSignUpFailure = responseData => {
  showAlert('Ugh, sign up failed!  Try again.', 'danger')
  $forms.trigger('reset')
}

const onSignInSuccess = responseData => {
  showAlert('You\'re in!  Send something that\'s not a tweet', 'success')
  store.user = responseData.user
  $forms.trigger('reset')
}

const onSignInFailure = responseData => {
  showAlert('Hmmm... something\'s not right there. Try signing in again.', 'danger')
  $forms.trigger('reset')
}

const onChangePasswordSuccess = () => {
  showAlert('You updated your profile!', 'success')
  $forms.trigger('reset')
}

const onChangePasswordFailure = () => {
  showAlert('Ummm... that didn\'t work.  Try again.', 'danger')
  $forms.trigger('reset')
}

const onSignOutSuccess = () => {
  showAlert('Sorry to see you go.  Come back soon!', 'info')
  $forms.trigger('reset')
}

const onSignOutFailure = () => {
  showAlert('Well this is weird... Sign out failed.', 'danger')
  $forms.trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

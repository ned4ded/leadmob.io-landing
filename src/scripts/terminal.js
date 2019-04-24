const Selectors = {
  FORM_ERROR: '[data-form-error]',
  FORM_LABEL: '[data-form-label]',
  INPUT: '[data-form-input]',
  INPUT_CONTAINER: '[data-form-input-container]',
  SUBMIT: '[data-form-submit]',
  FORM: '[data-form]',
  FORM_MSG: '[data-form-message]',
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('html').classList.remove('no-js')

  const input = document.querySelector(Selectors.INPUT)
  const container = document.querySelector(Selectors.INPUT_CONTAINER)

  const label = document.querySelector(Selectors.FORM_LABEL)
  const error = document.querySelector(Selectors.FORM_ERROR)
  const submit = document.querySelector(Selectors.SUBMIT)

  const form = document.querySelector(Selectors.FORM)
  const msg = document.querySelector(Selectors.FORM_MSG)

  input.addEventListener('input', (event) => {
    if(event.target.value != '') {
      submit.classList.add('has-value')
    } else {
      submit.classList.remove('has-value')
    }

    if(event.target.validity.valid || event.target.value == '') {
      if(event.target.value == '') {
        label.style.visibility = 'hidden'
      }

      error.style.visibility = 'hidden'
    } else {
      label.style.visibility = 'visible'
      error.style.visibility = 'visible'
    }
  })

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    container.style.display = 'none'

    label.style.visibility = 'hidden'
    error.style.visibility = 'hidden'

    msg.style.display = 'block'
  })

});

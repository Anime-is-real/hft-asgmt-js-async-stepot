// THIS IS FOR AUTOMATED TESTING
if (typeof module !== 'undefined') {
  global.$ = require('jquery')
}
// END

$( document ).ready((() => {
  // DOMContent is laoded, now we can start checking HTML Elements
  // If we dont "wait" for document to be ready, we cannot access HTML elements
  // for testing purposes, you can use a "debugger;" statement or also "console.log(element)"
  console.log('DOM is ready!')
  
  getData(); // TODO: Implement getData Method
  const input = $('#hft-shoutbox-form-input-name')
  const textarea = $('#hft-shoutbox-form-textarea')
  const form = $('#hft-shoutbox-form');

  form.on('keyup', (event) => {
    if (formElementIsValid(input.val(), 3) && formElementIsValid(textarea.val(), 10)) {
      toggleAlertBox(false)
      toggleSubmit(false)
    } else {
      toggleAlertBox(true)
      toggleSubmit(true)
    }
  })

  form.on('submit', async (event) => {
    event.preventDefault();
    const formData = {
      username: input.val(),
      message: textarea.val()
    }

    try {
      const response = await fetch('/api/shouts', {
        method: 'post',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const json = await response.json();
    } catch (e) {
      console.error(e)
    }
  })
}))

function formElementIsValid(element, minLength) {
  return element.length >= minLength
}

function toggleAlertBox(show) {
  const alertEl = $('#hft-shoutbox-alert')

  if (show) {
    alertEl.removeClass('d-none')
  } else {
    alertEl.addClass('d-none')
  }
}

function toggleSubmit(disable) {
  const submitButton = $('#hft-shoutbox-form-submit')
  submitButton.prop('disabled', disable)
}

async function getData() {
  // TODO: Implement
}

async function saveData(username, message) {
  // TODO: Implement
}

// THIS IS FOR AUTOMATED TESTING
if (typeof module !== 'undefined') {
  module.exports = {
    getData,
    saveData
  }
}
// END
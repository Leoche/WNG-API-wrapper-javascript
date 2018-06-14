import Wng from './lib/Wng.js'

// Easy selector
const $ = selector => document.querySelector(selector)

// Add line to logs
const Log = (msg, err = false) => {
  let classErr = ''
  if (err) {
    classErr = ' class="error"'
  }
  $('.logs').innerHTML = $('.logs').innerHTML + '<p' + classErr + '>' + msg + '</p>'
}

let WNG

window.onload = () => {
  WNG = null
  Log('Initialized...')
}

// TESTS
$('#CLEAR').onclick = evt => {
  evt.preventDefault()
  $('.logs').innerHTML = ''
}

$('#SETKEY').onclick = evt => {
  const $consumerKey = $('#KEY').value
  try {
    WNG = new Wng($consumerKey)
    Log('WNG Object created')
    Log('Endpoint: ' + WNG.endpoint)
    $('#SETKEY').setAttribute('disabled', true)
  } catch (err) {
    Log(err, true)
  }
}

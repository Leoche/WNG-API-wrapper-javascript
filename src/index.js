import Wng from './lib/Wng.js'

// Easy selector
const $ = selector => document.querySelector(selector)

// Add line to logs
const Log = (msg, err = false, pre = false) => {
  if (typeof msg === 'undefined') {
    $('.logs').innerHTML = $('.logs').innerHTML + '<hr>'
    return
  }
  let elem = 'p'
  let classErr = ''
  if (err) classErr = ' class="error"'
  if (pre) elem = 'pre'
  $('.logs').innerHTML = $('.logs').innerHTML + '<' + elem + classErr + '>' + msg + '</' + elem + '>'
}

let WNG, consumerKey

window.onload = () => {
  WNG = new Wng()
  Log('Initialized...')
}

const processButton = (btn, nexts) => {
  console.log('btn', btn)
  btn.setAttribute('disabled', true)
  nexts.forEach(item => {
    console.log('item', item)
    item.removeAttribute('disabled')
  })
}

// TESTS
$('#CLEAR').onclick = evt => {
  evt.preventDefault()
  $('.logs').innerHTML = ''
}

$('#APIS').onclick = evt => {
  $('.logs').innerHTML = ''
  try {
    let request = WNG.get('/')
    Log('Request:')
    Log(request.debug(), false, true)
    request.send().then(res => {
      Log('Response:')
      Log(res.debug(), false, true)
    }).catch((err) => {
      Log(err, true)
    })
    Log()
  } catch (err) {
    Log(err, true)
  }
}

$('#GETKEY').onclick = evt => {
  $('.logs').innerHTML = ''
  try {
    let request = WNG.post('/auth/credential', {
      EXPIRATION: 0,
      APLICATION_NAME: 'wngapi-javascript',
      APLICATION_DESCRIPTION: 'Example Test Javascript API Library',
      REDIRECTION: window.location.href
    })
    Log('Request:')
    Log(request.debug(), false, true)
    request.send().then(res => {
      Log('Response:')
      Log(res.debug(), false, true)
    }).catch((err) => {
      Log(err, true)
    })
    Log()
  } catch (err) {
    Log(err, true)
  }
}

// Setting consumerKey and creating Wng
$('#SETKEY').onclick = evt => {
  $('.logs').innerHTML = ''
  consumerKey = $('#KEY').value
  try {
    WNG.setConsumerKey(consumerKey)
    Log('WNG Object created with "' + consumerKey + '"')
    Log('Endpoint: ' + WNG.endpoint)
    $('#KEY').setAttribute('disabled', true)
    processButton($('#SETKEY'), [$('#TESTKEY'), $('#ME'), $('#REVOKE'), $('#APIS')])
    Log()
  } catch (err) {
    Log(err, true)
  }
}

$('#TESTKEY').onclick = evt => {
  $('.logs').innerHTML = ''
  try {
    let request = WNG.get('/auth/consumerKey')
    Log('Request:')
    Log(request.debug(), false, true)
    request.send().then(res => {
      Log('Response:')
      Log(res.debug(), false, true)
      Log('is ConsumerKey valid? ' + res.return.consumerWork)
    }).catch((err) => {
      Log(err, true)
    })
    Log()
  } catch (err) {
    Log(err, true)
  }
}

$('#ME').onclick = evt => {
  $('.logs').innerHTML = ''
  try {
    let request = WNG.get('/manager/me')
    Log('Request:')
    Log(request.debug(), false, true)
    request.send().then(res => {
      Log('Response:')
      Log(res.debug(), false, true)
    }).catch((err) => {
      Log(err, true)
    })
    Log()
  } catch (err) {
    Log(err, true)
  }
}

$('#REVOKE').onclick = evt => {
  $('.logs').innerHTML = ''
  try {
    let request = WNG.delete('/auth/consumerKey')
    Log('Request:')
    Log(request.debug(), false, true)
    request.send().then(res => {
      Log('Response:')
      Log(res.debug(), false, true)
    }).catch((err) => {
      Log(err, true)
    })
    Log()
  } catch (err) {
    Log(err, true)
  }
}
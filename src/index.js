import Wng from './wng/Wng.js'

window.onload = () => {
  document.querySelector('span').innerHTML = 'It work!'
  window.wng = new Wng('test')
}

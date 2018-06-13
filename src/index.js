import wng from './wng/wng.class.js'

window.onload = () => {
  document.querySelector('span').innerHTML = 'It work!'
  window.wng = new wng('test')
}
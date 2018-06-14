import Promise from 'promise-polyfill'
import 'whatwg-fetch'

/**
 * WngRequest class
 * @class
 * @author Léo DESIGAUX
 */
class WngRequest {
  /**
   * WngRequest Constructor
   * @constructs WngRequest
   * @param  {String} $endpoint        Endpoint of API
   * @param  {String} $consumerKey     Consumer key used to request API
   * @return {WngRequest} A blank request
   */
  constructor ($endpoint, $consumerKey) {
    this.endpoint = $endpoint
    this.consumerKey = $consumerKey
    this.headers = null
    this.body = {}
    this.prepared = {}
    if (!window.Promise) {
      window.Promise = Promise;
    }
    return this
  }

  /**
   * Create a prepared Request
   * @private
   * @param  {String} $method Method of request
   * @param  {String} $path Path to API
   * @param  {Object} $data Data sent with request
   * @return {WngRequest} A ready to send request
   */
  create ($method, $path, $data = {}) {
    this.method = $method
    this.path = $path
    this.data = $data
    return this.prepare()
  }

  /**
   * Create Headers for request
   * @private
   * @return {Object} An object containing all headers
   */
  createHeader () {
    return {
      'cache-control': 'no-cache',
      'Access-Control-Allow-Origin':'*',
      'x-wng-consumer': this.consumerKey,
      'x-wng-endpoint': this.endpoint,
      'x-wng-method': this.method
    }
  }

  /**
   * Prepare request
   * @private
   * @return {WngRequest} A "ready to send" request
   */
  prepare () {
    this.prepared = {
      'method': this.method,
      'headers': this.createHeader()
    }
    if (this.method !== 'GET') {
      this.prepared.body = JSON.stringify(this.data)
    }
    return this
  }

  /**
   * Send the request
   * @return {Object} Response object
   */
  send () {
    fetch(this.endpoint + this.path, this.prepared)
      .then((response) => {
        return response.json()
      }).then((json) => {
        console.log('parsed json', json)
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
  }

  /**
   * Send the request
   * @return {Object} Response object
   */
  sendXML () {
    const XHR = new XMLHttpRequest()
    XHR.open(this.prepared.method, this.endpoint + this.path)
    Object.entries(this.prepared.headers).forEach(item => XHR.setRequestHeader(item[0], item[1]))
    XHR.send(this.prepared.body)
  }

  /**
   * Debuging a request
   * @return {String} A pretty print of request
   */
  debug () {
    return JSON.stringify({
      url: this.endpoint + this.path,
      options: this.prepared
    }, null, 2)
  }
}
export default WngRequest

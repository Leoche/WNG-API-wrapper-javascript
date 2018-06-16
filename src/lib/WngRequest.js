import Promise from 'promise-polyfill'
import WngResponse from './WngResponse.js'
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
    let headers = {
      'x-wng-endpoint': this.endpoint,
      'x-wng-method': this.method
    }
    if (this.consumerKey !== null) {
      headers['x-wng-consumer'] = this.consumerKey
    }
    return headers
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
    if (this.method === 'POST') {
      let formData = new FormData()
      formData.append('userdata', JSON.stringify(this.data))
      formData.append('userfile', null)
      this.prepared.body = formData
    }
    return this
  }

  /**
   * Send the request
   * @return {WngResponse} A WngResponse object filled with response
   */
  send () {
    return new Promise((resolve, reject) => {
      fetch(this.endpoint + this.path, this.prepared)
        .then((response) => {
          return response.json()
        }).then((json) => {
          resolve(new WngResponse(json))
        }).catch((err) => {
          reject(new Error('Parsing failed', err))
        })
    })
  }

  /**
   * Debuging a request
   * @return {String} A pretty print of request
   */
  debug () {
    this.prettyPrepared = this.prepared
    return JSON.stringify({
      url: this.endpoint + this.path,
      options: this.prettyPrepared
    }, null, 2)
  }
}
export default WngRequest

import WngRequest from './WngRequest.js'
/**
 * Wng class
 * @class
 * @author Léo DESIGAUX
 */
class Wng {
  /**
   * Wng Constructor, adds 'wng' to window object on success
   * @constructs Wng
   * @param  {String} $consumerKey  Consumer key needed to call API, get one here https://cas.whyno.group/request_credential
   */
  constructor ($consumerKey = '') {
    this.endpoints = {
      'eu': 'https://api-eu.whyno.group',
      'ca': 'https://api-ca.whyno.group',
      'us': 'https://api-us.whyno.group'
    }
    this.endpoint = 'https://alpha.api-eu.whyno.group'
    if (typeof $consumerKey === 'string' && $consumerKey.trim().length > 0) {
      this.consumerKey = $consumerKey.trim()
    } else {
      throw new Error('$consumerKey isn\'t defined or isn\'t a string')
    }
  }

  /**
   * Construct a GET Request
   * @param  {String} $path         API Path
   * @return {WngRequest} A built GET WngRequest
   */
  get ($path) {
    return new WngRequest(this.endpoint, this.consumerKey).create('GET', $path, {})
  }

  /**
   * Construct a PUT Request
   * @param  {String} $path         API Path
   * @param  {Object} $data         Data object passed to API
   * @return {WngRequest} A built PUT WngRequest
   */
  put ($path, $data = {}) {
    return new WngRequest(this.endpoint, this.consumerKey).create('PUT', $path, $data)
  }

  /**
   * Construct a POST Request
   * @param  {String} $path         API Path
   * @param  {Object} $data         Data object passed to API
   * @return {WngRequest} A built POST WngRequest
   */
  post ($path, $data = {}) {
    return new WngRequest(this.endpoint, this.consumerKey).create('POST', $path, $data)
  }

  /**
   * Construct a DELETE Request
   * @param  {String} $path         API Path
   * @param  {Object} $data         Data object passed to API
   * @return {WngRequest} A built DELETE WngRequest
   */
  delete ($path, $data = {}) {
    return new WngRequest(this.endpoint, this.consumerKey).create('DELETE', $path, $data)
  }
}
export default Wng
window.wng = Wng

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
  }
  /**
   * Construct a GET Request
   * @param  {String} $path         API Path
   * @param  {Object} $data         Data object passed to API
   * @return {WngRequest} return built WngRequest
   */
  get ($path, $data = {}) {
    // Calls API with data
    return new WngRequest('GET', {})
  }
}
export default Wng

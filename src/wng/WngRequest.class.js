/**
 * WngRequest class
 * @class
 * @author Léo DESIGAUX
 */
export default class WngRequest {
  /**
   * wngRequest Constructor
   * @constructs WngRequest
   * @param  {String} $method        Method of request (GET, POST, PUT, DELETE)
   * @param  {Object} $data          Data object passed to request
   */
  constructor ($method, $data) {
    this.method = $method
    this.data = $data
  }
  /**
   * Send the request
   * @return {Object} Response object
   */
  send () {
    // Calls API with data
  }
}

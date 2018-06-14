/**
 * WngResponse class
 * @class
 * @author Léo DESIGAUX
 */
class WngResponse {
  /**
   * WngResponse constructor
   * @param  {Object} res Json response
   * @return {WngResponse}     A filled response
   */
  constructor (res) {
    this.protocol = res.http.protocol
    this.status = res.http.status
    this.message = res.http.message
    this.state = res.state
    this.return = res.return
  }
  /**
   * Get the state of response
   * @return {Boolean} State of response
   */
  state () {
    return this.state
  }
  /**
   * Get the body of response
   * @return {Object} Object containing response data
   */
  body () {
    return this.return
  }
  /**
   * Get the status of endpoint
   * @return {String} Status of endpoint
   */
  status () {
    return this.message
  }
  /**
   * Debuging a response
   * @return {String} A pretty print of response
   */
  debug () {
    return JSON.stringify({
      'protocol': this.protocol,
      'status': this.status,
      'message': this.message,
      'state': this.state,
      'return': this.return
    }, null, 2)
  }
}
export default WngResponse

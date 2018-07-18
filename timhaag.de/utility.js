// VARIABLES

const backendServerPort = 1111

const domain = `http://localhost:${backendServerPort}`

const instagramClientId = "YOUR INSTAGRAM CLIENT ID"
const instagramClientSecret = "YOUR INSTAGRAM CLIENT SECRET"
const instagramRedirectURI = `${domain}/instagram/oauthCode`

// FUNCTIONS
const isThere = object => typeof object != 'undefined' && object != null
const isThereMulti = (...objects) => objects.reduce((acc, object) => acc === false ? acc : isThere(object), true)
const isThereValue = value => isThere(value) && ((isNaN(value) && value.length > 0) ||  (!isNaN(value) && value > 0))
const isThereValueMulti = (...values) => values.reduce((acc, value) => acc === false ? acc : isThereValue(value), true)

const sendErrorReport = console.log

module.exports = {
  // VARIABLES
  backendServerPort,
  instagramClientId,
  instagramClientSecret,
  instagramRedirectURI,

  // FUNCTIONS
  isThere,
  isThereMulti,
  isThereValue,
  isThereValueMulti,
  sendErrorReport
}

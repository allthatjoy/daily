const {
  isThereMulti,
  isThereValue
} = require('./utility')

const configModel = require('./configModel')

const get = key =>
  new Promise((resolve, reject) => {
    if (isThereValue(key)) {
      configModel.findOne({
          key
        })
        .then(object => {
          if (isThereMulti(object, object.value)) {
            resolve(object.value)
          } else {
            resolve(null)
          }
        })
        .catch(err => {
          if (err) {
            sendErrorReport(`backend/helper/config - get - Error while requesting the config object with key: ${key} | Err: ${err}`)
          }
          reject()
        })
    } else {
      reject(`backend/helper/config - get - Didn't get the required key-argument.`)
    }
  })

const set = (key, value) =>
  new Promise((resolve, reject) => {
    if (isThereMulti(key, value)) {
      const updateObject = {
        key,
        value,
        modifiedOn: new Date().toISOString()
      }
      configModel.findOneAndUpdate({
          key
        }, updateObject, {
          upsert: true,
          setDefaultsOnInsert: true
        })
        .then(() => resolve())
        .catch(err => {
          if (err) {
            sendErrorReport(`backend/helper/config - set - Error while updating config document with key: ${key} | Err: ${err}`)
          }
          reject()
        })
    } else {
      reject(`backend/helper/config - set - Didn't get the required arguments.`)
    }
  })

  module.exports = {
    get,
    set
  }

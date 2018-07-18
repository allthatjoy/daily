const {
  isThereValue,
  sendErrorReport
} = require('../utility')

const fetch = require('node-fetch')

const FormData = require('form-data');

const {set, get} = require('../helper/config')

const getGalleryFeed = () =>
  new Promise((resolve, reject) => {
    get('access_token')
    .then(accessToken => {
      if (isThereValue(accessToken)) {
        fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`)
          .then(res => res.json())
          .then(resolve)
          .catch(err => {
            if (err) {
              sendErrorReport(`backend/helper/instagram - getGalleryFeed - Error while fetching url: ${url} | Err: ${err}`)
            }
            reject()
          })
      } else {
        reject()
      }
    })
    .catch(err => {
      if (err) {
          sendErrorReport(`backend/helper/instagram - getGalleryFeed - Error while calling the get-function within the backend/helper/config-script | Err: ${err}`)
      }
      reject()
    })
  })

const oauth = (clientId, clientSecret, code, redirectURI) =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('client_id', clientId)
    formData.append('client_secret', clientSecret)
    formData.append('redirect_uri', redirectURI)
    formData.append('grant_type', 'authorization_code')
    formData.append('code', code)

    const instagramOauthURL = 'https://api.instagram.com/oauth/access_token'

    fetch(instagramOauthURL, {
        method: 'post',
        body: formData
      })
      .then(res => res.json())
      .then(json => {
        if (isThereValue(json.access_token)) {
          set('access_token', json.access_token)
          .then(() => resolve())
          .catch(err => {
            if (err) {
              sendErrorReport(`backend/helper/instagram - oauth - Error while calling the set-function within the backend/helper/config-script | Err: ${err}`)
            }
            reject()
          })
        } else {
          reject()
        }
      })
      .catch(err => {
        if (err) {
          sendErrorReport(`backend/helper/instagram - oauth - Error while POST-fetching data form ${instagramOauthURL} | Err: ${err}`)
        }
        reject()
      })
  })


module.exports = {
  getGalleryFeed,
  oauth
}

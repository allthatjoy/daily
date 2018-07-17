/*
  This code snipped is used to provide a get-interface to either get
  instructions on how to call the instagram url to get redirected with a unique
  authentication code or to validate and exchange the given code to get the
  access_token which is used to access all of instagram's API functionality

  The first line within the callback-function of this api endpoint:
  const code = req.query.code
  is used to get the code parameter within the url, for example:
  http://localhost:5000/instagram/oauthCode?code=THISISANEXAMPLECODE

  The next step is to check wether the "code" parameter really contained a value
  or is just undefined.

  In case the code is undefined, the response will be the url which should be
  called manually to receive the code parameter.
  Sounds a bit confusing but it really isn't if you go step by step through this
  code snipped.

  If we finally received a "code" parameter, a function called oauth will be
  called (check out this script to get insights into that function:
  )
*/

expressRouter.get('/oauthCode', (req, res) => {
  const code = req.query.code
  if (isThereValue(code)) {
    instagram.oauth(instagramClientId, instagramClientSecret, code, instagramRedirectURI)
      .then(() => res.send('access_token successfully refreshed'))
      .catch(err => {
        if (err) {
          sendErrorReport(`backend/api/instagram - /oauthCode - Error while calling the oauth-function within the backend/helper/instagram-script | Err: ${err}`)
        }
        res.send('Error while refreshing the access_token')
      })
  } else {
    res.send(`call: https://api.instagram.com/oauth/authorize/?client_id=${instagramClientId}&redirect_uri=http://localhost:5000/instagram/oauthCode&response_type=code`)
  }
})

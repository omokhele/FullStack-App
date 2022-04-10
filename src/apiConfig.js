

const apiUrls = {
  production: 'https://set-items-api.herokuapp.com/api',
  development: 'https://mongodb-express-react.herokuapp.com/api/'
}
let apiUrl;
if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl

let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5432';
        break;
    case 'amp-my-gamechest.herokuapp.com':
        APIURL = 'https://amp-my-gamechest.herokuapp.com'
}

// APIURL = "http://localhost:3000"


export default APIURL;
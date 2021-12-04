let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5432';
        break;
    case 'amp-my-gamechest-react.herokuapp.com':
        APIURL = 'https://amp-my-gamechest.herokuapp.com'
}

export default APIURL;
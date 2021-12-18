/* eslint-disable default-case */
let APIURL = '';

// TODO MANDATORY: Uncomment lines 6 through 12 for Heroku deployment.
//! UNCOMMENT FOR HEROKU DEPLOYMENT
switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:5432';
        break;
    case 'amp-my-gamechest-react.herokuapp.com':
        APIURL = 'https://amp-my-gamechest.herokuapp.com'
}

// TODO MANDATORY: Comment line 16 out!
//! Comment line 16 out before committing. Uncomment Heroku URL before committing in lines 4 through 10.
// APIURL = "http://localhost:3000"

export default APIURL;

/*
|--------------------------------------------------------------------------
| SITE
|--------------------------------------------------------------------------
*/
const SITE_NAME = '';
const SITE_URL = '#';

const ENVIRONMENT = 'dev'; //dev or prod

/*
|--------------------------------------------------------------------------
| API
|--------------------------------------------------------------------------
*/
const API_URL_DEV = 'http://localhost:1911'; // Development
const API_URL_PROD = '#'; // Production

var API_URL = '#';
if (ENVIRONMENT === 'dev') {
    API_URL = API_URL_DEV;
} else if (ENVIRONMENT === 'prod') {
    API_URL = API_URL_PROD;
}

/*
|--------------------------------------------------------------------------
| GLOBAL
|--------------------------------------------------------------------------
*/

export {SITE_NAME, SITE_URL, API_URL};
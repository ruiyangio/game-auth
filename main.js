const bodyParser = require('body-parser');
const debug = require('debug');
const express = require('express');
const path = require('path');

const app = express();
const constants = require('./api/constants');
const routers = require('./api/router');
const apiResponseMiddleware = require('./api/middleware/api-response-middleware');
const authMiddleware = require('./api/middleware/auth-middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authMiddleware);
app.use(apiResponseMiddleware);
app.use(routers);

// Run
app.set('port', process.env.GAME_AUTH_PORT || constants.DEFAULT_PORT);
app.listen(app.get('port'), () => {
  debug('Auth server listening on port ' + app.get('port'));
});

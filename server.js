const bodyParser = require('body-parser');
const debug = require('debug');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();
const constants = require('./server/constants');
const routers = require('./server/router');
const apiResponseMiddleware = require('./server/middleware/api-response-middleware');
const authMiddleware = require('./server/middleware/auth-middleware');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dashboard/build')));

app.use(authMiddleware);
app.use(apiResponseMiddleware);
app.use(routers);

// Run
app.set('port', process.env.GAME_AUTH_PORT || constants.DEFAULT_PORT);
app.listen(app.get('port'), () => {
  debug('Auth server listening on port ' + app.get('port'));
});

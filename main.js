const bodyParser = require('body-parser');
const debug = require('debug');
const express = require('express');
const path = require('path');

const constants = require('./api/constants');
const routers = require('./api/router');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routers);

// Run
app.set('port', process.env.GAME_AUTH_PORT || constants.DEFAULT_PORT);
app.listen(app.get('port'), () => {
  debug('Auth server listening on port ' + app.get('port'));
});

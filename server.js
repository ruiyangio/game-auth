const bodyParser = require('body-parser');
const debug = require('debug');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const logger = require('morgan');
const mongoose = require('mongoose');
const constants = require('./server/constants');
const gameConf = require(constants.GAME_CONF);

// Connect to db
mongoose.connect(gameConf.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  debug('db connected');
});

const app = express();
const authMiddleware = require('./server/middleware/auth-middleware');
const routers = require('./server/router');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dashboard/build')));

// Token Validation
app.use(authMiddleware);

// Auth REST API
app.use(routers);

// GraphQL API
const { graphqlResolvers, graphqlSchema } = require('./server/graph');
app.use('/graphql', graphqlHTTP({
  rootValue: graphqlResolvers,
  schema: graphqlSchema,
  graphiql: process.env.NODE_ENV === 'dev'
}));

// Run
app.set('port', process.env.GAME_AUTH_PORT || constants.DEFAULT_PORT);
app.listen(app.get('port'), () => {
  debug('Auth server listening on port ' + app.get('port'));
});

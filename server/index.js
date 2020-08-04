import os from 'os';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import morgan from 'morgan';

// @TODO: Don't move (start)
import config from './config';
// @TODO: Don't move (end)
import * as utils from './utils';
import * as middlewares from './middlewares';
import * as services from './services';

//  App
const express = require('express');
const app = express();

// Vars, Const's
const expressSessionOptions = {
  secret: config.security.secretKey,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

//  Handlers
const goToStart = () =>
  app.listen(config.port, (port = config.port) => {
    utils.logger.info(
      `API de datos geográficos: El servidor está inicializado en \n http://localhost:${port}/ \n http://${os.hostname()}:${port}`,
    );
  });

const onOpenDatabase = () => {
  utils.logger
    .info(
      `API de datos geográficos: El servidor se conecto con la base de datos ${config.db.mongo.uri}`,
    )
    .once('error', utils.logger.error);

  goToStart();
};

//  Middlewares
app.use(cors({}));
app.use(morgan('combined', { stream: utils.logger.stream }));
app.use(session(expressSessionOptions));
app.use(express.static(path.resolve(__dirname, '../www/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({}));
app.use(middlewares.enableCors);
app.use(middlewares.isDemoMode);
app.use(middlewares.isIpDev);
app.use(middlewares.isDev);
app.use(middlewares.coordinates);
app.use('/api/v1', services.v1.api);

//  Routes
app.get('*', services.v1.init);

//  Run
if (!!config && !!config.db && !!config.db.mongo && !!config.db.mongo.uri) {
  Promise.resolve()
    .then(() =>
      //  Connect to DB
      mongoose.connect(config.db.mongo.uri, { useNewUrlParser: true }),
    )
    .then(onOpenDatabase)
    .catch(utils.logger.error);
} else goToStart();

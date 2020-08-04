import config from '../config';

export default (request, response, next) => {
  request.isDev = !/production/gi.test(config.env);
  next();
};

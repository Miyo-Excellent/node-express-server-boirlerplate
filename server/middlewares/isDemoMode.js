import config from '../config';

export default (request, response, next) => {
  request.isDemoMode = /demo/.test(config.mode);
  next();
};

import { getGeoData } from '../actions';

export default (request, response, next) => {
  const geo = getGeoData(request.isIpDev ? '207.97.227.239' : request.ip);

  request.geolocation = geo;
  next();
};

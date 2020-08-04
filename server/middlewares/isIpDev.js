export default (request, response, next) => {
  request.isIpDev = /(::1|127\.0\.0\.1|localhost)/gi.test(request.ip);
  next();
};

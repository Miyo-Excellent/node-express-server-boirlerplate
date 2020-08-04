import * as utils from '../../utils';

export default class Geolocation {
  static getLocations = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static getLocation = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static getLocationDynamicRate = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static createLocation = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static updateLocation = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static deleteLocation = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };
}

import * as utils from '../../utils';
import { Trip } from '../../models';

export default class TravelController {
  static getTotalTrips = async (request, response, next) => {
    try {
      response.json({ ok: true });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static getTotalTripsPerCity = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static getTrip = async (tripId = '') => {
    try {
      const trip = await Trip.findById(tripId);

      debugger;
      return trip;
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static createTrip = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static updateTrip = async (request, response, next) => {
    try {
      response.json({ ok: true, message: 'This end-point is in building' });
      next();
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };

  static deleteTrip = async (request, response, next) => {
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

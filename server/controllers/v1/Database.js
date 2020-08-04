import * as utils from '../../utils';

export default class Database {
  static restoreTrips = async (tripsBackup = [{}]) => {
    try {
      const trips = tripsBackup.map((trip = {}) => new Trip(trip)).filter((trip) => !!trip);
      debugger;
      for (const trip in trips) await trip.save();
      debugger;
    } catch (error) {
      utils.logger.error(error);
      console.log(error);
      // debugger;
    }
  };
}

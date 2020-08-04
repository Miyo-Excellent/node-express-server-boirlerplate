import express from 'express';
import { Geolocation, Travel } from '../../controllers/v1';

const api = express.Router();

//  Travel
api.get('/travel/total-trips-per-city', Travel.getTotalTripsPerCity);
api.get('/travel/trips', Travel.getTotalTrips);
api.get('/travel/trip/:id', Travel.getTrip);
api.post('/travel/trip', Travel.createTrip);
api.put('/travel/trip', Travel.updateTrip);
api.delete('/travel/trip', Travel.deleteTrip);

//  Geolocation
api.get('/gps/locations', Geolocation.getLocations);
api.get('/gps/location/:id', Geolocation.getLocation);
api.get('/gps/location/:id/dynamic-rate', Geolocation.getLocationDynamicRate);
api.post('/gps/location', Geolocation.createLocation);
api.put('/gps/location', Geolocation.updateLocation);
api.delete('/gps/location', Geolocation.deleteLocation);

export default api;

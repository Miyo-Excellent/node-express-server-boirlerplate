import enableCors from './enableCors';
import coordinates from '../middlewares/coordinates';
import isIpDev from '../middlewares/isIpDev';
import isDev from '../middlewares/isDev';
import isDemoMode from '../middlewares/isDemoMode';

export { coordinates, enableCors, isDev, isIpDev, isDemoMode };

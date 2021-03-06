import geoip from 'geoip-lite';

export default async (clientIp = '') => await geoip.lookup(clientIp);
/* Output Example
{
  range: [3479297920, 3479301339],
  country: 'US',
  region: 'TX',
  city: 'San Antonio',
  ll: [29.4889, -98.3987],
  metro: 641,
  zip: 78218,
}
*/

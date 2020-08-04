import requestIp from 'request-ip';

export default async (request = {}) => requestIp.getClientIp(request);
/* Output Example
  On localhost you'll see 127.0.0.1 if you're using IPv4
  Or ::1, ::ffff:127.0.0.1 if you're using IPv6
*/

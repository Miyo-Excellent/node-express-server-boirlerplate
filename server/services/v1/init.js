import path from 'path';

export default (request, response, next) =>
  response.sendFile(path.join(__dirname, '../../../www/public/index.html'));

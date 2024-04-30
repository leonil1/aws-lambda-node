const responseHttp = require('../helpers/response');
const { getStartWarts, createStartWarts: createStartWarController } = require('../../application/controllers/startWar-controller');


module.exports.getStartWars = async (event) => {
  const response = await getStartWarts();

  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.createStartWar = async (event) => {
  const { success, data, message, statusCode } = await createStartWarController(JSON.parse(event.body));

  return responseHttp(success, data, message, statusCode );
};
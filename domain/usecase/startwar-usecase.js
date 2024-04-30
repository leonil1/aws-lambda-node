const startwarAdapter = require('../../application/model_adapters/startwar-adapter');
const { HttpError } = require('../../application/exceptions/http-error');

const getStartWars = async () => {
    return await startwarAdapter.findStartWar();
}

const createstartwar = async (startWarData) => {
    // const name = startWarData.name;
    // console.log(name);
    // if (name === null && name ==='' ) {
    //     throw new HttpError("EL nombre no deve ser bacio", StatausCode.BAD_REQUEST);
    // }
    console.log('startWarData', startWarData);
    await startwarAdapter.createStartWar(startWarData);
}

module.exports = {
    getStartWars,
    createstartwar
}
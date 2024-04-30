const startWarQuery = require('../../infraestructure/repositories/startwars-query');
const startWarDto = require('../helper/startwar-dto');

const findStartWar =  async () => {
    const data = await startWarQuery.findStartwars();
    console.log('data', data);
    return startWarDto.getStartWarsFromDBArray(data);
}


const createStartWar = async ({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    created,
    edited,
    url
}) => {
    await startWarQuery.cresateStartWar(
        startWarDto.getDBFromStartWarDto({
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
            created,
            edited,
            url
        })
    )
}

module.exports = {
    findStartWar,
    createStartWar
}
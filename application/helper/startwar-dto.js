const getStartWarFromDto = ({
    id,
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
}) => ({
    id: id,
    name: name,
    height: height,
    mass: mass,
    hair_color: hair_color,
    skin_color: skin_color,
    eye_color: eye_color,
    birth_year: birth_year,
    gender: gender,
    created: created,
    edited: edited,
    url: url
});

const getStartWarsFromDBArray = (startWarDB) => startWarDB.map(getStartWarFromDto);

const getDBFromStartWarDto = ({
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
}) => ({
    name: name,
    height: height,
    mass: mass,
    hair_color: hair_color,
    skin_color: skin_color,
    eye_color: eye_color,
    birth_year: birth_year,
    gender: gender,
    created: created,
    edited: edited,
    url: url
});

module.exports = {
    getStartWarsFromDBArray,
    getDBFromStartWarDto,
    getStartWarFromDto
}
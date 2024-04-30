const { db } = require('./connections');
const tableName = 'start_wars'


const findStartwars = async () => {
    return db.select().table(tableName);
}

const cresateStartWar  = async ({
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
    await db(tableName).insert({
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
};


module.exports = {
    findStartwars,
    cresateStartWar

}
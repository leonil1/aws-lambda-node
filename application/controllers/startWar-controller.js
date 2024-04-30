const { responseSuccess, responseFail } = require('../helper/responses');
const { StatusCodes } = require('http-status-codes');
const startwarCase = require('../../domain/usecase/startwar-usecase');


const getStartWarts = async () => {

    let response = null;
    

    try {
        const results = await startwarCase.getStartWars();
        console.log(results);
        response = responseSuccess({ data: results });
        
    } catch (error) {
        console.log(error);
        response = responseFail(error)     
    }

    return response;
}

const createStartWarts = async (startWarData) => {

    let response = null;

    try {
        
        await startwarCase.createstartwar(startWarData);
        response = responseSuccess({ 
            message: "Empleado Creado"
         }, StatusCodes.CREATED);
        
    } catch (error) {

        console.log(error);
        response = responseFail({
            message: "Error Inesperado"
        });      
    }

    return response;
}

module.exports = { 
    getStartWarts, createStartWarts
};
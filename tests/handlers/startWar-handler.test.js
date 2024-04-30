
const startWartTestHandler = require('../../infraestructure/handlers/sartWars-handler');

test('correcte generation create ', () => {

    expect(startWartTestHandler.createStartWar('')).toBe('');
    

});
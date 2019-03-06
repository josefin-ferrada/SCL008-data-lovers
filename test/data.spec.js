global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

describe('data', () => {

    it('debería ser un objeto', () => {
        assert.equal(typeof data, 'object');
    });

    describe('data.sortData', () => {

        it('deberia ser una función', () => {
            assert.equal(typeof window.data.sortData, 'function');
        });

    });

    describe('data.filterData', () => {

        const pokemonData = {
            "pokemon": [{
                    "id": 1,
                    "name": "Bulbasaur",
                    "type": [
                        "Grass",
                        "Poison"
                    ]
                },
                {
                    "id": 4,
                    "name": "Charmander",
                    "type": [
                        "Fire"
                    ]
                },
            ],
        }

        it('deberia ser una función', () => {
            assert.equal(typeof window.data.filterData, 'function');
        });
        it('debería retornar true ', () => {
            assert.isArray(pokemonData.pokemon);
        });
        it('debería retornar arreglo con objetos con tipo Fire', () => {
            assert.deepEqual(window.data.filterData(pokemonData.pokemon, 'Fire'), [{ id: 4, name: 'Charmander', type: ['Fire'] }]);
        });
    });
});
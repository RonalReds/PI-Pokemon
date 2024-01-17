const { Router } = require('express');
const {getPokemons, getPokemonById, pokemonCreate, } = require('../handlers/pokemonsHandler');


const PokemonsRoutes = Router();


PokemonsRoutes.get('/', getPokemons)
PokemonsRoutes.get('/:id',getPokemonById)
PokemonsRoutes.post('/', pokemonCreate)




module.exports = PokemonsRoutes;

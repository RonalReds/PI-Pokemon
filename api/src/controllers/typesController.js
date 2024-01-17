const axios = require('axios');
const { Types } = require('../db.js');
const URL = 'https://pokeapi.co/api/v2/type'

const typesPokemons = async () => {
    const allTypes = (await axios.get(URL)).data.results;
  return allTypes
       
}

const saveTypeBD = async (types) => {

    for (let i = 0; i < types.length; i++) {
        const type = types[i];
    
        await Types.findOrCreate({ where: { name: type.name } });
    } 
}


module.exports = {
    typesPokemons,
    saveTypeBD
};
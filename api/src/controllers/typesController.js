const axios = require('axios');
const { Types } = require('../db.js');
const URL = 'https://pokeapi.co/api/v2/type'

/* const typesPokemons = async () => {
    const allTypes = (await axios.get(URL)).data.results;
  return allTypes
       
}

const saveTypeBD = async (types) => {

    for (let i = 0; i < types.length; i++) {
        const type = types[i];
    
        await Types.findOrCreate({ where: { name: type.name } });
    } 
} */
const getTypes = async()=>{
    const typesdb = await Types.findAll()
    if(typesdb.length){
        return typesdb
    } else{
        const types = (await axios.get(URL)).data.results.map((t)=>{return {name:t.name}})
    await Types.bulkCreate(types)
    return await Types.findAll()
    }


}



module.exports = {
    /* typesPokemons,
    saveTypeBD */
    getTypes
};
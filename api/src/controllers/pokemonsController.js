const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=106';
const { Pokemon, Types } = require('../db.js');

const apiPokemons = async () => {
    try {
        const pokemones = await axios.get(URL);
        const pokeUrl = pokemones.data.results
        const pokeComplete = await axios.all(pokeUrl.map(async (pokeI) => {
        let infoPush = await axios.get(pokeI.url);
        return {
            id: infoPush.data.id,
            name: infoPush.data.name,
            life: infoPush.data.stats[0].base_stat,
            attack: infoPush.data.stats[1].base_stat,
            defense: infoPush.data.stats[2].base_stat,
            speed: infoPush.data.stats[5].base_stat, 
            height: infoPush.data.height,
            weight: infoPush.data.weight,
            image: infoPush.data.sprites.other.dream_world.front_default,
            types: infoPush.data.types.map((t)=>{
                return {
                    name: t.type.name,
                }
            })  

            }
        })
        )     
    
        return pokeComplete
    } catch (error) {
        console.log({error:"Error al traer los pokemones desde los controllers"});
    }      
}


const pokemonsDataBase = async () => {

        const pokemonsDB = await Pokemon.findAll({
            include: {
                attributes: ['name'],
                model : Types,
                through: {
                    attributes: [],
                    },
            }
        })
        return pokemonsDB
}


const pokemonsApi_DB = async () => {
    
      const api_pokemons = await apiPokemons();
      const db_Pokemons = await pokemonsDataBase();
      
    return [...db_Pokemons, ...api_pokemons]
    
    
};

const postPokemons = async(params) => {
    
    const newPoke = await Pokemon.create({
            name: params.name,
            life: params.life,
            attack: params.attack,
            defense: params.defense,
            speed: params.speed,
            height: params.height,
            weight: params.weight,
        image: params.image ? params.image : "https://images3.alphacoders.com/677/677583.png",
        })
    /* newPoke.addType(params.types); */
    
    params.types.map(async(t)=>{
        const types = await Types.findOne({where: {name: t}})
        newPoke.addType(types)
    })
        
};




module.exports = {
    apiPokemons,
    pokemonsDataBase,
    pokemonsApi_DB,
    postPokemons,
};

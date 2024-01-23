const { pokemonsApi_DB, postPokemons } = require("../controllers/pokemonsController");




const getPokemons = async (req, res) => {
    try {
        const { name } = req.query;
        const listPokemons = await pokemonsApi_DB();
        if (name) {
            const pokeFiltered =  await listPokemons.filter((poke) => poke.name === name.toLowerCase())
            if (pokeFiltered.length > 0) {
                res.status(200).json(pokeFiltered)
            } else {
                res.status(400).send('Not found')
            }
        } else {
            res.json(listPokemons)
        }
        
    } catch (error) {
        res.status(400).json({error:"error al traer los pokemones"})
    }
}


const getPokemonById = async (req, res) => {
   
    try {
        const { id } = req.params
        const allPokemons = await pokemonsApi_DB();
        if (id) {
            const filteredById = await allPokemons.filter((obj) => obj.id == id);
            if (filteredById.length > 0) {
                res.status(200).json(filteredById)
            }
            else {
                res.status(400).json("The id entered does not correspond to an existing pokemon")
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

const pokemonCreate = async (req, res) => {
    console.log('req handler', req);
    try {
        await postPokemons(req.body);
        console.log(req.body);
        res.status(200).json("You pokemon has be created successfully");


    } catch (error) {
        console.log(error, "Error on Controller");
        res.status(400).send(error.toString());
    }
}
 


module.exports = {
    getPokemons,
    getPokemonById,
    pokemonCreate
   
};
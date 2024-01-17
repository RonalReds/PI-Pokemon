const { typesPokemons, saveTypeBD } = require("../controllers/typesController");
const { Types } = require('../db.js');

const getTypes = async(req, res) => {
    try {
        const typeApi = await typesPokemons();
        await saveTypeBD(typeApi)
        
        const allTypes = await Types.findAll();
        
        return res.status(200).send(allTypes);
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = {
    getTypes
};
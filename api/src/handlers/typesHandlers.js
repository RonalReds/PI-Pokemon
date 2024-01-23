const { /* typesPokemons, saveTypeBD */ getTypes } = require("../controllers/typesController");
/* const { Types } = require('../db.js'); */

/* const getTypes = async(req, res) => {
    try {
        const typeApi = await typesPokemons();
        await saveTypeBD(typeApi)
        
        const allTypes = await Types.findAll();
        
        return res.status(200).send(allTypes);
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}
 */
const getTypesHandler = async(req,res)=>{
    try {
        const types = await getTypes()
        res.status(200).json(types)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    /*     getTypes */
    getTypesHandler
};
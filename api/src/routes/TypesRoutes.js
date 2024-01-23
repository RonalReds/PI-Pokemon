const { Router } = require('express');
const {/* getTypes */ getTypesHandler} = require('../handlers/typesHandlers');


const TypesRoutes = Router();


TypesRoutes.get('/', getTypesHandler);



module.exports = TypesRoutes;
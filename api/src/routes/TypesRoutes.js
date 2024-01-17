const { Router } = require('express');
const {getTypes} = require('../handlers/typesHandlers');


const TypesRoutes = Router();


TypesRoutes.get('/', getTypes);



module.exports = TypesRoutes;
const { Router } = require('express');
const { Dog } = require('../db')
const { getAllDogs, createDog, getDB } = require('../controllers/dogControllers');



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', getDB)
// router.get('/', getAllDogs)
// router.post('/', createRace)

router.post('/', createDog)




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
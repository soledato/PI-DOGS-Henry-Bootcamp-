const { Router } = require('express');
const { getAllTemperaments, createTemp, getDataApi, getTempApi } = require('../controllers/temperamentControllers');
const { Temperament } = require('../db')




// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// router.get('/', async (req, res, next) => {
//     try {
//         const temperament = await Temperament.findAll()
//         res.send(temperament)
//     } catch (error) {
//         next(error)
//     }
// })

router.get('/', getTempApi)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
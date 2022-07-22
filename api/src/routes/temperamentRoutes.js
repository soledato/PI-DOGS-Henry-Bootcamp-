const { Router } = require('express');
const { getAllTemperaments, createTemp } = require('../controllers/temperamentControllers');
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

router.get('/', getAllTemperaments)

router.post('/', createTemp)
// router.post('/', (req, res, next) => {
//     const { name } = req.body
//     return Temperament.create({ name })
//         .then((newTemperament) => {
//             newTemperament
//             res.status(201).send(newTemperament)
//         })
//         .catch((error) => next(error))
// })


router.put('/', (req, res) => {
    res.send('Soy put de TemperamentRutes')
})
router.delete('/', (req, res) => {
    res.send('Soy delete de TemperamentRutes')
})



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
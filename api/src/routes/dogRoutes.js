const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const { getAllDogs} = require('../controllers/dogControllers');



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const { name } = req.query
        let allDogs = await getAllDogs();
        if (name) {
            let dogsByName = await allDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            if (dogsByName.length) res.status(200).send(dogsByName)
            res.status(404).send('Dog not found')
        } else {
            res.status(200).json(allDogs)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = (req.params)
        const allDogs = await getAllDogs()
        if(id){
        let dogId= await allDogs.filter(e => e.id == id)
        dogId.length ? 
        res.status(200).json(dogId) :
        res.status(404).send('Dog not found')
        }

        // const dogById = allDogs.find(e => parseInt(e.id) === parseInt(id))
        // res.json(dogById || 'Dog not exist')

    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    const { name, height_min, height_max, weight_min, weight_max, image, temperament, life_span, createdInDb } = req.body
    if (!name || !height_min || !height_max || !weight_min || !weight_max || !image) {
        return res.status(404).send('Falta algún parámetro obligatorio')
    }
    try {
        const newDog = await Dog.create({
            name, height_min, height_max, weight_min, weight_max, image, life_span, createdInDb 
        })

        let dbTemperament = await Temperament.findAll({
            where: {name: temperament}
        })

        newDog.addTemperament(dbTemperament)
        res.status(201).json(newDog)
    } catch (error) {
        next(error)
    }
})




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
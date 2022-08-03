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
    // if (!name || !height_min || !height_max || !weight_min || !weight_max) {
        //     return res.status(404).send('Falta algún parámetro obligatorio')
        // }
        try {
        const { name, height_min, height_max, weight_min, weight_max, image, temperaments , life_span, createdInDb } = req.body
        const newDog = await Dog.create({
            name, 
            height_min, 
            height_max, 
            weight_min, 
            weight_max, 
            life_span, 
            createdInDb,
            temperaments,
            image: image ? image : "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        })

        let dbTemperament = await Temperament.findAll({
            where: {name: temperaments},
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
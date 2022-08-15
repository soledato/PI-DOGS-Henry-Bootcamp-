const { Router } = require('express');
const { Dog, Temperament } = require('../db')
const { getAllDogs, deletedDog, updateDog} = require('../controllers/dogControllers');

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
            console.log(allDogs)
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const allDogs = await getAllDogs()
        if (id) {
            const dogId = await allDogs.filter(e => e.id == id)
            dogId ?
                res.status(200).json(dogId) :
                res.status(404).send('Dog not found')
        }


    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    // if (!name || !height_min || !height_max || !weight_min || !weight_max) {
    //         return res.status(404).send('Falta algún parámetro obligatorio')
    //     }
    try {

        const { name,
            height_min,
            height_max,
            weight_min,
            weight_max,
            image,
            temperaments,
            life_span,
            createdInDb } = req.body

        // const findName = await Dog.findAll({ where: { name: name } });
        // if (findName.length != 0) {
        //     return res.status(404).send("The dog's name is already exists")
        // }


        const allNames = await getAllDogs()
        const findName = allNames.find(dog => dog.name === name)

        if(findName){
            return res.status(404).send("The dog's name is already exists")
        }

       

        const newDog = await Dog.create({
            name,
            height_min,
            height_max,
            weight_min: Number(weight_min),
            weight_max: Number (weight_max),
            life_span,
            createdInDb,
            temperaments,
            image: image ? image : "https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
        })

        let dbTemperament = await Temperament.findAll({
            where: { name: temperaments },
        })
        newDog.addTemperament(dbTemperament)
        res.status(201).json({msg: "Created dog"})
    } catch (error) {
        next(error)
    }
})


router.delete('/:id', deletedDog)
router.put('/:id', updateDog)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
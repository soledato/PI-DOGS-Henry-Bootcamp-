const axios = require("axios");
const e = require("express");
const {Temperament} = require("../db");


const URL= 'https://api.thedogapi.com/v1/breeds'



async function getAllTemperaments(req, res){
    let totalTemperaments= (await axios(URL)).data.map(e => ([e.temperament])).toString().replaceAll(" ", "").split(",").reduce((acc, item) =>{
        if(!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    }, [])

    totalTemperaments.forEach(element => {
        Temperament.findOrCreate({
            attributes: ['name'],
            where: {name: element},
        })
    });

    const allTemps= await Temperament.findAll();


        res.send(allTemps)

        console.log(allTemps)
        console.log(Array.isArray(totalTemperaments))
        console.log(totalTemperaments.length)

    }

    
   
    async function createTemp(req, res, next) {
        const {name} = req.body
        if(!name) return res.status(404).send('Falta algún parámetro obligatorio')
        try {
            const newTemp= await Temperament.create(req.body)
            res.status(201).json(newTemp)
        } catch (error) {
            next(error)
        }
    }




module.exports = {
    getAllTemperaments,
    createTemp
}
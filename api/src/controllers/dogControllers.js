const axios = require("axios");
const e = require("express");
const {Dog} = require("../db");

const URL= 'https://api.thedogapi.com/v1/breeds'

async function getAllDogs(req, res, next){
    const dataDB= await Dog.findAll()
    try {
        let dogs= (await axios(URL)).data.map(e => ({
            name: e.name, 
            temperament: e.temperament,
            weight: e.weight.metric,
            image: e.image.url
        }))
        res.send(dogs)
    } catch (error) {
        next()
    }
}

async function createDog(req, res, next) {
    const {name, height, weight, life_span} = req.body
    if(!name || !height || !weight) return res.status(404).send('Falta algún parámetro obligatorio')
    try {
        const newDog= await Dog.create(req.body)
        res.status(201).json(newDog)
    } catch (error) {
        next(error)
    }
}

async function createRace(req, res){
    const {name, height, weight, life_span} = req.body
    if(!name || !height || !weight) return res.status(404).send('Falta un parámetro obligatorio para crear la raza')
    try {
        const newRace= await Dog.create(req.body)
        console.log(newRace)
        return res.status(201).json(newRace)
    } catch (error) {
        console.log(error)
    }
}

async function getDB(req, res){

    const total= await Dog.findAll()
    res.send(total)
}




module.exports = {
    getAllDogs,
    createRace,
    createDog,
    getDB
}
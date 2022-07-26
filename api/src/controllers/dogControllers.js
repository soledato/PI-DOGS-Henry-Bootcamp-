const axios = require("axios");
const e = require("express");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env

const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

async function getDogApi() {
  let dogsApi = (await axios(URL)).data.map(e => {
    return {
      id: e.id,
      name: e.name,
      temperament: e.temperament,
      height_min: e.height.metric.split(" -")[0],
      height_max: e.height.metric.split("- ")[1],
      weight_min: e.weight.metric.split(" -")[0],
      weight_max: e.weight.metric.split("- ")[1],
      life_span: e.life_span,
      image: e.image.url
    }
  })
  return dogsApi
}

async function getDogDB() {
  let dog = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ['name'],                                                      //Incluyo Activity
      through: {
        attributes: [],
      },
    }
  })
  return dog
}

async function getAllDogs() {
  const dogsApi = await getDogApi();
  const dogsDB = await getDogDB();
  const allDogs = dogsApi.concat(dogsDB)
  console.log(allDogs[3])
  return allDogs
}
//---- 


module.exports = {
  getAllDogs
}
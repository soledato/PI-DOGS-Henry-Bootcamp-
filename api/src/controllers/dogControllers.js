const axios = require("axios");
const e = require("express");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env

const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`

async function getDogApi() {
  let dogsApi = (await axios(URL)).data.map(e => {
    return {
      id: e.id,
      name: e.name.toLowerCase(),
      temperament: e.temperament,
      height_min: Number(e.height.metric.split("-")[0]), //|| 0),
      height_max: Number(e.height.metric.split("-")[1]), //|| 0),
      weight_min: Number(e.weight.metric.split("-")[0]), //|| 0),
      weight_max: Number(e.weight.metric.split("-")[1]), //|| 0),
      life_span: e.life_span,
      image: e.image.url
    }
  })
  console.log(dogsApi)
  return dogsApi
}

async function getDogDB() {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ['name'],
      through: {
        attributes: [],
      },
    }
  })
}


async function getAllDogs() {
  const dogsApi = await getDogApi();
  const dogsDB = await getDogDB();
  const allDogs = dogsApi.concat(dogsDB)
  // console.log(allDogs[3])
  return allDogs
}
//--------------------- EXTRAS ---------------------------- 


const deletedDog = async (req, res, next) => {
  const { id } = req.params;
  try {
    dogDelete= await Dog.findByPk(id)
    dogDelete.destroy();
    res.status(200).send({msg: "Dog deleted"})
  } catch (error) {
    next(error)
  }
}

async function updateDog(req, res, next){
  const {id} = req.params;
  const dog = req.body
  try {
    await Dog.update(dog, {
      where : {id},
    });
    res.status(200).send("Dog updated")
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getAllDogs,
  deletedDog,
  updateDog
}
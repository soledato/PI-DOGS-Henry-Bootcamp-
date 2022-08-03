const axios = require("axios");
const e = require("express");
const { Temperament } = require("../db");
const {API_KEY} = process.env


const URL = 'https://api.thedogapi.com/v1/breeds'

async function getTempApi(req, res) {
    let temperamentsAPI = (await axios(URL)).data.map(e => (e.temperament)).toString().replaceAll(" ", "").split(",").reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, [])
    // console.log(temperamentsAPI)
    temperamentsAPI.forEach(element => {
        Temperament.findOrCreate({
            //  
            where: { name: element },
        })
    });

    // let allTemps = temperamentsAPI.filter(e => e !== "")
    // console.log(allTemps)
    // res.send(allTemps)
    // console.log(Array.isArray(temperamentsAPI))
    // console.log(temperamentsAPI.length)

    let allTemps = await Temperament.findAll()
    res.send(allTemps)

}

// const getTempApi = async () => {
//     const info = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
//     let temperamentsAPI = info.map(e => e.temperaments)
//     let temps= temperamentsAPI.join().split(',')
//     temps = temps.map(t => t.trim()).sort()
//     const tempsSet = new Set(temps)
//     tempsSet.forEach(element => {
//         if(element > 0){
//             Temperament.findOrCreate({
//                 where: { name: element },
//             })
            
//         }
//     })

//     const allTemps = await Temperament.findAll();
//     return allTemps


// }


module.exports = {
    getTempApi,
}
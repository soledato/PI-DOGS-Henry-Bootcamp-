const axios = require("axios");
const e = require("express");
const {Temperament} = require("../db");


const URL= 'https://api.thedogapi.com/v1/breeds'



async function getTempApi(req, res){
    let temperamentsAPI= (await axios(URL)).data.map(e => ([e.temperament])).toString().replaceAll(" ", "").split(",").reduce((acc, item) =>{
        if(!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    }, [])
console.log(temperamentsAPI)
    temperamentsAPI.forEach(element => {
        Temperament.findOrCreate({
            // attributes: ['name'],
            where: {name: element},
        })
    });

    let allTemps= temperamentsAPI.filter(e => e !== "")
            console.log(allTemps)
           res.send(allTemps)
            console.log(Array.isArray(temperamentsAPI))
            console.log(temperamentsAPI.length)
}


module.exports = {
    getTempApi,
}
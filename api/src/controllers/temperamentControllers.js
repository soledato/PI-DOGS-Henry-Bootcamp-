const axios = require("axios");
const e = require("express");
const {Temperament} = require("../db");


const URL= 'https://api.thedogapi.com/v1/breeds'



async function getTempApi(req, res){
    let temperamentsAPI= (await axios(URL)).data.map(e => ([e.temperament])).toString().replaceAll(" ", "").split(",").reduce((acc, item) =>{
        if(!acc.includes(item)){
            acc.push(item);
        }
        console.log(acc)
        return acc;
    }, [])

    temperamentsAPI.forEach(element => {
        Temperament.findOrCreate({
            attributes: ['name'],
            where: {name: element},
        })
    });

    let allTemps= temperamentsAPI.filter(e => e !== "")
            console.log(allTemps)
           res.send(allTemps)
            console.log(Array.isArray(temperamentsAPI))
            console.log(temperamentsAPI.length)
}

// async function getTempDB(req, res){
//     let temperamentDB = await Temperament.findAll({
//         attributes: ['name']
//     })
// }
    // const allTemps= await Temperament.findAll(
    //     {
    //     attributes: {
    //         excludes: ['id']
    //     }
    // });

// async function getAllTemperaments(req, res, next){
//     try {
//         const tempApi= await getTempApi();
//         const tempDB= await getTempDB();
//         const allTemps= [...tempApi, ...tempDB]
//         res.send(allTemps)
        
//     } catch (error) {
//         next(error)
//     }
    
// }


    
    
   
    // async function createTemp(req, res, next) {
    //     const {name} = req.body
    //     if(!name) return res.status(404).send('Falta algún parámetro obligatorio')
    //     try {
    //         const newTemp= await Temperament.create(req.body)
    //         res.status(201).json(newTemp)
    //     } catch (error) {
    //         next(error)
    //     }
    // }




module.exports = {
    getTempApi,
}
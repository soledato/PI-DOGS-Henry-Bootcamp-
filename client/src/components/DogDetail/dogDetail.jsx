/* eslint-disable no-unused-vars */
import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getDogDetail, resetState } from "../../redux/actions"
import { Link } from "react-router-dom"


const DogDetail = () =>{
    const dispatch = useDispatch()
    const dog= useSelector((state) => state.dogDetail)
    const {id} = useParams()

     useEffect(()=>{
        dispatch(getDogDetail(id))
        dispatch(resetState())
    }, [dispatch, id])

    
     return(
         <div>
<Link to="/home"><button>HOME</button></Link>
            {
                
                dog.length > 0? 
                <div>
                    <h2>{dog[0].name.toUpperCase() }</h2>
                    <img src={dog[0].image} alt="not found"/>
                    <p>Temperament: {dog[0].temperament ? dog[0].temperament.toLowerCase() : (dog[0].temperaments && dog[0].temperaments.map((t) => " " + t.name.toLowerCase()))}</p>
                    <p>Lower weight: {dog[0].weight_min} kilograms</p>
                    <p>Higher weight: {dog[0].weight_max} kilograms</p>
                    <p>Lower height: {dog[0].height_min} centimeters</p>
                    <p>Higher height: {dog[0].height_max} centimeters</p>
                    <p>Life span: {dog[0].life_span}</p>
                    
                </div>

                
                :
                <p>loading</p>    
            } 
         </div>
     )

}

export default DogDetail
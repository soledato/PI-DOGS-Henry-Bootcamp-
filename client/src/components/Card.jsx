import React from "react"
import { CardHeaderImg } from "./StyledPage"



const Card = ({ id, name, temperament, weight_min, weight_max, image }) => {

    return (
        <div>
            <CardHeaderImg src={image} alt="img not found" />
            <h3>{name.toUpperCase()}</h3>
            <p>Temperament: {temperament + "  "}</p>
            <p>{weight_min}</p>
            <p>{weight_max}</p>
        </div>
    )
}

export default Card


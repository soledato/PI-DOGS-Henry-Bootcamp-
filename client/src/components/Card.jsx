import React from "react"

const Card= ({name, temperament, weight_min, weight_max, image}) =>{
return(
    <div> 
        <h3>{name}</h3>
        <img src={image} alt="img not found" width="250px"/>
        <h5>{temperament}</h5>
        <h5>{weight_min} - {weight_max}</h5>
    </div>
)


}

export default Card
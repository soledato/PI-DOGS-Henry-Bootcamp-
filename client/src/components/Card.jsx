../client/src/App.jsimport React from "react"

const Card= ({name, temperament, weight_min, weight_max, image}) =>{
return(
    <div> 
        <h3>{name[0].toUpperCase() + name.substring(1)}</h3>
        <img src={image} alt="img not found" width="250px"/>
        <p>Temperament: {temperament}</p>
        <p>{weight_min}</p>
        <p>{weight_max}</p>
    </div>
)


}

export default Card
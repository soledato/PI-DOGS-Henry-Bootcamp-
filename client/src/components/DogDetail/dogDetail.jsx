// /* eslint-disable no-unused-vars */
// import React, { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { useParams } from "react-router"
// import { getDogDetail } from "../../redux/actions"

// const DogDetail = () =>{
//     const dispatch = useDispatch()
//     const dogDetails= useSelector((state) => state.dogDetail)
//     const {id} = useParams()

//     useEffect(()=>{
//         dispatch(getDogDetail(id))
//     })

    
    
//     return(
        
        
//                 <div> 
//         <h3>{name[0].toUpperCase() + name.substring(1)}</h3>
//         <img src={image} alt="img not found" width="250px"/>
//         <h6>{temperament}</h6>
//         <h6>{weight_min}</h6>
//         <h6>{weight_max}</h6>
//         <h6>{height_min}</h6>
//         <h6>{height_max}</h6>
//         <h6>{life_span}</h6>
//         )
        
        
//     </div>
// )

// } 

// }

// export default DogDetail
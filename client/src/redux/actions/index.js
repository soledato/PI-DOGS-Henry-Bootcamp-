import axios from 'axios';

export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS"
export const GET_DOG_DETAIL = "GET_DOG_DETAIL"
export const ORDER_ASC = "ORDER_ASC"


export const getDogs =() =>{
    return function(dispatch){
        axios.get("http://localhost:3001/dogs")
        .then(response => {
            dispatch({
                type: GET_ALL_DOGS,
                payload: response.data
            })
        })
        .catch(error => console.log(error))
    }

}

// export function getDogs() {
//     return async function (dispatch) {
//         var json = await axios.get("http://localhost:3001/dogs");
//         return dispatch({
//             type: GET_ALL_DOGS,
//             payload: json.data
//         })
//     };
// };


export const getAllTemperaments = () =>{
    return (dispatch) =>{
        axios("http://localhost:3001/dogs/temperaments")
        .then(response =>{
            dispatch({
                type: GET_ALL_TEMPERAMENTS,
                payload: response.data
            })
        })
        .catch(error => console.log(error))
    }
}

export const getDogDetail = (id) =>{
    return (dispatch) =>{
        axios(`http://localhost:3001/dogs/${id}`)
        .then(response =>{
            dispatch({
                type: GET_DOG_DETAIL,
                payload: response.data
            })
        })
        .catch(error => console.log(error))
    }
}

export const orderAsc = (payload) => {
    return {
        type: ORDER_ASC,
        action: payload
    }
}


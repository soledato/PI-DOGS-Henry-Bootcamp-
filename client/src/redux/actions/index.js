import axios from 'axios';
// import { bindActionCreators } from 'redux';

export const GET_ALL_DOGS = "GET_ALL_DOGS"
export const ORDER_ALPHABETIC = "ORDER_ALPHABETIC"
export const ORDER_WEIGHT = "ORDER_WEIGHT"
export const FILTER_BY_BREEDS = "FILTER_BY_BREEDS"
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME"
export const GET_ALL_TEMPERAMENTS = "GET_ALL_TEMPERAMENTS"
export const POST_DOG = "POST_DOG"
export const FILTER_BY_TEMPERAMENTS = "FILTER_BY_TEMPERAMENTS"
export const GET_DOG_DETAIL = "GET_DOG_DETAIL"
export const RESET_STATE = "RESET_STATE"
export const DELETE_CREATED_DOG = "DELETE_CREATED_DOG"
export const EDIT_DOG = "EDIT_DOG"



export const getAllDogs = () => {
    return function (dispatch) {
        axios.get("http://localhost:3001/dogs")
            .then(response => {
                dispatch({
                    type: GET_ALL_DOGS,
                    payload: response.data
                })
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }
}

// export function getAllDogs() {
//     return async function (dispatch) {
//             const response= await axios.get("http://localhost:3001/dogs",{

//             });
//             return dispatch({
//                 type: GET_ALL_DOGS,
//                 payload: response.data
//             })
//     };
// };




export const getDogsbyName = (name) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/dogs?name=${name}`)
            .then(response => {
                dispatch({
                    type: GET_DOGS_BY_NAME,
                    payload: response.data
                })
            })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    alert(error.response.data);
                    console.log(error.response.status);

                }
            })

    }
}

export const getAllTemperaments = () => {
    return function (dispatch) {

        axios.get(`http://localhost:3001/temperaments`)
            .then(response => {
                dispatch({
                    type: GET_ALL_TEMPERAMENTS,
                    payload: response.data
                })
            })

            .catch(error =>
                console.log(error.response.data))

    }
}

export const getDogDetail = (id) => {
    return function (dispatch) {

        axios.get(`http://localhost:3001/dogs/${id}`)
            .then(response => {
                dispatch({
                    type: GET_DOG_DETAIL,
                    payload: response.data
                })
            })
            // console.log(id)
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    alert(error.response.data);
                    console.log(error.response.status);

                }
            })
    }

}

// export const postDog = (payload) => {
//     return async function () {
//         const response = await axios.post("http://localhost:3001/dogs", payload)
//         return response
//     }
// }

export const postDog = (payload) => {
    return function (dispatch) {
        axios.post("http://localhost:3001/dogs", payload)
            .then(response => {
                dispatch({
                    type: POST_DOG,
                    payload: response
                })
                alert(response.data.msg)
            })
            .catch(function (error) {
                if (error.response) {
                    alert(error.response.data)
                }
            })
    }
}

export const filterByBreeds = (payload) => {
    console.log(payload)
    return {
        type: FILTER_BY_BREEDS,
        payload
    }
}

export const filterByTemperaments = (payload) => {
    return {
        type: FILTER_BY_TEMPERAMENTS,
        payload
    }
}

export const orderAlphabetic = (payload) => {
    return {
        type: ORDER_ALPHABETIC,
        payload
    }
}

export const orderWeight = (payload) => {
    return {
        type: ORDER_WEIGHT,
        payload
    }
}

export const resetState = () => {
    return {
        type: RESET_STATE
    }
}



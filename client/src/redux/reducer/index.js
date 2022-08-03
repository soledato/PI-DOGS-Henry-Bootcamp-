/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import { GET_ALL_DOGS, FILTER_BY_BREEDS, ORDER_ALPHABETIC, ORDER_WEIGHT, GET_DOGS_BY_NAME, POST_DOG, GET_ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENTS, GET_DOG_DETAIL } from "../actions"

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: [],
    dogDetail: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }
        
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            }
        
        case GET_ALL_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }
        
        case GET_DOG_DETAIL:
            return{
                ...state,
                dogDetail: action.payload
            }

        
        case POST_DOG:
            return{
                ...state,
            }
    
        case FILTER_BY_BREEDS:
            const allBreeds = state.allDogs
            const filteredBreeds = action.payload === "all"
                ? allBreeds
                : action.payload === "created" ? allBreeds.filter(el => el.createdDB) : allBreeds.filter(el => !el.createdDB)
            return {
                ...state,
                dogs: filteredBreeds
            }
        
            // case FILTER_BY_TEMPERAMENTS:
            //     const allTemperaments = state.temperaments
            //     const filteredTemperaments = allTemperaments.filter(el => el.temperament.includes(action.payload))
            //     return{
            //         ...state,
            //         dogs: filteredTemperaments
            //     }


        case ORDER_ALPHABETIC:
            const orderDog = action.payload === "asc" ?
                state.dogs.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {

                        return -1
                    }
                    return 0;
                }) :
                state.dogs.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                dogs: orderDog
            }

        // case ORDER_WEIGHT:
            
        //     const orderByWeight = action.payload === "asc" ?
        //         state.allDogs.sort((a, b) => {
        //             if (a.weight_min > b.weight_min) {
        //                 return 1;
        //             }
        //             if (b.weight_min> a.weight_min) {

        //                 return -1
        //             }
        //             return 0;
                
        //         }) :
        //         state.allDogs.sort((a, b) => {
        //             if (a.weight_max > b.weight_max) {
        //                 return -1;
        //             }
        //             if (b.weight_max > a.weight_max) {

        //                 return 1
        //             }
        //             return 0;
                
        //         })

        //     return {
        //         ...state,
        //         dogs: orderByWeight
        //     }
       
        default: return state
    }

};


export default rootReducer;
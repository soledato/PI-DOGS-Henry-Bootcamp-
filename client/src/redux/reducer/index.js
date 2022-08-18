/* eslint-disable use-isnan */
/* eslint-disable no-unused-vars */
/* eslint-disable default-case */
import { GET_ALL_DOGS, FILTER_BY_BREEDS, ORDER_ALPHABETIC, ORDER_WEIGHT, GET_DOGS_BY_NAME, POST_DOG, GET_ALL_TEMPERAMENTS, FILTER_BY_TEMPERAMENTS, GET_DOG_DETAIL, RESET_STATE, DELETE_CREATED_DOG, EDIT_DOG } from "../actions"

const initialState = {
    dogs: [],
    allDogs: [],
    allTemperaments: [],
    dogDetail: [],
    
    // typeFilter: "",
    // breedFilter: [],
    // temperamentFilter: []

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
            return {
                ...state,
                allTemperaments: action.payload
            }

        case GET_DOG_DETAIL:
            return {
                ...state,
                dogDetail: action.payload
            }


        case POST_DOG:
            return {
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

        case FILTER_BY_TEMPERAMENTS:
            const allDogs = state.allDogs.filter(e => e.temperament || e.temperaments)
            const dogFilterTemp = action.payload === "all" ? allDogs : allDogs.filter(el => {
                if (el.temperament) return el.temperament.includes(action.payload);
                if (el.temperaments) {
                    const temp = el.temperaments.map(e => e.name)
                    return temp.includes(action.payload)
                }
                return true
            })

            return {
                ...state,
                dogs: dogFilterTemp
            }


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
        //     const allDogsW = state.allDogs.filter(e => e.weight_min)
        //     const orderW= action.payload === 'asc' ?
        //     allDogsW.sort((a,b)=>{
        //         return a.weight_min - b.weight_min
        //     })
        //     :
        //     allDogsW.sort((a,b) =>{
        //         return b.weight_min - a.weight_min
        //     })
        //     return {
        //         ...state,
        //         dogs: orderW
        //     }

        case ORDER_WEIGHT:
            const orderWeight = action.payload === "asc" ?
                state.dogs.sort(function (a, b) {
                    if((a.weight_min !== null ? a.weight_min : 10) > (b.weight_min !== null ? b.weight_min : 10)){
                        return 1
                    }
                    
                    if ((b.weight_min !== null ? b.weight_min : 10) > (a.weight_min !== null ? a.weight_min : 10)) {

                        return -1
                    }
                    return 0;
                }) :
                state.dogs.sort(function (a, b) {
                    if ((a.weight_min !== null ? a.weight_min : 10) > (b.weight_min !== null ? b.weight_min : 10)) {
                        return -1
                    }
                    if ((b.weight_min !== null ? b.weight_min : 10) > (a.weight_min !== null ? a.weight_min : 10)) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                dogs: orderWeight
            }


        case RESET_STATE:
            return {
                ...state,
                dogDetail: {}
            }


        default: return state
    }

};


export default rootReducer;
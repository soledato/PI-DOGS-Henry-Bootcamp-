/* eslint-disable default-case */
import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS, GET_DOG_DETAIL } from "../actions"


const initialState = {
    dogs: [],
    dogsDetail: {},
    temperaments: []
}

const rootReducer = (state = initialState, action) => {
    if (action.type === "GET_ALL_DOGS") {
        return {
            ...state,
            dogs: action.payload
        }
    }
    if(action.type === "GET_ALL_TEMPERAMENTS"){
        return {
            ...state,
            temperaments: action.payload
        }
    }
    if(action.type === "GET_DOG_DETAIL" ){
        return{
            ...state,
            dogsDetail: action.payload
        }
    }
    return state
}



export default rootReducer
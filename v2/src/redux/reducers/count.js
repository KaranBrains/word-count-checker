import {
    ADD_STRING_ONE,
    ADD_STRING_TWO
} from "../constants/index";

export default (state = {string1: null , string2: null }, action) => {
    switch(action.type) {
        case ADD_STRING_ONE: 
        console.log(action?.data);
            return {
                ...state,
                string1: action?.data
            }
        case ADD_STRING_TWO: 
            return {
                ...state,
                string2: action?.data
            }
        default: 
            return {
                ...state
            }
    }
}
import { ADD_STRING_ONE, ADD_STRING_TWO } from "../constants"

export const addStringOne = (str) => async (dispatch) => {
    try {
        dispatch({type: ADD_STRING_ONE , data: str})
    } catch (e) {
        alert(e.message);
    }
}

export const addStringTwo = (str) => async (dispatch) => {
    try {
        dispatch({type: ADD_STRING_TWO , data: str})
    } catch (e) {
        alert(e.message);
    }
}
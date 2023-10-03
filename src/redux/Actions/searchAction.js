import axios from "axios";
import { ADD_HISTORY, ERROR, FETCH_DATA, LOADING } from "./actionTypes";

export const dataLoading = () =>{
    return {
        type : LOADING,
    }
}

export const displayData = (data) => {
    return {
        type: FETCH_DATA,
        payload: data,
    };
};

export const displayError = (error) => {
    return {
        type: ERROR,
        payload: error,
    };
};

export const addHistory = (data) => {
    return {
        type: ADD_HISTORY,
        payload: data,
    };
};

export const fetchData = (input) => {
    return (dispatch) => {
        if (input === "") {
            dispatch(displayData(""));
            return;
        }
        dispatch(dataLoading());
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
            .then((response) => {
                dispatch(displayData(response.data));
                console.log(response.data);
                return response;
            })
            .then((response) => {
                dispatch(addHistory({ word: input, data: response.data }));
            })
            .catch((error) => {
                dispatch(displayError(error));
                console.log(error);
            });
    };
};

/*
import {getReposFailureAction, getReposLoadingAction, getReposSuccessAction, updateLanguage} from "./popular.actions";
import {getReposRequest} from "../../requests.ts";


export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(updateLanguage(selectedLanguage))
    dispatch(getReposLoadingAction());

    getReposRequest(selectedLanguage)
        .then(data=>dispatch(getReposSuccessAction(data)))
        .catch(error => dispatch(getReposFailureAction(error)))
}
*/

import {createAsyncThunk} from "@reduxjs/toolkit";
import {getReposRequest } from "../../requests.ts";
import {updateLanguage} from "./popular.slice";

export const getRepos =  createAsyncThunk(
    'popular/getRepos',
     async (selectedLanguage:string,{rejectWitchValue,dispatch}):Promise<any> => {
        dispatch(updateLanguage(selectedLanguage));
    try {
        return await getReposRequest(selectedLanguage);
    } catch (error) {
        return rejectWitchValue(error);
    }
},);


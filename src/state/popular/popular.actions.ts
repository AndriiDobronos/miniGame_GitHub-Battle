import {POPULAR} from "./popular.constants";
import {Action, AnyAction} from "redux";
import {ReposT} from  "../types/popular.types";

export const updateLanguage = (payload) => ({
    type: POPULAR.SET_SELECTED_LANGUAGE ,
    payload
})

 export const getReposLoadingAction = ():Action => ({
     type: POPULAR.GET_REPOS_LOADING,
 })

export const getReposSuccessAction = (payload:ReposT):AnyAction => ({
    type: POPULAR.GET_REPOS_SUCCESS,
    payload
})


export const getReposFailureAction = (payload:string):AnyAction => ({
    type: POPULAR.GET_REPOS_FAILURE,
    payload
})



import {BATTLE} from "./battle.constants";
import {Action, AnyAction} from "redux";
import {ReposT} from  "../types/popular.types";


export const handleSubmit = ():Action => ({
    type: BATTLE.SET_PLAYER_DATA,
})

export const handleSubmit2 = ():Action => ({
    type: BATTLE.SET_PLAYER2_DATA,
})

export const handleReset = ():Action => ({
    type: BATTLE.HANDLE_RESET,
})

export const handleReset2 = ():Action => ({
    type: BATTLE.HANDLE_RESET2,
})

export const getUserName = (payload:string):AnyAction => ({
    type: BATTLE.GET_USERNAME,
    payload
})

export const getUserName2 = (payload:string):AnyAction => ({
    type: BATTLE.GET_USERNAME2,
    payload
})

export const setLoadingAction = ():Action => ({
    type: BATTLE.SET_LOADING,
})

export const resetLoadingAction = ():Action => ({
    type: BATTLE.RESET_LOADING,
})

export const setWinnerAction = (payload):AnyAction => ({
    type: BATTLE.SET_WINNER,
    payload
})

export const setLoserAction = (payload):AnyAction => ({
    type: BATTLE.SET_LOSER,
    payload
})

export const getParamsSuccessAction = (payload):AnyAction => ({
    type: BATTLE.GET_PARAMS_SUCCESS,
    payload
})

export const getParamsFailureAction = (payload):AnyAction => ({
    type: BATTLE.GET_PARAMS_FAILURE,
    payload
})

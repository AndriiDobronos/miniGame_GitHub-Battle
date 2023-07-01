import {POPULAR} from "./popular.constants";
import {IPopularStore} from "../types/popular.types";
import {AnyAction} from "redux";

const initialState:IPopularStore = {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    error: null,
}

 export const popularReducer = (state:IPopularStore = initialState, action:AnyAction):IPopularStore => {
    switch(action.type) {
        case POPULAR.SET_SELECTED_LANGUAGE:
            return {
                ...state ,
                selectedLanguage: action.payload
            }
        case POPULAR.GET_REPOS_LOADING:
            return {
                ...state ,
                error: null,
                loading: true
            }
        case POPULAR.GET_REPOS_SUCCESS:
            return {
                ...state ,
                loading: false,
                repos: action.payload
            }
        case POPULAR.GET_REPOS_FAILURE:
            return {
                ...state ,
                loading:false,
                error: action.payload
            }

        default:
            return state;
    }
}
//export default popularReducer;
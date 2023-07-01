import {BATTLE} from "./battle.constants";
import {IBattleStore} from "../types/battle.types";
import {AnyAction} from "redux";

const initialState:IBattleStore = {
    playerData: {
        playerOneName: '',
        playerTwoName: '',
        playerOneImage: null,
        playerTwoImage: null
    },
    userName: '',
    userName1: '',
    userName2: '',
    loading: true,
    error: null,
    winner: null,
    loser: null,
}
export const battleReducer = (state:IBattleStore = initialState, action:AnyAction,userName1= state.userName1,
                              userName2 = state.userName2):IBattleStore => {
    switch (action.type) {
        case BATTLE.SET_PLAYER_DATA:
            return   {
                ...state,
                playerData: {
                    playerOneName: `${userName1}`,
                    playerTwoName: `${userName2}`,
                    playerOneImage: ` https://github.com/${userName1}.png?size200`,
                    playerTwoImage: (userName2 ? ` https://github.com/${userName2}.png?size200`: null),
                }
            }
        case BATTLE.SET_PLAYER2_DATA:
            return   {
                ...state,
                playerData: {
                    playerOneName: `${userName1}`,
                    playerTwoName: `${userName2}`,
                    playerOneImage: (userName1 ? ` https://github.com/${userName1}.png?size200`: null),
                    playerTwoImage: ` https://github.com/${userName2}.png?size200`,
                }
            }
        case BATTLE.HANDLE_RESET:
            return {
                ...state,
                playerData: {
                    playerOneName: '',
                    playerTwoName: state.userName2,
                    playerOneImage: null,
                    playerTwoImage: ` https://github.com/${userName2}.png?size200`,
                }
            }
        case BATTLE.HANDLE_RESET2:
            return {
                ...state,
                playerData: {
                    playerOneName: state.userName1,
                    playerTwoName: '',
                    playerOneImage: ` https://github.com/${userName1}.png?size200`,
                    playerTwoImage: null,
                }
            }
        case BATTLE.GET_USERNAME:
            return {
                ...state,
                userName1: action.payload,
            }
        case BATTLE.GET_USERNAME2:
            return {
                ...state,
                userName2: action.payload,
            }
        case BATTLE.SET_LOADING:
            return {
                ...state ,
                error: null,
                loading: true
            }
        case BATTLE.RESET_LOADING:
            return {
                ...state ,
                loading: false,
            }
        case BATTLE.SET_WINNER:
            return {
                ...state ,
                winner: action.payload,
            }
        case BATTLE.SET_LOSER:
            return {
                ...state ,
                loser: action.payload,
            }
        case BATTLE.GET_PARAMS_FAILURE:
            return {
                ...state ,
                loading:false,
                error: action.payload
            }
        default:
            return state;
    }
}
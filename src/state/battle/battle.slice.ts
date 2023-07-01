import {createSlice, Slice} from "@reduxjs/toolkit";
import {getResult} from "./battle.thunk";
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
};

const battleSlice:Slice<IBattleStore>  = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        handleSubmit: (state:IBattleStore ,action:AnyAction,userName1 = state.userName1,
            userName2 = state.userName2):void => {
        state.playerData =  {
            playerOneName : `${userName1}`,
            playerTwoName: `${userName2}`,
            playerOneImage: ` https://github.com/${userName1}.png?size200`,
            playerTwoImage: (userName2 ? ` https://github.com/${userName2}.png?size200`: null),
                }
            },
        handleSubmit2: (state:IBattleStore , action:AnyAction, userName1 = state.userName1,
                       userName2 = state.userName2):void => {
            state.playerData =  {
                playerOneName : `${userName1}`,
                playerTwoName: `${userName2}`,
                playerOneImage: (userName1 ? ` https://github.com/${userName1}.png?size200`: null),
                playerTwoImage: ` https://github.com/${userName2}.png?size200`,
            }
        },
        handleReset: (state:IBattleStore , action:AnyAction, userName1 = state.userName1,
                        userName2 = state.userName2):void => {
            state.playerData =  {
                playerOneName : '',
                playerTwoName: state.userName2,
                playerOneImage:  null,
                playerTwoImage: ` https://github.com/${userName2}.png?size200`,
            }
        },
        handleReset2: (state:IBattleStore , action:AnyAction,userName1 = state.userName1,
                      userName2 = state.userName2):void => {
            state.playerData =  {
                playerOneName : state.userName1,
                playerTwoName: '',
                playerOneImage:  ` https://github.com/${userName1}.png?size200`,
                playerTwoImage: null,
            }
        },
        getUserName: (state:IBattleStore, action:AnyAction):void => {
            state.userName1 = action.payload;
        },
        getUserName2: (state:IBattleStore, action:AnyAction):void => {
            state.userName2 = action.payload;
        },
        setWinnerAction: (state:IBattleStore,action:AnyAction ):void => {
            state.winner = action.payload;
        },
        setLoserAction: (state:IBattleStore,action:AnyAction ):void => {
            state.loser = action.payload;
        },
        resetLoadingAction: (state:IBattleStore ,action):void =>{
            state.loading = false ;
        },
        getParamsFailureAction: (state:IBattleStore ,action:AnyAction):void => {
            state.loading = false;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getResult.pending,
            (state:IBattleStore ):void => {
                state.error = null;
                state.loading = true;
            },
        );
        builder.addCase(getResult.fulfilled,
            (state:IBattleStore, {payload}:AnyAction ):void => {
                state.loading = false;
                state.winner = payload;
                state.loser = payload;
            },
        );
        builder.addCase(getResult.rejected,
            (state:IBattleStore , {payload}:AnyAction ):void => {
                state.loading = false;
                state.error = payload;
            },
        );
    },

});
export const {getUserName, getUserName2,handleSubmit,handleSubmit2,handleReset,
    handleReset2,setWinnerAction,setLoserAction,resetLoadingAction,getParamsFailureAction} = battleSlice.actions;

export default battleSlice.reducer


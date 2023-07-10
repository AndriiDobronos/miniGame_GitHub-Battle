import {createSlice, Slice} from "@reduxjs/toolkit";
import {getResult} from "./battle.thunk";
import {IBattleStore} from "../types/battle.types";
import {AnyAction} from "redux";

export const initialState:IBattleStore = {
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
    battleIsFormed: true,
    battleIsFormed2:true,
};

const battleSlice:Slice<IBattleStore>  = createSlice({
    name: 'battle',
    initialState,
    reducers: {
        handleSubmit: (state:IBattleStore ,action:AnyAction,userName1 = state.userName1,
            userName2 = state.userName2):void => {
        state.playerData =  {
            playerOneName : (`${userName1}` !== `${userName2}` ? `${userName1}` : "The names of the players are the same,please replace one of the names."),
            playerTwoName: `${userName2}`,
            playerOneImage: ` https://github.com/${userName1}.png?size200`,
            playerTwoImage: (userName2 ? ` https://github.com/${userName2}.png?size200`: null),
                }
            state.battleIsFormed = true
            },
        handleSubmit2: (state:IBattleStore , action:AnyAction, userName1 = state.userName1,
                       userName2 = state.userName2):void => {
            state.playerData =  {
                playerOneName : `${userName1}`,
                playerTwoName: (`${userName2}` !== `${userName1}` ? `${userName2}` : "The names of the players are the same,please replace one of the names."),
                playerOneImage: (userName1 ? ` https://github.com/${userName1}.png?size200`: null),
                playerTwoImage: ` https://github.com/${userName2}.png?size200`,
            }
            state.battleIsFormed2 = true
        },
        handleReset: (state:IBattleStore , action:AnyAction, userName1 = state.userName1,
                        userName2 = state.userName2, battleIsFormed2 = state.battleIsFormed2):void => {
            state.playerData =  {
                playerOneName : '',
                playerTwoName: userName2 ? state.userName2 : '',
                playerOneImage:  null,
                playerTwoImage: (userName2 && battleIsFormed2) ? `https://github.com/${userName2}.png?size200` : null,
            }
                state.battleIsFormed = true
        },
        handleReset2: (state:IBattleStore , action:AnyAction,userName1 = state.userName1,
                      userName2 = state.userName2, battleIsFormed = state.battleIsFormed):void => {
            state.playerData =  {
                playerOneName : userName1 ? state.userName1 : '',
                playerTwoName: '',
                playerOneImage: (userName1 && battleIsFormed) ? `https://github.com/${userName1}.png?size200` : null,
                playerTwoImage: null,
            }
                state.battleIsFormed2 = true
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
        getBattleIsFormed: (state:IBattleStore,action ):void => {
            state.battleIsFormed = false;
        },
        getBattleIsFormed2: (state:IBattleStore,action ):void => {
            state.battleIsFormed2 = false;
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
export const {getUserName, getUserName2,handleSubmit,handleSubmit2,handleReset,getBattleIsFormed,getBattleIsFormed2,
    handleReset2,setWinnerAction,setLoserAction,resetLoadingAction,getParamsFailureAction} = battleSlice.actions;

export default battleSlice.reducer


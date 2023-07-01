import {createSlice} from "@reduxjs/toolkit";
import {getRepos} from "./popular.thunk";
import {IPopularStore} from "../types/popular.types";
import {Slice, AnyAction, ActionReducerMapBuilder} from "@reduxjs/toolkit";

const initialState:IPopularStore = {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    error: null,
};

const popularSlice:Slice<IPopularStore> = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        updateLanguage: (state:IPopularStore,action:AnyAction):void => {
            state.selectedLanguage = action.payload;
        },
    },
    extraReducers: (builder:ActionReducerMapBuilder<IPopularStore>) => {
    builder.addCase(getRepos.pending,
        (state:IPopularStore) => {
        state.error = null;
        state.loading = true;
        },
    );
    builder.addCase(getRepos.fulfilled,
        (state:IPopularStore, {payload}:AnyAction):void => {
            state.loading = false;
            state.repos = payload;
        },
    );
    builder.addCase(getRepos.rejected,
        (state:IPopularStore, {payload}:AnyAction):void => {
            state.loading = false;
            state.error = payload;
        },
    );
},

});
export const {updateLanguage} = popularSlice.actions;

export default popularSlice.reducer


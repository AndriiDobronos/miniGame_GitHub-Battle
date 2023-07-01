//1. Store - object with data
//2.Actions {type: '', payload} Action creator () =>({type: '', payload}) - намерения о изменениях
//3.Reducer - function which return new state Store
/*
import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";

const logger = createLogger({
    collapsed: true
})
const store = createStore(rootReducer, applyMiddleware(thunk,logger));

export default store;
*/

import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";  //   /src
import popular from "./popular/popular.slice";
import battle from "./battle/battle.slice"

const store = configureStore({
    reducer: {
        popular:popular,
        battle: battle,
    },
    middleware: () =>
        getDefaultMiddleware().concat(
            createLogger({
                collapsed: true,
            }),
        ),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
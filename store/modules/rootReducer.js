import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// import counter from './counterSlice';
// import quizSlice from "./quizSlice";
import authSlice from "./authSlice";
// import myOpenDictSlice from "./myOpenDictSlice";

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        // counter,
        // quizSlice,
        authSlice,
        // myOpenDictSlice,
        // 여기에 추가 
    })(state, action);
}

export default rootReducer;
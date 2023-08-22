import { combineReducers } from "redux";

const loginReducer = ( state={} , action ) => {
    switch( action.type )
    {
        case 'login':
            return action.payload ;
        case 'logout' :
            return {} ;
        default :
            return state ;
    }
}

const reducers = combineReducers({
   login : loginReducer,  
});

export default reducers ;

// import { createSlice , combineReducers } from "@reduxjs/toolkit";

// const loginSlice = createSlice(
//     {
//         name: 'login',
//         initialState:{},
//         reducers:
//         {
//             login: (state,action)=>{
//                 state = action.payload;
//             },
//             logout: (state,action)=>{
//                 state = {};
//             }
//         }
//     }
// );

// export const login = loginSlice.actions;

// const reducers = combineReducers({
//     login : loginSlice.reducer,
// });

// export default reducers;
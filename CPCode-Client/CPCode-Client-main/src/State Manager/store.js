import { legacy_createStore as createStore } from "redux";
import reducers from "./Reducer";

const store = createStore(reducers);
export default store ;

// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./Reducer";

// const store = configureStore({
//     reducer : reducers
// });

// export default store ;
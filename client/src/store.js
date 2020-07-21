// Importing for creating a store and apply a middleware (redux-thunk)
import { createStore, applyMiddleware, compose } from "redux";

//Importing Thunk middleware
import thunk from "redux-thunk";

// RootReducer comes from combineReducer item => reducer.js
import rootReducer from "./reducer/index";

// Giving a middleware a constant/variable
const middleware = [thunk];

// Creating a store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Exporting the store
export default store;

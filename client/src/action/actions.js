// Import an action.type
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./types";

// Importing axios in order to get data api from MongoDB
import axios from "axios";

// Action which will be used in React JS Component
// Reasont we do disptach is because it needs to define type.
//Since we have axios request we need dispatch in order to set type after request.

export const getItems = () => (dispach) => {
  axios.get("/api/items").then((res) => {
    dispach({
      type: GET_ITEMS,
      payload: res.data,
    });
  });
};

// Add item function
// Axios will get the item paramater from react comp.
// After it will publish to the initalState in reducer
export const addItem = (item) => (dispatch) => {
  axios.post("/api/items", item).then((res) => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  });
};

// Action for editItem
// Axios will grab id and update by input values
export const editItem = (id, item) => (dispatch) => {
  axios.put(`/api/items/${id}`, item).then((res) => {
    dispatch({
      type: EDIT_ITEM,
      payload: res.data,
    });
  });
};

// Delete item
// Axios will delete the currentItem that we are clicking on
export const deleteItem = (id) => (dispatch) => {
  axios.delete(`/api/items/${id}`).then((res) => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  });
};

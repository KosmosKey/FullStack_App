// Import
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../action/types";

// InitalState where we will store all the data
const initalState = {
  items: [],
  // Loading is always going to be true
  loading: true,
};

// Redux Reducer
// Tells everything what to update by the action types.
export default function (state = initalState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        // The loading is always going to be true until GET_ITEMS will reach
        // ComponenDidMount() will getItems. If the items is ther loading will be false
        // If the items is not there yet and action has not been performed then loading always going to be true
        loading: false,
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };

    case EDIT_ITEM:
      return {
        ...state,
      };

    default:
      return state;
  }
}

import { actionTypes } from "../constants/actionTypes";

const initialState = {};

export const productDataReducer = (state = initialState, { type, payload }) => {
  console.log("reducer reached");
  switch (type) {
    case actionTypes.GET_DATA:
      console.log("in get data");
      return { ...state, products: payload };
    case actionTypes.SET_DATA:
      console.log("in set data");
      return { ...state, productById: payload };
    case actionTypes.REMOVE_DATA:
      return { ...state, productById: {} };
    default:
      console.log("in default");
      return state;
  }
};

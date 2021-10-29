import { actionTypes } from "../constants/actionTypes";

const initialState = {};

export const productDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_DATA:
      return { ...state, products: payload };
    case actionTypes.SET_DATA:
      return { ...state, productById: payload };
    case actionTypes.REMOVE_DATA:
      return { ...state, productById: {} };
    default:
      return state;
  }
};

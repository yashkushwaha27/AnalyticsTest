import { actionTypes } from "../constants/actionTypes";

export const getData = (data) => {
  return {
    type: actionTypes.GET_DATA,
    payload: data,
  };
};

export const setData = (data) => {
  return {
    type: actionTypes.SET_DATA,
    payload: data,
  };
};

export const removeData = () => {
  console.log("removing");
  return {
    type: actionTypes.REMOVE_DATA,
    payload: null,
  };
};

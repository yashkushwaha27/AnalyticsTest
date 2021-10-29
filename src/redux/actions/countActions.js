import axios from "axios";
import { actionTypes } from "../constants/actionTypes";

const api = require("../../network/apiCalls");

export const getData = () => async (dispatch) => {
  const response = await api.getData();
  dispatch({ type: actionTypes.GET_DATA, payload: response });
};

export const setData = (id) => async (dispatch) => {
  const response = await api.getDataByID(id);
  dispatch({ type: actionTypes.SET_DATA, payload: response });
};

export const removeData = () => {
  return {
    type: actionTypes.REMOVE_DATA,
    payload: null,
  };
};

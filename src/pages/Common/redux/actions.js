import actionTypes from "./actionTypes";

export const setSampleAction = (data) => ({
  type: actionTypes.SET_SAMPLE,
  payload: data,
});
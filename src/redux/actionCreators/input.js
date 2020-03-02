import { SAVE_INPUT, CLEAR_INPUT } from '../actionTypes';

export const saveInputValue = value => async (dispatch, getState) => {
  dispatch({
    type: SAVE_INPUT,
    payload: value,
  });
};

export const clearInputValue = (dispatch, getState) => {
  dispatch({
    type: CLEAR_INPUT,
  });
};

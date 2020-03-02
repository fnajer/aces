import { SET_TAB } from '../actionTypes';

const setTab = tab => async (dispatch, getState) => {
  dispatch({
    type: SET_TAB,
    payload: tab,
  });
};

export default setTab;
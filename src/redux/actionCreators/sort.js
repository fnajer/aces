import {
  SORT_TOWNS,
  MOVE_TOWN,
} from '../actionTypes';

export const sortTowns = () => async (dispatch, getState) => {
  return dispatch({
    type: SORT_TOWNS,
  });
};

export const moveTown = (town, toTop) => async (dispatch, getState) => {
  let correctIndex;
  const townsList = getState().wheather.townsList;
  
  const index = townsList.findIndex(elem => town === elem);
  const newTownsList = [...townsList];

  if (toTop) correctIndex = Math.max(index - 1, 0);
  else correctIndex = Math.min(index + 1, townsList.length - 1);
  
  newTownsList.splice(index, 1);
  newTownsList.splice(correctIndex, 0, {...town});
  
  return dispatch({
    type: MOVE_TOWN,
    payload: newTownsList,
  });
};
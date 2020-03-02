import { 
  LOAD_TOWN_WHEATHER, 
  LOAD_TOWN_WHEATHER_FAILED,
  LOAD_TOWN_WHEATHER_SUCCESS, 
  SET_ACTIVE_TOWN_WHEATHER,
  EDIT_TOWN_WHEATHER,
} from '../actionTypes';
import { API_BASE, API_KEY } from 'constants/api';

import {
  clearInputValue 
} from 'redux/actionCreators/input';

import IdGenerator from 'helpers/idGenerator';

function prepareData(data) {
  return {
    name: data.name,
    temperature: data.main.temp,
    active: true,
    id: IdGenerator.getId(),
  }
}

async function fetchTownWheather(town) {
  const responce = await fetch(
    `${API_BASE}/data/2.5/weather?q=${town}&appid=${API_KEY}`
  );
  return await responce.json();
}

const getTownWheather = town => async (dispatch, getState) => {
  const data = await fetchTownWheather(town);
  
  if (data.cod !== 200) {
    return dispatch({
      type: LOAD_TOWN_WHEATHER_FAILED,
      payload: data,
    });
  }
  
  dispatch({
    type: LOAD_TOWN_WHEATHER,
    payload: prepareData(data),
  });
  dispatch({
    type: LOAD_TOWN_WHEATHER_SUCCESS,
  });
  clearInputValue(dispatch, getState);
};

export const setActiveTownWheather = (town, isActive) => async (dispatch, getState) => {
  const townsList = getState().wheather.townsList;
  
  const index = townsList.findIndex(elem => town === elem);
  const newTownsList = [...townsList];
  newTownsList.splice(index, 1, {...town, active: isActive});

  return dispatch({
    type: SET_ACTIVE_TOWN_WHEATHER,
    payload: newTownsList,
  });
};

export const editTownWheather = (town, newTown) => async (dispatch, getState) => {
  const townsList = getState().wheather.townsList;
  
  const index = townsList.findIndex(elem => town === elem);
  const newTownsList = [...townsList];
  newTownsList.splice(index, 1, {...town, ...newTown});

  return dispatch({
    type: EDIT_TOWN_WHEATHER,
    payload: newTownsList,
  });
};

export default getTownWheather;
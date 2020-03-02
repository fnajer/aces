import { SAVE_INPUT, CLEAR_INPUT } from '../actionTypes';

const initialState = {
  value: '',
}

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_INPUT: 
      return {
        ...state,
        value: action.payload,
      };
    case CLEAR_INPUT: 
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
}

export default inputReducer;
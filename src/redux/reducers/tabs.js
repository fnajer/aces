import { SET_TAB } from '../actionTypes';

const initialState = {
  activeTab: { name: null },
}

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB: 
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
}

export default tabsReducer;
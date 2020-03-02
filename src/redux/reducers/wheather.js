import { 
  LOAD_TOWN_WHEATHER, 
  LOAD_TOWN_WHEATHER_FAILED,
  LOAD_TOWN_WHEATHER_SUCCESS,
  SET_ACTIVE_TOWN_WHEATHER, 
  EDIT_TOWN_WHEATHER,
  SORT_TOWNS,
  MOVE_TOWN
} from '../actionTypes';

const initialState = {
  townsList: [],
  error: null
}

const wheatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TOWN_WHEATHER: 
      return {
        ...state,
        townsList: [...state.townsList, action.payload],
      };
    case LOAD_TOWN_WHEATHER_FAILED: 
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_TOWN_WHEATHER_SUCCESS: 
      return {
        ...state,
        error: null,
      };
    case SET_ACTIVE_TOWN_WHEATHER: 
      return {
        ...state,
        townsList: action.payload
      };  
    case EDIT_TOWN_WHEATHER: 
      return {
        ...state,
        townsList: action.payload
      };
    case SORT_TOWNS: 
      return {
        ...state,
        townsList: [...state.townsList.reverse()]
      };
    case MOVE_TOWN: 
      return {
        ...state,
        townsList: action.payload,
      };
    default:
      return state;
  }
}

export default wheatherReducer;
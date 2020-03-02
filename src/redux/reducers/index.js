import { combineReducers } from 'redux';

import tabsReducer from './tabs';
import inputReducer from './input';
import wheatherReducer from './wheather';

const reducer = combineReducers({
  tabs: tabsReducer,
  input: inputReducer,
  wheather: wheatherReducer,
});

export default reducer;
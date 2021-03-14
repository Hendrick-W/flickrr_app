import {combineReducers} from 'redux';
import favouriteReducers from './favouriteReducers';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  favourite: favouriteReducers,
});

export default rootReducer;

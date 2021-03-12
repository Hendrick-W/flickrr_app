import * as types from '../constant/actionType';

const initialState = {
  loading:false,
  result: [],
  error:null
}

export default searchReducer = (state = initialState, action) => {
  switch(action.type){
    case types.SEARCH_REQUEST:
      return {loading:true, result:[]};
    case types.SEARCH_SUCCESS:
      return {loading:false, result: action.payload};
    case types.SEARCH_FAILURE:
      return {loading:false, result: [], error: action.payload};
    default:
      return state;
  }
}
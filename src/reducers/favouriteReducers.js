import * as types from '../constant/actionType';

const initialState = {
  favourite: []
}

export default favouriteReducer = (state = initialState, action) => {
  switch(action.type){
    case types.ADD_TO_FAVOURITE:
      var newState = state
      newState.favourite.push(action.payload)
      return {...newState};
    case types.DELETE_ITEM_FAVOURITE:
      var newState = state;
      newState.favourite = state.favourite.filter(item => item.imageUrl != action.payload)
      return {...newState};
    default:
      return state;
  }
}
import * as types from '../constant/actionType';

const initialState = {
  loading: false,
  result: [],
  title: '',
  error: null,
};

// eslint-disable-next-line no-undef
export default searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return {loading: true, result: [], title: '', error: null};
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload.result,
        title: action.payload.title,
      };
    case types.SEARCH_FAILURE:
      return {...state, loading: false, result: [], error: action.payload};
    default:
      return state;
  }
};

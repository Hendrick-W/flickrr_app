/* eslint-disable prettier/prettier */
import * as types from '../constant/actionType';
import axios from 'axios';

export const searchRequest = () => ({
  type: types.SEARCH_REQUEST,
});

export const searchError = (error) => ({
  type: types.SEARCH_FAILURE,
  payload: error,
});

export const searchSuccess = (result) => ({
  type: types.SEARCH_SUCCESS,
  payload: result,
});

export const searchAction = (params) => {
  return async (dispatch) => {
    try {
      dispatch(searchRequest());
      const tags = params.tags.replace(/\s/g, ',');
      const response = await axios.get(
        `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=${tags}&tagmode=${params.mode}`
      );

      const data = response.data.substring(1, response.data.length - 1);
      const parse_data = JSON.parse(data);
      dispatch(
        searchSuccess({result: parse_data.items, title: parse_data.title})
      );
    } catch (error) {
      console.log('ini error', error);
      dispatch(searchError('Failed to load data'));
    }
  };
};

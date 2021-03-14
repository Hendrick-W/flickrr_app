/* eslint-disable prettier/prettier */
import * as types from '../constant/actionType';

export const addFavourite = (payload) => {
  return  {
    type: types.ADD_TO_FAVOURITE,
    payload,
  };
};

export const deleteFavourite = (payload) => {
  return {
    type: types.DELETE_ITEM_FAVOURITE,
    payload,
  };
};


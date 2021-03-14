/* eslint-disable prettier/prettier */
/**
 * @format
 */

import 'react-native';
import {Provider} from 'react-redux';
import store from '../src/store';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {create, act} from 'react-test-renderer';

import * as types from '../src/constant/actionType';
import {searchAction} from '../src/actions/searchAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const appScreen = create(
  <Provider store={store}>
    <App />
  </Provider>
);

test('snapshot', () => {
  expect(appScreen).toMatchSnapshot();
  // expect(appScreen).toBeTruthy();
});

test('Render text input search bar component', ()=> {
  act(()=>jest.runAllTimers());
  const textInput = appScreen.root.findByProps({testID: 'searchTags'}).props;
  expect(textInput).toBeDefined();
});

test('Render button search bar component', ()=> {
  act(()=>jest.runAllTimers());
  const searchButton = appScreen.root.findByProps({testID: 'searchButton'}).props;
  expect(searchButton).toBeDefined();
});

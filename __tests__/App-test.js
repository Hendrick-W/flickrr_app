/**
 * @format
 */

import 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import store from '../src/store';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import {create} from 'react-test-renderer';

const appScreen = create(
  <Provider store={store}>
    <App />
  </Provider>,
);

jest.runAllTimers();

test('snapshot', () => {
  expect(appScreen).toMatchSnapshot();
});

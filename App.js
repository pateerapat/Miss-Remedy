import React from 'react';

import MissRemedyNavigator from './navigation/MissRemedyNavigator';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import RemedyReducer from "./store/reducers/RemedyReducer"

const rootReducer = combineReducers({
  remedy: RemedyReducer,
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <MissRemedyNavigator />
    </Provider>
    
  );
}
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers'; // will import index.js from reducers folder

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );

  return (
    // Here Provider is wrapping children which will be defined inside <Provider></Provider> i.e. <App /> in our case
    // so here we are making the logic which will be used in index.js and in our CommentBox.test.js as now
    //we are using Providers and connect()() to wrap the App component
    <Provider store={store}>{children}</Provider>
  );
};

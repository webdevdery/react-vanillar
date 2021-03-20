import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import './index.css';
import configureStore from './store'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/lib/integration/react';

const store = configureStore();

render (
  <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

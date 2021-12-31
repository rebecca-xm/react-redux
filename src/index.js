import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// PRIMA VERSIONE:
// import { createStore } from 'redux';

// STORE ==> GLOBALIZED STATE

// ACTION (es. INCREMENT)       <= funzione che ritorna un oggetto
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   };
// };

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   };
// };

// REDUCER
// const counter = (state = 0, action) => {     // <= due parametri: state iniziale e action
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   };
// };

// let store = createStore(counter);     // <= counter è il mio reducer

// EXTRA: mostra nella console
// store.subscribe(() => console.log(store.getState()));

// DISPATCH
// store.dispatch(increment());
// store.dispatch(decrement());

// SECONDA VERSIONE ==> continua nelle cartelle reducers e actions

import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Importo Provider da react-redux per collegare store
// alla mia app.
// Wrappo quindi <Provider> attorno ad <App />

// ==> continua su App.js

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

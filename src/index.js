//import 'babel-polyfill'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import App from './containers/App'
import rootReducer from './reducers'
import user from './reducers'
import mainReducer from './reducers'

//const loggerMiddleware = createLogger();

const logger = store => next => action => {
  console.log('******dispatching*****', action)
  let result = next(action)
  console.log('******next state******', store.getState())
  return result
}


let store = createStore(mainReducer,applyMiddleware(
      thunkMiddleware,
      //loggerMiddleware,
	  logger
    ));
console.log("stotres state");
console.log(store.getState());
let rootElement = document.getElementById('root');

render(
   <Provider store={store}>
      <App />
   </Provider>,
   rootElement
);

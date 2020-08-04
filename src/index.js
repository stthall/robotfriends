import React from 'react';
// import './wdyr.js'
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { searchRobots, requestRobots } from './reducers'
import * as serviceWorker from './serviceWorker'
import './index.css'; 
import App from './containers/App'
import 'tachyons'

const logger = createLogger()
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register()
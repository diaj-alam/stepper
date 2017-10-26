import React, {Component} from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM  from 'react-dom'
import Stepper from './components/stepper/stepper'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers'

const store = createStore( combineReducers({ reducers }), {a:[]})

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <Route path='/' component={Stepper} />
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

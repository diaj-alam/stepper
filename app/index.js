import React, {Component} from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM  from 'react-dom'
import Stepper from './components/stepper/stepper'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import reducers from './reducers/reducers'
import styled from 'styled-components'

const RTT = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	width:100%;
	height:100%;
	background-color: #eeeeee;
`

const store = createStore( combineReducers({ reducers }), {a:[]})

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
          <RTT>
              <Route path='/' component={Stepper} />
          </RTT>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

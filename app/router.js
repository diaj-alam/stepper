import React from 'react'
import { AppContainer } from 'react-hot-loader'
import Stepper from './components/stepper/stepper'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import styled from 'styled-components'
import { createStore, combineReducers } from 'redux'
import reducers from './components/stepper/reducers/reducers'

const Rt = styled.div`
    display: flex;
    flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	width:100%;
	height:100%;
	background-color: #eeeeee;
`

const St = ()=>{
    return (
        <Stepper>
            <h1>kl;fjdsg fdjgk</h1>
            <h3>jhgk ghfjf</h3>
        </Stepper>
    )
}

const store = createStore( combineReducers({ reducers }), {a:[]})

const App = ()=>{
    return (
        <AppContainer>
            <Provider store={store}>
                <Router history={createBrowserHistory()}>
                    <Rt>
                        <Route path='/' component={St} />
                        <Route path='/hh' component={St} />
                    </Rt>
                </Router>
            </Provider>
        </AppContainer>
    )
}

export default App
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import Stepper from './components/stepper/stepper'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import styled, {injectGlobal} from 'styled-components'
import { createStore, combineReducers } from 'redux'
import reducers from './components/stepper/reducers/reducers'
import XXX from './components/testComp/testComp'

injectGlobal`
  body {
    margin: 0;
  }
`

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
            <h1 style={{margin:'20%'}}>Знакомство с компонентом Stepper</h1>
            <XXX nmbr={1}/>
            <h1 style={{margin:'20%'}}>{`На данном шаге имеем простой реактовский элемент(просто текст тоже может принять).
            Т.к. такие элементы не имеют логики и предназначены лишь для отображения, их всегда можно пролистать,
            т.е. Stepper автоматически понимает, что этот шаг не нужно подтверждать`}</h1>
            <h1 style={{margin:'20%'}}>{`Умеет принимать произвольное количество шагов.
            Также при необходимости можно сохранять результаты каждого шага
            в виде объекта. Для этого нужно вызвать статический метод result
            и в качестве параметра подать объект, который был сформирован в результате
            работы своего компонента. При завершении шагов на выходе из компонентав вы получите
            объекты-результаты по всем шагам`}</h1>
        </Stepper>
    )
}

const store = createStore( combineReducers( reducers ), {})

const App = ()=>{
    return (
        <AppContainer>
            <Provider store={store}>
                <Router history={createBrowserHistory()}>
                    <Rt>
                        <Route path='/' component={St} />
                    </Rt>
                </Router>
            </Provider>
        </AppContainer>
    )
}

export default App
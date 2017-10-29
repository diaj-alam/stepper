import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Stepper from '../stepper/stepper'
const X = styled.div`
    display: flex;
    height: 90%;
    width: 90%;
    flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-family: Roboto, sans-serif;
`
const I = styled.img.attrs({
    src: props => props.source
})`
    width: 150pt;
    height: 100pt;
    margin: 10pt;
`
const Button = styled.button`
	background: white;
	color: palevioletred};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	&:hover {cursor: pointer;};
`
const XXX = props => {
    return(
        <X>
            <h1>React.Component</h1>
            <div>
                <p>{`Stepper умеет в качестве одного из шагов
                принимать полноценные react компоненты с любой логикой и структурой.
                В данном случае это тесовый компонент testComp`}</p>
            </div>
            <div>
                <I source="https://alpha.wallhaven.cc/wallpapers/thumb/small/th-72967.jpg"/>
                <I source="https://autonetmagz.com/wp-content/uploads/2013/04/jadwal_moto_gp_2013-398x227.jpg"/>
                <I source="http://ultradesktop.us/thumbnail/Ducati_Supersport_1198_2009_Moto_Motorcycles-Xdv.jpg"/>
            </div>
            <p/>{`Stepper умеет контролировать доступ к последующим шагам.
            Для React компонентов(экземпляров классов или stateless компонентов)
            по завершению необходимых действий,
            чтобы дать пользователю возможность пройти к следующему шагу,
            нужно вызвать статический метод done Stepper-a`}
            <p/>{`Для данного примера вызов метода done повещан на onClick данной кнопки`}
            <Button onClick={()=>{props.done(props.nmbr)}}>DONE</Button>
        </X>
    )
}
const XXXwrapped = connect(
    null
    ,dispatch => {
        //тут, кто использует компонент степпер, должен передать номер своего компонента
        // , который ложит в степпер
        // определить номер это уже не обязанность степпера
        return {
            done: nmbr=>dispatch( Stepper.done(nmbr) )
        }
    }
)(XXX)

export default XXXwrapped
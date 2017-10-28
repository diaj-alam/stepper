import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'
import {preparation, canWalk, walk, cancel} from './actionCreators/actionCreators'

export const reducers = {}
const Container = styled.section`
	display: flex;
	flex: 0.85;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	width: 75%;
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 1%;
	box-shadow: 0 0 5pt rgba(0,0,0,0.10); 
`
const Header = styled.header`
	flex: 0.15;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	color: #ffffff;
	border-bottom: 1pt solid rgba(0, 0, 0, 0.15);
	font-size: 12pt;
`

const Step = styled.div`
	display: flex;
	flex: 0.15;
	justify-content: center;
	align-items: center;
	font-family: Roboto, sans-serif;
  	font-weight: ${props => props.theme.fontweight};
`
const StepC = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24pt;
	height: 24pt;
	${props => props.theme.color ? '' : 'color: '+props.theme.color};
	background-color: ${props => props.theme.bgcolor};
	border-radius: 50%;
	margin-right: 15pt;
`
const StepT = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.tcolor};
`
const Separator = styled.div`
	flex: 0.12;
	border-bottom: 2pt solid rgba(0, 0, 0, 0.15);
`
const Footer = styled.footer`
	flex: 0.15;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
	border-bottom: 2pt solid rgba(0, 0, 0, 0.15);
`
const Button = styled.span`
	color: ${props => props.available 
				? (props.available=='C' ? '#2196F3': 'rgba(0, 0, 0, 0.38)' ) 
				: 'rgba(0, 0, 0, 0.22)'
	};
	font-family: Roboto, sans-serif;
	font-size: 14pt;
	font-weight: 400;
	margin: 1em;
	padding: 0.25em 1em;
`;
const GrpBTN = styled.div`
	flex: 0.2;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
const active= {
    bgcolor: '#2196F3'
    ,fontweight: 500
	,tcolor: 'rgba(0, 0, 0, 0.87)'
}
const inactive= {
    bgcolor: 'rgba(0, 0, 0, 0.38)'
    ,fontweight: 400
	,color: 'rgba(0, 0, 0, 0.3)'
    ,tcolor: 'rgba(0, 0, 0, 0.38)'
}
const Content = styled.div`
	flex:1;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`
class Stepper extends Component{
	constructor(props) {
	  	super(props)
		let steps = []
        this.headerContent = []
		let childs = !Array.isArray(this.props.children)?[ ...this.props.children]:[this.props.children]
        childs.forEach((e,i,a)=>{
            steps.push({
				active: false
				,done: typeof e === 'function' && e.prototype.isReactComponent ? false : true
				,result: {}
			})
            this.headerContent.push(
            	[
            	<ThemeProvider key={'Step'+i} theme={this.props.currentStep == i ?active:inactive}>
					<Step>
						<StepC>{i+1}</StepC>
						<StepT>Шаг {i+1}</StepT>
					</Step>
				</ThemeProvider>
            	,i<a.length-1? <Separator/>:null
            	]
            )
        })
        this.headerContent = [].concat(...this.headerContent)

		//init action create
		this.props.prepare(steps)

	}
	render(){
		return (
			<Container>
				<Header>
					{this.headerContent}
				</Header>
				<Content>
					{this.props.children}
				</Content>
				<Footer>
					<Button onClick={{/*this.props.walk('BACK')*/}}>BACK</Button>
					<GrpBTN>
						<Button available onClick={{/*this.props.cancel()*/}}>CANCEL</Button>
						<Button available={'C'}>CONTINUE</Button>
					</GrpBTN>
				</Footer>
			</Container>
		)
	}
}

const mapState2props = (state)=>{
	return {
		currentStep: state.current
	}
}

const mapDispatch2props = (dispatch)=>{
    return {
    	prepare: steps => dispatch( preparation(steps) )
		,walk: where => dispatch( walk(where) )
		,canWalk: whereFrom => dispatch( canWalk(whereFrom) )
		,cancel: () => dispatch( cancel() )
    }
}

const StepperContainer = connect(
    mapState2props,
    mapDispatch2props
)(Stepper)

export default StepperContainer
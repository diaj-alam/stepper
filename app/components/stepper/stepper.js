import React, {Component} from 'react'
import styled, {ThemeProvider, injectGlobal} from 'styled-components'
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
	box-shadow: 0 0 5px rgba(0,0,0,0.10); 
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
	width: 24px;
	height: 24px;
	${props => props.theme.color ? '' : 'color: '+props.theme.color};
	background-color: ${props => props.theme.bgcolor};
	border-radius: 50%;
	margin-right: 15px;
`
const StepT = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => props.theme.tcolor};
`
const Separator = styled.div`
	flex: 0.12;
	border-bottom: 2px solid rgba(0, 0, 0, 0.15);
`
const Footer = styled.footer`
	flex: 0.15;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
	border-bottom: 2px solid rgba(0, 0, 0, 0.15);
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

export default class Stepper extends Component{
	constructor(props) {
	  super(props)
	}
	render(){
		return (
			<Container>
				<Header>
					<ThemeProvider theme={active}>
						<Step active>
							<StepC>1</StepC>
							<StepT>Шаг 1</StepT>
						</Step>
					</ThemeProvider>
					<Separator/>
					<ThemeProvider theme={inactive}>
						<Step active>
							<StepC>2</StepC>
							<StepT>Шаг 2</StepT>
						</Step>
					</ThemeProvider>
					<Separator/>
					<ThemeProvider theme={inactive}>
						<Step active>
							<StepC>3</StepC>
							<StepT>Шаг 3</StepT>
						</Step>
					</ThemeProvider>
				</Header>
				<Footer>
					<Button>BACK</Button>
					<GrpBTN>
						<Button available>CANCEL</Button>
						<Button available={'C'}>CONTINUE</Button>
					</GrpBTN>
				</Footer>
			</Container>
		)
	}
}
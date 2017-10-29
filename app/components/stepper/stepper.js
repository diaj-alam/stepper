import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled, {ThemeProvider} from 'styled-components'
import {preparation, canWalk, walk, cancel, result } from './actionCreators/actionCreators'

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
	&:hover {
		cursor: pointer;
	};
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
const Galo4ka = styled.div`
	flex:0.6;
	margin-bottom: 17%;
    height: 24%;
    border-left: 3pt solid #ffffff;
    transform: rotate(-50deg);
    border-bottom: 3pt solid #ffffff;
`
const StepEl = props =>{
	return (
		<ThemeProvider theme={props.current >= props.nmbr ?active:inactive}>
			<Step>
				<StepC>{props.current>props.nmbr?<Galo4ka/>:props.nmbr+1}</StepC>
				<StepT>Шаг {props.nmbr+1}</StepT>
			</Step>
		</ThemeProvider>
	)
}
const Hdr = props=>{
	let steps = []
	for (var i = 0; i<props.count; i++){
		steps.push(<StepEl key={'step'+i} nmbr={i} current={props.current}/>)
		if (i<props.count-1)steps.push(<Separator key={'sep'+i}/>)

	}
	return(
		<Header>{steps}</Header>
	)
}
class Stepper extends Component{
	static done(whichChild){
		return canWalk(whichChild)
	}
    static result(which, resultObj){
        return canWalk(which, resultObj)
    }
	constructor(props) {
	  	super(props)
		//не пользуемся this.props.children напрямую, т.к. при 1 дочернем элементе
		//он будет явлляться самим элементом, а при >1 - массивом
		this.childs = Array.isArray(this.props.children)?this.props.children:[this.props.children]
		const steps = this.childs.map((e,i,a)=>{
            return {
				active: false
				,done: React.isValidElement(e) && typeof e.type === 'function' ? false : true
				,result: {}
			}
        })
		this.props.prepare(steps)
	}
	render(){
		return (
			<Container>
				<Hdr count={this.childs.length} current={this.props.currentStep}/>
				<Content>
					{this.childs[this.props.currentStep]}
				</Content>
				<Footer>
					<Button onClick={()=>{this.props.walk(this.props.currentStep-1)}}>BACK</Button>
					<GrpBTN>
						<Button available onClick={()=>{this.props.cancel()}}>CANCEL</Button>
						<Button available={'C'}
								onClick={()=>{this.props.walk(this.props.currentStep+1)}}
								>
							CONTINUE
						</Button>
					</GrpBTN>
				</Footer>
			</Container>
		)
	}
}

const mapState2props = ({routerReducer})=>{
	return {
		currentStep: routerReducer.current
	}
}

const mapDispatch2props = (dispatch)=>{
    return {
    	prepare: steps => dispatch( preparation(steps) )
		,walk: where => dispatch( walk(where) )
		,cancel: () => dispatch( cancel() )
    }
}

const StepperContainer = connect(
    mapState2props,
    mapDispatch2props
)(Stepper)

export default StepperContainer
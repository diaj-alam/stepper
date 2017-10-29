const initialState = {
    steps: []
    ,current : 0

}

const routerReducer = (state = initialState, action)=>{
    let steps = state.steps
    switch (action.type) {
        case 'PREPARATOIN':
            return {
                ...state
                ,steps: action.steps
                ,current: 0
            }
        case 'CANWALK':
            steps[action.whereFrom].done = true
            return {
                ...state
                ,steps: steps
            }

        case 'WALK':
            if (
                action.where >=0
                && action.where <= state.steps.length-1
                && (state.steps[state.current].done || state.current>action.where)
            )
            return {
                ...state
                ,current: action.where
            }
            else return state
        case 'RESULT':
            steps[action.which].result = action.result
            return {
                ...state
                ,steps: steps
            }
        default:
            return state
    }
}
const reducers = {routerReducer}
export default reducers
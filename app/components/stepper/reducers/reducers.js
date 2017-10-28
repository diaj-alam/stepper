const initialState = {
    steps: []
    ,walk : 0

}

const routerReducer = (state = initialState, action)=>{
    switch (action.type) {
        case 'PREPARATOIN':
            return {
                ...state
                ,steps: action.steps
            }
        case 'WALK':
            //тут проверка
            return {
                ...state
                ,walk: action.where
            }
        default:
            return state
    }
}
const reducers = {routerReducer}
export default reducers
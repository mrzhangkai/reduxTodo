const defaultState = {
    inputValue: 'write Somethings',
    todoThings: ['每个月去杭州', '工作日在宁波', '曾经在舟山上大学']
}
export default (state = defaultState, action) => {
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoThings.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type === 'deleteItem'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.todoThings.splice(action.index,1)
        return newState
    }
    return state
}
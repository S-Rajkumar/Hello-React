const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return state + action.steps;
        case 'DECREMENT' :
            return state - action.steps;
        default :
            return state;
    }
}

export default counterReducer;
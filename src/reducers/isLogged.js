const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN' :
            return action.counter === 33 ? true : false ;
        default :
            return state;
    }
}

export default loggedReducer;
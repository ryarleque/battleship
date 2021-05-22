import { 
    GET_AVAILABLE_TURNS,
    GET_LEVEL,
    DECREASE_AVAILABLE_TURNS
} from '../constants/index';

const initialStates = {
    availableTurns: 100,
    level: 'Easy'
};

function rootReducer(state = initialStates, action: any) {
    debugger;
    switch(action.type) {
        case GET_AVAILABLE_TURNS:
            return {...state};
        case GET_LEVEL:
            return {...state};
        case DECREASE_AVAILABLE_TURNS:
            return {...state, availableTurns: state.availableTurns - 1};
        default:
            return state;
    }
}

export default rootReducer;
import { 
    GET_AVAILABLE_TURNS,
    GET_LEVEL,
    DECREASE_AVAILABLE_TURNS,
    UPDATED_CONFIGURATION
} from '../constants/index';

const initialStates = {
    availableTurns: 100,
    level: 'Easy'
};

function battleshipReducer(state = initialStates, action: any) {
    debugger;
    switch(action.type) {
        case GET_AVAILABLE_TURNS:
            return {...state};
        case GET_LEVEL:
            return {...state};
        case DECREASE_AVAILABLE_TURNS:
            return {...state, availableTurns: state.availableTurns - 1};
        case UPDATED_CONFIGURATION:
            let defaultturns: number;
            switch(action.payload.level){
                case 'Easy': defaultturns = 999; break
                case 'Medium': defaultturns =100; break
                default: defaultturns =50; break 
            }
            return {...state, availableTurns: defaultturns, level: action.payload.level}
        default:
            return state;
    }
}

export default battleshipReducer;
import { 
    GET_AVAILABLE_TURNS,
    GET_LEVEL,
    DECREASE_AVAILABLE_TURNS,
    UPDATED_CONFIGURATION,
    SAVE_GAME
} from '../constants/index';

const initialStates = {
    availableTurns: 999,
    level: 'Easy',
    savedGames: []
};

function battleshipReducer(state = initialStates, action: any) {
    const getTurns = (level: string) => {
        switch(level){
            case 'Easy': return 999;
            case 'Medium': return 100; 
            default: return 50;
        }
    }

    switch(action.type) {
        case GET_AVAILABLE_TURNS:
            return {...state};
        case GET_LEVEL:
            return {...state};
        case DECREASE_AVAILABLE_TURNS:
            return {...state, availableTurns: state.availableTurns - 1};
        case UPDATED_CONFIGURATION:
            let defaultTurns: number = getTurns(action.payload.level);
            return {...state, availableTurns: defaultTurns, level: action.payload.level}
        case SAVE_GAME:
            let standardTurns: number = getTurns(state.level);
            let newSavedGame : any = {
                level: state.level, 
                isUserWon: action.payload.isUserWon,
                turns: action.payload.isUserWon ? standardTurns - state.availableTurns : 0
            }
            return {...state, savedGames : [...state.savedGames, newSavedGame]};
        default:
            return state;
    }
}

export default battleshipReducer;
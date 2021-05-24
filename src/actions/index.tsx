import { 
    GET_AVAILABLE_TURNS,
    GET_LEVEL,
    UPDATED_CONFIGURATION,
    DECREASE_AVAILABLE_TURNS,
    SAVE_GAME
} from '../constants/index';

export const getAvailableTurns = () => ({
    type: GET_AVAILABLE_TURNS,
    payload: {},
});

export const updatedConfiguration = (level: string) => ({
    type: UPDATED_CONFIGURATION,
    payload: { level }
});

export const decreasedAvailableTurns = () => ({
    type: DECREASE_AVAILABLE_TURNS,
    payload: {},
});

export const getLevel = () => ({
    type: GET_LEVEL,
    payload: {},
});

export const saveGame = (isUserWon: boolean) => ({
    type: SAVE_GAME,
    payload: {isUserWon},
});
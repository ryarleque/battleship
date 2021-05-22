import { 
    GET_AVAILABLE_TURNS,
    GET_LEVEL,
    UPDATED_LEVEL,
    DECREASE_AVAILABLE_TURNS
} from '../constants/index';

export const getAvailableTurns = () => ({
    type: GET_AVAILABLE_TURNS,
    payload: {},
});

export const updatedLevel = (level: string, turns: number) => ({
    type: UPDATED_LEVEL,
    payload: { level, turns },
});

export const decreasedAvailableTurns = () => ({
    type: DECREASE_AVAILABLE_TURNS,
    payload: {},
});

export const getLevel = () => ({
    type: GET_LEVEL,
    payload: {},
});
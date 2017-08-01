import {randomCellsFrom} from '../layouts';

export const INC_SIZE = 'INC_SIZE';
export const DEC_SIZE = 'DEC_SIZE';
export const INC_MINES = 'INC_MINES';
export const DEC_MINES = 'DEC_MINES';
export const DO_CHEAT = 'DO_CHEAT';
export const SET_MINES = 'SET_MINES';
export const REVEAL = 'REVEAL';
export const RESET = 'RESET';

export const incSize = () => {
    return {
        type: INC_SIZE
    };
};

export const decSize = () => {
    return {
        type: DEC_SIZE
    };
};

export const incMines = () => {
    return {
        type: INC_MINES
    };
};

export const decMines = () => {
    return {
        type: DEC_MINES
    };
};

export const doCheat = cheating => {
    return {
        type: DO_CHEAT,
        cheating
    };
};

const resetAction = () => {
    return {
        type: RESET
    };
};

const setMinesAction = mines => {
    return {
        type: SET_MINES,
        mines
    };
};

export const setMines = () => {
    return function(dispatch, getState) {
        const state = getState();
        const {game} = state;
        const {numMines, size} = game;
        const mines = randomCellsFrom(numMines, size)

        dispatch(resetAction());     // clears existing mines and reveals
        dispatch(setMinesAction(mines));
    }
}

export const revealAction = (name, reveals, mines, size) => {
    return {
        type: REVEAL,
        name,
        reveals,
        mines,
        size
    };
};

export const reveal = name => {
    return function(dispatch, getState) {
        const state = getState();
        const {game, mines, reveals} = state;
        const revealed = reveals.has(name);
        const {size} = game;

        if (!revealed) {
            dispatch(revealAction(name, reveals, mines, size));
            // Recurse if this cell has no neighboring mines.
            // Could recursively dispatch here in the AC for each neighbor dispatch(reveal(neighbor))
            // but since mines and size are static, recurse in the reducer.
        }
    }
};


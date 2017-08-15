import {numCellsFrom} from '../layouts';

export const INC_SIZE = 'INC_SIZE';
export const DEC_SIZE = 'DEC_SIZE';
export const INC_MINES = 'INC_MINES';
export const DEC_MINES = 'DEC_MINES';
export const DO_CHEAT = 'DO_CHEAT';
export const DO_LAYOUT = 'DO_LAYOUT';
export const TOGGLE_FLAG = 'TOGGLE_FLAG';
export const SET_MINES = 'SET_MINES';
export const REVEAL = 'REVEAL';
export const RESET = 'RESET';

/**
 * @param {Number} n number of cells to return
 * @param {Number} number of cells in the board
 * @return {Set} names of n random cells
 */
export const randomCellsFrom = (n, numCells) => {
    const cells = new Set();

    // if the number of mines near the number of cells,
    // make this more efficient (resevoir sampling?, etc)
    while (cells.size < Math.min(n, numCells)) {
        const cell = Math.floor(Math.random() * numCells);

        cells.add(cell);
    }

    return cells;
}

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

export const doLayout = layout => {
    return {
        type: DO_LAYOUT,
        layout
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

export const toggleFlag = name => {
    return {
        type: TOGGLE_FLAG,
        name
    };
};

export const setMines = () => {
    return function(dispatch, getState) {
        const state = getState();
        const {game} = state;
        const {numMines, size, layout} = game;
        const numCells = numCellsFrom(layout, size);
        const mines = randomCellsFrom(numMines, numCells)

        dispatch(resetAction());     // clears existing mines and reveals
        dispatch(setMinesAction(mines));
    }
}

export const revealAction = (name, reveals, mines, size, layout) => {
    return {
        type: REVEAL,
        name,
        reveals,
        mines,
        size,
        layout
    };
};

export const reveal = name => {
    return function(dispatch, getState) {
        const state = getState();
        const {game, mines, reveals} = state;
        const revealed = reveals.has(name);
        const {size, layout} = game;

        if (!revealed) {
            dispatch(revealAction(name, reveals, mines, size, layout));
            // Recurse if this cell has no neighboring mines.
            // Could recursively dispatch here in the AC for each neighbor dispatch(reveal(neighbor))
            // but since mines and size are static, recurse in the reducer.
        }
    }
};


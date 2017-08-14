import {compose} from 'redux';
import {
    INC_SIZE, DEC_SIZE,
    INC_MINES, DEC_MINES,
    DO_CHEAT, DO_LAYOUT
} from '../actions'

const DEFAULT_SIZE = 9;
const DEFAULT_MINES = 10;
const MIN_SIZE = 1;
const MIN_MINES = 0;
const MAX_SIZE = 100;
const MAX_MINES = 1000;

const constrainLower = lb => val => Math.max(lb, val);
const constrainUpper = ub => val => Math.min(ub, val);
const constrain = (lb, ub) => compose(constrainLower(lb), constrainUpper(ub));
const constrainSize = constrain(MIN_SIZE, MAX_SIZE);
const constrainMines = constrain(MIN_MINES, MAX_MINES);
const defaultState = {
    size: DEFAULT_SIZE,
    numMines: DEFAULT_MINES,
    layout: 'square',   // per Header component
    cheating: false
};

export default(state = defaultState, payload) => {

    switch (payload.type) {

        case INC_SIZE:
            return {...state, size: constrainSize(state.size + 1)};

        case DEC_SIZE:
            return {...state, size: constrainSize(state.size - 1)};

        case INC_MINES:
            return {...state, numMines: constrainMines(state.numMines + 1)};

        case DEC_MINES:
            return {...state, numMines: constrainMines(state.numMines - 1)};

        case DO_CHEAT:
            return {...state, cheating: payload.cheating}

        case DO_LAYOUT:
            return {...state, layout: payload.layout}

        default:
            return state;

    }

};


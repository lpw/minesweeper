import {SET_MINES, RESET} from '../actions'

export default(state = new Set(), payload) => {

    switch (payload.type) {

        case SET_MINES:
            return payload.mines;

        case RESET:
            return new Set();

        default:
              return state;

    }

};


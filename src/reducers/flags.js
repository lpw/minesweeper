import {TOGGLE_FLAG, RESET} from '../actions'

export default(state = new Set(), payload) => {

    switch (payload.type) {

        case TOGGLE_FLAG: {
            const {name} = payload;

            return state.has(name)
				? new Set([...state].filter(n => n !== name))
				: new Set([...state, name]);
        }

        case RESET:
            return new Set();

        default:
              return state;

    }

};


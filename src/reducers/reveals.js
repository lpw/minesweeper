import {REVEAL, RESET} from '../actions'
import {neighborsOf} from '../layouts';

const revealWithNeighbors = (name, reveals, mines, size) => {
    const revealed = reveals.has(name);

    if (!revealed) {
        reveals = new Set([...reveals, name]);

        const neighbors = neighborsOf(name, size);
        const neighboringMineCount = [...neighbors].filter(neighbor => mines.has(neighbor)).length

        if (neighboringMineCount <= 0) {
            neighbors.forEach(neighbor => {
                const newReveals = revealWithNeighbors(neighbor, reveals, mines, size);

                reveals = new Set([
                    ...reveals,
                    ...newReveals
                ]);
            })
        }
    }

    return reveals;
};

export default(state = new Set(), payload) => {

    switch (payload.type) {

        case REVEAL:
            return revealWithNeighbors(payload.name, state, payload.mines, payload.size);

        case RESET:
            return new Set();

        default:
              return state;

    }

};


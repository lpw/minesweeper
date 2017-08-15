import {combineReducers} from 'redux';
import game from './game';
import mines from './mines';
import flags from './flags';
import reveals from './reveals';

const rootReducer = combineReducers({
    game,	// object with game config like size and mines (numbers) and cheating (bool)
    mines,	// Set of names (just indexes for now) of cells that are mined
    flags,	// Set of names (just indexes for now) of cells that have been flagged
    reveals	// Set of names (just indexes for now) of cells that have been revealed
});

export default rootReducer;


import {INC_SIZE, DEC_SIZE, INC_MINES, DEC_MINES} from '../actions'
import game from './game';

// copied from game.js instead of exported just for testing
const DEFAULT_SIZE = 9;
const DEFAULT_MINES = 10;
const MIN_SIZE = 1;
const MIN_MINES = 0;
const MAX_SIZE = 100;
const MAX_MINES = 1000;

test('default game config', () => {
     const newGame = game(undefined, {});

     expect( newGame ).toEqual( {
          size: DEFAULT_SIZE,
          numMines: DEFAULT_MINES,
          layout: 'square',
          cheating: false,
          timer: 0
     });
});

test('inc size', () => {
     const type = INC_SIZE;
     const state = {
          size: MAX_SIZE - 1
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {size: MAX_SIZE} );
});

test('inc size past max', () => {
     const type = INC_SIZE;
     const state = {
          size: MAX_SIZE
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {size: MAX_SIZE} );
});

test('dec size', () => {
     const type = DEC_SIZE;
     const state = {
          size: MIN_SIZE + 1
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {size: 1} );
});

test('dec size below min', () => {
     const type = DEC_SIZE;
     const state = {
          size: 1
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {size: 1} );
});


test('inc mines', () => {
     const type = INC_MINES;
     const state = {
          numMines: MAX_MINES - 1
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {numMines: MAX_MINES} );
});

test('inc mines past max', () => {
     const type = INC_MINES;
     const state = {
          numMines: MAX_MINES
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {numMines: MAX_MINES} );
});

test('dec mines', () => {
     const type = DEC_MINES;
     const state = {
          numMines: MIN_MINES + 1
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {numMines: MIN_MINES} );
});

test('dec mines below min', () => {
     const type = DEC_MINES;
     const state = {
          numMines: MIN_MINES
     }
     const payload = {
          type
     };
     const newGame = game(state, payload);

     expect( newGame ).toEqual( {numMines: MIN_MINES} );
});


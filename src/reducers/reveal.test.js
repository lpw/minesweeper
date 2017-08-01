import {REVEAL, RESET} from '../actions'
import reveals from './reveals';

test('RESET', () => {
     const type = RESET;
     const state = new Set([2, 5, 6]);

     const payload = {
          type
     };
     const newReveals = reveals(state, payload);

     expect( newReveals ).toEqual( new Set() );
});

test('REVEAL 3x3 with some recursion', () => {
     const size = 3;
     const mines = new Set([2, 5, 6]);

     const state = new Set();
     const name = 0;
     const type = REVEAL;

     const payload = {
          type,
          name,
          state,
          mines,
          size
     };
     const newReveals = reveals(state, payload);

     expect( newReveals ).toEqual( new Set([0, 1, 3, 4]) );
});

test('REVEAL 5x5 with no recursion', () => {
     const size = 5;
     const mines = new Set([2, 5, 6]);

     const state = new Set();
     const name = 0;
     const type = REVEAL;

     const payload = {
          type,
          name,
          state,
          mines,
          size
     };
     const newReveals = reveals(state, payload);

     expect( newReveals ).toEqual( new Set([0]) );
});

test('REVEAL 5x5 with more recursion', () => {
     const size = 5;
     const mines = new Set([7, 8, 9]);

     const state = new Set();
     const name = 0;
     const type = REVEAL;

     const payload = {
          type,
          name,
          state,
          mines,
          size
     };
     const newReveals = reveals(state, payload);

     expect( newReveals ).toEqual( new Set([0, 1, 5, 6, 10, 11, 15, 16, 12, 17, 13, 18, 14, 19, 23, 22, 21, 20, 24]));
});


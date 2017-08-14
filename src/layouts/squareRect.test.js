const {neighborsOf} = require('./squareRect');

test('neighborsOf 0 in 10x10', () => {
     const cells = neighborsOf(0, 10);

     expect( cells ).toEqual( new Set([ 1, 10, 11 ]) );
});

test('neighborsOf 9 in 10x10', () => {
     const cells = neighborsOf(9, 10);

     expect( cells ).toEqual( new Set([ 8, 18, 19 ]) );
});

test('neighborsOf 11 in 10x10', () => {
     const cells = neighborsOf(11, 10);

     expect( cells ).toEqual( new Set([ 0, 1, 2, 10, 12, 20, 21, 22 ]) );
});

test('neighborsOf 90 in 10x10', () => {
     const cells = neighborsOf(90, 10);

     expect( cells ).toEqual( new Set([ 80, 81, 91 ]) );
});

test('neighborsOf 99 in 10x10', () => {
     const cells = neighborsOf(99, 10);

     expect( cells ).toEqual( new Set([ 88, 89, 98 ]) );
});


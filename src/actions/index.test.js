const {randomCellsFrom} = require('./index');

test('randomCellsFrom 3 from 100', () => {
     const cells = randomCellsFrom(3, 100);

     expect( cells.size ).toBe( 3 );
});

test('randomCellsFrom 5 from 100', () => {
     const cells = randomCellsFrom(5, 100);

     expect( cells.size ).toBe( 5 );
});

test('randomCellsFrom 10 from 4', () => {
     const cells = randomCellsFrom(10, 4);

     expect( cells.size ).toBe( 4 );
});


/**
 * Minesweeper layout file
 *
 * This file describes the layout of cells on a 2D/Square board.
 *
 * Suuplies the needed functions:
 *     numCellsFrom: number of cells on the board
 *     randomCellsFrom: get random cells within range of board (like for mining)
 *     neighborsOf: how neighbors are situated to a given cell
 *     posOf: position of a given cell (x, y coords for this layout)
 *
 * Encapsulating these function in this file keeps layout dependencies like
 * rows, columns, number of cells formulas, and neighbor formulas from being
 * riddled through-out the rest of code base.
 *
 * Consider making layout a dynamic plugin instead of importing this file.
 */

/**
 * rendered size of a cell
 */
const cellWidth = 40;
const cellHeight = 50;

/**
 * conveience functions to determin row and column in quare layout of given cell
 *
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} size of the layout
 * @return {Set} names of n random cells
 */
const rowOf = (i, size) => Math.floor(i / size);
const colOf = (i, size) => i % size;

/**
 * @param {Number} size in terms of the layout (in this case, square)
 * @return {Number} number of cells on the board
 */
export const numCellsFrom = size => size * size;

/**
 * @param {Number} n number of cells to return
 * @param {Number} size of the layout
 * @return {Set} names of n random cells
 */
export const randomCellsFrom = (n, size) => {
    const numCells = numCellsFrom(size);
    const cells = new Set();

    // if the number of mines near the number of cells, should make this more efficient
    while (cells.size < Math.min(n, numCells)) {
        const cell = Math.floor(Math.random() * numCells);

        cells.add(cell);
    }

    return cells;
}

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} size of the layout
 * @return {Set} names of neighbor cells (not including self or out-of-bounds cells)
 */
export const neighborsOf = (i, size) => {
    const row = rowOf(i, size);
    const col = colOf(i, size);

    // permute adjacent rows and columns
    // filter each row and col for validty
    // as well as filtering-out self
    return new Set(
        [row - 1, row, row + 1]  // each row
        .filter(r => r >= 0 && r < size)    // only those in bounds
        .reduce((p, r) => {    // previous
            const a = [col - 1, col, col + 1]  // adjacents from row x cols
                .filter(c => c >= 0 && c < size)    // only those in bounds
                .map(c => r * size + c) // convert to index
                .filter(n => n !== i) // new names/indexes not counting self

            return p.concat(a);
        }, [])
    );
}

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} size of the layout
 * @return {Object} contains coords where to render the cell (offset from center-top)
 */
export const posOf = (i, size) => {
    const r = rowOf(i, size);
    const c = colOf(i, size);
    const x = (c - size / 2) * cellWidth;
    const y = r * cellHeight;

    return {x, y};
}


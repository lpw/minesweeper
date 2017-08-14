/**
 * Minesweeper layout file
 *
 * This file describes the layout of cells on a 2D/Rectangular board.
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
 */

/**
 * rendered size of a cell
 */
const cellWidth = 40;
const cellHeight = 50;

/**
 * conveience functions to determine row and column in quare layout of given cell
 *
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} numCols in the layout
 * @return {Set} names of n random cells
 */
const rowOf = (i, numCols) => Math.floor(i / numCols);
const colOf = (i, numCols) => i % numCols;

/**
 * @param {Number} size in terms of the layout
 * @param {Number} numCols in the layout
 * @param {Number} numRows in the layout
 * for ease of UI controls, just use 2:1 aspect (double size for rows)
 * @return {Number} number of cells on the board
 */
export const numCellsFrom = (numCols, numRows) => numRows * numCols;

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} numCols in the layout
 * @param {Number} numRows in the layout
 * @return {Set} names of neighbor cells (not including self or out-of-bounds cells)
 */
export const neighborsOf = (i, numCols, numRows) => {
    // const rowSize = AspectRatio * size;
    const row = rowOf(i, numCols);
    const col = colOf(i, numCols);

    // permute adjacent rows and columns
    // filter each row and col for validty
    // as well as filtering-out self
    return new Set(
        [row - 1, row, row + 1]  // each row
        .filter(r => r >= 0 && r < numRows)    // only those in bounds
        .reduce((p, r) => {    // previous
            const a = [col - 1, col, col + 1]  // adjacents from row x cols
                .filter(c => c >= 0 && c < numCols)    // only those in bounds
                .map(c => r * numCols + c) // convert to index
                .filter(n => n !== i) // new names/indexes not counting self

            return p.concat(a);
        }, [])
    );
}

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} numCols in the layout
 * @param {Number} numRows in the layout
 * @return {Object} contains coords where to render the cell (offset from center-top)
 */
export const posOf = (i, numCols) => {
    const r = rowOf(i, numCols);
    const c = colOf(i, numCols);
    const x = (c - numCols / 2) * cellWidth;
    const y = r * cellHeight;

    return {x, y};
}


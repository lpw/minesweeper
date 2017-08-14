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

const getDistance = (p1, p2) => Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

const neighborDistance = getDistance({x: 0, y: 0}, {x: cellWidth, y: cellHeight});

/**
 * @param {Number} size in terms of the layout
 * @param {Number} size the layout
 * for ease of UI controls, just use 2:1 aspect (double size for rows)
 * @return {Number} number of cells on the board
 */
export const numCellsFrom = size => size * size;

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} size the layout
 * @return {Set} names of neighbor cells (not including self or out-of-bounds cells)
 */
export const neighborsOf = (i, size) => {
    const numCells = numCellsFrom(size);
    const pos = posOf(i, size);

    return [...Array(numCells)].reduce((neighbors, _, neighbor) => {
        const npos = posOf(neighbor, size);
        const distance = getDistance(npos, pos);

        if (neighbor !== i && distance < neighborDistance) {
            neighbors.add(neighbor);    // okay to mutate local reduce var
        }

        return neighbors;
    }, new Set());
}

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} size the layout
 * @return {Object} contains coords where to render the cell (offset from center-top)
 */
export const posOf = (i, size) => {
    // just some deterministic mild randomness
    const seed1 = 1234;
    const seed2 = 56789;
    const x = ((i * i * seed1) + seed2) % (size * cellWidth) - (size / 2) * cellWidth;
    const y = ((i * i * seed2) + seed1) % (size * cellHeight);

    return {x, y};
}


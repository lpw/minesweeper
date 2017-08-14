import {
    numCellsFrom as rectNumCellsFrom,
    neighborsOf as rectNeighborsOf,
    posOf as rectPosOf
} from './rect';

/**
 * @param {Number} size in terms of the layout (in this case, square)
 * @return {Number} number of cells on the board
 */
export const numCellsFrom = size => rectNumCellsFrom(size, size);

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} size of the layout
 * @return {Set} names of neighbor cells (not including self or out-of-bounds cells)
 */
export const neighborsOf = (i, size) => rectNeighborsOf(i, size, size);

/**
 * @param {Number} i to identify a cell in the layout (aka, its index or name)
 * @param {Number} size of the layout
 * @return {Object} contains coords where to render the cell (offset from center-top)
 */
export const posOf = (i, size) => rectPosOf(i, size, size);


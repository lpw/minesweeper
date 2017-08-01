import React from 'react';
import '../css/Board.css';
import Cell from '../connectors/Cell';
import {numCellsFrom} from '../layouts';

function Board(props) {
    const {size} = props;
    const numCells = numCellsFrom(size);

    return (
        <div className="Board">
            {
                [...Array(numCells)].map((_, i) => {
                    return (
                        <Cell
                            key={i}
                            name={i}
                        >
                        </Cell>
                    );
                })
            }
        </div>
    );
}

export default Board;

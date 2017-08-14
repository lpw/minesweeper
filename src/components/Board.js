import React from 'react';
import '../css/Board.css';
import Cell from '../connectors/Cell';
import {numCellsFrom} from '../layouts';

function Board(props) {
    const {layout, size} = props;
    const numCells = numCellsFrom(layout, size);

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

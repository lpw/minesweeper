import React from 'react';
import classNames from 'classnames';
import '../css/Cell.css';
import {neighborsOf, posOf} from '../layouts';

function Cell(props) {
    const {
        name,
        size,
        reveals,
        mines,
        cheating,
        layout,
        reveal
    } = props;

    const pos = posOf(layout, name, size);
    const {x, y} = pos;
    const style = {top: y, left: x};

    const revealed = reveals.has(name);
    const mined = mines.has(name);
    const className = classNames({
        Cell: true,
        mined,
        revealed,
        hinted: cheating
    });

    const neighbors = neighborsOf(layout, name, size);
    const neighboringMineCount = [...neighbors].filter(neighbor => mines.has(neighbor)).length
    const neighboringMineSymbol = neighboringMineCount > 0
        ? neighboringMineCount
        : <div>&nbsp;</div>;

    return (
        <div
            className={className}
            style={style}
            onClick={() => reveal(name)}
        >
            <div className="CellContent">
                {neighboringMineSymbol}
            </div>
        </div>
    );
}

export default Cell;

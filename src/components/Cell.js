import React from 'react';
import classNames from 'classnames';
import '../css/Cell.css';
import {neighborsOf, posOf} from '../layouts';

function Cell(props) {
    const {
        name,
        size,
        mines,
        mined,
        flagged,
        revealed,
        cheating,
        layout,
        toggleFlag,
        reveal
    } = props;

    const pos = posOf(layout, name, size);
    const {x, y} = pos;
    const style = {top: y, left: x};

    const className = classNames({
        Cell: true,
        mined,
        flagged,
        revealed,
        hinted: cheating
    });

    const neighbors = neighborsOf(layout, name, size);
    const neighboringMineCount = [...neighbors].filter(neighbor => mines.has(neighbor)).length
    const neighboringMineSymbol = flagged && !revealed
        ? <div>?</div>
        : neighboringMineCount > 0
            ? neighboringMineCount
            : <div>&nbsp;</div>
    ;

    return (
        <div
            className={className}
            style={style}
            onClick={event => event.shiftKey ? toggleFlag(name) : reveal(name)}
        >
            <div className="CellContent">
                {neighboringMineSymbol}
            </div>
        </div>
    );
}

export default Cell;

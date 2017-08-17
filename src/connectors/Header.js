import {connect} from 'react-redux';
import {
    incSize, decSize,
    incMines, decMines,
    setMines,
    doCheat,
    incTimer,
    doLayout
} from '../actions';
import Header from '../components/Header';
import {numCellsFrom} from '../layouts';

const getTitle = (layout, size, mines, reveals, name) => {
    const numCells = numCellsFrom(layout, size);
    const lost = [...reveals].some(r => [...mines].some(m => m === r));
    const noWay = mines.size >= numCells;
    const won = mines.size + reveals.size >= numCells && reveals.size > 0;
    let title;

    if (lost) {
        title = 'Bang, you\'ve lost!'
    } else if (noWay) {
        title = 'Go on punk, make my day!'
    } else if (won) {
        title = 'Yay, you\'ve won!'
    } else {
        title = name
    }

    return title;
}

function mapStateToProps(state) {
    const {game, mines, reveals} = state;
    const {layout, size, numMines, timer} = game;

    return {
        title: getTitle(layout, size, mines, reveals, 'Minesweeper'),
        size,
        numMines,
        mines,
        reveals,
        timer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        incSize: () => {
            dispatch(incSize());
            dispatch(setMines());
        },
        decSize: () => {
            dispatch(decSize());
            dispatch(setMines());
        },
        incMines: () => {
            dispatch(incMines());
            dispatch(setMines());
        },
        decMines: () => {
            dispatch(decMines());
            dispatch(setMines());
        },
        setMines: () => {
            dispatch(setMines());
        },
        doLayout: layout => {
            dispatch(doLayout(layout));
            dispatch(setMines());
        },
        incTimer: () => {
            dispatch(incTimer());
        },
        doCheat: cheating => {
            dispatch(doCheat(cheating));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

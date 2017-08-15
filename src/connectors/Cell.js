import {connect} from 'react-redux';
import {toggleFlag, reveal} from '../actions';
import Cell from '../components/Cell';

function mapStateToProps(state, props) {
    const {name} = props;
    const {game, mines, flags, reveals} = state;
    const {size, layout, cheating} = game;

    return {
        name,
        size,
        mines,
        mined: mines.has(name),
        flagged: flags.has(name),
        revealed: reveals.has(name),
        layout,
        cheating
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleFlag: name => {
            dispatch(toggleFlag(name));
        },
        reveal: name => {
            dispatch(reveal(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

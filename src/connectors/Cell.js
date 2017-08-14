import {connect} from 'react-redux';
import {reveal} from '../actions';
import Cell from '../components/Cell';

function mapStateToProps(state, props) {
    return {
        name: props.name,
        size: state.game.size,
        mines: state.mines,
        reveals: state.reveals,
        layout: state.game.layout,
        cheating: state.game.cheating
    };
}

function mapDispatchToProps(dispatch) {
    return {
        reveal: name => {
            dispatch(reveal(name));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

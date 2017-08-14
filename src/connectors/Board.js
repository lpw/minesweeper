import {connect} from 'react-redux';
import Board from '../components/Board';

function mapStateToProps(state) {
    return {
        size: state.game.size,
        layout: state.game.layout
    };
}

function mapDispatchToProps() {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

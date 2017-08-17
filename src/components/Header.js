import React, { Component } from 'react';
import Button from './Button';
import '../css/Header.css';

class Header extends Component {
    // do not need constructor(props){ super(props); this.state = {...
    // but choose to do componentDidMount here  as we need to init somewhere,
    // and we're already setting mines here because of other functions in Header
    componentDidMount() {
        const {setMines, incTimer} = this.props;

        setMines();

        this._timer = setInterval(incTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    // this could also be done outside the component for now,
    // but fits well here in the context of the component
    doCheat = event => {
        const {target} = event;
        const {checked} = target;

        this.props.doCheat(checked);
    }

    doLayout = event => {
        const {target} = event;
        const {value} = target;

        this.props.doLayout(value);
    }

    render() {
        const {
            title,
            size,
            numMines,
            timer,
            incSize,
            decSize,
            incMines,
            decMines,
            setMines
        } = this.props;

        return (
            <div className="Header">

                <div className="Controls LeftControls">

                    <button className="PlayAgain" onClick={setMines}>Play again</button>

                    <label className="Cheat">
                        <input type="checkbox" onClick={this.doCheat} value="cheat" />
                        Cheat
                    </label>

                    <div className="Timer">
                        Timer: {timer} seconds
                    </div>

                </div>

                <h2>{title}</h2>

                <div className="Controls RightControls">

                    <select
                        className="Layout"
                        onChange={this.doLayout}
                    >
                        <option key="square" value="square">Square</option>
                        <option key="tall" value="tall">Tall</option>
                        <option key="wide" value="wide">Wide</option>
                        <option key="random" value="random">Random</option>
                    </select>

                    <div className="Size">
                        <Button onClick={incSize}>^</Button>
                        <div>{size} size</div>
                        <Button onClick={decSize}>v</Button>
                    </div>

                    <div className="Mines">
                        <Button onClick={incMines}>^</Button>
                        <div>{numMines} mines</div>
                        <Button onClick={decMines}>v</Button>
                    </div>

                </div>

            </div>
        );
    }
}

export default Header;

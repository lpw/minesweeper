import React, { Component } from 'react';
import Button from './Button';
import '../css/Header.css';

class Header extends Component {
    // do not need constructor(props){ super(props); this.state = {...
    // but choose to do componentDidMount here  as we need to init somewhere,
    // and we're already setting mines here because of other functions in Header
    componentDidMount() {
        const {setMines} = this.props;

        setMines();
    }

    // this could also be done outside the component for now,
    // but fits well here in the context of the component
    doCheat = event => {
        const {target} = event;
        const {checked} = target;

        this.props.doCheat(checked);
    }

    render() {
        const {
            title,
            size,
            numMines,
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

                </div>

                <h2>{title}</h2>

                <div className="Controls RightControls">

                    <div className="Size">
                        <Button onClick={incSize} content="^"></Button>
                        <div>{size} size</div>
                        <Button onClick={decSize} content="v"></Button>
                    </div>

                    <div className="Mines">
                        <Button onClick={incMines} content="^"></Button>
                        <div>{numMines} mines</div>
                        <Button onClick={decMines} content="v"></Button>
                    </div>

                </div>

            </div>
        );
    }
}

export default Header;
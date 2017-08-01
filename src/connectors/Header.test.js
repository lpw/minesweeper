import React from 'react';
import {shallow} from 'enzyme';
import {createStore} from 'redux';
import Header from './Header';

it('should render Minesweeper title', () => {
    const title = 'Minesweeper';
    const mines = new Set();
    const reveals = new Set();
    const store = createStore(() => ({
        game: {
            size: 10,
            numMines: mines.size
        },
        mines,
        reveals
    }));

    // shallow insetead of mount or render
    // to avoid mocking with ReactDOM.render(<ProviderHeader/>, div)
    const wrapper = shallow((
        <Header store={store} />
    ));

    // not .to.have.property, not .to.equal, etc
    expect(wrapper.props()).toHaveProperty('title', title);
});

it('should render noWay message', () => {
    const title = 'Go on punk, make my day!';
    const mines = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const reveals = new Set();
    const store = createStore(() => ({
        game: {
            size: 3,
            numMines: mines.size
        },
        mines,
        reveals
    }));
    const wrapper = shallow((
        <Header store={store} />
    ));

    expect(wrapper.props()).toHaveProperty('title', title);
});

it('should render lost message', () => {
    const title = 'Bang, you\'ve lost!';
    const mines = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    const reveals = new Set([0]);
    const store = createStore(() => ({
        game: {
            size: 10,
            numMines: mines.size
        },
        mines,
        reveals
    }));
    const wrapper = shallow((
        <Header store={store} />
    ));

    expect(wrapper.props()).toHaveProperty('title', title);
});


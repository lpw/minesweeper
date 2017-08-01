import React from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header';
import { shallow } from 'enzyme';

it('should render Minesweeper title', () => {
    const title = 'Yay, you\'ve won!'
    // shallow insetead of mocking with ReactDOM.render(<Header/>, div)
    const wrapper = shallow((
        <Header
            title={title}
            size={10}
            numMines={10}
            mines={new Set()}
            reveals={new Set()}
        />
    ));

    expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);    // not .to.equal
});

it('should render size control indicator', () => {
    const title = 'test Minesweeper'
    const size = 3;
    const wrapper = shallow((
        <Header
            name={title}
            size={size}
            numMines={99}
            mines={new Set([1, 2, 3, 4, 5, 6, 7, 8])}
            reveals={new Set([0])}
        />
    ));

    expect(wrapper.contains(<div>{size} size</div>)).toEqual(true);

    // save this for integration and e2e tests
    // wrapper.find('div.Size Button').first().simulate('click');
    // expect(wrapper.contains(<div>{size + 1} size</div>)).toEqual(true);
});

it('should render mines control indicator', () => {
    const title = 'test Minesweeper'
    const mines = 10;
    const wrapper = shallow((
        <Header
            name={title}
            size={3}
            numMines={mines}
            mines={new Set([1, 2, 3, 4, 5, 6, 7, 8])}
            reveals={new Set([0])}
        />
    ));

    expect(wrapper.contains(<div>{mines} mines</div>)).toEqual(true);
});

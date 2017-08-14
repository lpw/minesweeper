import * as square from './squareRect';
import * as wide from './wideRect';
import * as tall from './tallRect';
import * as random from './random';

const getLayout = layout => {
	// per Header component
	switch (layout) {
		case 'square':
			return square;
		case 'wide':
			return wide;
		case 'tall':
			return tall;
		case 'random':
			return random;
		default:
			return square;
	}
};

export const numCellsFrom = (layout, size) => getLayout(layout).numCellsFrom(size);
export const neighborsOf = (layout, i, size) => getLayout(layout).neighborsOf(i, size);
export const posOf = (layout, i, size) => getLayout(layout).posOf(i, size);







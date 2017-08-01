# minesweeper
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Installing
After extracting this and related files, execute "npm install" from the command line in this same directory.

## Running
After installing, execute "npm run start" from the command line to start the server.  This development server should automatically navigate the default browser to a new tab - if not, open a tab to http://localhost:3000/ .

## Testing (optional)
After installing, you may execute "npm run test" from the command line to execute tests.  Currently there are only unit tests for the layout module, Header component, and the reveal reducer (working on more tests).

## Building (optional)
After installing, execute "npm run build" from the command line to build a deployable version of the server.

## Architecture
This is a typical React and Redux app.

### Components
Components are in src/components and consist of App, Header, Board, Cell, and Button.  Most components are functional instead of classes, except Header which extends the React Component class with a mount and willReceiveProps lifecycle functions.

### Styles
Styles are straight css, not now using any preprocessing liks sass/less - it'd be a minor help currently in a few places like expressing styles for different cell states.  All styles are in src/css.

### Connectors
Three components are connected to the store: Header, Board, and Cell.  Header watches mostly for game configuration and winning states.  Board just for size.  Cell watches state for mines and reveals.  These connections are in src/connectors and use connect(mapStateToProps, mapDispatchToProps).

### Actions
The action creators that dispatch actions to the store to change state are in src/actions.  They are currently simple enough for just one file (index.js) but could be factored out by form and functionality.  There's some constants here that could also get factored out.  Most actions are primitive, but a few are thunks just to get the broader state, dispatch multiple actions, or perhaps in the future do some asynchronous processing.

### Reducers
The reducers that manage state changes based on those dispatched actions are in src/reducers - they normalize state into game, mines, and reveals.  Sets have been used to ease the amount of code that would otherwise need to dedupe arrays or waste setting object keys to true.  Conversion into arrays is performant and allows access to convenient methods such as some and every.  Sets contain the name of the cell, which is simply the index for convenience.  src/reducers.

### Selectors
Not currently using any memoization via reselect or others.

### Layouts (as it applies to board game apps like Minesweeper)
The layouts directory contains files where each file implements a certain layout logic (like the usual 2D Square).  I strived to abstract the board layout instead of riddling the code with assumptions about rows and columns and size and neighbors.  Each of these layout files encapsulates functions for the number of cells on the board, how neighbors are situated, how to get the position of each cell, and how to get random cells for planting mines.  While this seems to be working well for the usual square case, I have not yet implemented another layout, such as a non-square board, a different neighbor strategy, or a third dimension.  Also, need to pass layout as config param instead of directly importing the file.

### Entry
Entry point is src/index.js which applies the middleware (for thunks and the redux dev extension), creates the store, and wraps the root app element in Provider so its children can access state and connect to the store.

## Functionality
Besides implementing the basic Minesweeper Board, the Header allows the user to resize the board, adjust the number of mines, reset the game, and go into “cheat” mode where the user can see a translucent hint of the contents of the cells (also useful for development).

## Work
Only a few unit tests have been finished for board layout, Header component, and reveals reducer - more extensive tests are needed first to flush out any existing bugs and prevent regressions.  Need more test coverage and more types of tests (some UI, integration, and end-to-end tests).

Need inline code commenting describing functions (especially exported functions) using the appropriate code/doc structure describing params and such.

While performance doesn't seem to be an issue now, would be good to run a profile to get a baseline for comparison when making enhancement such as server-side.

I'd like to add type-checking - perhaps move beyond PropTypes and use flow or typescript.

Needs design work, such as icons and graphics and animations.  Should be easy to get running well on mobile.  Could also do a server-side implementation for no-javascript.  Features like multiplayer, scoring, status, timers, flags, and undo would be nice.  Localization and accessibility needed for broader public deployment.


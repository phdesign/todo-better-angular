# //TODO: A better architecture for Angular 1

This is a reference architecture for Angular 1 projects, borrowing concepts from Angular 2, React and Redux, including 
organising by modules, using one-way binding and callbacks to demystify data flow, identifying stateless components
vs. stateful containers and CSS Modules.

This project is based off [TodoMVC](https://github.com/tastejs/todomvc).

## Usage

To install
```
npm install
```

To run (start a webserver running on localhost:8080)
```
npm start

# Or to open the browser as well
npm start -- --open
```

## Incorporating ES6 / TypeScript

Ideally we'd use ES6 (via Babel) or TypeScript here, but to related to the widest possible audience I've kept the 
implementation to ES5 JavaScript.

## Tests

To run
```
npm test
```

To debug, first set some `debugger;` breakpoints in your code
```
npm run test:debug
```
Once the terminal is paused, open `chrome://inspect` in Google Chrome, click the 'Open dedicated DevTools for Node' link
and click continue in the debugging tools. 

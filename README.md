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

To run (start a webserver and opens a browser to localhost:8080)
```
npm start
```

## Incorporating ES6 / TypeScript

Ideally we'd use ES6 (via Babel) or TypeScript here, but to related to the widest possible audience I've kept the 
implementation to ES5 JavaScript.

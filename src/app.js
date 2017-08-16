// Do this in every file (or use a webpack loader that will do it for you)
'use strict';
require('angular');
require('components/todo-app');

// Just the entry point for our app, not much to see here.
// This is the ng-app="todos".
angular.module('todos', ['todos.todo-app']); 

'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
require('styles/global.css');
// It's important to maintain the correct dependencies between components. It's easy to miss it because as long as
// some file somewhere requires the dependent component it will be bundled, but if that dependency is dropped later
// you'll waste time working out why your app stopped working. 
// 
// Rule of thumb: If you use another component in your component's template, add the `require` statement and add the
//   module dependency below ('todos.todo-list').
require('components/todo-list');

var TodoAppController = function() {
    this.styles = styles;
};

angular
    // It's possible to use just a single module and every component extends that module, in that order of require
    // statement becomes very important but it means that whereever you declare the module has to understand all the
    // dependency graph. It's more modular / portable to have each component be a separate module
    .module('todos.todo-app', [
        'todos.todo-list'
    ])
    .component('todoApp', {
        templateUrl: template,
        controller: TodoAppController
    });

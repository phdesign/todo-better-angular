'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
require('components/todo-footer');
require('components/todo-header');
require('components/todo-item');
require('services/todo-store');

// Tip: If you uglify your code this implicit DI will break - either use explicit DI 
// (e.g. controller: ['todoStore', TodoListController]) or use the webpack ng-annotate-loader. 
// Consider using ng-strict-di to avoid hard to debug errors due to missing dependencies.
var TodoListController = function(todoStore) {
    var self = this;
    this.styles = styles;
    this.store = todoStore;
    this.filter = '';

    this.getTodos = function() {
        if (self.filter == 'completed') {
            return todoStore.getCompleted();
        } else if (self.filter == 'active') {
            return todoStore.getRemaining();
        } else {
            return todoStore.todos;
        }
    };

    this.changeFilter = function(val) {
        self.filter = val;
    };
};

angular
    .module('todos.todo-list', [
        'todos.todo-footer',
        'todos.todo-header',
        'todos.todo-item',
        'todos.todo-store'
    ])
    .component('todoList', {
        templateUrl: template,
        controller: TodoListController
    });


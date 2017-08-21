'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
require('components/todo-footer');
require('components/todo-header');
require('components/todo-item');
require('services/todo-store');

angular
    .module('todos.todo-list', [
        'todos.todo-footer',
        'todos.todo-header',
        'todos.todo-item',
        'todos.todo-store'
    ])
    .directive('todoList', function(todoStore) {
        function link(scope, element, attrs) {
            scope.styles = styles;
            scope.store = todoStore;
            scope.filter = '';
            scope.getTodos = function() {
                if (scope.filter == 'completed') {
                    return todoStore.getCompleted();
                } else if (scope.filter == 'active') {
                    return todoStore.getRemaining();
                } else {
                    return todoStore.todos;
                }
            };
            scope.changeFilter = function(val) {
                scope.filter = val;
            };
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {},
            link: link
        };
    });


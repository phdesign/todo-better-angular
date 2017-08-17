'use strict';
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
var TodoModel = require('models/todo');
require('components/todo-header');
require('components/todo-item');

angular
    .module('todos.todo-list', [
        'todos.todo-header',
        'todos.todo-item'
    ])
    .directive('todoList', function() {
        function link(scope, element, attrs) {
            var todos = [];
            scope.styles = styles;
            scope.getTodos = function() {
                return todos;
            };
            scope.addTodo = function(newTodo) {
                todos.push(new TodoModel(newTodo));
            }
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {},
            link: link
        };
    });


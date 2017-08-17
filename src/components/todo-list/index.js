'use strict';
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
require('components/todo-header');

angular
    .module('todos.todo-list', [
        'todos.todo-header'
    ])
    .directive('todoList', function() {
        function link(scope, element, attrs) {
            var todos = [];
            scope.styles = styles;
            scope.getTodos = function() {
                return todos;
            };
            scope.addTodo = function(newTodo) {
                console.log('from todoList: ' + newTodo);
                todos.push(newTodo);
            }
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {},
            link: link
        };
    });


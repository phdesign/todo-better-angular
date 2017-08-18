'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
var TodoModel = require('models/todo');
require('filters/trim');

angular
    .module('todos.todo-item', [
        'todos.trim-filter'
    ])
    .directive('todoItem', function() {
        function link(scope, element, attrs) {
            scope.newTitle = scope.todo.title;

            scope.toggleCompletion = function() {
                scope.onItemChanged(new TodoModel({
                    uid: scope.todo.uid,
                    completed: !scope.todo.completed,
                    title: scope.todo.title
                }));
            };
            scope.remove = function() {
                scope.onItemRemoved(scope.todo.uid);
            }
            scope.edit = function() {
                scope.onItemChanged(new TodoModel({
                    uid: scope.todo.uid,
                    completed: scope.todo.completed,
                    title: scope.newTitle
                }));
            };
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {
                todo: '<',
                onItemCompleted: '<',
                onItemRemoved: '<'
            },
            link: link
        };
    });



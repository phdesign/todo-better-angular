'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
require('filters/trim');

angular
    .module('todos.todo-item', [
        'todos.trim-filter'
    ])
    .directive('todoItem', function() {
        function link(scope, element, attrs) {
            scope.toggleCompletion = function() {
                scope.onItemCompleted(scope.todo);
            };
            scope.remove = function() {
                scope.onItemRemoved(scope.todo);
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



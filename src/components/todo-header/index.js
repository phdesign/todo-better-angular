'use strict';
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');

var ENTER_KEY = 13;

angular
    .module('todos.todo-header', [])
    .directive('todoHeader', function() {
        function link(scope, element, attrs) {
            scope.styles = styles;
            scope.newTodo = '';

            scope.handleKeyUp = function(e) {
                if (e.keyCode !== ENTER_KEY) return;
                scope.onAddTodo(scope.newTodo);
                scope.newTodo = '';
            }
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            // Any change to application state should be done via callbacks
            scope: {
                onAddTodo: '<'
            },
            link: link
        };
    });


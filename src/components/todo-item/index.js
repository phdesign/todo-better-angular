'use strict';
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');

angular
    .module('todos.todo-item', [])
    .directive('todoItem', function() {
        function link(scope, element, attrs) {
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {
                todo: '<'
            },
            link: link
        };
    });



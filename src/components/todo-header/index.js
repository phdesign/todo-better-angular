'use strict';
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');

angular
    .module('todos.todo-header', [])
    .directive('todoHeader', function() {
        function link(scope, element, attrs) {
            scope.styles = styles;
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {},
            link: link
        };
    });


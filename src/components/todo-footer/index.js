'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');

angular
    .module('todos.todo-footer', [])
    .directive('todoFooter', function() {
        function link(scope, element, attrs) {
            scope.styles = styles;
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {
                onRemoveCompleted: '<',
                remainingCount: '<',
                totalCount: '<'
            },
            link: link
        };
    });



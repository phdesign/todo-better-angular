'use strict';
var angular = require('angular');

angular
    .module('todos.trim-filter', [])
    .filter('trim', function() {
        return function(input) {
            return input.trim();
        };
    });


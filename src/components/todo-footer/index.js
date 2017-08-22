'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');

var TodoFooterController = function() {
    this.styles = styles;
};

angular
    .module('todos.todo-footer', [])
    .component('todoFooter', {
        templateUrl: template,
        bindings: {
            filter: '<',
            onChangeFilter: '<',
            onRemoveCompleted: '<',
            remainingCount: '<',
            totalCount: '<'
        },
        controller: TodoFooterController
    });



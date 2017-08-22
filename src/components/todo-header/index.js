'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');

var ENTER_KEY = 13;

var TodoHeaderController = function() {
    var self = this;
    this.styles = styles;
    this.newTodo = '';

    this.handleKeyUp = function(e) {
        if (e.keyCode !== ENTER_KEY) return;
        self.onAddTodo(self.newTodo);
        self.newTodo = '';
    };
};

angular
    .module('todos.todo-header', [])
    .component('todoHeader', {
        templateUrl: template,
        // Any change to application state should be done via callbacks
        bindings: {
            onAddTodo: '<'
        },
        controller: TodoHeaderController
    });


'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
require('filters/trim');

var ENTER_KEY = 13;
var ESC_KEY = 27;

var TodoItemController = function() {
    var self = this;
    this.styles = styles;
    this.editedTitle = '';
    this.editing = false;

    this.toggleCompletion = function() {
        self.onItemCompleted(self.todo.uid);
    };
    this.remove = function() {
        self.onItemRemoved(self.todo.uid);
    };
    this.edit = function() {
        self.editedTitle = self.todo.title;
        self.editing = true;
    };
    this.stopEditing = function() {
        if (!self.editing) return;
        self.onItemTitleChanged({
            uid: self.todo.uid,
            title: self.editedTitle
        });
        self.editing = false;
    };
    this.cancelEditing = function() {
        self.editing = false;  
    };
    this.handleKeyUp = function(e) {
        if (e.keyCode === ENTER_KEY) 
            self.stopEditing();
        if (e.keyCode === ESC_KEY)
            self.cancelEditing();
    };
};

angular
    .module('todos.todo-item', [
        'todos.trim-filter'
    ])
    .component('todoItem', {
        templateUrl: template,
        bindings: {
            todo: '<',
            onItemCompleted: '<',
            onItemRemoved: '<',
            onItemTitleChanged: '<'
        },
        controller: TodoItemController
    });



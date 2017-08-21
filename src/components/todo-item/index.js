'use strict';
var angular = require('angular');
var template = require('./template.html');
var styles = require('./styles.css');
var globalStyles = require('styles/global.css');
require('filters/trim');

var ENTER_KEY = 13;
var ESC_KEY = 27;

angular
    .module('todos.todo-item', [
        'todos.trim-filter'
    ])
    .directive('todoItem', function() {
        function link(scope, element, attrs) {
            scope.styles = styles;
            scope.editedTitle = '';
            scope.editing = false;

            scope.toggleCompletion = function() {
                scope.onItemCompleted(scope.todo.uid);
            };
            scope.remove = function() {
                scope.onItemRemoved(scope.todo.uid);
            };
            scope.edit = function() {
                scope.editedTitle = scope.todo.title;
                scope.editing = true;
            };
            scope.stopEditing = function() {
                if (!scope.editing) return;
                scope.onItemTitleChanged({
                    uid: scope.todo.uid,
                    title: scope.editedTitle
                });
                scope.editing = false;
            };
            scope.cancelEditing = function() {
                scope.editing = false;  
            };
            scope.handleKeyUp = function(e) {
                if (e.keyCode === ENTER_KEY) 
                    scope.stopEditing();
                if (e.keyCode === ESC_KEY)
                    scope.cancelEditing();
            };
        }

        return {
            restrict: 'AE',
            templateUrl: template,
            scope: {
                todo: '<',
                onItemCompleted: '<',
                onItemRemoved: '<',
                onItemTitleChanged: '<'
            },
            link: link
        };
    });



'use strict';
var angular = require('angular');
var TodoModel = require('models/todo');

angular
    .module('todos.todo-store', [])
    .factory('todoStore', function () {
        var todos = [];

        /* Private functions */

        function indexOfUid(uid) {
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].uid === uid) return i;
            }
            return -1;
        }

        /* Public functions */

        function getCompleted() {
            return todos.filter(function(todo) {
                return todo.completed === true;
            });
        }

        function getRemaining() {
            return todos.filter(function(todo) {
                return todo.completed === false;
            });
        }

        function areAllCompleted() {
            return todos.length === getCompleted().length;
        }

        function toggleAllCompleted() {
            var setAllCompleted = !areAllCompleted();
            for (var i = 0; i < todos.length; i++) {
                todos[i].completed = setAllCompleted;
            }
        }

        function toggleCompletion(uid) {
            let index = indexOfUid(uid);
            if (index > -1) {
                var todo = todos[index];
                todo.completed = !todo.completed;
            }
        }

        function changeTitle(options) {
            if (!options || !options.uid) return;
            let index = indexOfUid(options.uid);
            todos[index].setTitle(options.title); 
        }

        function remove(uid) {
            let index = indexOfUid(uid);
            if (index > -1)
                todos.splice(index, 1);
        }

        function removeCompleted() {
            todos = getRemaining();
        }

        function add(title) {
            // We could also get righteous here and not modify the existing collection but treat is as immutable,
            // but I feel that adds little value in this system for added complexity. E.g.
            // todos = todos.concat([new TodoModel(title)]);
            todos.push(new TodoModel(title));
        }

        return {
            add: add,
            areAllCompleted: areAllCompleted,
            changeTitle: changeTitle,
            getCompleted: getCompleted,
            getRemaining: getRemaining,
            remove: remove,
            removeCompleted: removeCompleted,
            todos: todos,
            toggleAllCompleted: toggleAllCompleted,
            toggleCompletion: toggleCompletion
        };
    });

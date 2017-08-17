'use strict';
var angular = require('angular');
var TodoModel = require('models/todo');

angular
    .module('todos.todo-store', [])
    .factory('todoStore', function () {
        var todos = [];

        function indexOfUid(uid) {
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].uid === uid) return i;
            }
            return -1;
        }

        function toggleCompletion(uid) {
            let index = indexOfUid(uid);
            if (index > -1) {
                var todo = todos[index];
                todo.completed = !todo.completed;
            }
        }

        function remove(uid) {
            let index = indexOfUid(uid);
            if (index > -1)
                this.todos.splice(index, 1);
        }

        function add(title) {
            // We could also get righteous here and not modify the existing collection but treat is as immutable,
            // but I feel that adds little value in this system for added complexity. E.g.
            // todos = todos.concat([new TodoModel(title)]);
            todos.push(new TodoModel(title));
        }

        return {
            add: add,
            remove: remove,
            todos: todos,
            toggleCompletion: toggleCompletion
        };
    });

'use strict';
var angular = require('angular');
var TodoModel = require('models/todo');

var STORAGE_KEY = 'better-angular';

// Private methods
function bindAll(obj) {
    for (var prop in obj) {
        if (typeof obj[prop] === 'function') {
            obj[prop] = obj[prop].bind(obj);
        }
    }
}

// Constructor
var TodoStore = function() {
    let persistedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    this.todos = persistedTodos.map((todo) => {
        let ret = new TodoModel(todo.title);
        ret.completed = todo.completed;
        ret.uid = todo.uid;
        return ret;
    });

    bindAll(this);
};

// Public members
TodoStore.prototype = {
    indexOfUid: function(uid) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].uid === uid) return i;
        }
        return -1;
    },

    getCompleted: function() {
        return this.todos.filter(function(todo) {
            return todo.completed === true;
        });
    },

    getRemaining: function() {
        return this.todos.filter(function(todo) {
            return todo.completed === false;
        });
    },

    areAllCompleted: function() {
        return this.todos.length === this.getCompleted().length;
    },

    toggleAllCompleted: function() {
        var setAllCompleted = !this.areAllCompleted();
        for (var i = 0; i < this.todos.length; i++) {
            this.todos[i].completed = setAllCompleted;
            this.persist();
        }
    },

    toggleCompletion: function(uid) {
        let index = this.indexOfUid(uid);
        if (index > -1) {
            var todo = this.todos[index];
            todo.completed = !todo.completed;
            this.persist();
        }
    },

    changeTitle: function(options) {
        if (!options || !options.uid) return;

        let index = this.indexOfUid(options.uid);
        if (index > -1) {
            this.todos[index].setTitle(options.title); 
            this.persist();
        }
    },

    remove: function(uid) {
        let index = this.indexOfUid(uid);
        if (index > -1) {
            this.todos.splice(index, 1);
            this.persist();
        }
    },

    removeCompleted: function() {
        this.todos = this.getRemaining();
        this.persist();
    },

    add: function(title) {
        // We could also get righteous here and not modify the existing collection but treat is as immutable,
        // but I feel that adds little value in this system for added complexity. E.g.
        // todos = todos.concat([new TodoModel(title)]);
        this.todos.push(new TodoModel(title));
        this.persist();
    },

    persist: function() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    }
};

angular
    .module('todos.todo-store', [])
    .service('todoStore', TodoStore);

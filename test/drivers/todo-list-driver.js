'use strict';

const find = require('../helpers').find;
const styles = require('components/todo-list/styles.css');

var TodoListDriver = function($compile) {
    this.$compile = $compile;
};

TodoListDriver.prototype = {
    render: function(scope) {
        this.element = angular.element('<todo-list></todo-list>');
        this.element = this.$compile(this.element)(scope);
        scope.$digest();
    },

    countTodos: function() {
        return find(this.element, '.' + styles.todoList + ' li').length;
    },

    clickToggleAll: function() {
        find(this.element, '.' + styles.toggleAll).triggerHandler('click');
    },

    isToggleAllChecked: function() {
        return find(this.element, '.' + styles.toggleAll).prop('checked');
    },

    changeFilter: function(val) {
        var scope = this.element.children().scope();
        scope.$ctrl.changeFilter(val);
        scope.$apply();
    }
};

module.exports = TodoListDriver;

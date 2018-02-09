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
        return this.element.find('li').length;
    },

    isToggleAllChecked: function() {
        return find(this.element, '.' + styles.toggleAll).prop('checked');
    }
};

export default TodoListDriver;

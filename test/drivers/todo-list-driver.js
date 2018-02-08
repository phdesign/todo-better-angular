'use strict';

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
    }
};

export default TodoListDriver;
